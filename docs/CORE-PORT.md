# Core port report

Historical report for the 0.15.9 port. The 2026-10-09 refresh preserves these core adaptations. Current installation, ownership and acceptance are recorded in [validation](VALIDATION.md); pending integration statements below are historical.

Read the complete upstream `skills/poteto-mode/SKILL.md`, all 23 playbooks, `references/bugbot-triage.md`, both upstream custom agent configurations, and the original `check-plan.mjs`. License inspected: MIT, copyright 2026 Lauren Tan. Root owns pin/provenance and repository license packaging. Read the installed Codex skill-creator guidance before implementation.

## Deliverables

- `skills/pstack-poteto-mode/SKILL.md`: Codex-compatible name/description, operating contract, delegated/serial execution boundaries, 23 playbook routes, all 24 linked principle leaves.
- All 23 upstream playbook filenames retained with decision-specific adaptations.
- `references/bugbot-triage.md`: retained concrete upstream patterns, corrected authorization around sending/closing review threads and implementing fixes.
- `references/agent-briefs.md`: prompt patterns replacing Cursor custom agent installation, including scoped worker and comment review roles.
- Helpers are supplied and tested by the separate helper owner, not authored in this subtask. Core documentation references check-plan, worktree-audit, and optional local orch bookkeeping only.

## Material adaptations

- Cursor Task/subagent_type/custom model routing becomes actual exposed, authorized Codex delegation with parent model inheritance. Unavailable delegation uses bounded serial work and does not claim independent review.
- Cloud VMs, fleet placement, persistent `/loop`, hidden agent stores, transcript scans, automatic recovery and Graphite topology are not claimed. Optional adapted orch CLI records local facts only.
- Investigation/forensics remain read-only except explicitly scoped capture/instrumentation; plans do not execute automatically; prototypes remain isolated.
- PR status defaults to one read-only check. Requested drive mode is bounded and ends merge-ready. No live watch-pr helper is called or promised.
- Merge, push, published branch rewrites, messages, installation and global configuration changes follow actual user authorization and host policy. Internal root verdicts cannot grant human approvals. Ready/draft follows user/repository context.
- Verification keys to actual artifacts/head/base, current checks and regression context. No mandatory ten cloud lanes or universal perf metric. Applicable missing verification is blocked; genuinely irrelevant verification receives a reasoned N/A.
- Scope leaks, reset-hard recovery, blanket simulator/cache deletion, and force-remove worktrees removed. Managed worktree archive preferred when available, authorized and appropriate.
- The upstream two agent personas become usable scoped prompt templates; no nonfunctional Codex agent config is shipped by this subtask.

## Validation

- Installed Codex skill-creator `quick_validate.py` passed for pstack-poteto-mode.
- 23 playbooks exist; all 24 principle leaf links retained.
- Markdown relative-link scan found zero unresolved links at validation time.
- Static inspection found Cursor-only commands/types only in explicit incompatibility descriptions.
- Helper owner validating the plan skeleton against adapted checker. Independent realistic forward-testing belongs to root's evaluation pass; no independent behavior claims made here.

## Remaining limitations

Persistent background execution, cloud placement, multi-model review diversity, full upstream orch/watch runtime semantics and live forge mutations are not verified or promised. Invocation-policy metadata and final installation remain root-owned and pending the user's policy decision. No global skills or Codex configuration was changed by this subtask.
