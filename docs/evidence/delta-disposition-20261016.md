# Upstream delta disposition — 2026-10-16

Inputs: upstream `ccb5507cec1546dc88135c1139c811e6c59115ba` → `99743e9c151c8537cbbf1f98bb38f34ef3368453`. Exact changed paths and tree hashes are in [provenance](upstream-20261016.json). Candidate payload is [pinned separately](update-payload-20261016.json).

## Package and guide changes

- `.cursor-plugin/plugin.json`: version metadata is recorded in UPSTREAM.json. Keep the Codex manifest and namespace; plugin version becomes 0.3.0.
- `plugin.json`: do not copy the unnamespaced portable manifest. The compatibility manifest is retained and tested with installed CLI 0.163.0.
- `README.md`: new skill routes are adapted in the port README and help. Delegate ownership is adapted in the core. Cursor menu/agent registration instructions remain inapplicable.
- `docs/guide/08-principles.md`: revised premise and behavioral-test principles are adapted in sibling skills and the core index. Do not duplicate the Cursor guide.
- License, dormant automations and remaining upstream files are unchanged.

## Sibling skills

Paths below are relative to upstream `skills/`. Grouped rows cover every assigned changed file.

| Files | Disposition |
|---|---|
| `correct/SKILL.md` | Adapted: behavior-breaking and internal-only test mutations replace the `undefined` heuristic. |
| `create-verification-skill/SKILL.md` | Adapted: usable empty-data startup, missing seed prerequisites, and stand-in verification gaps. |
| `how/SKILL.md` | Adapted: simpler routing, retaining read-only briefs, inherited model, and serial fallback. |
| `in-your-own-words/SKILL.md` | Adapted: restatement only; assumptions remain distinct from approval. |
| `ketchup/SKILL.md` | Adapted: read-only chat catch-up, pending decisions, existing visual evidence, and unavailable-tool gaps. |
| `sharpen/SKILL.md` | Adapted: expert framing and outside checks without relaxing user constraints or expanding authority. |
| `poteto-help/SKILL.md`, `poteto-help/references/recipes.md` | Adapted: new skill routes and namespaced examples. |
| `principle-attack-the-premise/SKILL.md` | Adapted: test the premise directly instead of requiring an actor census. |
| `principle-fix-root-causes/SKILL.md` | Adapted: distinguish legitimate states from upstream faults; scope fixes explicitly. |
| `principle-make-operations-idempotent/SKILL.md` | Adapted: reconcile actual state and require crash-safe evidence of staleness. |
| `principle-test-behavior-not-implementation/SKILL.md` | Adapted: observable contracts, external effects, absence tests, and refactor tolerance. |
| `interrogate/references/lead-judgment.md` | Adapted: remove the five-finding filtering heuristic. |
| `why/references/investigator-prompt.md` | Adapted: explicit separation of behavior, intent, evidence collection, and conclusions. |
| `architect/SKILL.md`, `arena/SKILL.md`, `benchmark-checklist/SKILL.md`, `figure-it-out/SKILL.md` | Already-covered substantive workflows. Retained useful explanations and port boundaries rather than copying editorial compression. |
| `how/references/explorer-prompt.md` | Already-covered. Retained concrete tracing instructions and evidence gaps. |
| `interrogate/SKILL.md`, `interrogate/references/reviewer-prompt.md`, `interrogate/references/rubric.md` | Already-covered review substance. Retained Codex delegation and review-only boundaries. |
| `automate-me/SKILL.md`, `no-comments/SKILL.md`, `recall/SKILL.md`, `show-me-your-work/SKILL.md`, `swarm/SKILL.md` | Already-covered portable workflows. Host-specific additions are inapplicable as described below. |
| `reflect/SKILL.md`, `reflect/references/divergent-reviewer.md`, `reflect/references/judgment-reviewer.md`, `reflect/references/synthesizer.md`, `reflect/references/tooling-reviewer.md` | Already-covered evidence routing and approval workflow. Retained existing Codex adaptations. |
| `technical-writing/SKILL.md`, `unslop/SKILL.md` | Already-covered writing rules. Retained domain substance and explicit invocation boundaries. |
| `principle-build-the-lever/SKILL.md`, `principle-encode-lessons-in-structure/SKILL.md`, `principle-exhaust-the-design-space/SKILL.md`, `principle-explain-the-number/SKILL.md` | Already-covered. Retained substantive guidance removed or compressed upstream. |
| `principle-guard-the-context-window/SKILL.md`, `principle-laziness-protocol/SKILL.md`, `principle-migrate-callers-then-delete-legacy-apis/SKILL.md`, `principle-minimize-reader-load/SKILL.md` | Already-covered. Retained useful scope, design, and maintenance guidance. |
| `principle-model-the-domain/SKILL.md`, `principle-never-block-on-the-human/SKILL.md`, `principle-redesign-from-first-principles/SKILL.md`, `principle-subtract-before-you-add/SKILL.md`, `principle-type-system-discipline/SKILL.md` | Already-covered. Preserved type examples and authorization limits. |
| `why/SKILL.md`, `why/references/epistemics.md`, `why/references/synthesizer-prompt.md` | Already-covered coverage, confidence tiers, citations, and gaps. |
| `why/references/sources/code-archaeology.md`, `datadog.md`, `incident-postmortem.md`, `sentry.md`, `slack.md` | Already-covered. Retained source-specific searches, correlation warnings, and evidence requirements removed upstream. |

