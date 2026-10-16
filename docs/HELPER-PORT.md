# Helper port report

Historical report for the 0.15.9 port. The 0.15.15 upstream delta changes only a verifier label in an upstream test, not helper runtime behavior. Adapted helpers remain unchanged. Current rerun evidence and acceptance are in [validation](VALIDATION.md); pending integration statements below are historical.

Read upstream check-plan.mjs, worktree-audit.sh, bootstrap.ts, package.json, bun.lock, complete orch CLI/store/tests, and watch-pr CLI/GitHub reader/policy/render/types/type assertions/fakes/tests/launcher/tsconfig. Confirmed upstream LICENSE is MIT, copyright 2026 Lauren Tan; derived store/helper sources retain attribution and rely on the root LICENSE included by the parent.

Implemented under staging/pstack-codex/skills/pstack-poteto-mode/scripts:

- check-plan.mjs: Node standard library; retained program/unit/evidence plan intent, removed fixed ten lanes, model names, /loop, stylistic punctuation policing. Structured N/A reasons, evidence predicates, observed result required when checked. Does not claim evidence truth.
- worktree-audit.mjs + worktree-audit.sh: Node standard library/Git; NUL-safe paths, no fetch, no GitHub query or Cursor transcripts, no implicit deletion safety. Includes main/locked/missing/dirty/ignored paths, conservative local-only ancestry, disabled optional Git locks and fsmonitor. No deletion operation.
- orch/store.ts: upstream local plain-file units/ledger/inbox/gates/preferences/status retained; all Graphite execution/parsing removed, frontier.set explicitly unavailable, active lock stealing removed. Existing dead-PID recovery retained (local filesystem only).
- orch/orch.ts: dependency-free Bun JSON argv CLI for local store; deliberately changed CLI documented in scripts/README.md. Exact-head ledger checks, status, inbox/gates work. No bootstrap/package install.
- scripts/README.md: usage and material nonparity.

Tests under tests/helpers:

- node --test tests/helpers/helpers.test.mjs: 2 passed. A realistic temporary Git repository with space-containing worktree paths tests clean/untracked/tracked/ignored/missing/locked worktrees; verifies worktree listing and main Git index bytes unchanged, absent refs remain unknown, no deletion authorization. Plan fixture validates real schema, missing evidence, unsupported claims and fences.
- bun test tests/helpers/orch.test.ts: 3 passed, 21 expectations. Full persisted units/exact-head ledger/inbox drain/gate/status workflow; active concurrent store lock refusal, malformed TSV rejection; separate-process CLI JSON inputs, unavailable commands, invalid JSON and not-found exit codes. No external network or PR mutation.
- bun orch/orch.ts --help: passed without dependency bootstrap.

Live watch-pr and its unbounded polling are deliberately not shipped. Important observed upstream behaviors: assessGitHubMerge allows UNKNOWN and some BLOCKED states; Code Review Gate pending checks are excluded; reviewThreads reads only first 100 without pagination. Preserving that as a Codex readiness oracle would imply unproven parity. The documented playbook handles status inspection instead. No live GitHub checks, typecheck installation, model inference, package install, global skill installation or user project mutation performed.

Remaining: parent integrates root provenance/license and packaging, validates repository-local Codex discovery; core agent aligns multi-phase template with N/A block syntax and orch invocation. Graphite frontier/live watcher parity is unavailable, not merely untested.
