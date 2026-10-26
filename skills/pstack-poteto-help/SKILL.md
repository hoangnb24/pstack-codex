---
name: pstack-poteto-help
description: "Answer questions about the Codex pstack port, task prompts, skill selection, playbooks, and recovery. Use when explicitly asked for pstack help; explain suggested workflows without starting them."
---

# Poteto help for Codex

Answer the question, offer a prompt the user can send, and link the source you read. Help is informational. Do not execute the suggested workflow, create files, install or enable a plugin, edit configuration, start agents, or take external actions under a help request.

If the message explicitly requests work rather than advice, read [poteto mode](../pstack-poteto-mode/SKILL.md). Act only within that request and the host's permissions. A quoted recipe or question about execution is not an execution request.

## Find the need

Infer the need from the message. Route a named situation directly. If the need is unclear, ask one short question with these choices: setup, start a task, pick a skill, recover a run, or customize pstack. Answer the selected topic, not the whole catalog.

Read the selected skill or playbook before recommending it. Its actual instructions own the details. Read [prompting](references/prompting.md) when drafting a prompt and [recipes](references/recipes.md) when an example fits. Do not load every reference or sibling skill by default.

Use native plugin invocation: `$pstack-codex:pstack-<name>`. For example, `$pstack-codex:pstack-poteto-mode`. No slash-command aliases are installed. Standalone staging uses `$pstack-<name>` instead; use that form only when the user's catalog confirms that layout. Relative sibling links work in both layouts.

Link the actual port file, not an upstream public copy that describes Cursor behavior. The links here resolve inside the installed pack. If the user cannot open a cached file, include its pack-relative path and a short explanation. Do not claim a public Codex copy exists.

## Setup and cost

Explain the native plugin separately from project readiness. In a source checkout, consult `docs/PLUGIN.md` and `docs/CAPABILITIES.md` from the resolved plugin root when available. They are source documentation, not guaranteed installed skill resources. If absent, use the adjacent skill instructions and state the documentation gap. Do not invent installation commands or run them from help.

[Setup](../pstack-setup-pstack/SKILL.md) inspects project readiness. Inspection writes nothing. It records project preferences only when requested. It does not select per-role models, change reasoning settings, or install skills. This port inherits the current host model and permissions. There is no model registry whose absence implies setup has not run.

The packaged skills preserve explicit-only invocation, except setup's normal discovery. This help skill is explicit-only. Plugin enabled state and skill invocation policy are separate. Do not claim that installing the plugin starts all workflows or that selecting a skill creates a persistent custom mode. Invoke poteto mode for each new task; do not promise it remains injected on every turn.

Check only state needed for the answer, using permitted read-only access. For verification questions, look for a project `verify-*` skill or existing app harness. If none exists, recommend [create verification skill](../pstack-create-verification-skill/SKILL.md), but do not generate it. Missing browser control or recording is a real proof gap. A screenshot is not a video.

For a race or invariant beyond ordinary test coverage, look for a project skill that runs a formal checker. If none exists, mention [create formal verification skill](../pstack-create-formal-verification-skill/SKILL.md). If its covered code changed after the recorded sync commit, mention [maintain formal verification skill](../pstack-maintain-formal-verification-skill/SKILL.md). Inspect working-tree changes too. Setup may offer these routes once; an offer is not permission to generate or install them.

Extra candidate attempts and review workers cost tokens. Suggest a narrow task, a bounded time/attempt budget, and fewer authorized candidates where the selected skill permits it. Do not promise savings from Cursor model roles or change host settings. A serial pass can reduce delegation, but does not provide independent review.

## Start a task

[Poteto mode](../pstack-poteto-mode/SKILL.md) selects a playbook from the goal and reads it before acting. A useful prompt names the outcome, a check for done, relevant evidence, and real constraints. Do not prescribe a long skill sequence when the playbook already supplies it.

Say `new task` when changing subjects. Short follow-ups work when the current task and scope remain clear. They do not grant new permission to publish, merge, install, change configuration, or contact others.

Task agents depend on tools exposed by the session and authorization to delegate. This port does not register a named custom agent, cloud fleet, or cross-provider model panel. Without permitted agents, offer serial work and label lost independence. Do not use hidden CLI inference as a substitute. For required independence, report the missing capability rather than lowering the acceptance bar.

## Pick a skill

Use poteto mode for a non-trivial execution task that needs its playbook. Use a narrower skill when the user asks for one specific outcome. Route by the needs below.

