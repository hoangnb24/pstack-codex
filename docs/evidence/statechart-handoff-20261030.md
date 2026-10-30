# Statechart candidate

The TypeScript pipeline and complete upstream test corpus are ported from upstream `4dd1d05818d19792e7cd6e818f1667f95f7e1dbe` (0.15.36). The upstream comparison base is `6dbc3ff4b8302a697705f827e9fa92e700d6c6c7`. The local original base is `39e57f3e922f65d52926eed89fe3526701b87379`.

## Candidate identity

`manifest.json` lists every assigned file with SHA-256, mode, original-base disposition, and upstream hash when applicable. It also lists every deleted path. Run `node audit.mjs` from any directory to reproduce it. The candidate contains 406 added files, 2 modified existing files, 26 deleted files, and 5 preserved files. The preserved files are `agents/openai.yaml` and the historical HANDOFF, manifest, and two TAP files under `tests/statechart`.

`candidate/` holds the skill snapshot. `tests-statechart/` holds the local test snapshot. The candidate scratch copy also has a test-only `scripts/node_modules/fast-check` symlink. That symlink is not published source and is not part of the file manifest.

## Delta disposition

- Ported the new frontend, passes, intermediate representation, backends, checker runner, worker, CLI, launcher script, package metadata, TypeScript config, tests, and all 33 recorded model cases.
- Removed the 26 obsolete JavaScript runtime/test files with `apply_patch`. No executable replacement imports those files. Upstream fixture comments and historical evidence still mention old commands. They are not current invocation guidance. Recovery backups retain the removed files.
- Preserved the `pstack-statechart` namespace and explicit-only invocation policy. Applied `skill-creator` to the instructions without regenerating policy metadata.
- Removed all mise discovery and automatic installation from `run.ts`. `TLA2TOOLS` selects an existing jar. `JAVA`, or Java from PATH, selects the existing runtime. Missing TLC and failed Java stop with exit 2 and publish no output.
- Removed npm installation and cache creation from render tests. `STATECHART_RENDER_MODULES` selects a trusted package manifest with existing Pele, Mermaid, and jsdom modules. Without it, the optional render tests skip explicitly.
- Changed package name from `@cursor-skill/statechart` to `@pstack-codex/statechart`. Kept upstream `fast-check` devDependency pinned to 4.5.3.
- Updated rendering guidance for trusted modules, no installation, missing-render limits, and the CSS-variable resolution needed for readable PNG conversion with the current renderer.
- The 33 upstream `graph.dot` fixtures gain a final newline through `apply_patch`. Other unadapted upstream files match their upstream content. The manifest records these byte differences.

## Verification

Environment: macOS; Node 22.22.3; Bun 1.3.14; existing Java 17 and TLC 1.7.4 selected by read-only `toolchain-1/env.sh`. Tests ran in the recovery-root candidate copy with TMPDIR set to the recovery-root `tmp/`. No installs or network bootstrap ran. Published source has no new node_modules or lockfile.

1. `node --test tests/statechart/safety.test.mjs`: 4 passed, zero failed. Evidence: `safety.tap`. Covers missing TLC with bootstrap traps, nonempty output preservation, failing Java with diagnostics and no publication, and removed flags with no writes.
2. In the scratch candidate's `scripts/`, source the existing toolchain environment. Run `node --disable-warning=ExperimentalWarning --test test/chart.test.ts test/cli.test.ts test/config-fuzz.test.ts test/corpus.test.ts test/messages.test.ts test/pipeline.test.ts test/plain-tlc.test.ts test/tlc-out.test.ts test/render.test.ts`. Result: 359 tests, 285 passed, 74 skipped optional render tests, zero failed. Evidence: `suite.tap`. Includes real TLC corpus checks, 4000 config-parser cases, output ownership, signal handling, and process cleanup.
3. With `STATECHART_RENDER_MODULES` set to this evidence folder's `modules/package.json`, run `node --test test/render.test.ts`. Result: all 74 passed. Evidence: `render.tap`. Uses existing Pele 1.8.0, Mermaid 11.16.0, and jsdom 20.0.3. Includes 500 generated label/chart cases. Also run `node render-probe.mjs`: 36 checked-in charts render as SVG, zero failures. Evidence: `render-probe.log`.
4. In scratch only, link existing fast-check 4.10.0 and run `STATECHART_DIFFERENTIAL_SEED=1 node --test test/differential.test.ts`. Result: 8 passed, zero failed; generated-model test uses 20 runs. Evidence: `differential.tap`.
5. Run Bun against the published source CLI on the Login model with a fresh recovery-root `--out`. Result: exit 0, 9 model states, TypeOK and NoDeadlock hold. Evidence: `bun-login.log` and `bun-login/`.
6. `/usr/bin/python3 .../skill-creator/scripts/quick_validate.py skills/pstack-statechart`: `Skill is valid!`. Evidence: `skill-validation.log`. The earlier default/Homebrew Python attempt failed with `ModuleNotFoundError: No module named 'yaml'`. No package was installed to resolve it.
7. `git diff --check`: passed.

## Invocation contract and limits

Use `scripts/statechart SPEC.tla [--config FILE] [--view FILE] [--out DIR]`. A launcher can instead execute `node scripts/statechart.ts` with the same arguments. The shell entry selects an existing supported Node, Bun, or Deno. It keeps upstream exit 127 when no supported TypeScript runtime exists. The TypeScript CLI exits 0 for holding rules, 1 for broken rules, and 2 for errors. SIGINT and SIGTERM return 130 and 143. Only exits 0 and 1 publish output. The output directory must be new or empty. There is no replacement implementation for from-chart, fixed, against, or PNG flags.

View modules and renderer modules are trusted executable inputs, not sandboxed data. The CLI stages output beside the destination. Checker runs use owned temporary folders. The worker runs in its own process group; the command and janitor remove their owned staging/scratch folders. Passing cleanup tests do not prove protection against hostile concurrent filesystem mutation.

Exact fast-check 4.5.3 remains untested. Local 4.10.0 passed as a compatibility probe. No new dependency authorization is required for the delivered tests, but exact-pin verification would need an existing trusted 4.5.3 copy or separate installation authority. The package pin was not changed.

SVG parser/render tests do not prove PNG readability or visual quality. Integration observed that raw resvg 2.6.2 leaves CSS-variable colors black. PNG needs explicit CSS-variable resolution or browser rendering and image inspection. Image inspection, actual installation, external launcher integration, docs, publication, and technical acceptance remain outside this write scope. No external launcher, cache, configuration, commit, push, or remote mutation was made.

The assigned candidate is delivered for review. Write ownership is relinquished for integration. No further source changes will occur without a new assignment.
