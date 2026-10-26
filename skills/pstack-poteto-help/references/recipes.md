# Prompts worth copying

Replace placeholders with actual paths, fixtures, revisions, and done checks. These are prompts to offer, not actions to execute from help. Native invocation uses `$pstack-codex:pstack-<name>`. Read the selected [skill or playbook](../SKILL.md) before recommending a recipe.

## Understand

- `$pstack-codex:pstack-in-your-own-words Restate what you understand from <long or messy request>. Do not start work.`
- `$pstack-codex:pstack-sharpen <prompt, scope, and done checks>. Return a deeper prompt without doing its task or expanding scope.`
- `$pstack-codex:pstack-ketchup Catch me up on this chat and decisions that need me. Keep this read-only.`
- `$pstack-codex:pstack-ketchup-video Catch me up using the existing artifacts. Render locally outside the repo with available tools. Keep every pending decision in text.`
- `$pstack-codex:pstack-poteto-mode Read this supplied report. Restate the underlying issue plainly. Do not change code.`
- `$pstack-codex:pstack-poteto-mode Investigate <symptom>. Report known facts, sources, and hypotheses. Do not change code.`
- `$pstack-codex:pstack-how Explain <subsystem> using traced source paths. Do not change code.`
- `$pstack-codex:pstack-why Explain why <behavior> changed between <base> and <head>. Use available scoped sources; report missing evidence.`
- `$pstack-codex:pstack-recall Reconstruct my work on <topic> from <date range> in <project>. Use exposed authorized history or these supplied exports. Report coverage gaps.`
- `$pstack-codex:pstack-teach Explain this implementation and its tradeoffs against <alternative>. Do not edit it.`
- `$pstack-codex:pstack-poteto-mode Take over this branch from <checkpoint>. Reconcile actual state and evidence before continuing the scoped task. Do not redo verified work or publish.`

## Build

- Bug: `$pstack-codex:pstack-poteto-mode Reproduce <symptom> using <fixture>, then fix within <paths>. Done means <observable check>. Show before-and-after proof. Do not publish.`
- App bug: `$pstack-codex:pstack-poteto-mode Reproduce <report> on <base> using the existing verify-<app> skill at <path>. If it still reproduces, fix within <paths>. Show real-flow evidence. If required UI control or recording is absent, report the gap; do not claim verification.`
- Cheap test: `$pstack-codex:pstack-poteto-mode Reproduce <bug>. Use TDD if a cheap local test path exists. Fix and rerun the real check. Keep changes within <paths>.`
- Feature: `$pstack-codex:pstack-poteto-mode Add <behavior> within <paths>. Preserve <existing output> byte-for-byte. Verify both with <fixtures>.`
- Refactor: `$pstack-codex:pstack-poteto-mode Move <code> into <module> with zero behavior change. Capture <baseline> first and compare after. Do not change public APIs.`
- Performance: `$pstack-codex:pstack-poteto-mode <operation> takes <time> on <fixture>. Trace the measured cause and fix within <paths>. Show repeatable paired baseline and changed measurements; report noise and remaining limits.`

The app recipe does not install a verification skill. Its local skill path must exist. A required video stays missing when recording is unavailable; screenshots do not satisfy it.

## Design and plan

- `$pstack-codex:pstack-poteto-mode Prototype distinct options for <feature> within <scratch path>. Show runnable evidence through available tools. Do not alter production code.`
- `$pstack-codex:pstack-architect with checkpoint Design <API> within <scope>. Ground the design in existing callers and prototypes. Show the design before implementing.`
- `$pstack-codex:pstack-poteto-mode Write a caller tutorial for <new package> as the design contract. Do not implement it yet.`
- `$pstack-codex:pstack-arena Compare distinct designs for <brief> within <scratch scope>. Use permitted task agents only; otherwise use serial candidates and disclose that no independent judge ran.`
- `$pstack-codex:pstack-poteto-mode Turn this settled design into a multi-phase plan at <path>. Each small unit needs a concrete behavioral check. Deliver the plan only; do not implement or publish.`
- `$pstack-codex:pstack-poteto-mode Plan migration from <library> to <target>. Preserve <required compatibility>, including <known edge cases>. Report unknowns. Do not implement.`