| Need | Adjacent skill |
|---|---|
| Evidence-led task execution | [poteto-mode](../pstack-poteto-mode/SKILL.md) |
| Check understanding of the goal before work starts | [in-your-own-words](../pstack-in-your-own-words/SKILL.md) |
| Rewrite a prompt for a deeper approach without executing its task | [sharpen](../pstack-sharpen/SKILL.md) |
| Current mechanics, placement, or ownership | [how](../pstack-how/SKILL.md) |
| Reasons, history, or origin of a number | [why](../pstack-why/SKILL.md) |
| Plain explanation of a change or subsystem | [teach](../pstack-teach/SKILL.md) |
| Recent context from accessible, scoped history | [recall](../pstack-recall/SKILL.md) |
| Changes in this chat and every pending item, with enough context to decide | [ketchup](../pstack-ketchup/SKILL.md) |
| The same catch-up as a silent slide video, with pending decisions in text | [ketchup-video](../pstack-ketchup-video/SKILL.md) |
| Breakage beyond a small diff | [blast-radius](../pstack-blast-radius/SKILL.md) |
| Types and module design, then implementation | [architect](../pstack-architect/SKILL.md) |
| Competing candidates and synthesis | [arena](../pstack-arena/SKILL.md) |
| Partitioned coverage or declared races | [swarm](../pstack-swarm/SKILL.md) |
| Adversarial diff review, without auto-fixes | [interrogate](../pstack-interrogate/SKILL.md) |
| Cheap local failing-test path | [tdd](../pstack-tdd/SKILL.md) |
| TypeScript code rules | [typescript-best-practices](../pstack-typescript-best-practices/SKILL.md) |
| Review redundant comments, preserving necessary contracts | [no-comments](../pstack-no-comments/SKILL.md) |
| Remove filler from requested prose | [unslop](../pstack-unslop/SKILL.md) |
| Structured technical writing | [technical-writing](../pstack-technical-writing/SKILL.md) |
| Restate the last reply plainly | [bro](../pstack-bro/SKILL.md) |
| Build a project-local app verification skill | [create-verification-skill](../pstack-create-verification-skill/SKILL.md) |
| Formally verify a race or invariant beyond ordinary test coverage | [create-formal-verification-skill](../pstack-create-formal-verification-skill/SKILL.md) |
| Reconcile formal verification with changed code and distinguish drift from bugs | [maintain-formal-verification-skill](../pstack-maintain-formal-verification-skill/SKILL.md) |
| Explain model behavior and bug paths, or turn an agreed chart into a TLA+ skeleton | [statechart](../pstack-statechart/SKILL.md) |
| Audit a verification skill and feature map | [maintain-verification-skill](../pstack-maintain-verification-skill/SKILL.md) |
| Check whether a performance measurement is credible | [benchmark-checklist](../pstack-benchmark-checklist/SKILL.md) |
| Design a rigorous run when no narrower playbook fits | [figure-it-out](../pstack-figure-it-out/SKILL.md) |
| Keep or inspect a decision trail | [show-me-your-work](../pstack-show-me-your-work/SKILL.md) |
| Inspect readiness and requested project preferences | [setup-pstack](../pstack-setup-pstack/SKILL.md) |
| Draft personal working guidance from accessible context | [automate-me](../pstack-automate-me/SKILL.md) |
| Propose skill lessons from a session | [reflect](../pstack-reflect/SKILL.md) |
| Prevent repeated repository mistakes structurally | [correct](../pstack-correct/SKILL.md) |
| Local bot UI or mock backend, not native webhook wake | [make-bot-ui](../pstack-make-bot-ui/SKILL.md) |

Close calls:

- `how` explains mechanics. `why` traces reasons. `teach` combines findings into a plain explanation.
- `arena` repeats a brief and synthesizes candidates. `swarm` covers slices or declared race arms and returns one report. Neither guarantees cloud or model diversity.
- `architect` proceeds to implementation by default when authorized. Add `with checkpoint` to review the design first. A design-only request still forbids implementation.
- `interrogate` reviews a diff. `blast-radius` checks risks outside it. Review findings do not authorize edits.
- `recall` uses current conversation, scoped exposed thread tools, or supplied exports. It does not scan private databases. `ketchup` covers this chat since the user's last message and pending user decisions. One specific prior task belongs to Session pickup.
- `figure-it-out` designs a rigorous run. Autonomous run drives one scoped task. Orchestrate coordinates a bounded multi-unit program, not a persistent service.

