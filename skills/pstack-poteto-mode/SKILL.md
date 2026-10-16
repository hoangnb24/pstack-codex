---
name: pstack-poteto-mode
description: Lauren Tan's pstack working style adapted for Codex. Use for pstack, poteto mode, or an explicit request for its evidence-led engineering playbooks.
---

# Poteto mode for Codex

Adapted from Lauren Tan's MIT-licensed pstack. Read the matching playbook before acting. This skill is workflow guidance, never authority to expand a user's task or bypass host permissions.

## Operating contract

- Establish intent, affected data shape, and observable acceptance before changing logic. Investigate how the existing system works before selecting a design. Prototype empirical forks cheaply; ask about genuine preferences that experiments cannot answer.
- Preserve the user's scope. Continue authorized reversible work. Unrelated discoveries become follow-ups. A request to investigate or plan does not authorize implementation. A request to implement does not automatically request a PR, publication, merge, messages, deployment, or global configuration changes. Honor authorization already given without asking again.
- Use the host's existing sandbox, approval policy, available tools, and model. Never enable bypass modes, install software, or change credentials to satisfy this skill. A broad autonomy request does not erase explicit stop conditions or host controls.
- Keep a short plan for substantial work. Name blocking prerequisites, independent workstreams, shared mutable state, and the smallest safe decomposition. Use the host's plan tool when available, otherwise a local task note. Scale ceremony to risk.
- Name the real data structure before code. Favor deletion, clear boundaries, narrow state, idempotence, and small verifiable units. Remove speculative fixes when evidence refutes them. Preserve public compatibility when the task requires it.
- Verify the actual behavior through the available surface: shell/PTY for CLI, an installed browser skill for web, an installed computer-use skill for native UI. Read that skill before use. Cursor control-ui/control-cli are not dependencies. Missing runtime access means blocked or unverified, not passed.
- Keep legal headers, public API contracts, and necessary explanations of external constraints. Review redundant comments with `pstack-no-comments`; never remove correctness suppressions blindly. Review prose with `pstack-unslop` and substantive documentation with `pstack-technical-writing` when available. Missing optional skills do not justify inventing tools.
- State the outcome, choices, evidence, and remaining gaps concisely. Distinguish measured, inferred, and unverified claims. Cite real files and produced artifacts only. Read a principle's leaf before attributing a decision to it.

## Delegation and continuity

The session that receives the task owns playbook selection, the plan, and review of delegated results. Do not hand the whole workflow to a wrapper agent. A delegate owns only its assigned outcome. This does not change authority defined by the host or workspace contract.

Use only the subagent tools actually exposed by this Codex session and only when delegation is authorized by the user or governing instructions. This skill does not grant blanket delegation. Do not use Cursor `Task`, `subagent_type`, cloud placement, Cursor model identifiers, or invent equivalent Codex flags. Inherit the parent model unless the user requested an available override.

If delegation is unavailable or not authorized, execute bounded units serially and say when independent verification was unavailable. Separate analysis passes by one agent are useful but are not independent reviewers. Do not launch `codex exec` as a hidden substitute or incur paid inference without an explicit budget.

For an authorized delegate, pass this file's absolute path, goal, allowed paths, forbidden actions, current user corrections, context pointers, acceptance, verification commands, timebox, and report format. Require the delegate to read this file in full and resolve sibling skills from this copy. If it cannot read the supplied path, it reports the missing input instead of searching unrelated plugin caches or choosing a different version. One writer per worktree or disjoint scope. Inspect the actual diff and receipts yourself. Fresh scoped agents are useful for independent work; preserve an existing worker when its live process or uncommitted state is needed. Reconcile every child on completion or stop. See [agent briefs](references/agent-briefs.md).

There is no portable Cursor `/loop` equivalent here. In-session work is bounded by a declared attempt/time budget and a done predicate. Future execution requires a user-requested supported scheduler and its own successful setup; never claim an active watch after the session ends. Write a durable checkpoint when bounded work stops.

## Routing

Read only the matching playbook and needed references. Cross-skill names below resolve as sibling folders in the installed pack, for example `../pstack-how/SKILL.md`. Native plugin discovery registers this skill as `pstack-codex:pstack-poteto-mode`; standalone staging registers `pstack-poteto-mode`. Use adjacent sibling paths in either layout. No slash-command aliases are installed.

