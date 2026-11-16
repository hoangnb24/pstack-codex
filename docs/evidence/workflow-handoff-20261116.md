# Non-statechart skill and Benny candidate

Base: 989d5bfd5acd1520394456056c5b6f31b145e575.
Upstream: 4dd1d05818d19792e7cd6e818f1667f95f7e1dbe -> bf0c7cd80abdbf7fe47b634978a7d1b4071f71a7 (0.15.42).
Project: /Users/tubakhuym/projects/prototypes/pstack-codex.

Candidate identity is the SHA-256 of candidate-manifest.json. The manifest records every changed/deleted owned path and its actual filesystem mode. Git tracked modes remain 100644; sharpen's existing filesystem mode is 600. No invocation metadata changed.

## Verification

Environment: macOS, zsh, existing /usr/bin/python3 and existing PyYAML. No installs or additional inference.
Run /usr/bin/python3 /Users/tubakhuym/.codex/skills/.system/skill-creator/scripts/quick_validate.py on skills/pstack-{architect,blast-radius,how,no-comments,recall,sharpen,teach,why,poteto-mode} and automations/benny/skills/{reproduce-and-fix-issues,setup-benny,triage-issue-reports}. Actual: all 12 returned Skill is valid!.
Run git diff --check. Actual: success, no whitespace errors.
Compare git show 989d5bfd:<path> with current contents for all 56 non-statechart skills/*/agents/openai.yaml files. Actual: zero differences.
Run rg -n 'explainer-prompt|explorer-prompt|epistemics|investigator-prompt|source-playbook|synthesizer-prompt|per-source playbooks' skills automations. Actual: no matches after migration and deletion. Caller audit before deletion found recall's retired per-source workflow; it was migrated. Root provenance/inventory/evidence records still name historical paths and are outside this scope. Integration must update current inventories; historical evidence need not be rewritten.

## Bounded instruction scenarios

These are single-agent applications and decision traces, not independent model evaluations.

1. How: Explain the validator input/output without edits or delegation. Read quick_validate.py. Input skills/pstack-how -> (True, 'Skill is valid!'); input skills/no-such-skill -> (False, 'SKILL.md not found'). Executed via /usr/bin/python3 -B and runpy.run_path. The missing file takes the early return before YAML parsing. A valid skill passes frontmatter naming/description and unfinished-placeholder checks. The CLI prints the message and exits 0 for valid, 1 otherwise. Verified code and direct function outputs; this does not establish runtime agent compliance.
2. Why: Why did sharpen change? Read upstream git log and exact 4dd1d058..bf0c7cd8 patch. Commit bf0c7cd describes new default models, one-file why/how, statechart fixes and sharpen/reflect text (#1236). The patch explicitly asks for experimental choices to be prototyped and recommendations based on observations. That is direct record evidence. The author's deeper motivation is unknown; no PR discussion was fetched. No external mutation occurred.
3. Sharpen: Rewrite 'Choose a faster parser; no installs, publication or production edits.' Output: 'Compare the existing available parsers on the same representative fixtures in the authorized scratch scope. Check output equivalence and repeat paired timings. Recommend from observed results. If the comparison needs an install or wider scope, report the missing prerequisite. Leave product preferences to me. Do not publish or edit production.' The skill returns this prompt only; no parser experiment or hidden delegation runs. This preserves the no-execution local fix while incorporating the upstream empirical-choice change.
4. Recall without connectors or task agents: Use the supplied state capsule and scoped local git; do not scan private databases or unrelated projects. Run source passes serially, record missing chat/tracker coverage, and do not claim independent review. The revised step 4 no longer calls deleted why playbooks. This is a decision trace, not a live connector test.
5. Benny missing configuration: Apply RUN-MODES.md to a report with no trusted triage identity/control adapter. Result: BLOCKED for missing prerequisites; proposed verdict stays in conversation only. No Slack post, tracker issue, scheduler, credentials or delegation is authorized. Live integration, media review, UI recordings and save/reopen behavior remain untested.

## Scope and limits

The five previously handed-off file hashes were preserved. Additional edits migrate architect, recall, no-comments, feature/investigation, Benny setup/triage, sharpen and reflect. Fourteen deleted references are recoverable from the base git commit and source-before backup. Upstream model/default migrations were intentionally not copied into this model-neutral port. Existing local runtime evidence and authorization adaptations remain intact.

No root docs, tests, runtime files, statechart files, unknown .DS_Store files or unnamespaced symlinks were edited by this work. No dependencies, commits, global/cache changes or external writes occurred. Recovery evidence writes are limited to this expressly authorized root. Technical acceptance remains pending integration review.

Examples: $pstack-codex:pstack-how explain the validator input path; $pstack-codex:pstack-why explain this retry limit from history; $pstack-sharpen compare parser choices without executing the task. Setup inspection writes nothing. Benny remains dormant.
