# Coordinate a bounded multi-unit program

This is a bounded coordination adaptation. Cursor cloud placement, its Task schema, durable agent store, Graphite topology integration and automatic restart recovery are unavailable here. The optional local bookkeeping helper below is a deliberately smaller adapted interface, not the upstream orchestration runtime. Serial execution remains useful but is not fleet parity.

1. Frame countable units, dependencies, acceptance, task scope, and budget. If one owner can finish directly, use Autonomous run. Choose tracks from real write boundaries, not a fixed agent tree.
2. Store local task state in a user-approved workspace path. Keep standing orders, units, decisions, gates, and verification receipts. A unit row records ID, owner, state, branch, head, report path. A verdict records unit/base/head, pass/fail/blocked, command or surface, and receipt. No global agent store is assumed.
3. Pilot one unit end to end, including verification and local integration. Publication/landing belongs in the pilot only if requested. Fix the brief or verification recipe before scaling.
4. When delegation is authorized and tools exist, use a small rolling window constrained by actual host limits. Every brief includes goal, scope, context, acceptance, verify, budget, forbidden actions, report, and current standing orders. Delegate disjoint outputs; serialize shared writes. Otherwise execute the same units serially and disclose the loss of independence.
5. At safe boundaries, collect completions, inspect artifacts, update unit/verdict rows, and schedule ready work. A completion is evidence to review, not automatic acceptance. Pass upstream findings explicitly to dependent units.
6. Integrate verified units continuously within scope. One owner handles branch/stack topology. Other workers do not rebase, retarget, or merge PRs; they report conflicts to that owner. Maintain the exact base/head list manually from observed forge/git state; no Graphite or computed-frontier claim. Reverify affected work after integration changes.
7. Bound retries: adjust scope after resource exhaustion, diagnose tool failures, and retry unknown failures once. Do not treat transcript timestamp as liveness. Stop replacing workers until the previous worker is confirmed stopped or its scope isolated. User stop means no new writes and safe worker interruption.
8. Close or checkpoint with every child accounted for. Preserve durable files, classify failures honestly, and record first resume actions. Do not assume agents survive app restart. Reconcile actual branches and reports on pickup.

Report predicate/counts, units/tracks, evidence keyed to heads, current frontier, failed/abandoned work, gates, and state path. No hourly audit remains active after the session without an explicitly configured scheduler.

## Optional local bookkeeping

If Bun is already installed, use `scripts/orch/orch.ts` from this skill directory. It stores bounded program facts only. It never spawns an agent, waits, schedules a wakeup, resolves forge state, grants approval, or guarantees restart recovery. Otherwise maintain the same facts in ordinary workspace files without installing a runtime.

The positional interface is `bun scripts/orch/orch.ts <store-directory> <command> [JSON-object]`. Choose a store inside the authorized workspace. Inspect the helper's help/source before use and preserve existing state. Example calls from the skill directory, with the store path replaced by the actual approved absolute workspace path:

```sh
bun scripts/orch/orch.ts /absolute/workspace/artifacts/orch init
bun scripts/orch/orch.ts /absolute/workspace/artifacts/orch unit.add '{"id":"u1","track":"build"}'
bun scripts/orch/orch.ts /absolute/workspace/artifacts/orch status
```

The supported groups are `unit.add/set/get/list/counts`, `ledger.record/check/summary`, `inbox.push/peek/drain/count`, `gate.park/list/resolve`, `standing.add/show`, `frontier.show`, `status`, and `init`. Output is JSON. These are literal dotted command names, not space-separated subcommands. Read current tool documentation/source for each JSON payload; do not substitute upstream flags. `frontier.show` displays stored facts and does not fetch or compute forge topology. There is no `frontier.set` integration and no forced lock stealing. Recover stale state only after inspecting the actual process and current files.
