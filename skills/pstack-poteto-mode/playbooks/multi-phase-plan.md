# Deliver a multi-phase plan

The plan is the deliverable. Do not implement under a plan-only request.

1. Read the affected source and repository instructions. Identify the outcome, dependencies, verification surfaces, and unknowns. A tiny obvious change needs only a short plan.
2. Settle empirical questions with an isolated prototype only when planning scope permits it. Otherwise record the experiment as an execution prerequisite. Ask about product choices that evidence cannot settle.
3. Write the plan at the requested path. Open with what changes, unit or PR IDs in delivery order, and dependencies. Name independent units, their starting base, ownership, and allowed files. Use `pstack-figure-it-out` for a bespoke multi-unit workflow when available. The workflow grants no execution authority.
4. Give each unit checkboxes for dependencies, files, one coherent change, visible result, and verification. Each check names its command or scenario, evidence path, and pass condition. Check a box only after recording the observed result.
5. Plan unit checks and real-surface scenarios for behavioral changes. For performance criteria, name the metric, probe, baseline, and failure threshold. Explain genuinely inapplicable checks. Missing applicable tooling remains blocked or unverified. Record required user review before landing changed interactions. Scale independent review to risk and available authority.
6. Review feasibility and missing prerequisites directly. No bundled plan checker remains. Return the path, dependencies, review gates, experiment evidence, and unproven criteria. Stop unless execution was explicitly requested too.
