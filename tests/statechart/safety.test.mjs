import assert from 'node:assert/strict';
import { spawnSync } from 'node:child_process';
import fs from 'node:fs';
import os from 'node:os';
import path from 'node:path';
import test from 'node:test';
import { fileURLToPath } from 'node:url';

const cli = fileURLToPath(new URL('../../skills/pstack-statechart/scripts/statechart.ts', import.meta.url));
function fixture(t) {
  const dir = fs.mkdtempSync(path.join(os.tmpdir(), 'statechart-safety-'));
  t.after(() => fs.rmSync(dir, { recursive: true, force: true }));
  fs.writeFileSync(path.join(dir, 'Pay.tla'), "---- MODULE Pay ----\nVARIABLE x\nInit == x = 0\nNext == x' = 1\n====\n");
  fs.writeFileSync(path.join(dir, 'Pay.cfg'), 'INIT Init\nNEXT Next\n');
  const bin = path.join(dir, 'bin');
  fs.mkdirSync(bin);
  for (const name of ['mise', 'npm', 'npx', 'curl', 'wget'])
    fs.writeFileSync(path.join(bin, name), '#!/bin/sh\necho called >> "$BOOTSTRAP_MARKER"\nexit 99\n', { mode: 0o755 });
  const env = { ...process.env, PATH: `${bin}:/usr/bin:/bin`, TLA2TOOLS: '', JAVA: '', BOOTSTRAP_MARKER: path.join(dir, 'bootstrap-called'), XDG_CACHE_HOME: path.join(dir, 'cache') };
  const run = (args = [], extra = {}) => spawnSync(process.execPath, [cli, 'Pay.tla', ...args], { cwd: dir, env: { ...env, ...extra }, encoding: 'utf8', timeout: 10000 });
  return { dir, run };
}

test('missing TLC exits 2 without bootstrap, cache writes, or output', t => {
  const { dir, run } = fixture(t);
  const r = run();
  assert.equal(r.status, 2, r.stderr);
  assert.match(r.stderr, /No tools were installed; set TLA2TOOLS/);
  assert.deepEqual(fs.readdirSync(dir).sort(), ['Pay.cfg', 'Pay.tla', 'bin']);
});

test('nonempty output remains unchanged', t => {
  const { dir, run } = fixture(t);
  fs.mkdirSync(path.join(dir, 'out'));
  fs.writeFileSync(path.join(dir, 'out/report.md'), 'keep');
  const r = run(['--out', 'out']);
  assert.equal(r.status, 2);
  assert.match(r.stderr, /not empty/);
  assert.equal(fs.readFileSync(path.join(dir, 'out/report.md'), 'utf8'), 'keep');
  assert.equal(fs.existsSync(path.join(dir, 'bootstrap-called')), false);
});

test('failing Java publishes nothing and preserves its diagnostic', t => {
  const { dir, run } = fixture(t);
  const java = path.join(dir, 'java');
  fs.writeFileSync(java, '#!/bin/sh\necho broken-java >&2\nexit 7\n', { mode: 0o755 });
  const r = run([], { JAVA: java, TLA2TOOLS: path.join(dir, 'fixture.jar') });
  assert.equal(r.status, 2, r.stderr);
  assert.match(r.stderr, /broken-java/);
  assert.equal(fs.existsSync(path.join(dir, 'Pay-chart')), false);
  assert.equal(fs.existsSync(path.join(dir, 'bootstrap-called')), false);
});

test('removed flags fail without writing files', t => {
  const { dir, run } = fixture(t);
  const before = fs.readdirSync(dir).sort();
  for (const flag of ['--fixed', '--against', '--png']) {
    assert.equal(run([flag, 'other']).status, 2);
    assert.deepEqual(fs.readdirSync(dir).sort(), before);
  }
});
