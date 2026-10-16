# Word the prompt

A prompt states the outcome and the check for done. The selected skill or playbook supplies the procedure. These examples are suggestions for the user to send, not authorization to run them while answering help.

## Include what changes the task

- Goal: what is wrong or what behavior is wanted.
- Done check: a command or observed result that can pass or fail.
- Proof: actual output, stored value, paired measurement, or live-flow evidence.
- Known context: fixture, symptom, repro steps, logs, or accessible source.
- Scope and limits: allowed paths, read-only versus implementation, compatibility, budget, and stop conditions.

Prefer the goal over a long skill sequence. Name a skill when its outcome or checkpoint is specifically wanted. Label a suspected cause as a hypothesis, not a fact. Do not omit known evidence just to avoid influencing the agent.

For example:

```text
$pstack-codex:pstack-poteto-mode The CSV export drops its last row. Reproduce with fixtures/export-60000.csv, then fix only the exporter. Done means all 60000 data rows export in order. Show row counts before and after. Do not commit or publish.
```

This gives a Bug fix goal, a fixture, a measurable result, and a write boundary. It requests a fix. For diagnosis only, replace `then fix` with `explain the cause; do not change code`.

## Load available context

For a noisy report, request a plain restatement before changes. Use [how](../../pstack-how/SKILL.md) for mechanics and [why](../../pstack-why/SKILL.md) for reasons. Use [teach](../../pstack-teach/SKILL.md) for an explanation of the evidence and tradeoffs.

In a fresh conversation, supply the checkpoint or use [recall](../../pstack-recall/SKILL.md) with an explicit topic and time range. Recall can use exposed, authorized thread tools or user-supplied exports. If those are absent, use current context and scoped local state. Do not promise hidden history access or silently widen the search.

## Resolve design questions

Use prototypes when an experiment can answer an important uncertainty. Request screenshots only when UI control exists, and video only when recording exists. Missing proof is not a pass.

For an API or shared package, a caller example or tutorial can make the desired contract concrete. For design before implementation, use [architect](../../pstack-architect/SKILL.md) `with checkpoint`. For a settled design, request the [Multi-phase plan](../../pstack-poteto-mode/playbooks/multi-phase-plan.md). Plan-only means no implementation. State whether modifying scratch prototypes are allowed.

## Follow up and steer

Short follow-ups such as `continue` keep the established task and limits. They do not add merge, deployment, configuration, or messaging authority. Say `new task` when the subject changes. Invoke the namespaced skill again for a new task rather than relying on persistent custom modes.

Useful steers:

- `The goal is reproduction. I did not ask for a fix. Do not change code.`
- `Apply prove it works. Show the real output, not just a build log.`
- `Answer this question only. Do not continue implementation.`

## Before stepping away

The port provides bounded in-session work, not a `/loop` service or unattended wakeups.

1. State the scoped outcome and checkable finish condition.
2. Name available verification tools and evidence paths.
3. Set a time or attempt budget and stopping conditions.
4. State allowed writes and any explicit commit or publication permission.
5. Request a decision trail and a durable checkpoint if unfinished.

Use isolated worktrees or disjoint write scopes only when available and authorized. Account for shared ports and build output too. Without permitted task agents, request serial work and disclose the lack of independent review. If required recording, independent review, or live access is missing, stop at that gap rather than weaken the done check.

Being away does not remove approval gates. Future scheduling requires a separate supported and authorized setup. Do not promise that work continues after the session ends.
