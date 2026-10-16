# Preserve behavior while changing structure

1. Pin current behavior with existing tests, a characterization case, or an equivalence harness before moving structure. Typecheck alone does not establish behavioral equivalence.
2. Name the missing structure and target types/module layout/call graph. Compare designs when consequential. Favor fewer invalid states and lower reader load rather than extra indirection.
3. Remove proven dead code and redundant layers, then move in small behavior-preserving steps. Migrate all affected callers and check string references and documentation. Preserve required external compatibility.
4. Delegate bounded mechanical edits only under the entrypoint's contract; otherwise work serially. Keep the behavior pin green after each step.
5. Verify old/new equivalence on the real surface or representative harness. Separate newly discovered features or bugs from this task unless they block it.
6. Deliver what reduced reader load. Report rejected experiments. Use Opening a PR only within the requested delivery scope.

Report changed structure, behavioral pin, equivalence results, and remaining risks.
