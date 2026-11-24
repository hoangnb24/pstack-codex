# Upstream delta dispositions — 2026-11-24

Baseline: `0b46ec399d55f2829e88822998f53b84944837d3` (0.15.46).
Target: `9e278fe4d4ecd8bfe98b1b79bf4be662efb338cc` (0.15.48).
The complete six-path pstack delta was inspected. MIT license bytes are unchanged.

| Upstream path | Disposition |
| --- | --- |
| `.cursor-plugin/plugin.json` | Record upstream 0.15.48; bump the Codex plugin to 0.6.4. Keep the Codex manifest contract. |
| `plugin.json` | Record provenance. Do not import a second plugin registration format. |
| `README.md` | Add reframe to the port's change summary and invocation guidance. |
| `docs/guide/02-poteto-mode.md` | Adapt the settings-page example in the new skill and README. Do not duplicate the Cursor guide. |
| `skills/poteto-help/SKILL.md` | Add the reframe route using the local namespaced link. |
| `skills/reframe/SKILL.md` | Add pstack-reframe and explicit-only metadata. Preserve ambiguity diagnosis, 8–12 terms, 2–3 neighboring fields, checked sources, and the rewritten description. Add read-only scope, evidence-gap handling, and separation of recommendations from authority. |

No runtime, statechart CLI, dependency, permission, or host model change is imported. No new installer is present. Reframe does not implement the described task. Source checking requires available browsing; absent evidence must be reported rather than invented.
