# Statechart candidate — 2026-10-24

This is the historical writer snapshot before toolchain installation. Current dependency verification and test-only portability corrections are recorded in [validation](../../docs/VALIDATION.md). The manifest and TAP files here retain the original candidate evidence.

Outcome: a Codex-native, explicit-only `pstack-statechart` skill. All 21 upstream
scripts and all four Mermaid fixtures are included. The standard upstream CLI
remains `node skills/pstack-statechart/scripts/statechart.mjs`.

## Inputs and scope

Target repository: `/Users/tubakhuym/projects/prototypes/pstack-codex`.
Original Git base: `adf1ab931a105c9fb8ff6aa14c8e712bedc00825`.
The original worktree already contained intentional 0.4.0 changes.
Accepted baseline payload: `836f333f1112829a8232a2125eba2c1319b78b8ae6ac963cdcc57bf23277a25b`.
Baseline upstream: `0148b78c56c72a1b8412055913c79f767095b217` (0.15.27).
Target upstream: `6dbc3ff4b8302a697705f827e9fa92e700d6c6c7` (0.15.32).
Source: `pstack/skills/statechart` in the provided detached upstream checkout.
The exact source commit was checked locally. Baseline payload acceptance and
the 171 baseline hash checks are assignment inputs, not new verification here.

Only `skills/pstack-statechart/**` and `tests/statechart/**` were written.
No commit, push, install, download, plugin-cache edit, global configuration edit,
or live external mutation ran. No project-local workspace protocol exists.
The shared protocol and `skill-creator` instructions were read before edits.
The skill guidance drove the namespaced entry point, explicit-only metadata,
trusted-input warning, and behavioral validation. No agents were delegated.

## Delta dispositions

- `SKILL.md`: namespace the skill. Remove the harness-specific invocation key.
  Replace automatic installation guidance with local dependency controls.
  Explain that mapping JavaScript and renderer modules execute trusted code.
- `agents/openai.yaml`: add Codex metadata and preserve explicit-only invocation.
- `scripts/tlc-tools.mjs`: remove mise lookup, installation, download instructions,
  and installer constants. Require an existing `TLA2TOOLS` path. Accept `JAVA`
  or `java` from PATH. Keep launch failure reporting.
- `scripts/render.mjs`: remove npm installation and cache repair. Accept an
  existing trusted `STATECHART_RENDERER` module. Read an existing upstream cache
  as fallback. Validate its `render` and `Resvg` exports. Never write that cache.
- `scripts/statechart-help.mjs`: document these controls and trusted inputs.
- `scripts/test/statechart.test.mjs`: remove seven obsolete mise bootstrap tests
  and one npm bootstrap test. Update missing-tool expectations and renderer
  failure expectations. Probe real TLC and PNG generation before enabling
  dependency-based tests. Support explicit renderer inputs in test wrappers.
- All other upstream files: retain bytes unchanged. This includes the main CLI,
  parser, converters, model comparison, region proofs, input snapshots, and
  ownership/atomic-publication logic. Every upstream script was inspected.
- `tests/statechart/safety.test.mjs`: add eight local behavioral tests. These
  test bootstrap command traps, no cache creation, missing prerequisites,
  trusted module execution, launch failure preservation, and simulated output
  publication. The simulator is not a real model checker.

`manifest.json` lists every candidate path, mode, SHA-256, source SHA-256 when
applicable, and disposition. Its `candidate_sha256` hashes the compact JSON
serialization of its sorted `files` array. The manifest excludes itself to
avoid a circular hash. Hash the manifest separately to identify its receipt.

## Verification

Environment: macOS arm64; Node v22.22.3 at
`/Users/tubakhuym/.local/bin/node`; Python 3. The system `/usr/bin/java` stub
fails because it has no runtime. Existing Homebrew Java works:
`/opt/homebrew/opt/openjdk@17/bin/java -version` reports OpenJDK 17.0.20.
No `TLA2TOOLS` or `STATECHART_RENDERER` is configured. The upstream renderer
cache is absent. Neither `pele` nor `@resvg/resvg-js` resolves from this project.
No usable TLC jar was supplied. No missing prerequisite was installed.

Run these commands from the target repository:

1. Run `node --test skills/pstack-statechart/scripts/test/statechart.test.mjs`.
   Result: 142 tests; 46 passed, zero failed, 96 skipped. See `portable.tap` for
   every test and skip reason. TLC and real renderer tests remain unverified.
2. Run `node --test tests/statechart/safety.test.mjs`.
   Result: eight tests passed, zero failed, zero skipped. See `safety.tap`.
3. Run `python3 -B /Users/tubakhuym/.codex/skills/.system/skill-creator/scripts/quick_validate.py skills/pstack-statechart`.
   Result: `Skill is valid!`.
4. Run `node --check` on each `.mjs` directly in the skill's `scripts` folder.
   Result: all 21 scripts passed.
5. Run `node skills/pstack-statechart/scripts/statechart.mjs --help`.
   The portable suite verifies help and invalid-argument behavior.

Concrete verified example: the safety test supplies a graph with `x = 0`,
`x = 1`, and one `Pay` edge. Its trusted mapping names those states `Unpaid`
and `Paid`, and names the edge `you pay`. Conversion emits that Mermaid edge.
The simulated CLI publication writes a summary with two model states and one
chart transition. A rerun without PNG removes the prior generated `chart.png`.
This verifies conversion/publication behavior, not TLA+ semantics.

For a toolchain-free skeleton, copy `scripts/test/sync.mmd` into a scratch
folder. Run the CLI's `from-chart` command on that copy. It writes `Sync.tla`,
`Sync.cfg`, and `Sync.map.mjs`, then exits 2 with the missing-TLC message.
For real model checking, supply an existing TLC jar and working Java binary.
For PNG output, supply an existing trusted renderer module that exports Pele's
`render` and resvg's `Resvg`. Expected package versions remain 1.8.0 and 2.6.2.

## Limits and disposition needed

No actual PNG was generated or inspected. Real TLC checking, renderer layout,
font behavior, full concurrent-publication stress tests, and plugin turn-time
invocation remain unverified. Dependency-dependent checks are skipped, not
passed. The portable suite does verify foreign-output refusal. New safety
tests verify failed-launch preservation and successful simulated replacement.
The original full publication and concurrency code remains byte-identical.

Inherited behavior: `from-chart` can replace an existing config or mapping when
the corresponding `.tla` does not exist. Rendering writes its selected PNG path.
Use trusted scratch copies and choose output paths carefully. Trusted mapping
and renderer modules can cause arbitrary side effects; they are not sandboxed.

This is a candidate for technical acceptance, not self-acceptance. No shared
contract changes are needed. Write ownership is relinquished with this handoff.
