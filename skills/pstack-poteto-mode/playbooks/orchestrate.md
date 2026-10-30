# Coordinate a bounded multi-unit program

Use this for work that benefits from multiple owned units. Use Autonomous run when one owner can finish directly. This playbook supplies no fleet runtime, model registry, durable agent store, or extra authority.

1. State the goal, bounded units, dependencies, budget, and observable acceptance. Use the existing project tracker when available. Keep only enough state to resume: owner, scope, candidate, evidence, decision, and next action. Preserve existing user ledger data; no migration or deletion is implied by removal of the bundled helper.
2. Assign one writer per branch or disjoint scope. Use only authorized exposed agents. Give each a self-contained outcome, exact inputs, write limits, forbidden actions, verification, and expected report. Relay relevant dependency evidence without copying private transcripts. Otherwise execute serially and disclose missing independence.
3. Pilot a representative unit through implementation, verification, and explicit candidate acceptance before scaling. Publication or landing enters the pilot only when requested. Fix failed assumptions before repeating the unit shape.
4. Inspect the actual diff or artifact and receipts, not only a completion summary. Behavioral work needs behavioral proof. Record acceptance against the exact commit or deterministic snapshot and base. A changed candidate needs affected checks and a fresh acceptance decision; green CI alone is not acceptance.
5. Supervise through available completion and error events. Read actual artifacts before judging progress. Resolve dependencies rather than replacing a waiting worker. Stop a failed worker or isolate its scope before replacement. Bound retries by cause and budget. Reconcile late output against the current candidate before use.
6. Keep topology changes with their authorized owner. Do not rebase, retarget, push, merge, or send messages merely because coordination would benefit. Return scope drift and park unrelated discoveries. Request decisions when completion needs new authority.
7. Close or checkpoint with every delegated unit accounted for. Report verified, failed, dropped, and unverified work separately. Preserve usable artifacts and first resume actions. Do not assume agents or watches survive the session.

Report progress against the goal, exact candidates and acceptance decisions, evidence paths, actual PR states when authorized and available, remaining gaps, and decisions needed. No background schedule remains active unless the user requested one and supported setup succeeded.
