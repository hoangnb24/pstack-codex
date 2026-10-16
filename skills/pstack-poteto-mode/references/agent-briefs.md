# Codex agent brief patterns

These are prompt templates, not installed custom agents or model configurations. The upstream poteto-agent wrapper becomes a scoped prompt that points at this skill. Comment Sicko becomes a review role whose mutation scope is explicit; its theatrical introduction and unconditional deletion posture are not required.

## Worker

Skill input: the absolute path to the assigning session's `pstack-poteto-mode/SKILL.md`. Read it in full, then the matching playbook. Resolve sibling skills relative to that copy. If the path is missing or unreadable, report the missing input before dependent work. Do not scan global plugin caches or select a newer copy.

Goal: the concrete requested outcome, not ownership of the assigning session's whole workflow. Scope: exact allowed files and forbidden paths/actions. Context: pointers and relevant current user corrections. Acceptance: observable results. Verify: exact commands/surfaces and known environment limitations. Budget: bounded attempts or time. Report: actual changes, head/path, evidence, gaps, and next steps. Inherit the parent model; use only tools actually exposed. Do not delegate further unless authorized.

## Comment review

Review only the supplied files/diff. Default to report-only unless comment edits were requested. Identify redundant narration and commented-out dead code. Keep legal/license headers, API contracts, issue/RFC constraints, and non-obvious externally imposed behavior. Inspect surrounding code before deciding. A lint/type suppression may protect a real invariant; understand the rule and behavior before proposing removal. Report exact locations, rationale, and uncertain cases. Application code refactoring is a separate task. Do not delete a comment merely because evidence is incomplete.

An independent review claim requires a separate available authorized agent and its observed output. A serial pass by the same agent is self-review.
