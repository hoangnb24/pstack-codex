import { test, expect } from 'bun:test';
import { mkdtemp, rm, readFile, writeFile } from 'node:fs/promises';
import { tmpdir } from 'node:os';
import { join } from 'node:path';
import { openStore } from '../../skills/pstack-poteto-mode/scripts/orch/store.ts';
const script = new URL('../../skills/pstack-poteto-mode/scripts/orch/orch.ts', import.meta.url).pathname;

test('local unit/ledger/inbox/gate workflow persists exact-head evidence and releases locks', async () => {
  const directory = await mkdtemp(join(tmpdir(), 'pstack-store-'));
  const store = openStore(directory);
  try {
    await store.init(); await store.init();
    await store.units.add({ id: 'u1', track: 'build', brief: 'briefs/u1.md' });
    await store.units.set({ id:'u1', state:'verified', sha:'abc', pr:42 });
    expect((await store.units.get('u1')).sha).toBe('abc');
    await store.ledger.record({pr:42,sha:'abc',verdict:'unit-test-verified',evidence:'reports/test.log'});
    expect((await store.ledger.check({pr:42,sha:'abc'})).verdict).toBe('unit-test-verified');
    await expect(store.ledger.check({pr:42,sha:'changed'})).rejects.toThrow('NOT-VERIFIED');
    await store.inbox.push({agent:'reviewer',unit:'u1',status:'done',report:'reports/review.md'});
    expect(await store.inbox.count()).toBe(1); expect((await store.inbox.peek()).length).toBe(1);
    expect((await store.inbox.drain()).length).toBe(1); expect(await store.inbox.count()).toBe(0);
    await store.gates.park({id:'release',question:'Publish?',options:'yes,no',defaultAnswer:'no'});
    await store.standing.add({line:'User scope remains local only.'});
    expect((await store.status.render()).summary.openGateIds).toEqual(['release']);
    await store.gates.resolve({id:'release',answer:'no'}); expect((await store.gates.list()).length).toBe(0);
    expect(await readFile(join(directory,'status.md'),'utf8')).toContain('unit-test-verified');
    await expect(store.frontier.set({repo:directory})).rejects.toThrow('unavailable');
  } finally { await store.close(); await rm(directory,{recursive:true,force:true}); }
});

test('active writers stay locked and malformed data fails closed', async () => {
  const directory = await mkdtemp(join(tmpdir(), 'pstack-lock-'));
  const first=openStore(directory), second=openStore(directory);
  try {
    await first.init();
    await expect(second.units.add({id:'u2',track:'build'})).rejects.toThrow('store lock held');
    await first.close();
    await second.units.add({id:'u2',track:'build'});
    await writeFile(join(directory,'units.tsv'),'wrong\n');
    await expect(second.units.list()).rejects.toThrow('invalid header');
  } finally { await first.close(); await second.close(); await rm(directory,{recursive:true,force:true}); }
});

test('ledger replacement persists only for the exact PR/head and frontier remains unavailable', async () => {
  const directory = await mkdtemp(join(tmpdir(), 'pstack-ledger-'));
  let store = openStore(directory);
  try {
    await store.init();
    await store.ledger.record({pr:42,sha:'old',verdict:'unit-test-verified',evidence:'old.log'});
    await store.ledger.record({pr:42,sha:'new',verdict:'verifier-blocked',evidence:'blocked.log'});
    await store.ledger.record({pr:42,sha:'new',verdict:'verifier-failed',evidence:'failed.log'});
    const frontierBefore = await readFile(join(directory, 'frontier.json'), 'utf8');
    await expect(store.frontier.set({repo:directory})).rejects.toThrow('unavailable');
    expect(await readFile(join(directory, 'frontier.json'), 'utf8')).toBe(frontierBefore);
    await store.close();
    store = openStore(directory);
    expect((await store.ledger.check({pr:42,sha:'old'})).verdict).toBe('unit-test-verified');
    expect((await store.ledger.check({pr:42,sha:'new'})).evidence).toBe('failed.log');
    expect(await store.ledger.summary()).toEqual({'unit-test-verified':1,'verifier-failed':1});
    await expect(store.ledger.check({pr:43,sha:'new'})).rejects.toThrow('NOT-VERIFIED');
    await writeFile(join(directory,'ledger.tsv'),'pr\tsha\tverdict\tevidence\tverifier\tts\n42\tnew\tunknown\tlog\t\tnow\n');
    await expect(store.ledger.check({pr:42,sha:'new'})).rejects.toThrow('invalid verdict');
  } finally { await store.close(); await rm(directory,{recursive:true,force:true}); }
});

test('CLI forwards argv JSON, rejects unsupported/invalid commands, returns exact-head miss exit 2', async () => {
  const directory = await mkdtemp(join(tmpdir(), 'pstack cli '));
  const run = (...args:string[]) => Bun.spawnSync([process.execPath,script,directory,...args]);
  try {
    expect(run('init').exitCode).toBe(0);
    const added=run('unit.add',JSON.stringify({id:'u1',track:'build'}));
    expect(added.exitCode).toBe(0); expect(JSON.parse(added.stdout.toString()).id).toBe('u1');
    expect(run('unit.add','not-json').exitCode).toBe(1);
    expect(run('frontier.set','{}').exitCode).toBe(1);
    expect(run('constructor').exitCode).toBe(1);
    expect(run('ledger.check',JSON.stringify({pr:1,sha:'new'})).exitCode).toBe(2);
    expect(run('unit.get',JSON.stringify({id:'u1'})).exitCode).toBe(0);
  } finally { await rm(directory,{recursive:true,force:true}); }
});
