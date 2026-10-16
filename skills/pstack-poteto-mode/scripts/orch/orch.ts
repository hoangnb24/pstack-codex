#!/usr/bin/env bun
// Adapted from Lauren Tan pstack (MIT); see repository LICENSE.
import { openStore, NotFoundError } from './store.ts';

const help = `Usage: bun orch.ts <store-dir> <command> [JSON-object]
Commands: init, unit.add, unit.set, unit.get, unit.list, unit.counts,
ledger.record, ledger.check, ledger.summary, inbox.push, inbox.peek,
inbox.drain, inbox.count, gate.park, gate.list, gate.resolve,
standing.add, standing.show, frontier.show, status
Example: bun orch.ts ./artifacts/orch unit.add '{"id":"u1","track":"build"}'
JSON keys follow store.ts interfaces; unit.get takes {"id":"u1"}.
Output is JSON. Exit 0=success, 1=usage/error, 2=not found.
Local bookkeeping only; no agents, scheduling, network, merge, or permissions.
Graphite frontier.set and force lock stealing are unavailable.
`;
export async function main(argv: string[]): Promise<number> {
  if (argv.length === 1 && argv[0] === '--help') { console.log(help); return 0; }
  const [directory, command, raw = '{}'] = argv;
  if (!directory || !command || argv.length > 3) { console.error(help); return 1; }
  let store;
  try {
    const value = JSON.parse(raw);
    if (!value || typeof value !== 'object' || Array.isArray(value)) throw new Error('Parameters must be a JSON object');
    store = openStore(directory);
    const commands: Record<string, () => Promise<unknown>> = {
      init: () => store!.init(),
      'unit.add': () => store!.units.add(value),
      'unit.set': () => store!.units.set(value),
      'unit.get': () => store!.units.get(value.id),
      'unit.list': () => store!.units.list(value),
      'unit.counts': () => store!.units.counts(),
      'ledger.record': () => store!.ledger.record(value),
      'ledger.check': () => store!.ledger.check(value),
      'ledger.summary': () => store!.ledger.summary(),
      'inbox.push': () => store!.inbox.push(value),
      'inbox.peek': () => store!.inbox.peek(),
      'inbox.drain': () => store!.inbox.drain(),
      'inbox.count': () => store!.inbox.count(),
      'gate.park': () => store!.gates.park(value),
      'gate.list': () => store!.gates.list(),
      'gate.resolve': () => store!.gates.resolve(value),
      'standing.add': () => store!.standing.add(value),
      'standing.show': () => store!.standing.show(),
      'frontier.show': () => store!.frontier.show(),
      status: () => store!.status.render(),
    };
    if (!Object.hasOwn(commands, command)) throw new Error(`Unsupported command: ${command}`);
    console.log(JSON.stringify(await commands[command](), null, 2));
    return 0;
  } catch (error) {
    if (error instanceof NotFoundError && error.output) console.log(JSON.stringify(error.output.json));
    else console.error(error instanceof Error ? error.message : String(error));
    return error instanceof NotFoundError ? 2 : 1;
  } finally { await store?.close(); }
}
if (import.meta.main) process.exitCode = await main(process.argv.slice(2));
