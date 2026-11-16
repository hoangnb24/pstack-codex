# Upstream 0.15.42 delta disposition

Inputs: `4dd1d05818d19792e7cd6e818f1667f95f7e1dbe` → `bf0c7cd80abdbf7fe47b634978a7d1b4071f71a7`. [Provenance](upstream-20261116.json) lists all 59 paths. MIT license bytes are unchanged. No new skills or dependencies are introduced.

## Package and upstream-only documentation

- `.cursor-plugin/plugin.json`, `plugin.json`: record the upstream version in `UPSTREAM.json`. Retain the native Codex manifest and marketplace, with port version 0.6.1.
- `README.md`: document simpler how/why, direct code tracing, and experiment-driven prompt choices. Preserve model-neutral execution. Do not import Cursor role defaults or global-rule migration.
- `agents/comment-sicko.md`: apply its direct-tracing change to the existing Codex comment-reviewer reference. No standalone agent registration is added.
- `docs/guide/01-setup.md`: retain project-local preferences and inherited host model. Cursor budget levels, model slugs, and global-rule rewrites are not applicable.
- `docs/guide/02-poteto-mode.md`: reflect experiment-driven choices in sharpen, without executing the rewritten task. Keep ordinary workflow tracing independent from the explanation skill.
- `docs/guide/03-understand.md`: document one explanation pass for how and record-first investigation for why. Missing delegation or connectors remain explicit limits.
- `docs/guide/04-design.md`: direct code tracing replaces the how prerequisite. Model-vendor diversity remains conditional on available authorized tools, not a claim about same-model passes.
- `docs/guide/10-recipes-and-pitfalls.md`: retain goal-oriented prompts rather than mandatory user-supplied skill sequences.
- `docs/harness/claude-code.md`: do not import Claude-specific model mappings or global rule paths. The Codex port keeps host settings unchanged.

Skill and runtime candidate evidence is linked from [validation](../VALIDATION.md). Integration must inspect and accept both exact candidates before installation.
