---
name: pstack-maintain-formal-verification-skill
description: "Bring a project-local formal verification skill back in line with changed code. Use when explicitly asked to review model drift, update verification after merges or refactors, or distinguish a stale model from a code bug."
---

# Maintain a formal verification skill

A check can pass while describing code that no longer exists. Review the mapping between the current implementation and its verification before trusting that pass. This skill handles changes that skipped the project-local verify skill.

## Execution boundary

Use this skill only when explicitly invoked. In a native plugin install, use `$pstack-codex:pstack-maintain-formal-verification-skill`. In standalone staging, use `$pstack-maintain-formal-verification-skill`.

Stay within the requested repository and checks. Edit only verification artifacts: models, harnesses, properties, and the project-local verify skill. Preserve unrelated work. Ask before overwriting conflicting artifacts or expanding scope. Do not fix product code unless separately requested. Make deliberate product-code mutations only in an isolated scratch copy approved for local validation. Do not install dependencies, change global configuration, publish, commit, or perform external mutations without the required authorization.

## Outcomes

Report one outcome for each check. Use `updated + bug` when both apply.

- `in sync`: the mapping still describes the checked code, and the check passes.
- `updated`: the verification now describes the changed code, and the check passes.
- `bug`: the verification describes the checked code, and that code violates the property.
- `blocked`: the mapping could not be confirmed or the check could not complete. State the exact gap.

A pass covers only the stated model, bounds, and assumptions. Preserve the evidence type: generated-input testing of real code is testing, not formal proof. Missing tools, timeouts, and incomplete searches are not passes. Findings stay findings; never weaken a property just to get a pass.

## Review and update

1. **Find the requested checks.** Find project-local skills by their behavior, not a fixed name. Read the skill and resources that run each check. Collect the property, covered files and symbols, model-to-code mapping, command, tool version, bounds, assumptions, and sync commit. If no verify skill exists, stop and point to [pstack-create-formal-verification-skill](../pstack-create-formal-verification-skill/SKILL.md).

2. **Establish the comparison baseline.** Resolve the recorded sync commit in the repository. If it is absent, use the last commit that changed the verification files as a provisional comparison point, and disclose that fallback. It is not proof of a confirmed mapping. If the recorded commit cannot be resolved, or no usable history exists, mark it unknown. Do not invent a commit or infer that no drift occurred. Review the full current covered code and mapping to establish a fresh baseline if feasible. Otherwise mark the affected check blocked and identify the missing history or mapping evidence.

3. **Run the existing check.** Record the exact command, working directory, tool version, output, and checked snapshot before changing verification. Include `HEAD`, covered-file hashes, staged and unstaged diffs, and relevant untracked files. A pass at this stage describes the old verification, not necessarily the current code. If a prerequisite is missing, record the blocked run; continue safe mapping review and other runnable checks without calling the blocked check validated.

4. **Read changes to covered code.** Compare the sync commit with the current commit and read the relevant commit messages. Also inspect staged, unstaged, and relevant untracked changes. Follow renamed, split, and moved functions. Look for new callers and writers of the guarded state outside the old coverage list. Include them when they affect the property and are within scope; report an uncovered boundary otherwise. Classify each change against the actual model or harness:
   - No effect on the represented behavior, such as comments or formatting.
   - Mapping drift: a branch, range, guard, or indivisible step changed.
   - An intended promise change supported by tests, documentation, a changelog, or a commit message. Cite that evidence.
   - A possible broken promise with no evidence that the change was intended.

5. **Update from the code.** Repair the mapping and verification before rerunning. Each model step must point to real paths and symbols. Model a step as indivisible only when the implementation supports that assumption. Change a property only for an evidenced intended promise change. Record its old wording, new wording, and supporting evidence. Preserve bounds unless the code makes them wrong; disclose any reduction. Do not shape the model around a desired pass.

6. **Rerun and judge.** For a pass, deliberately break the guarded behavior in real code in isolated scratch state. Follow the verify skill, including its mapping review, and confirm a property violation rather than a syntax or build error. Restore only that scratch mutation and rerun to recover the baseline result. For a failure, replay the counterexample against the real code. Correct impossible model steps and rerun. If every step is feasible, report a bug and its user harm. Name the introducing commit only when evidence establishes it; distinguish an uncommitted change or unknown origin. A cheap isolated real-code reproduction can support the finding. Keep it separate from product fixes.

7. **Refresh the verify skill.** Update coverage, mapping, commands, bounds, assumptions, and evidence locations. Follow the revised skill once as the next agent would. Advance the sync commit only after mapping review and completed checks confirm that the verification describes that exact committed revision. Record known bugs beside the sync record; sync is not a pass claim. Do not advance sync for a blocked check, including a blocked falsification or rerun step. For dirty covered code, retain the last confirmed clean sync commit and separately record the checked snapshot, hashes, and diffs. If there is no confirmed clean commit, leave sync unknown. Recheck the clean revision before later advancing it.

For TLA+ results, use [pstack-statechart](../pstack-statechart/SKILL.md) by name to explain paths and state charts. Do not copy its CLI commands, options, or installation paths. Missing rendering tools or the skill itself limit presentation, not an otherwise completed check. Retain raw evidence and state the limit. Missing TLC blocks a check that requires TLC, not unrelated runnable checks. No dependency is installed automatically. Claim shortest paths or fixed violations only when the available evidence supports them.

## Report

For each check, give the outcome, checked commit or dirty snapshot, comparison baseline, and commits reviewed. State which changes were mapping drift and which were intended promise changes. Explain verification edits, rerun results, the deliberate broken variant, and the restored baseline result. Link retained commands, versions, outputs, hashes, diffs, and counterexamples.

Explain each bug as steps in the code's terms, with the harm and its known or unknown origin. If an old check passed but the corrected verification fails, say the old pass described stale code. State uncovered code, assumptions, reduced bounds, blocked checks, and whether sync advanced. Keep verification updates separate from any product fix. Supply the exact rerun command without implying authorization to commit or publish.
