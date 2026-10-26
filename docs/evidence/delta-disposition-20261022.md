# Upstream 0.15.27 delta disposition

Inputs: `99743e9c151c8537cbbf1f98bb38f34ef3368453` → `0148b78c56c72a1b8412055913c79f767095b217`. The [provenance receipt](upstream-20261022.json) lists all 22 changed paths. The target is 0.15.27, not current main (0.15.30).

| Upstream paths, relative to `pstack/` | Disposition |
|---|---|
| `.cursor-plugin/plugin.json`, `plugin.json` | Record version and hashes in `UPSTREAM.json`. Retain the Codex compatibility manifest and namespace. Port version becomes 0.4.0. |
| `skills/create-formal-verification-skill/SKILL.md` | Port the new property-verification workflow to a namespaced Codex skill. Use project-local output, isolated scratch changes, honest proof bounds, and existing authorization. |
| `skills/ketchup/SKILL.md` | Remove the whole-reply word cap. Preserve every pending item with effect, evidence, recommendation, risk, and available link. Retain read-only and accessible-history boundaries. |
| `skills/sharpen/SKILL.md` | Remove the unconditional rewritten-prompt prohibition. A requested rewrite is valid; no implicit expansion into implementation. |
| `skills/typescript-best-practices/SKILL.md`, `skills/typescript-best-practices/references/patterns.md` | Use a verifying type guard to establish a brand instead of an `as` cast. |
| `skills/poteto-help/SKILL.md` | Add formal-verification routing and complete pending-item wording. Keep help informational. |
| `skills/make-bot-ui/SKILL.md`, `skills/poteto-mode/SKILL.md` | Upstream name normalization is already covered by the port's lowercase namespaced names. No behavior change. |
| `README.md` | Expose the new skill and updated count. Existing core already covers proportional review after rebase/minor fixes. Do not copy Cursor or Claude installation instructions. |
| `docs/guide/01-setup.md`, `docs/guide/02-poteto-mode.md` | Cursor custom-mode links and routing prose. Existing Codex help describes actual capabilities; no Cursor persistent-mode claim imported. |
| `docs/guide/03-understand.md`, `docs/guide/04-design.md`, `docs/guide/05-build-and-clean.md`, `docs/guide/06-verify-and-ship.md`, `docs/guide/08-principles.md`, `docs/guide/09-make-it-yours.md`, `docs/guide/10-recipes-and-pitfalls.md` | Editorial clarity changes. Existing port retains evidence, source grounding, scoped maintenance, and separate write scopes. No new runtime behavior to import. |
| `docs/guide/07-overnight.md` | Proportional review after rebases/minor fixes is already present in `autopilot-full.md`. A clean review does not authorize merge in the port. |
| `docs/harness/claude-code.md` | Inapplicable host adapter. Do not import Claude tool/model mappings, global rule writes, transcript scans, or generated Claude packaging. |

All 169 baseline file hashes were verified against the baseline Git tree. The target has 171 files. MIT license bytes are unchanged. No executable helper or dormant automation changed. No substantive 0.15.27 delta is deferred. Changes introduced after this target, including later formal-verification defaults and additional skills, remain outside this update.
