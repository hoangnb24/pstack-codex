# Deliver a multi-phase plan

The plan is the deliverable. Do not begin implementation under a plan-only request. A tiny obvious change can receive a short plan rather than a program scaffold.

1. Read the affected source and repository instructions. Identify dependencies, behavior, available verification surfaces, and unknowns. Use read-only investigation first. If settling an unknown requires a modifying prototype, keep it in an isolated scratch area only when the planning scope permits that experiment; otherwise record it as an execution prerequisite.
2. Explore with authorized available delegates or serially. Record file pointers, conventions, commands, and confidence. Do not invent cloud workers, a model roster, an agent store, or a persistent audit loop.
3. Write an executable checklist at the user-selected workspace path. Each unit has a behavioral outcome, ownership boundary, dependency, and evidence. Choose Autonomous run for one bounded task, Orchestrate for a genuine program, Autopilot-stack for a reviewable chain, or Autopilot-full only when independent publication/landing matches the request. The execution playbook does not grant authorization.
4. Scale checks to the change. A behavioral change needs real-surface or representative behavioral evidence, not merely typecheck. Perf work needs a realistic paired baseline and failure rule. Mark genuinely inapplicable checks `N/A: <reason>`; unavailable applicable checks are blocked, never N/A. Use as many independent lanes as justified and available, not a fixed ten.
   Plan full review at the code-ready head and again for major changes. For a minor fix or rebase, name the affected checks and a verifier when authorized and available. State which earlier receipts remain valid under [Shipping's evidence rules](shipping.md). Every new head needs current checks; a smaller review is not a waiver of applicable evidence.
5. Use the skeleton below and replace every placeholder. Run `node scripts/check-plan.mjs <absolute-plan-path>` from this skill directory. The checker enforces evidence fields and structure, not feasibility or correctness. Read the plan yourself after it passes.
6. Return the path, dependencies, findings, unresolved decisions, and actual checker output. Stop at the plan unless the user already explicitly asked to execute it too.

```markdown
# <Program> plan

<Outcome, affected users, and bounded scope.>

## How to read this

One box is one unit of work and names the evidence that completes it. Check a box only when its evidence exists. Checked verification boxes record Observed: with the concrete result. The execution playbook is <resolved playbooks/path>. Implementation starts only under the user's execution request. Publication and landing follow the authorization recorded below.

## Program checklist

- [ ] Confirm scope, authorization, exclusions, time/attempt budget, and stop predicate. Record the source of authorization.
- [ ] Read current repository instructions and the selected execution playbook.
- [ ] Record dependencies, ownership boundaries, and serial or authorized delegated execution.
- [ ] Prepare the boot recipe and available surface tools. Record missing capabilities as blockers.
- [ ] Record the checkpoint path and bounded in-session audit points. Future scheduling is outside scope unless separately requested and successfully configured.

## <Verb phrase> (<unit-id>)

**Depends on.** <None or prior unit IDs.>

**Files.**

- [ ] Change <explicit paths only>.

**Build.**

- [ ] Implement <one coherent structural/behavioral change>.

**You see.**

- [ ] Observe <the user-visible output or state>.

**Verify, unit.**

- [ ] Evidence: <command and receipt path>. Pass when <literal behavior predicate>.

**Verify, live.**

- [ ] Evidence: <matching surface scenario and artifact>. Pass when <observable predicate>. Compare against the base where that scenario exists; otherwise record the new behavior's absolute requirement.

**Verify, perf.** N/A: <specific reason this change has no performance acceptance criterion>.

**Review gate.** <Operator review requirement, or None with reason.>

- [ ] Record the <required review evidence and approver, or local review receipt>.

**Merge.**

- [ ] Deliver <local changes, draft PR, or explicitly authorized landing>. Record exact head and verification. No automatic merge is granted by this plan.

## Close the program

- [ ] Reconcile every unit with its actual evidence and outcome. Record blocked work and first resume action. Report actual delivery separately from proposed delivery.

## Appendix A. Prototype evidence

<Experiments actually run, paths, outputs, conclusions, and remaining unknowns. Write None when none ran.>

## Appendix B. Alternatives and risks

<Rejected choices, why they lost, risk owner, and mitigation evidence.>
```

For a performance criterion, replace the perf N/A statement with evidence naming the metric, unit, workload, baseline, repeatable probe, noise handling, and pass threshold. For non-runtime work, explain why a live case is genuinely inapplicable; missing tooling alone never makes it inapplicable. A checked verification box must include `Observed:` followed by its concrete result, not “done.”

Report plan path, units/dependencies, review gates, what experiments proved, unproven parts, and checker result.
