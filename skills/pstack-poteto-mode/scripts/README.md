# Local helpers

These helpers are adapted from Lauren Tan's pstack under the repository MIT license. They do not install packages, invoke models, change Codex settings, create agents, or confer permission to publish or delete.

- `node check-plan.mjs <plan.md>` checks the multi-phase plan structure. Each verification checkbox names `Evidence:` and `Pass when`; checked verification also names `Observed:`. Inapplicable verification is a block-line `N/A: <specific reason>` of at least ten characters, with no checkbox. It checks syntax, not whether claimed evidence exists or proves behavior.
- `bash worktree-audit.sh [repo-path] [local-base-ref]` prints JSON from local Git state only. Default base is `refs/remotes/origin/main`. Missing base or failed reads remain unknown. Untracked and ignored files both cause a hold. Local ancestry can be stale and misses squash merges. No GitHub/chat lookup, fetch, deletion, or `safe` bucket exists. Use Codex managed-worktree tools for managed worktree lifecycle when available.
- `bun orch/orch.ts <store-dir> <command> [JSON-object]` maintains a local plain-file work ledger. See `--help` and the examples below. Requires an already-installed Bun; no bootstrap or dependencies. Ledger entries are recorded assertions, not independent evidence validation. Store files, gate answers, and standing preferences are task data; they do not override host permissions or the user's current scope.

```sh
bun orch/orch.ts ./artifacts/orch init
bun orch/orch.ts ./artifacts/orch unit.add '{"id":"u1","track":"build","brief":"briefs/u1.md"}'
bun orch/orch.ts ./artifacts/orch unit.set '{"id":"u1","state":"verified","pr":42,"sha":"exact-head-sha"}'
bun orch/orch.ts ./artifacts/orch ledger.record '{"pr":42,"sha":"exact-head-sha","verdict":"unit-test-verified","evidence":"reports/unit.log"}'
bun orch/orch.ts ./artifacts/orch ledger.check '{"pr":42,"sha":"exact-head-sha"}'
bun orch/orch.ts ./artifacts/orch status
```

Commands use the parameter fields in `orch/store.ts`. `unit.get` takes `{"id":"u1"}`. `gate.park` takes `id`, `question`, `options`, and `defaultAnswer`; resolving a recorded gate never executes its answer. Read-only commands are unit get/list/counts, ledger check/summary, inbox peek/count, gate list, standing show, and frontier show. Other commands write only the explicitly selected local store. `inbox.drain` consumes pointer files after reading; use `inbox.peek` to retain them. `status` writes `status.md`. Writes serialize with a local PID lock; no force-steal option is provided. A confirmed dead PID lock can be recovered automatically; do not use this store on a shared network filesystem.

Unavailable: upstream Commander/Bun auto-install bootstrap, external frontier discovery, live `watch-pr` CLI and merge-queue polling. Upstream 0.15.25 replaces Graphite frontier discovery with GitHub/Origin queries and paginates review threads. Those runtimes remain omitted here. The upstream watcher still contains repository-specific Code Review Gate exclusions and readiness for some unknown merge states. The port's PR playbook uses authorized read-only status inspection and reports unresolved/unknown gates; it does not ship a readiness/merge oracle or auto-merge behavior.
