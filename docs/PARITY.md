# Workflow parity

Statuses describe the ported workflow, not a claim of live integration testing. Source and the real local installation are separate artifacts. See [validation](VALIDATION.md) for current acceptance, installation and remaining limits.

| Upstream skill | Codex skill | Status / material change |
|---|---|---|
| `in-your-own-words` | [`pstack-in-your-own-words`](../skills/pstack-in-your-own-words/SKILL.md) | Adapted: restate the goal before action; no task expansion. |
| `ketchup` | [`pstack-ketchup`](../skills/pstack-ketchup/SKILL.md) | Adapted: current-chat catch-up; unavailable history remains a gap. |
| `sharpen` | [`pstack-sharpen`](../skills/pstack-sharpen/SKILL.md) | Adapted: return a deeper prompt, not task execution; preserve user choices. |
| `architect` | [`pstack-architect`](../skills/pstack-architect/SKILL.md) | Ported: engineering guidance retained; namespaced links and Codex execution boundary. |
| `arena` | [`pstack-arena`](../skills/pstack-arena/SKILL.md) | Adapted: authorized task-agent candidates; no guaranteed multi-model diversity; serial fallback disclosed. |
| `automate-me` | [`pstack-automate-me`](../skills/pstack-automate-me/SKILL.md) | Adapted: task-scoped history; draft project-local skill only. |
| `benchmark-checklist` | [`pstack-benchmark-checklist`](../skills/pstack-benchmark-checklist/SKILL.md) | Ported: engineering guidance retained; namespaced links and Codex execution boundary. |
| `blast-radius` | [`pstack-blast-radius`](../skills/pstack-blast-radius/SKILL.md) | Ported: engineering guidance retained; namespaced links and Codex execution boundary. |
| `bro` | [`pstack-bro`](../skills/pstack-bro/SKILL.md) | Ported: engineering guidance retained; namespaced links and Codex execution boundary. |
| `correct` | [`pstack-correct`](../skills/pstack-correct/SKILL.md) | Ported: engineering guidance retained; namespaced links and Codex execution boundary. |
| `create-verification-skill` | [`pstack-create-verification-skill`](../skills/pstack-create-verification-skill/SKILL.md) | Ported: engineering guidance retained; namespaced links and Codex execution boundary. |
| `create-formal-verification-skill` | [`pstack-create-formal-verification-skill`](../skills/pstack-create-formal-verification-skill/SKILL.md) | Adapted: code-grounded property, falsification, bounded proof, project-local rerun skill; no product fixes or unapproved tool installs. |
| `figure-it-out` | [`pstack-figure-it-out`](../skills/pstack-figure-it-out/SKILL.md) | Ported: engineering guidance retained; namespaced links and Codex execution boundary. |
| `how` | [`pstack-how`](../skills/pstack-how/SKILL.md) | Ported: engineering guidance retained; namespaced links and Codex execution boundary. |
| `interrogate` | [`pstack-interrogate`](../skills/pstack-interrogate/SKILL.md) | Adapted: adversarial review lenses; independence and model coverage disclosed. |
| `maintain-verification-skill` | [`pstack-maintain-verification-skill`](../skills/pstack-maintain-verification-skill/SKILL.md) | Ported: engineering guidance retained; namespaced links and Codex execution boundary. |
| `make-bot-ui` | [`pstack-make-bot-ui`](../skills/pstack-make-bot-ui/SKILL.md) | Unavailable native parity: no Grok Bot / Cursor sender-key webhook; local mock/design only until a real backend is provided. |
| `no-comments` | [`pstack-no-comments`](../skills/pstack-no-comments/SKILL.md) | Adapted: bundled reviewer brief replaces custom Comment Sicko registration. |
| `poteto-help` | [`pstack-poteto-help`](../skills/pstack-poteto-help/SKILL.md) | Adapted: informational routing, prompts and recipes; no execution from help, Cursor Custom Mode or model configuration. |
| `poteto-mode` | [`pstack-poteto-mode`](../skills/pstack-poteto-mode/SKILL.md) | Adapted: 23 Codex playbooks; inherited permission model and bounded delegation. |
| `principle-attack-the-premise` | [`pstack-principle-attack-the-premise`](../skills/pstack-principle-attack-the-premise/SKILL.md) | Ported: engineering guidance retained; namespaced links and Codex execution boundary. |
| `principle-boundary-discipline` | [`pstack-principle-boundary-discipline`](../skills/pstack-principle-boundary-discipline/SKILL.md) | Ported: engineering guidance retained; namespaced links and Codex execution boundary. |
| `principle-build-the-lever` | [`pstack-principle-build-the-lever`](../skills/pstack-principle-build-the-lever/SKILL.md) | Ported: engineering guidance retained; namespaced links and Codex execution boundary. |
| `principle-encode-lessons-in-structure` | [`pstack-principle-encode-lessons-in-structure`](../skills/pstack-principle-encode-lessons-in-structure/SKILL.md) | Ported: engineering guidance retained; namespaced links and Codex execution boundary. |
| `principle-exhaust-the-design-space` | [`pstack-principle-exhaust-the-design-space`](../skills/pstack-principle-exhaust-the-design-space/SKILL.md) | Ported: engineering guidance retained; namespaced links and Codex execution boundary. |
| `principle-experience-first` | [`pstack-principle-experience-first`](../skills/pstack-principle-experience-first/SKILL.md) | Ported: engineering guidance retained; namespaced links and Codex execution boundary. |
| `principle-explain-the-number` | [`pstack-principle-explain-the-number`](../skills/pstack-principle-explain-the-number/SKILL.md) | Ported: engineering guidance retained; namespaced links and Codex execution boundary. |
| `principle-fix-root-causes` | [`pstack-principle-fix-root-causes`](../skills/pstack-principle-fix-root-causes/SKILL.md) | Ported: engineering guidance retained; namespaced links and Codex execution boundary. |
| `principle-foundational-thinking` | [`pstack-principle-foundational-thinking`](../skills/pstack-principle-foundational-thinking/SKILL.md) | Ported: engineering guidance retained; namespaced links and Codex execution boundary. |
| `principle-guard-the-context-window` | [`pstack-principle-guard-the-context-window`](../skills/pstack-principle-guard-the-context-window/SKILL.md) | Ported: engineering guidance retained; namespaced links and Codex execution boundary. |
| `principle-laziness-protocol` | [`pstack-principle-laziness-protocol`](../skills/pstack-principle-laziness-protocol/SKILL.md) | Ported: engineering guidance retained; namespaced links and Codex execution boundary. |
| `principle-make-operations-idempotent` | [`pstack-principle-make-operations-idempotent`](../skills/pstack-principle-make-operations-idempotent/SKILL.md) | Ported: engineering guidance retained; namespaced links and Codex execution boundary. |
| `principle-migrate-callers-then-delete-legacy-apis` | [`pstack-principle-migrate-callers-then-delete-legacy-apis`](../skills/pstack-principle-migrate-callers-then-delete-legacy-apis/SKILL.md) | Ported: engineering guidance retained; namespaced links and Codex execution boundary. |
| `principle-minimize-reader-load` | [`pstack-principle-minimize-reader-load`](../skills/pstack-principle-minimize-reader-load/SKILL.md) | Ported: engineering guidance retained; namespaced links and Codex execution boundary. |
| `principle-model-the-domain` | [`pstack-principle-model-the-domain`](../skills/pstack-principle-model-the-domain/SKILL.md) | Ported: engineering guidance retained; namespaced links and Codex execution boundary. |
| `principle-never-block-on-the-human` | [`pstack-principle-never-block-on-the-human`](../skills/pstack-principle-never-block-on-the-human/SKILL.md) | Ported: engineering guidance retained; namespaced links and Codex execution boundary. |
| `principle-outcome-oriented-execution` | [`pstack-principle-outcome-oriented-execution`](../skills/pstack-principle-outcome-oriented-execution/SKILL.md) | Ported: engineering guidance retained; namespaced links and Codex execution boundary. |
| `principle-prove-it-works` | [`pstack-principle-prove-it-works`](../skills/pstack-principle-prove-it-works/SKILL.md) | Ported: engineering guidance retained; namespaced links and Codex execution boundary. |
| `principle-redesign-from-first-principles` | [`pstack-principle-redesign-from-first-principles`](../skills/pstack-principle-redesign-from-first-principles/SKILL.md) | Ported: engineering guidance retained; namespaced links and Codex execution boundary. |
| `principle-separate-before-serializing-shared-state` | [`pstack-principle-separate-before-serializing-shared-state`](../skills/pstack-principle-separate-before-serializing-shared-state/SKILL.md) | Ported: engineering guidance retained; namespaced links and Codex execution boundary. |
| `principle-sequence-verifiable-units` | [`pstack-principle-sequence-verifiable-units`](../skills/pstack-principle-sequence-verifiable-units/SKILL.md) | Ported: engineering guidance retained; namespaced links and Codex execution boundary. |
| `principle-subtract-before-you-add` | [`pstack-principle-subtract-before-you-add`](../skills/pstack-principle-subtract-before-you-add/SKILL.md) | Ported: engineering guidance retained; namespaced links and Codex execution boundary. |
| `principle-test-behavior-not-implementation` | [`pstack-principle-test-behavior-not-implementation`](../skills/pstack-principle-test-behavior-not-implementation/SKILL.md) | Ported: engineering guidance retained; namespaced links and Codex execution boundary. |
| `principle-type-system-discipline` | [`pstack-principle-type-system-discipline`](../skills/pstack-principle-type-system-discipline/SKILL.md) | Ported: engineering guidance retained; namespaced links and Codex execution boundary. |
| `recall` | [`pstack-recall`](../skills/pstack-recall/SKILL.md) | Adapted: available task history and authorized evidence; no Cursor transcript paths. |
| `reflect` | [`pstack-reflect`](../skills/pstack-reflect/SKILL.md) | Adapted: task-scoped provided history; no automatic Cursor transcript scanning. |
| `setup-pstack` | [`pstack-setup-pstack`](../skills/pstack-setup-pstack/SKILL.md) | Adapted: project-local capability/preferences; inherited model, no Cursor rule or global config writes. |
| `show-me-your-work` | [`pstack-show-me-your-work`](../skills/pstack-show-me-your-work/SKILL.md) | Ported: engineering guidance retained; namespaced links and Codex execution boundary. |
| `swarm` | [`pstack-swarm`](../skills/pstack-swarm/SKILL.md) | Adapted: bounded authorized task agents; no assumed cloud fleet. |
| `tdd` | [`pstack-tdd`](../skills/pstack-tdd/SKILL.md) | Ported: engineering guidance retained; namespaced links and Codex execution boundary. |
| `teach` | [`pstack-teach`](../skills/pstack-teach/SKILL.md) | Ported: engineering guidance retained; namespaced links and Codex execution boundary. |
| `technical-writing` | [`pstack-technical-writing`](../skills/pstack-technical-writing/SKILL.md) | Ported: engineering guidance retained; namespaced links and Codex execution boundary. |
| `typescript-best-practices` | [`pstack-typescript-best-practices`](../skills/pstack-typescript-best-practices/SKILL.md) | Ported: engineering guidance retained; namespaced links and Codex execution boundary. |
| `unslop` | [`pstack-unslop`](../skills/pstack-unslop/SKILL.md) | Ported: engineering guidance retained; namespaced links and Codex execution boundary. |
| `why` | [`pstack-why`](../skills/pstack-why/SKILL.md) | Ported: engineering guidance retained; namespaced links and Codex execution boundary. |