## Review and delivery

- `$pstack-codex:pstack-create-formal-verification-skill Check <property> in <module>, including overlapping retries. Keep product code unchanged and label proof bounds.`
- `$pstack-codex:pstack-maintain-formal-verification-skill Reconcile <project verify skill> with changes to its covered code. Report drift separately from bugs. Do not fix product code.`
- `$pstack-codex:pstack-statechart Explain <existing model> with reader-facing states and bug paths. Use a scratch copy and available local tools; do not install dependencies.`
- `$pstack-codex:pstack-interrogate Review <base>...<head> for real defects and regressions. Do not change files. Report evidence and dismissals. Use permitted independent reviewers only if available; otherwise label a single-agent review.`
- `$pstack-codex:pstack-swarm Check every package under <dir> with its existing check script at <revision>. Use authorized agents on disjoint slices if available, otherwise check serially. Return one report with uncovered slices. Do not edit code or publish.`
- `$pstack-codex:pstack-benchmark-checklist Vet this <claimed speedup> from <receipts>. Report whether the measurement represents the intended work. Do not post anything.`
- Local PR preparation: `$pstack-codex:pstack-poteto-mode Prepare a PR description for <base>...<head> with verification evidence. Do not commit, push, or create a PR.`
- Explicit publication: `$pstack-codex:pstack-poteto-mode Open a PR for <repository/branch> against <base>. I authorize pushing this branch and creating that PR only. Include evidence. Do not merge or deploy.`
- Status only: `$pstack-codex:pstack-poteto-mode Check on <repository> PR <number>. One read-only pass. Report checks, reviews, mergeability, and unknowns. Do not retry CI, edit, push, resolve threads, or merge.`
- Merge-ready drive: `$pstack-codex:pstack-poteto-mode Babysit <repository> PR <number> until merge-ready or <budget>. I authorize fixes within <paths> and pushes to <branch>. Do not send replies, resolve threads, merge, or arm auto-merge.`
- Explicit landing: `$pstack-codex:pstack-poteto-mode Land only <ordered PR list> in <repository> after required checks and approvals pass. I authorize those merges only. Report blockers instead of bypassing protections. Do not deploy.`

Offer publication or landing recipes only when they match the question. Even an example containing authorization is not current authorization to act. Forge access must actually exist.

## Away, back, and customization

- `$pstack-codex:pstack-poteto-mode Continue <scoped task> in this session for at most <budget>. Done means <checks>. Keep a decision log at <path>. Do not commit or publish. Stop at missing required capability or permission and leave a resume note. Do not create a scheduler or background watcher.`
- `$pstack-codex:pstack-show-me-your-work Summarize the existing decision log at <path>. Highlight attention items and missing proof. Do not change anything.`
- `$pstack-codex:pstack-poteto-mode Plan an independent queue for <items>. Show scope, checks, and publication/landing gates before execution. Do not start the queue.`
- `$pstack-codex:pstack-poteto-mode Build a dependent stack for <items> within <paths>, but do not publish or land it. Stop at <budget> and report local delivery separately from proposed PRs.`
- `$pstack-codex:pstack-poteto-mode Pause safely. Preserve unrelated work and leave a checkpoint at <path>. Do not commit or publish.`
- `$pstack-codex:pstack-reflect Propose lessons from this session that would change future decisions. Show proposed skill edits for approval; do not apply them yet.`
- `$pstack-codex:pstack-correct Agents repeatedly make <mistake> in <scope>. Inspect supplied or scoped local evidence first. Propose a structural prevention and its proof. Do not change code yet.`
- `$pstack-codex:pstack-automate-me Draft project-local working guidance from this conversation and my answers. Do not scan private history, install globally, or change host settings.`
- `$pstack-codex:pstack-bro`
- `$pstack-codex:pstack-poteto-help How do I keep using poteto mode for new tasks without starting work from this question?`

There is no installed `/loop` service, persistent cloud coordinator, or native webhook wake routine. For bot UI questions, explain the [local mock/backend fallback](../../pstack-make-bot-ui/SKILL.md). Do not imply the mock wakes a Codex conversation. Required independent review remains a blocker if no permitted independent reviewer exists.
