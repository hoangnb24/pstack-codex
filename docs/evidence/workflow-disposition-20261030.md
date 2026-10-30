# Review and orchestration delta

Input: upstream 4dd1d05818d19792e7cd6e818f1667f95f7e1dbe against 6dbc3ff4b8302a697705f827e9fa92e700d6c6c7. Source base: 39e57f3e922f65d52926eed89fe3526701b87379.

Paths below are relative to upstream `pstack/skills/`.

| Upstream path | Disposition |
| --- | --- |
| arena/SKILL.md | Adapted: optional judge comparison and explicit absence/dropout reporting. Model-family registry and fallback slugs are inapplicable. |
| interrogate/SKILL.md | Adapted: repro-backed findings, exact candidate, safe reruns, isolated adversaries, separate untested/unsafe gaps, no fixes. No-verification cannot establish clean. |
| interrogate/references/code-quality-review.md | Ported deletion. No runtime callers remain in skills. |
| interrogate/references/lead-judgment.md | Ported deletion. Repro evidence replaces consensus buckets. |
| interrogate/references/reviewer-prompt.md | Ported deletion. Bounded brief is inline. |
| interrogate/references/rubric.md | Ported deletion. Verified intent violation is the criterion. |
| poteto-mode/SKILL.md | Adapted: goal restatement, measurement framing, no-merge queue routing. Cursor Task flags, model fallback registry, and background steering are inapplicable. |
| poteto-mode/playbooks/autonomous-run.md | Adapted substance already present: in-scope blockers only; unrelated discoveries remain follow-ups. No edit needed. |
| poteto-mode/playbooks/autopilot-full.md | Adapted: concurrent base changes, durable completed-unit evidence without auto-push, proportional wording review, demonstrated blockers and separate verification gaps. |
| poteto-mode/playbooks/autopilot-stack.md | Adapted: no-merge queue, stack only genuine dependencies, freeze writes after handoff. Retain one topology owner and affected verification after restack. Patch-id alone cannot carry exact-candidate acceptance. |
| poteto-mode/playbooks/babysit.md | Inapplicable: local status workflow already reports topology conflicts to its authorized owner. No implicit rebase/push permission added. |
| poteto-mode/playbooks/multi-phase-plan.md | Adapted routing by landing authority. Existing proportional verification and current-head evidence retained; no fixed lanes or blanket wording exemption. |
| poteto-mode/playbooks/opening-a-pr.md | Already adapted: no mandatory Interrogate; delegate babysits only when brief authorizes it. No edit needed. |
| poteto-mode/playbooks/orchestrate.md | Adapted: bounded outcomes, self-contained briefs, one writer, pilot, artifact inspection, supervision, exact-candidate acceptance, event-driven continuity. No runtime ledger or fixed hierarchy. |
| poteto-mode/scripts/orch/orch.test.ts | Ported deletion at tests/helpers/orch.test.ts. |
| poteto-mode/scripts/orch/orch.ts | Ported deletion. Existing user data untouched. |
| poteto-mode/scripts/orch/store.ts | Ported deletion. No data migration or deletion. |
| poteto-mode/scripts/package.json | Inapplicable: no local package counterpart. Coupled test deleted; Node helper suite retained. |

Additional local caller update: poteto-mode/scripts/README.md removes obsolete ledger commands. check-plan and worktree-audit helpers and their tests remain unchanged.

Outside-scope integration: UPSTREAM.json, docs/INVENTORY.md, docs/SKILL-PORT.md, docs/HELPER-PORT.md, and docs/VALIDATION.md reference removed resources. Historical records in docs/evidence and tests/helpers/refresh-20261016.md also reference them; preserve historical context rather than rewriting evidence as current behavior. No other skill caller uses the removed reference files or orch source.

Verification: Node v22.22.3, macOS. `node --test tests/helpers/helpers.test.mjs` passed 4 tests. `git diff --check` passed. All three `quick_validate.py` attempts failed before validation because Python lacks yaml. No dependency installation attempted. No independent agent evaluation or end-to-end orchestration run occurred. Frontmatter and invocation metadata were inspected; agents/openai.yaml files are unchanged.

Candidate hashes, modes, and complete changed/deleted paths are in review-orchestration-candidate.json. Source deletions are recoverable from the original commit and source-before backup. No existing ledger data was removed. Acceptance remains pending; write ownership is relinquished on handoff.