Inapplicable portions: Cursor model registries, family fallbacks, reasoning/speed selection, `Task` parameters, custom agent identifiers, permission-mode changes, automatic backlog publication, and assumed `/visualize` support. These were not imported.

No assigned substantive delta is deferred. `poteto-mode/**` and all non-skill changes remain outside this handoff.


## Core workflows and agent definitions

Paths below are relative to upstream `skills/poteto-mode`, except the two agent rows.

| Changed input | Disposition |
|---|---|
| `SKILL.md` | Adapted workflow ownership, exact delegate paths, and three revised principle summaries. Existing explicit links and scope rules retained. Cursor metadata and model/effort routing are inapplicable. Other prose changes are already covered. |
| `playbooks/autonomous-run.md` | Model/effort addition inapplicable; inherited-model contract retained. |
| `playbooks/autopilot-full.md` | Adapted proportional review, recoverable trails, trunk-defect classification, gate-relaxation evidence, worker-state distinctions, and ketchup reporting. Automatic pushes, cloud stores, hourly loops, unsafe replacement, and implied approval authority are inapplicable. |
| `playbooks/autopilot-stack.md` | Adapted exclusive topology ownership, dependent branch bases, handoff after topology changes, landing freeze, and ketchup reporting. |
| `playbooks/babysit.md` | Upstream deletion of merge-authorization guidance is inapplicable. Existing authorization and reporting rules deliberately retained. |
| `playbooks/bug-fix.md` | Model/effort addition inapplicable. |
| `playbooks/eval.md` | Model/effort addition inapplicable. |
| `playbooks/feature.md` | Model/effort addition inapplicable. |
| `playbooks/hillclimb.md` | Model/effort addition inapplicable. |
| `playbooks/multi-phase-plan.md` | Adapted full-versus-targeted review and evidence reuse. Model routing and fixed review-lane counts are inapplicable. Checker schema preserved. |
| `playbooks/opening-a-pr.md` | Adapted concise body guidance, host PR-tool instructions, child-base reconciliation, and explicitly assigned babysitting. Existing publication boundaries retained. |
| `playbooks/orchestrate.md` | Adapted worker topology prohibitions. Forge frontier runtime, cloud placement, and model routing are inapplicable. Existing local CLI unchanged. |
| `playbooks/perf-issue.md` | Model/effort addition inapplicable. |
| `playbooks/refactoring.md` | Model/effort addition inapplicable. |
| `playbooks/runtime-forensics.md` | Model/effort addition inapplicable. |
| `playbooks/session-pickup.md` | Model/effort addition inapplicable. |
| `playbooks/shipping.md` | Adapted evidence reuse, trunk-context checks, pinned leases, confirmed trunk merges, and independent-PR reverification. Watcher runtime and automatic external actions remain inapplicable. |
| `playbooks/trace-forensics.md` | Diagnosis and paired-capture wording already covered. Model/effort addition inapplicable. |
| `playbooks/worktree-cleanup.md` | Adapted alternate-base guidance to existing positional CLI. Upstream `-b`, transcript scans, and model routing are inapplicable. |
| `agents/poteto-agent.md` | Adapted delegate-only ownership and exact-path input in `references/agent-briefs.md`. Global cache discovery and Cursor registration are inapplicable. |
| `agents/comment-sicko.md` | Name-only metadata change inapplicable to the existing prompt template. Protected-comment and report-only adaptations retained. |

No in-scope Markdown delta is deferred. Helper-runtime changes remain outside this assignment.


## Executable helpers

All 13 changed upstream script paths are dispositioned in [helper evidence](../../tests/helpers/refresh-20261016.md). The only shipped runtime change is fenced-code recognition in check-plan.mjs. The CLI remains unchanged. No forge discovery or watch-pr runtime is imported.