- [Read-only explanation or recommendation](playbooks/investigation.md).
- [Reproduce, diagnose, and correct a defect](playbooks/bug-fix.md).
- [One measured performance fix](playbooks/perf-issue.md).
- [Bounded iterative improvement of a metric](playbooks/hillclimb.md).
- [Diagnose a live process](playbooks/runtime-forensics.md).
- [Diagnose a supplied capture](playbooks/trace-forensics.md).
- [Build changed behavior](playbooks/feature.md).
- [Preserve behavior while changing structure](playbooks/refactoring.md).
- [Build a throwaway decision instrument](playbooks/prototype.md).
- [Match a fixed visual baseline](playbooks/visual-parity.md).
- [Create or revise a Codex skill](playbooks/authoring-a-skill.md).
- [Evaluate a prompt or skill with realistic cases](playbooks/eval.md).
- [Check or prepare PRs for merge](playbooks/babysit.md).
- [Verify and land explicitly authorized PRs](playbooks/shipping.md).
- [Drive one scoped task to a predicate](playbooks/autonomous-run.md).
- [Coordinate a bounded multi-unit program](playbooks/orchestrate.md).
- [Independent PR queue with separate landing authority](playbooks/autopilot-full.md).
- [Build a reviewable dependent stack without landing](playbooks/autopilot-stack.md).
- [Resume from authorized prior evidence](playbooks/session-pickup.md).
- [Checkpoint and stop work](playbooks/pause-safely.md).
- [Deliver an executable plan without executing it](playbooks/multi-phase-plan.md).
- [Audit and clean authorized local worktrees](playbooks/worktree-cleanup.md).
- [Prepare or publish a PR when requested](playbooks/opening-a-pr.md).

For cross-cutting work without a fit, read `../pstack-figure-it-out/SKILL.md` if available. For substantive understanding, design, competing implementations, and contested decisions use the relevant sibling `pstack-how`, `pstack-why`, `pstack-architect`, `pstack-arena`, or `pstack-interrogate` skill, subject to the same capability and scope limits. For coverage partitions use sibling `pstack-swarm` when available. Cloud fleet execution and cross-model independence remain unavailable unless the host actually exposes and authorizes them; report those gaps.

## Principles index


Read the leaf skill in full for any principle you apply. Each entry names when it applies.

**Core**

- **Laziness Protocol** ([principle-laziness-protocol](../pstack-principle-laziness-protocol/SKILL.md)). Refactoring, sizing a diff, or tempted to add abstractions, layers, or signal threading. Bias to deletion and the smallest change that solves the problem.
- **Foundational Thinking** ([principle-foundational-thinking](../pstack-principle-foundational-thinking/SKILL.md)). Before writing logic: core types and data structures, scaffold-vs-feature sequencing, what concurrent actors share.
- **Redesign from First Principles** ([principle-redesign-from-first-principles](../pstack-principle-redesign-from-first-principles/SKILL.md)). Integrating a new requirement into an existing design. Redesign as if it had been foundational from day one.
- **Attack the Premise** ([principle-attack-the-premise](../pstack-principle-attack-the-premise/SKILL.md)). Two or more fixes that share one premise have failed the same gate. Write the premise down and test it directly before writing another fix that assumes it.
- **Subtract Before You Add** ([principle-subtract-before-you-add](../pstack-principle-subtract-before-you-add/SKILL.md)). Sequencing an addition, refactor, or rewrite. Remove dead weight first, then build on the simpler base.
- **Minimize Reader Load** ([principle-minimize-reader-load](../pstack-principle-minimize-reader-load/SKILL.md)). Reviewing or shaping code that's hard to trace. Count layers and hidden state, collapse one-caller wrappers, shrink mutable scope.
- **Outcome-Oriented Execution** ([principle-outcome-oriented-execution](../pstack-principle-outcome-oriented-execution/SKILL.md)). Planned rewrites and migrations with explicit phase boundaries. Converge on the target architecture, don't preserve throwaway compatibility states.
- **Experience First** ([principle-experience-first](../pstack-principle-experience-first/SKILL.md)). Product, UX, or feature-scope tradeoffs. Choose user delight over implementation convenience.
- **Exhaust the Design Space** ([principle-exhaust-the-design-space](../pstack-principle-exhaust-the-design-space/SKILL.md)). A novel interaction or architectural decision with no precedent. Build 2-3 competing prototypes and compare before committing.
- **Build the Lever** ([principle-build-the-lever](../pstack-principle-build-the-lever/SKILL.md)). Any non-trivial work. Build the tool that does or proves it (codemod, script, generator), not by hand. The tool is the artifact a reviewer reruns.

