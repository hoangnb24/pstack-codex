# Sibling skill port report

Historical report for the 0.15.9 port. The 0.15.15 refresh adds [pstack-poteto-help](../skills/pstack-poteto-help/SKILL.md) and qualifies blast-radius delegation. Existing policy and Codex adaptations remain unchanged. Current acceptance and installation evidence are in [validation](VALIDATION.md).

Scope: 49 upstream skill directories excluding poteto-mode, all their references, and show-me-your-work/scripts/log.sh. Source attribution: Lauren Tan, MIT; repository root must retain upstream LICENSE. No global skill installation or Codex configuration changes performed.

## Current additions — upstream 0.15.32

The current port is 0.5.0 with 58 skills. New entries are `pstack-maintain-formal-verification-skill`, `pstack-statechart`, and `pstack-ketchup-video`. Formal workflows now track dirty source snapshots. Sharpen returns a rewritten prompt without execution. Reflect preserves editable-source ownership and does not edit installed caches. Setup offers optional formal verification. Statechart ships all 21 scripts with automatic dependency installation removed. See [parity](PARITY.md) and [validation](VALIDATION.md) for current limits.

## Coverage

“Ported” retains upstream substantive workflow with namespacing, valid Codex metadata, relative-reference updates and task-scope boundaries. “Adapted” changes host-specific execution. Availability is conditional on tools actually exposed by the target Codex session.

