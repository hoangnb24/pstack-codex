# Reproduce, diagnose, and correct a defect

1. Reproduce on the real affected surface. If inaccessible, drive available access as far as it can go and explain the exact limitation. A synthetic trigger is useful when it reproduces the same mechanism.
2. Form hypotheses and choose observations that eliminate the most candidates. Inspect history when relevant; add scoped diagnostic instrumentation when authorized. Confirm the surviving mechanism at runtime. No speculative defensive fix ships merely because it might help.
3. Design the smallest correction. Name any boundary changes. Implement or delegate a scoped fix under the entrypoint's contract. Prefer a cheap red-first regression test; preserve failing then passing receipts without committing a broken state merely for ceremony.
4. Repeat the original reproduction on the same surface. Wrong-surface or inconclusive results stay unverified. Run relevant regression gates and remove diagnostic changes no longer needed.
5. Deliver local changes or use Opening a PR when that publication was requested.

Report symptom, cause, fix, and actual failing/passing evidence. If no repro was possible, say so.
