# Bounded iterative improvement of a metric

1. Establish a realistic workload, a metric and direction, correctness gates, target, and bounded time/attempt budget. Respect user targets; do not inflate the budget or require ten attempts for trivial work.
2. Build a repeatable sensitive measurement harness. Confirm contrasting realistic cases separate; freeze the harness after recording the baseline. Read `pstack-benchmark-checklist`. Count completed work and errors; use repeated samples.
3. Keep a local `decision.tsv` with attempt, hypothesis, change, before, after, tests, verdict, and note. Read it before each attempt.
4. Run one mechanism per attempt. Use the Perf issue hypothesis order. Parallel attempts require authorized delegates and isolated worktrees. Measure with the frozen harness and run the regression gate.
5. Keep only improvements beyond noise with preserved correctness, or simplifications with equivalent performance. Revert only your own rejected experiment. Commit accepted units if commits are in scope.
6. Pivot on a plateau while useful attempts remain. Stop at target, exhausted budget, genuine dead end, or user stop. Do not weaken the metric to declare victory. Checkpoint unfinished work; no persistent loop is installed.

Report target and budget, baseline/final values, accepted/reverted attempts, decision log, and best next hypothesis.
