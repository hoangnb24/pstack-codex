# Upstream delta disposition — 2026-11-20

Compare `3fa33bb0f927bea2ccacd48a3cfda95145fb6bae` (0.15.43) to `0b46ec399d55f2829e88822998f53b84944837d3` (0.15.46), path `pstack`. All 15 changed paths are accounted for below. Upstream is source evidence, not execution authority.

| Upstream paths | Disposition |
| --- | --- |
| `.cursor-plugin/plugin.json`, `plugin.json` | Record upstream 0.15.46 in provenance. Bump the Codex manifest to 0.6.3. Keep the native marketplace and namespace. |
| `README.md`, `docs/harness/claude-code.md` | Do not import Gemini model defaults or Claude rules. The Codex port uses host model settings. Update the port README with the relevant statechart changes and limits. |
| `skills/arena/SKILL.md`, `skills/poteto-mode/SKILL.md` | Keep existing inherited-model adaptation. The delta only changes upstream Gemini defaults and effort policy. No matching Codex model registry exists. |
| `skills/setup-pstack/SKILL.md` | Do not import automatic rewriting of old Gemini panel entries or per-role reasoning budgets. Existing setup explicitly preserves host configuration and records only requested project preferences. |
| `skills/statechart/SKILL.md` | Adapt the native Windows invocation guidance. Preserve existing local-only dependencies, trusted views and output protections. Native Windows execution is not verified by macOS tests. |
| `skills/statechart/scripts/frontends/dot.ts`, `skills/statechart/scripts/run.ts` | Normalize CRLF lines, request UTF-8 output from Java, and hide Windows child consoles. Keep local prerequisite resolution and safety adaptations. |
| `skills/statechart/scripts/janitor.ts`, `skills/statechart/scripts/kill.ts`, `skills/statechart/scripts/statechart.ts` | Adapt platform-aware child cleanup and the TypeScript janitor. Preserve task-owned staging and temporary-directory boundaries. Verification must cover existing cancellation/output safety. |
| `skills/statechart/scripts/test/cli.test.ts`, `skills/statechart/scripts/test/messages.test.ts` | Adopt behavior tests for Windows-style TLC output. Keep existing port tests and dependency-free test setup. |

Local addition: `scripts/kill.ts` rejects non-safe-integer PIDs and values at or below 1 before either platform kill API. `scripts/test/kill.test.ts` verifies that guard and the POSIX process-group target. The upstream `runChild` change has no local counterpart because this port removed that dependency-installer path. The relevant `runToFiles` change is included.

No skill is added or removed. No CLI argument changes. MIT license and copyright remain unchanged. Statechart runtime tests and bounded rendered models establish only the tested Mac/toolchain behavior; they do not establish native Windows process cleanup, arbitrary model fidelity, or live workflow behavior.
