# Prepare or publish a PR when requested

Run only when PR delivery is requested or already authorized. Otherwise prepare local changes and a reviewable summary.

1. Inspect repository instructions, current worktree, diff, and intended base. Reuse a suitable isolated worktree. Preserve unrelated changes. Never reset hard, patch out user work, or discard a snarled checkout to fit this workflow.
2. Review the actual diff for unnecessary code and comments. Use available `pstack-no-comments`, `pstack-unslop`, and `pstack-technical-writing` within scope; cursor-team-kit deslop is not bundled. Run relevant repository checks.
3. Stage only owned files. Create or reorganize commits according to the task and repository conventions; never force an unsolicited history rewrite. Prefer small coherent units.
4. Draft a concise title and body describing problem, behavior, scope, tradeoffs worth reviewing, risk, and actual verification. Follow the repository template over a generic format. Without a template, use `## Why`, `## What changed`, `## Scope`, `## Tradeoffs`, `## Blast Radius`, and `## Verification`; omit empty optional sections but keep scope and exclusions. Use Conventional Commits only when appropriate to its conventions. A commit body adds context instead of repeating its subject. Put extensive receipts in a linked artifact.
5. Resolve an available authorized forge connector or installed CLI and verify its actual capabilities. Follow a host-provided PR tool's instructions where it tracks task metadata; use the resolved forge for unsupported operations. Publish only within scope, preserving the user's draft/readiness choice. Do not force every PR ready. Use structured body arguments or a body file rather than shell interpolation of prose.
6. Verify the created PR's URL, base, head, and draft state. Attach it to the Codex task when an attachment tool is exposed and required. Opening it starts neither babysitting nor merge authorization.

Report actual URL, state, scope, checks, and any gaps. If publication is unavailable or unauthorized, return the local draft and say it was not published.

For a dependent stack, only the root targets trunk; each child targets its parent. A parent merge requires the next child's base and evidence to be reconciled under [Shipping](shipping.md), not an automatic retarget during PR creation. A delegate returns after publication unless its bounded brief already includes [Babysit](babysit.md). An Autopilot owner may have that explicit drive scope; opening a PR alone never supplies it.