| Upstream | Port | Status | Details |
|---|---|---|---|
| architect | pstack-architect | Adapted | Distinct sketches retained; inherited-model/serial candidate paths replace model registry. |
| arena | pstack-arena | Adapted | Framing, candidates, rubric, grafting retained; no promised model diversity or independent judge without task capability. |
| automate-me | pstack-automate-me | Adapted | Project-local authoring, Codex skill-creator, scoped thread/export history; no global install or automatic PR. |
| benchmark-checklist | pstack-benchmark-checklist | Adapted | macOS CPU-count command; Linux-specific profiler examples qualified. |
| blast-radius | pstack-blast-radius | Ported | Original evidence/principle content retained within authorized scope. |
| bro | pstack-bro | Ported | Original evidence/principle content retained within authorized scope. |
| correct | pstack-correct | Adapted | Structural correction retained; no automatic git init, commits, new CI, or instruction table. |
| create-verification-skill | pstack-create-verification-skill | Adapted | Outputs project-local .agents/skills; real launch/doctor/drive/evidence/cleanup contract retained. |
| create-formal-verification-skill | pstack-create-formal-verification-skill | Adapted | Code-grounded property checks, isolated falsification, explicit proof bounds, project-local rerun skill. |
| figure-it-out | pstack-figure-it-out | Adapted | Scientific workflow retained; scope and conditional delegation bound execution. |
| how | pstack-how | Adapted | Runtime tracing templates retained; current task-agent tool or inline passes. |
| interrogate | pstack-interrogate | Adapted | Review rubric and lead judgment retained; no hardcoded family/model seats or model-config PR. |
| maintain-verification-skill | pstack-maintain-verification-skill | Adapted | Feature/source/live reconciliation retained; local corrections, PR only within authorization. |
| make-bot-ui | pstack-make-bot-ui | Unavailable native / adapted local | UNAVAILABLE native Cursor/Grok wake, secret card and routine APIs. Adapted local mock/UI contract only. |
| no-comments | pstack-no-comments | Adapted | Custom agent converted to read-only reference prompt; preserve uncertain constraints/protected comments. |
| principle-attack-the-premise | pstack-principle-attack-the-premise | Ported | Original evidence/principle content retained within authorized scope. |
| principle-boundary-discipline | pstack-principle-boundary-discipline | Ported | Original evidence/principle content retained within authorized scope. |
| principle-build-the-lever | pstack-principle-build-the-lever | Adapted | Original evidence/principle content retained within authorized scope. |
| principle-encode-lessons-in-structure | pstack-principle-encode-lessons-in-structure | Ported | Original evidence/principle content retained within authorized scope. |
| principle-exhaust-the-design-space | pstack-principle-exhaust-the-design-space | Ported | Original evidence/principle content retained within authorized scope. |
| principle-experience-first | pstack-principle-experience-first | Ported | Original evidence/principle content retained within authorized scope. |
| principle-explain-the-number | pstack-principle-explain-the-number | Ported | Original evidence/principle content retained within authorized scope. |
| principle-fix-root-causes | pstack-principle-fix-root-causes | Ported | Original evidence/principle content retained within authorized scope. |
| principle-foundational-thinking | pstack-principle-foundational-thinking | Ported | Original evidence/principle content retained within authorized scope. |
| principle-guard-the-context-window | pstack-principle-guard-the-context-window | Adapted | Original evidence/principle content retained within authorized scope. |
| principle-laziness-protocol | pstack-principle-laziness-protocol | Ported | Original evidence/principle content retained within authorized scope. |
| principle-make-operations-idempotent | pstack-principle-make-operations-idempotent | Ported | Original evidence/principle content retained within authorized scope. |
| principle-migrate-callers-then-delete-legacy-apis | pstack-principle-migrate-callers-then-delete-legacy-apis | Ported | Original evidence/principle content retained within authorized scope. |
| principle-minimize-reader-load | pstack-principle-minimize-reader-load | Ported | Original evidence/principle content retained within authorized scope. |
| principle-model-the-domain | pstack-principle-model-the-domain | Ported | Original evidence/principle content retained within authorized scope. |
| principle-never-block-on-the-human | pstack-principle-never-block-on-the-human | Adapted | Original evidence/principle content retained within authorized scope. |
| principle-outcome-oriented-execution | pstack-principle-outcome-oriented-execution | Ported | Original evidence/principle content retained within authorized scope. |
| principle-prove-it-works | pstack-principle-prove-it-works | Ported | Original evidence/principle content retained within authorized scope. |
| principle-redesign-from-first-principles | pstack-principle-redesign-from-first-principles | Ported | Original evidence/principle content retained within authorized scope. |
| principle-separate-before-serializing-shared-state | pstack-principle-separate-before-serializing-shared-state | Ported | Original evidence/principle content retained within authorized scope. |
| principle-sequence-verifiable-units | pstack-principle-sequence-verifiable-units | Adapted | Original evidence/principle content retained within authorized scope. |
| principle-subtract-before-you-add | pstack-principle-subtract-before-you-add | Ported | Original evidence/principle content retained within authorized scope. |
| principle-test-behavior-not-implementation | pstack-principle-test-behavior-not-implementation | Ported | Original evidence/principle content retained within authorized scope. |
| principle-type-system-discipline | pstack-principle-type-system-discipline | Ported | Original evidence/principle content retained within authorized scope. |
| recall | pstack-recall | Adapted | Codex scoped thread tools or supplied exports, never guessed private storage; missing history explicit. |
| reflect | pstack-reflect | Adapted | Three lenses retained; scoped transcript/digest, conditional task agents, no automatic external backlog filing. |
| setup-pstack | pstack-setup-pstack | Adapted | Project readiness/preferences only; no model registry, global rules or config changes. |
| show-me-your-work | pstack-show-me-your-work | Adapted | Portable TSV helper retained and executed; available thread evidence, independent audit only when possible. |
| swarm | pstack-swarm | Adapted | Task workers or serial coverage; no cloud placement or model race parity by default. |
| tdd | pstack-tdd | Ported | Original evidence/principle content retained within authorized scope. |
| teach | pstack-teach | Adapted | How/why evidence blend retained; tool/delegation capability boundaries. |
| technical-writing | pstack-technical-writing | Ported | Original evidence/principle content retained within authorized scope. |
| typescript-best-practices | pstack-typescript-best-practices | Adapted | Patterns retained; removed unsupported Cursor paths frontmatter. |
| unslop | pstack-unslop | Adapted | Patterns retained; description no longer claims universal activation. |
| why | pstack-why | Adapted | Seven-category coverage and confidence tiers retained; actual connector schemas and availability, serial option. |

## Invocation and execution

- Each directory and frontmatter name uses `pstack-<upstream-name>`; invoke as `$pstack-how`, `$pstack-architect`, or `$pstack-correct` after local installation/discovery.
- 48 sibling skills preserve upstream `disable-model-invocation: true` through `agents/openai.yaml` with `policy.allow_implicit_invocation: false`. Setup preserves its upstream normal automatic discovery default. No global policy chosen.
- Removed unsupported Cursor `paths` metadata. Relative sibling links resolve inside the installed skill directory collection.
- Model/family defaults, Task schemas, cloud placement, custom agent registrations and permission-mode changes are removed from executable guidance. Independent/cross-model coverage is never claimed for serial fallback.
- Notes, review findings, transcripts, and source examples cannot grant publication, global installation, merge, network-listener, credential or delegation authority.
- Actual connector tool names and schemas are discovered at execution. Source playbooks retain upstream search strategies as examples; unavailable sources become explicit gaps.

## Checks actually run