| `maintain-formal-verification-skill` | [`pstack-maintain-formal-verification-skill`](../skills/pstack-maintain-formal-verification-skill/SKILL.md) | Adapted: reconcile proof coverage with source drift; blocked checks do not advance sync. |
| `statechart` | [`pstack-statechart`](../skills/pstack-statechart/SKILL.md) | Adapted: check TLA+ models, draw Mermaid charts, and explain shortest violation paths; trusted local tools only, no automatic dependency installation. |
| `ketchup-video` | [`pstack-ketchup-video`](../skills/pstack-ketchup-video/SKILL.md) | Adapted: local visual catch-up from current evidence; no automatic renderer install or upload; retain text decisions. |

## Playbooks

| Playbook | Status / limitation |
|---|---|
| [authoring-a-skill](../skills/pstack-poteto-mode/playbooks/authoring-a-skill.md) | Adapted: scoped Codex workflow, evidence and verification retained. |
| [autonomous-run](../skills/pstack-poteto-mode/playbooks/autonomous-run.md) | Adapted bounded session workflow; Cursor /loop, persistent cloud fleet and unattended auto-merge unavailable. |
| [autopilot-full](../skills/pstack-poteto-mode/playbooks/autopilot-full.md) | Adapted bounded session workflow; Cursor /loop, persistent cloud fleet and unattended auto-merge unavailable. |
| [autopilot-stack](../skills/pstack-poteto-mode/playbooks/autopilot-stack.md) | Adapted: scoped Codex workflow, evidence and verification retained. |
| [babysit](../skills/pstack-poteto-mode/playbooks/babysit.md) | Adapted; status checks are read-only, mutations require task authorization; live GitHub actions untested. |
| [bug-fix](../skills/pstack-poteto-mode/playbooks/bug-fix.md) | Adapted: scoped Codex workflow, evidence and verification retained. |
| [eval](../skills/pstack-poteto-mode/playbooks/eval.md) | Adapted: scoped Codex workflow, evidence and verification retained. |
| [feature](../skills/pstack-poteto-mode/playbooks/feature.md) | Adapted: scoped Codex workflow, evidence and verification retained. |
| [hillclimb](../skills/pstack-poteto-mode/playbooks/hillclimb.md) | Adapted: scoped Codex workflow, evidence and verification retained. |
| [investigation](../skills/pstack-poteto-mode/playbooks/investigation.md) | Adapted: scoped Codex workflow, evidence and verification retained. |
| [multi-phase-plan](../skills/pstack-poteto-mode/playbooks/multi-phase-plan.md) | Adapted: scoped Codex workflow, evidence and verification retained. |
| [opening-a-pr](../skills/pstack-poteto-mode/playbooks/opening-a-pr.md) | Adapted; status checks are read-only, mutations require task authorization; live GitHub actions untested. |
| [orchestrate](../skills/pstack-poteto-mode/playbooks/orchestrate.md) | Adapted bounded session workflow; Cursor /loop, persistent cloud fleet and unattended auto-merge unavailable. |
| [pause-safely](../skills/pstack-poteto-mode/playbooks/pause-safely.md) | Adapted: scoped Codex workflow, evidence and verification retained. |
| [perf-issue](../skills/pstack-poteto-mode/playbooks/perf-issue.md) | Adapted: scoped Codex workflow, evidence and verification retained. |
| [prototype](../skills/pstack-poteto-mode/playbooks/prototype.md) | Adapted: scoped Codex workflow, evidence and verification retained. |
| [refactoring](../skills/pstack-poteto-mode/playbooks/refactoring.md) | Adapted: scoped Codex workflow, evidence and verification retained. |
| [runtime-forensics](../skills/pstack-poteto-mode/playbooks/runtime-forensics.md) | Adapted: scoped Codex workflow, evidence and verification retained. |
| [session-pickup](../skills/pstack-poteto-mode/playbooks/session-pickup.md) | Adapted: scoped Codex workflow, evidence and verification retained. |
| [shipping](../skills/pstack-poteto-mode/playbooks/shipping.md) | Adapted; status checks are read-only, mutations require task authorization; live GitHub actions untested. |
| [trace-forensics](../skills/pstack-poteto-mode/playbooks/trace-forensics.md) | Adapted: scoped Codex workflow, evidence and verification retained. |
| [visual-parity](../skills/pstack-poteto-mode/playbooks/visual-parity.md) | Adapted: scoped Codex workflow, evidence and verification retained. |
| [worktree-cleanup](../skills/pstack-poteto-mode/playbooks/worktree-cleanup.md) | Adapted; read-only audit with conservative unknown state, deletion separately authorized. |

## Other shipped components

- `poteto-agent`: replaced by self-contained task briefs that explicitly load the core skill; no custom agent registration.
- `Comment Sicko`: adapted as a read-only reviewer reference in `pstack-no-comments`.
- Benny: dormant adapted triage/reproduction pack; live schedule, Slack isolation, tracker writes and UI integration unverified. See [capability audit](CAPABILITIES.md).
- Guides: replaced by this pack’s Codex usage, parity and capability documents; upstream installation/overnight recipes are not executable Codex instructions.
- Cursor team kit `deslop`, `control-ui`, `control-cli`: not bundled upstream or here; use actual available equivalent capabilities and report gaps.
- Deterministic helpers and unavailable live watcher mechanics: see [validation](VALIDATION.md).
