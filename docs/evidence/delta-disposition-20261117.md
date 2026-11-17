# Upstream 0.15.43 delta dispositions

Baseline `bf0c7cd80abdbf7fe47b634978a7d1b4071f71a7`; target `3fa33bb0f927bea2ccacd48a3cfda95145fb6bae`. All 70 changed pstack paths are listed. MIT license is unchanged. No statechart or dependency delta is imported.

| Upstream path | Status | Disposition |
|---|---|---|
| `.cursor-plugin/plugin.json` | M | Port version is 0.6.2 in the tested Codex compatibility manifest; pin upstream 0.15.43 in UPSTREAM.json. Do not import Cursor/portable host manifests. |
| `README.md` | M | Relevant design, routing, reflection and PR behavior is adapted in skills and current README/PARITY/SKILL-PORT/HELPER-PORT documentation. Cursor usage guide and persistent cloud behavior are not shipped. |
| `agents/poteto-agent.md` | M | Host-specific model/effort defaults and Claude/Cursor configuration remain excluded. Codex retains host models, permissions and project-local setup preferences. |
| `docs/guide/01-setup.md` | M | Host-specific model/effort defaults and Claude/Cursor configuration remain excluded. Codex retains host models, permissions and project-local setup preferences. |
| `docs/guide/02-poteto-mode.md` | M | Relevant design, routing, reflection and PR behavior is adapted in skills and current README/PARITY/SKILL-PORT/HELPER-PORT documentation. Cursor usage guide and persistent cloud behavior are not shipped. |
| `docs/guide/04-design.md` | M | Relevant design, routing, reflection and PR behavior is adapted in skills and current README/PARITY/SKILL-PORT/HELPER-PORT documentation. Cursor usage guide and persistent cloud behavior are not shipped. |
| `docs/guide/05-build-and-clean.md` | M | Relevant design, routing, reflection and PR behavior is adapted in skills and current README/PARITY/SKILL-PORT/HELPER-PORT documentation. Cursor usage guide and persistent cloud behavior are not shipped. |
| `docs/guide/06-verify-and-ship.md` | M | Relevant design, routing, reflection and PR behavior is adapted in skills and current README/PARITY/SKILL-PORT/HELPER-PORT documentation. Cursor usage guide and persistent cloud behavior are not shipped. |
| `docs/guide/07-overnight.md` | M | Relevant design, routing, reflection and PR behavior is adapted in skills and current README/PARITY/SKILL-PORT/HELPER-PORT documentation. Cursor usage guide and persistent cloud behavior are not shipped. |
| `docs/guide/09-make-it-yours.md` | M | Relevant design, routing, reflection and PR behavior is adapted in skills and current README/PARITY/SKILL-PORT/HELPER-PORT documentation. Cursor usage guide and persistent cloud behavior are not shipped. |
| `docs/harness/claude-code.md` | M | Host-specific model/effort defaults and Claude/Cursor configuration remain excluded. Codex retains host models, permissions and project-local setup preferences. |
| `plugin.json` | M | Port version is 0.6.2 in the tested Codex compatibility manifest; pin upstream 0.15.43 in UPSTREAM.json. Do not import Cursor/portable host manifests. |
| `skills/architect/SKILL.md` | M | Adapt condensed upstream body. Preserve local frontmatter and execution boundary. |
| `skills/architect/references/design-red-flags.md` | D | Retire reference after migrating its entrypoint. Recoverable from Git and source-before. |
| `skills/architect/references/rationale-template.md` | D | Retire reference after migrating its entrypoint. Recoverable from Git and source-before. |
| `skills/architect/references/runner-prompt.md` | D | Retire reference after migrating its entrypoint. Recoverable from Git and source-before. |
| `skills/arena/SKILL.md` | M | Retain equivalent local host adaptation. Upstream model and speed defaults do not apply. |
| `skills/automate-me/SKILL.md` | M | Retain equivalent local host adaptation. Upstream model and speed defaults do not apply. |
| `skills/benchmark-checklist/SKILL.md` | M | Upstream removes an attribution to Opening a PR; the one-primary-number behavior is unchanged. Retain equivalent local reporting guidance. |
| `skills/figure-it-out/SKILL.md` | M | Reconcile simplified reasoning guidance and retired callers. Preserve local execution adaptation. |
| `skills/no-comments/SKILL.md` | M | Retain equivalent local host adaptation. Upstream model and speed defaults do not apply. |
| `skills/poteto-help/SKILL.md` | M | Reconcile simplified reasoning guidance and retired callers. Preserve local execution adaptation. |
| `skills/poteto-mode/SKILL.md` | M | Adapted worker kickoff and figure-it-out routing; retained local safety contract and host model defaults. |
| `skills/poteto-mode/playbooks/autonomous-run.md` | M | Upstream model/speed wording or architect parallel wording only; local host-controlled delegation and design guidance retained unchanged. |
| `skills/poteto-mode/playbooks/autopilot-full.md` | M | Upstream adds owner rebase and force-with-lease after Babysit reports a stale base. Do not import automatic history rewriting. Retain explicit publication/landing authority and no force-push of shared history. |
| `skills/poteto-mode/playbooks/autopilot-stack.md` | M | Upstream removes an obsolete Opening a PR section reference. The port already uses independent/dependent queue rules and scoped topology authority without that reference. |
| `skills/poteto-mode/playbooks/babysit.md` | M | Adapted conflict branch/drift reporting; retained bounded modes, unknown gates, and mutation limits. |
| `skills/poteto-mode/playbooks/bug-fix.md` | M | Upstream model/speed wording or architect parallel wording only; local host-controlled delegation and design guidance retained unchanged. |
| `skills/poteto-mode/playbooks/eval.md` | M | Upstream model/speed wording or architect parallel wording only; local host-controlled delegation and design guidance retained unchanged. |
| `skills/poteto-mode/playbooks/feature.md` | M | Upstream model/speed wording or architect parallel wording only; local host-controlled delegation and design guidance retained unchanged. |
| `skills/poteto-mode/playbooks/hillclimb.md` | M | Upstream model/speed wording or architect parallel wording only; local host-controlled delegation and design guidance retained unchanged. |
| `skills/poteto-mode/playbooks/multi-phase-plan.md` | M | Replaced scaffold/checker with concise outcome checklist; retained applicability and execution boundaries. |
| `skills/poteto-mode/playbooks/opening-a-pr.md` | M | Adapted concise briefing guidance; retained local worktree protections and user readiness choice. |
| `skills/poteto-mode/playbooks/orchestrate.md` | D | Deleted; route moved to figure-it-out. Cross-scope caller migration integration-owned. |
| `skills/poteto-mode/playbooks/perf-issue.md` | M | Upstream model/speed wording or architect parallel wording only; local host-controlled delegation and design guidance retained unchanged. |
| `skills/poteto-mode/playbooks/refactoring.md` | M | Upstream model/speed wording or architect parallel wording only; local host-controlled delegation and design guidance retained unchanged. |
| `skills/poteto-mode/playbooks/runtime-forensics.md` | M | Upstream model/speed wording or architect parallel wording only; local host-controlled delegation and design guidance retained unchanged. |
| `skills/poteto-mode/playbooks/session-pickup.md` | M | Upstream model/speed wording or architect parallel wording only; local host-controlled delegation and design guidance retained unchanged. |
| `skills/poteto-mode/playbooks/shipping.md` | M | Watcher CLI change not applicable: runtime omitted; local exact-head checks and bounded observation retained. |
| `skills/poteto-mode/playbooks/trace-forensics.md` | M | Upstream model/speed wording or architect parallel wording only; local host-controlled delegation and design guidance retained unchanged. |
| `skills/poteto-mode/playbooks/worktree-cleanup.md` | M | Upstream model/speed wording or architect parallel wording only; local host-controlled delegation and design guidance retained unchanged. |
| `skills/poteto-mode/scripts/check-plan.mjs` | D | Retired checker and coupled package tests; historical evidence retained. |
| `skills/poteto-mode/scripts/check-plan.test.ts` | D | Retired checker and coupled package tests; historical evidence retained. |
| `skills/poteto-mode/scripts/package.json` | M | No local package manifest exists; removed checker imports/tests from tests/helpers/helpers.test.mjs. |
| `skills/poteto-mode/worker.md` | A | Adapted bounded delegate guidance; host authority, questions and draft choice preserved. |
| `skills/principle-attack-the-premise/SKILL.md` | M | Adapt condensed upstream body. Preserve local frontmatter and execution boundary. |
| `skills/principle-boundary-discipline/SKILL.md` | M | Adapt condensed upstream body. Preserve local frontmatter and execution boundary. |
| `skills/principle-build-the-lever/SKILL.md` | M | Adapt condensed upstream body. Preserve local frontmatter and execution boundary. |
| `skills/principle-explain-the-number/SKILL.md` | M | Adapt condensed upstream body. Preserve local frontmatter and execution boundary. |
| `skills/principle-fix-root-causes/SKILL.md` | M | Adapt condensed upstream body. Preserve local frontmatter and execution boundary. |
| `skills/principle-foundational-thinking/SKILL.md` | M | Adapt condensed upstream body. Preserve local frontmatter and execution boundary. |
| `skills/principle-make-operations-idempotent/SKILL.md` | M | Adapt condensed upstream body. Preserve local frontmatter and execution boundary. |
| `skills/principle-minimize-reader-load/SKILL.md` | M | Adapt condensed upstream body. Preserve local frontmatter and execution boundary. |
| `skills/principle-model-the-domain/SKILL.md` | M | Adapt condensed upstream body. Preserve local frontmatter and execution boundary. |
| `skills/principle-prove-it-works/SKILL.md` | M | Adapt condensed upstream body. Preserve local frontmatter and execution boundary. |
| `skills/principle-separate-before-serializing-shared-state/SKILL.md` | M | Adapt condensed upstream body. Preserve local frontmatter and execution boundary. |
| `skills/principle-sequence-verifiable-units/SKILL.md` | M | Adapt condensed upstream body. Preserve local frontmatter and execution boundary. |
| `skills/principle-test-behavior-not-implementation/SKILL.md` | M | Adapt condensed upstream body. Preserve local frontmatter and execution boundary. |
| `skills/principle-type-system-discipline/SKILL.md` | M | Adapt condensed upstream body. Preserve local frontmatter and execution boundary. |
| `skills/recall/SKILL.md` | M | Retain equivalent local host adaptation. Upstream model and speed defaults do not apply. |
| `skills/reflect/SKILL.md` | M | Condense review. Preserve approval, privacy, source-only edits and external-write boundaries. |
| `skills/reflect/references/divergent-reviewer.md` | D | Retire reference after migrating its entrypoint. Recoverable from Git and source-before. |
| `skills/reflect/references/judgment-reviewer.md` | D | Retire reference after migrating its entrypoint. Recoverable from Git and source-before. |
| `skills/reflect/references/synthesizer.md` | D | Retire reference after migrating its entrypoint. Recoverable from Git and source-before. |
| `skills/reflect/references/tooling-reviewer.md` | D | Retire reference after migrating its entrypoint. Recoverable from Git and source-before. |
| `skills/setup-pstack/SKILL.md` | M | Retain equivalent local host adaptation. Upstream model and speed defaults do not apply. |
| `skills/show-me-your-work/SKILL.md` | M | Retain equivalent local host adaptation. Upstream model and speed defaults do not apply. |
| `skills/swarm/SKILL.md` | M | Retain equivalent local host adaptation. Upstream model and speed defaults do not apply. |
| `skills/technical-writing/SKILL.md` | M | Adapt condensed upstream body. Preserve local frontmatter and execution boundary. |
| `skills/unslop/SKILL.md` | M | Adapt condensed upstream body. Preserve local frontmatter and execution boundary. |

The removed local references, orchestrate playbook, and check-plan helper remain recoverable from Git and source-before. Existing user plans and records are untouched. Invocation policies remain unchanged.