- Installed Codex skill-creator `scripts/quick_validate.py`: 49/49 sibling skills passed. This proves valid basic skill structure, not behavioral correctness.
- Markdown relative-link resolution: all concrete local links resolve. Literal `(url)` in an output template is a placeholder, not a local file.
- Ran `pstack-show-me-your-work/scripts/log.sh` twice in a temporary nested path; checked old row retained, one header, six TSV columns, newline/tab normalization, formula-prefix escaping, and exit 1 for invalid arity. Helper remains upstream code, executable.
- Source read: all sibling SKILL.md files, shipped reference files, logging helper, and upstream Comment Sicko agent prompt inspected.
- Parent reported independent pstack-correct forward test on a real fixture with behavioral mutations passed. Its infrastructure/scope findings were incorporated before this report.

## Not verified here

- Independent live runs of all 49 workflows; full UI verification, external connectors, real cloud workers, model diversity and webhook wakes.
- Paid Codex CLI inference was not launched. Parent owns isolated offline skills/list discovery.
- No PR creation, pushes, installs, credentials, production mutations or persistent watchers performed.

## Changed files

- `skills/pstack-architect/SKILL.md`
- `skills/pstack-architect/agents/openai.yaml`
- `skills/pstack-architect/references/design-red-flags.md`
- `skills/pstack-architect/references/rationale-template.md`
- `skills/pstack-architect/references/runner-prompt.md`
- `skills/pstack-arena/SKILL.md`
- `skills/pstack-arena/agents/openai.yaml`
- `skills/pstack-automate-me/SKILL.md`
- `skills/pstack-automate-me/agents/openai.yaml`
- `skills/pstack-benchmark-checklist/SKILL.md`
- `skills/pstack-benchmark-checklist/agents/openai.yaml`
- `skills/pstack-blast-radius/SKILL.md`
- `skills/pstack-blast-radius/agents/openai.yaml`
- `skills/pstack-bro/SKILL.md`
- `skills/pstack-bro/agents/openai.yaml`
- `skills/pstack-correct/SKILL.md`
- `skills/pstack-correct/agents/openai.yaml`
- `skills/pstack-create-verification-skill/SKILL.md`
- `skills/pstack-create-verification-skill/agents/openai.yaml`
- `skills/pstack-create-verification-skill/references/feature-map-example/README.md`
- `skills/pstack-create-verification-skill/references/feature-map-example/create-note.md`
- `skills/pstack-create-verification-skill/references/feature-map-example/search.md`
- `skills/pstack-figure-it-out/SKILL.md`
- `skills/pstack-figure-it-out/agents/openai.yaml`
- `skills/pstack-how/SKILL.md`
- `skills/pstack-how/agents/openai.yaml`
- `skills/pstack-how/references/explainer-prompt.md`
- `skills/pstack-how/references/explorer-prompt.md`
- `skills/pstack-interrogate/SKILL.md`
- `skills/pstack-interrogate/agents/openai.yaml`
- `skills/pstack-interrogate/references/code-quality-review.md`
- `skills/pstack-interrogate/references/lead-judgment.md`
- `skills/pstack-interrogate/references/reviewer-prompt.md`
- `skills/pstack-interrogate/references/rubric.md`
- `skills/pstack-maintain-verification-skill/SKILL.md`
- `skills/pstack-maintain-verification-skill/agents/openai.yaml`
- `skills/pstack-make-bot-ui/SKILL.md`
- `skills/pstack-make-bot-ui/agents/openai.yaml`
- `skills/pstack-no-comments/SKILL.md`
- `skills/pstack-no-comments/agents/openai.yaml`
- `skills/pstack-no-comments/references/comment-reviewer.md`
- `skills/pstack-principle-attack-the-premise/SKILL.md`
- `skills/pstack-principle-attack-the-premise/agents/openai.yaml`
- `skills/pstack-principle-boundary-discipline/SKILL.md`
- `skills/pstack-principle-boundary-discipline/agents/openai.yaml`
- `skills/pstack-principle-build-the-lever/SKILL.md`
- `skills/pstack-principle-build-the-lever/agents/openai.yaml`
- `skills/pstack-principle-encode-lessons-in-structure/SKILL.md`
- `skills/pstack-principle-encode-lessons-in-structure/agents/openai.yaml`
- `skills/pstack-principle-exhaust-the-design-space/SKILL.md`
- `skills/pstack-principle-exhaust-the-design-space/agents/openai.yaml`
- `skills/pstack-principle-experience-first/SKILL.md`
- `skills/pstack-principle-experience-first/agents/openai.yaml`
- `skills/pstack-principle-explain-the-number/SKILL.md`
- `skills/pstack-principle-explain-the-number/agents/openai.yaml`
- `skills/pstack-principle-fix-root-causes/SKILL.md`
- `skills/pstack-principle-fix-root-causes/agents/openai.yaml`
- `skills/pstack-principle-foundational-thinking/SKILL.md`
- `skills/pstack-principle-foundational-thinking/agents/openai.yaml`
- `skills/pstack-principle-guard-the-context-window/SKILL.md`
- `skills/pstack-principle-guard-the-context-window/agents/openai.yaml`
- `skills/pstack-principle-laziness-protocol/SKILL.md`
- `skills/pstack-principle-laziness-protocol/agents/openai.yaml`
- `skills/pstack-principle-make-operations-idempotent/SKILL.md`
- `skills/pstack-principle-make-operations-idempotent/agents/openai.yaml`
- `skills/pstack-principle-migrate-callers-then-delete-legacy-apis/SKILL.md`
- `skills/pstack-principle-migrate-callers-then-delete-legacy-apis/agents/openai.yaml`
- `skills/pstack-principle-minimize-reader-load/SKILL.md`
- `skills/pstack-principle-minimize-reader-load/agents/openai.yaml`
- `skills/pstack-principle-model-the-domain/SKILL.md`
- `skills/pstack-principle-model-the-domain/agents/openai.yaml`
- `skills/pstack-principle-never-block-on-the-human/SKILL.md`
- `skills/pstack-principle-never-block-on-the-human/agents/openai.yaml`
- `skills/pstack-principle-outcome-oriented-execution/SKILL.md`
- `skills/pstack-principle-outcome-oriented-execution/agents/openai.yaml`
- `skills/pstack-principle-prove-it-works/SKILL.md`
- `skills/pstack-principle-prove-it-works/agents/openai.yaml`
- `skills/pstack-principle-redesign-from-first-principles/SKILL.md`
- `skills/pstack-principle-redesign-from-first-principles/agents/openai.yaml`
- `skills/pstack-principle-separate-before-serializing-shared-state/SKILL.md`
- `skills/pstack-principle-separate-before-serializing-shared-state/agents/openai.yaml`
- `skills/pstack-principle-sequence-verifiable-units/SKILL.md`
- `skills/pstack-principle-sequence-verifiable-units/agents/openai.yaml`
- `skills/pstack-principle-subtract-before-you-add/SKILL.md`
- `skills/pstack-principle-subtract-before-you-add/agents/openai.yaml`
- `skills/pstack-principle-test-behavior-not-implementation/SKILL.md`
- `skills/pstack-principle-test-behavior-not-implementation/agents/openai.yaml`
- `skills/pstack-principle-type-system-discipline/SKILL.md`
- `skills/pstack-principle-type-system-discipline/agents/openai.yaml`
- `skills/pstack-recall/SKILL.md`
- `skills/pstack-recall/agents/openai.yaml`
- `skills/pstack-reflect/SKILL.md`
- `skills/pstack-reflect/agents/openai.yaml`
- `skills/pstack-reflect/references/divergent-reviewer.md`
- `skills/pstack-reflect/references/judgment-reviewer.md`
- `skills/pstack-reflect/references/synthesizer.md`
- `skills/pstack-reflect/references/tooling-reviewer.md`
- `skills/pstack-setup-pstack/SKILL.md`
- `skills/pstack-show-me-your-work/SKILL.md`
- `skills/pstack-show-me-your-work/agents/openai.yaml`
- `skills/pstack-show-me-your-work/references/decision-log-template.tsv`
- `skills/pstack-show-me-your-work/scripts/log.sh`
- `skills/pstack-swarm/SKILL.md`
- `skills/pstack-swarm/agents/openai.yaml`
- `skills/pstack-tdd/SKILL.md`
- `skills/pstack-tdd/agents/openai.yaml`
- `skills/pstack-teach/SKILL.md`
- `skills/pstack-teach/agents/openai.yaml`
- `skills/pstack-technical-writing/SKILL.md`
- `skills/pstack-technical-writing/agents/openai.yaml`
- `skills/pstack-typescript-best-practices/SKILL.md`
- `skills/pstack-typescript-best-practices/agents/openai.yaml`
- `skills/pstack-typescript-best-practices/references/patterns.md`
- `skills/pstack-unslop/SKILL.md`
- `skills/pstack-unslop/agents/openai.yaml`
- `skills/pstack-why/SKILL.md`
- `skills/pstack-why/agents/openai.yaml`
- `skills/pstack-why/references/epistemics.md`
- `skills/pstack-why/references/investigator-prompt.md`
- `skills/pstack-why/references/source-playbook.md`
- `skills/pstack-why/references/sources/code-archaeology.md`
- `skills/pstack-why/references/sources/databricks.md`
- `skills/pstack-why/references/sources/datadog.md`
- `skills/pstack-why/references/sources/incident-postmortem.md`
- `skills/pstack-why/references/sources/linear.md`
- `skills/pstack-why/references/sources/notion.md`
- `skills/pstack-why/references/sources/sentry.md`
- `skills/pstack-why/references/sources/slack.md`
- `skills/pstack-why/references/synthesizer-prompt.md`