If an adjacent skill is not listed, read its frontmatter and route by its actual description. Do not promise a missing skill. External cleanup, app-control, and authoring tools are not installed by this pack; use available Codex tools or explain the gap.

## Playbooks and principles

Playbooks are files inside poteto mode, not separately registered skills. Use `$pstack-codex:pstack-poteto-mode` with the goal or playbook name. The [routing index](../pstack-poteto-mode/SKILL.md) lists all 23 playbooks and the 24 principle skills. Read the matching leaf before describing its procedure or applying a principle.

| Phrase or intent | Playbook and boundary |
|---|---|
| Check on PR 123 | [Babysit](../pstack-poteto-mode/playbooks/babysit.md): one read-only status pass |
| Fix this PR until merge-ready | [Babysit](../pstack-poteto-mode/playbooks/babysit.md): bounded drive, scoped fixes and pushes only when authorized; no merge |
| Land this stack | [Shipping](../pstack-poteto-mode/playbooks/shipping.md): explicit landing authority and actual forge access required |
| Take over this branch | [Session pickup](../pstack-poteto-mode/playbooks/session-pickup.md): reconcile accessible evidence; do not redo finished work |
| Pause safely | [Pause safely](../pstack-poteto-mode/playbooks/pause-safely.md): checkpoint and stop within existing permission |
| Full autopilot on an independent queue | [Autopilot-full](../pstack-poteto-mode/playbooks/autopilot-full.md): publication and landing remain separately scoped |
| Stack these changes, do not ship | [Autopilot-stack](../pstack-poteto-mode/playbooks/autopilot-stack.md): reviewable chain without landing |
| Run the eval playbook | [Eval](../pstack-poteto-mode/playbooks/eval.md): actual blind/independent coverage must be reported |
| Plan this migration, do not implement | [Multi-phase plan](../pstack-poteto-mode/playbooks/multi-phase-plan.md): plan is the deliverable |
| Write a skill for this workflow | [Authoring a skill](../pstack-poteto-mode/playbooks/authoring-a-skill.md): available skill-creator and validation, no global install |
| Continue one task until checks pass | [Autonomous run](../pstack-poteto-mode/playbooks/autonomous-run.md): bounded in-session work |
| Coordinate several dependent units | [Orchestrate](../pstack-poteto-mode/playbooks/orchestrate.md): scoped bookkeeping, no live watcher or restart service |

There is no separate `pstack-orchestrate` or planning skill. Do not invent one. Host planning features are separate from the plan playbook.

Principles are one-rule skills, not new authority. A user can steer with `apply prove it works` or explicitly invoke `$pstack-codex:pstack-principle-prove-it-works`. Read the leaf before citing the decision it changed. Autonomy principles do not override an investigation-only request or missing permission.

## Recover and customize

| Symptom | Answer |
|---|---|
| Skill did not load automatically | Most pack skills are explicit-only. Invoke the namespaced skill and inspect actual catalog/policy; do not edit policy from help. |
| Mode faded or a question continued old work | Invoke it for the new task and state `new task` or `answer only; do not execute`. No custom-mode persistence is provided. |
| Setup did not change models | Expected: setup inspects readiness, not host model settings. |
| Agents collided | Use authorized disjoint scopes or isolated worktrees. If isolation is unavailable, work serially. Separate worktrees do not isolate ports or shared build output. |
| Overnight work or PR watch did not continue | No `/loop`, persistent watcher, or wake service is installed. Offer a bounded in-session pass and durable checkpoint. Future scheduling needs a separate supported, authorized setup. |
| History is unavailable | Use the current conversation, supplied exports, and scoped local evidence. Report missing history coverage. |
| A green build was called proof | Ask for the real command, flow, stored value, or measured profile. Missing required proof stays unverified. |

For personal guidance, route to `automate-me`; use current context and an interview if history tools are absent. For session lessons, route to `reflect`; it proposes edits for approval. For repeated repo mistakes, route to `correct`; it favors architecture, types, lint, and tests over another prose rule. Skill authoring and eval are poteto-mode playbooks. Suggest these routes, but do not modify or install anything from help.

## Reply

Lead with the answer. Give at most one example prompt, unless the user requests a catalog or several recipes. Link the port source that supports the answer. State relevant capability gaps and the fallback. Never present a suggested prompt as work already started.