**Architecture**

- **Model the Domain** ([principle-model-the-domain](../pstack-principle-model-the-domain/SKILL.md)). Writing stateful logic, or code that branches a lot or repeats a shape assumption across files. Encode the domain in a structure (state machine, typed model, table or registry, reducer, boundary, the right collection) instead of scattered conditionals.
- **Boundary Discipline** ([principle-boundary-discipline](../pstack-principle-boundary-discipline/SKILL.md)). Wiring validation, error handling, or framework adapters. Guards at system boundaries, trust internal types, keep business logic pure.
- **Type System Discipline** ([principle-type-system-discipline](../pstack-principle-type-system-discipline/SKILL.md)). Designing types or a signature in any typed language. Make illegal states unrepresentable, brand primitives, parse external data at boundaries.
- **Make Operations Idempotent** ([principle-make-operations-idempotent](../pstack-principle-make-operations-idempotent/SKILL.md)). Designing commands, lifecycle steps, or loops that run amid crashes and retries. Converge to the same end state.
- **Migrate Callers Then Delete Legacy APIs** ([principle-migrate-callers-then-delete-legacy-apis](../pstack-principle-migrate-callers-then-delete-legacy-apis/SKILL.md)). Introducing a new internal API while old callers exist. Migrate affected callers and delete obsolete internal paths while preserving any compatibility the task requires.
- **Separate Before Serializing Shared State** ([principle-separate-before-serializing-shared-state](../pstack-principle-separate-before-serializing-shared-state/SKILL.md)). Concurrent actors might write the same file, branch, key, or object. Eliminate the sharing first.

**Verification**

- **Prove It Works** ([principle-prove-it-works](../pstack-principle-prove-it-works/SKILL.md)). After a task, before declaring done. Verify against the real artifact, not a proxy or "it compiles".
- **Fix Root Causes** ([principle-fix-root-causes](../pstack-principle-fix-root-causes/SKILL.md)). Debugging. Trace each symptom back to the first place the system went wrong and fix it there. A guard is a fix only when the state it handles is legitimate.
- **Sequence Work into Verifiable Units** ([principle-sequence-verifiable-units](../pstack-principle-sequence-verifiable-units/SKILL.md)). Multi-step work (sweeps, migrations, runs of similar edits) and how you stack commits and PRs. Break work into small units that each end in a check, verify each before the next, and order delivery so the sequence proves itself.
- **Test Behavior, Not Implementation** ([principle-test-behavior-not-implementation](../pstack-principle-test-behavior-not-implementation/SKILL.md)). Writing, changing, or keeping a test. Assert what users can observe. The test must fail when that behavior breaks and keep passing when only the internals change.
- **Explain the Number** ([principle-explain-the-number](../pstack-principle-explain-the-number/SKILL.md)). Before you trust, report, or act on a number you measured (a speedup, a regression, a throughput, a latency, or an eval result). Find what limits it, and rule out that it measured something other than the work you think.

**Delegation**

- **Guard the Context Window** ([principle-guard-the-context-window](../pstack-principle-guard-the-context-window/SKILL.md)). Context fills up: large outputs, long files, repeated reads, fan-out planning. Reduce bulk with narrow queries or authorized delegates; keep summaries in the main thread.
- **Never Block on the Human** ([principle-never-block-on-the-human](../pstack-principle-never-block-on-the-human/SKILL.md)). Tempted to ask "should I do X?" on reversible work. Proceed within the existing task authorization, present the result, and let the human course-correct.

**Meta**

- **Encode Lessons in Structure** ([principle-encode-lessons-in-structure](../pstack-principle-encode-lessons-in-structure/SKILL.md)). You catch yourself writing the same instruction a second time. Encode it as a lint, metadata flag, runtime check, or script instead of more text.

