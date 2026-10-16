# One measured performance fix

1. Capture the baseline workload and trace. Read `pstack-benchmark-checklist` before trusting measured numbers. Record units, sample count, error count, and completed work.
2. Ground hypotheses in the architecture. Try in this order: eliminate unused work; avoid repeating it; do less; defer it; move it off the critical path; parallelize independent work; make it cheaper. Stop when the agreed target is met.
3. Change one mechanism, review it, and repeat the same workload. Verify each attempt before the next. Keep correctness gates green.
4. Compare captures with a format-appropriate parser, using indexed queries when useful. Account for noise and reject unlike workload ratios. An inaccessible surface or inconclusive measurement is not a win.
5. Deliver the measurement with the change; use Opening a PR only when requested. Sustained improvement routes to Hillclimb.

Report baseline, final value, delta, workload, trace paths, and remaining uncertainty.
