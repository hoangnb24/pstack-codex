# Verify and land explicitly authorized PRs

1. Confirm the user explicitly requested landing the identified PRs. A readiness check, bot approval, or this playbook is not that authorization. Resolve the actual forge tools and read current repository policy. Do not bypass required checks or reviewers.
2. Verify every PR against its base and exact head. Prefer a truly independent authorized reviewer who exercises the real surface and audits the diff. Without independent verification, report that gap instead of calling the stack independently verified. Store verdict, reviewer, head/base SHAs, evidence, and stable patch-id.
3. Walk the bottom-up stack and stop at the first unverified or failed PR. Only the contiguous verified run is eligible. Findings labeled notes that affect correctness still block. A truly independent PR can move to trunk only within authorized topology scope and with a fresh verdict against that base.
4. Re-read current head/base, checks, approvals, and mergeability immediately before action. A changed patch or base context requires affected verification again; unchanged patch-id is not proof that changed dependencies remain safe. Never reuse an older SHA's green checks as current evidence.
5. Prepare only the bottom PR within authorized branch-mutation scope. Rebase, push, or retarget only if needed and allowed. Any new head gets fresh checks. A published rewrite requires ownership of that branch and a lease pinned to the expected remote head. An unexpected remote push stops the rewrite. Do not arm descendants or change queue topology casually.
6. Merge one PR at a time using the forge's actual supported operation. Confirm that the operation cannot also land unverified ancestors. Confirm the PR targets trunk, not its parent's branch. Auto-merge is separate requested behavior and never a default. Read the PR back to confirm it is merged into trunk and its commit is incorporated before advancing. A queued request or successful command alone does not prove a merge.
7. Recompute base/head and verification validity for the next PR after each merge. If blocked, checkpoint at the frontier. No persistent watch is supplied; use bounded in-session observation or separately authorized scheduling.

Report verified run and ceiling, exact verdicts, mutations actually performed, confirmed merges, and remaining gaps. External review comments are posted only when explicitly authorized.

## Reuse evidence only when its inputs still hold

A verdict covers the tested patch and context. Green checks cover one head. Compare the recorded base-to-head stable patch-id with the current patch, then inspect changed dependencies and callers. Matching patch-id alone does not establish safety on a changed base.

For test, documentation, or lint-only changes, an earlier behavior receipt can remain valid if its built artifact is equivalent. Build twice at the verdict SHA and once at the new head. Classify each difference: an embedded commit SHA or variation also present between the two old builds can be noise. Record the files and reasons. Fresh checks and review still cover the new change. Rerun a lane with no comparable build output, such as a dev server. If equivalence cannot be shown, rerun affected behavior.

Before landing, inspect current trunk for conflicts, changed files, callers, dependencies, and CI configuration. If they can affect the patch, test the proposed merge result in an authorized isolated checkout or rebase and verify the new head. A lockfile overlap is not automatically harmless. Evidence must include a frozen install on the merge result and matching resolution for the packages the PR changes; obtain permission first if installation needs it. Otherwise hold or rebase within scope. Repeated collisions need sequencing by the topology owner, not an endless rebase loop.

For example, an unchanged patch-id with a new dependency version on trunk does not reuse the old runtime verdict by itself. Test that dependency with the patch, or report landing blocked. Conversely, a documentation-only change with proven artifact equivalence can reuse the behavior receipt while its own checks and review run fresh.
