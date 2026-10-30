# Build a verified PR queue without landing

Run Autopilot-full without merging. Build and verify the queue for operator review. Stack a unit only when it depends on another unit; independent units remain based on trunk. Landing is outside this playbook.

1. Apply Autopilot-full's scope, ownership, evidence, budget, and stop rules, with no owner authorized to merge or arm auto-merge by this workflow.
2. Build independent units in isolated scopes when authorized delegation is available. Identify genuine dependencies before deciding whether a base-branch chain is needed.
3. One topology owner maintains the root-to-tip chain. Build owners do not rebase, retarget, merge, close PRs, or arm auto-merge. A dependent unit starts from its parent's branch. Keep local branches only unless publication is requested. For a published chain, record parent base and exact head for every link; do not invent forge syntax or require Graphite. After an authorized topology change, give the build owner the new base and expected remote head before it resumes writing.
4. Review each code-ready head with behavior and regression receipts. Append only verified units. After a rebase or parent change, rerun affected checks and inspect behavior/context even if stable patch-id matches.
5. Rewriting published branches or retargeting existing PRs must be within the user's authorized scope and host policy. Preserve unrelated changes and never merge as a shortcut to stack assembly.
6. Deliver verified units with per-unit evidence, unresolved gaps, and local paths or actual PR links. Stop before landing. After handoff, do not push without the operator's go. Route a mid-landing problem to the landing owner; a fix needs an explicit coordinated handoff. Scheduling and fleet semantics remain unavailable unless separately set up.

Report root/tip, dependency order, each verdict/head, and excluded or blocked work. Use [pstack-ketchup](../../pstack-ketchup/SKILL.md) when available for a substantial catch-up.
