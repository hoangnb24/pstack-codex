# Statechart update candidate

Outcome: adapt the complete statechart delta from upstream `4dd1d05818d19792e7cd6e818f1667f95f7e1dbe` to `bf0c7cd80abdbf7fe47b634978a7d1b4071f71a7` (0.15.42). Original port base: `989d5bfd5acd1520394456056c5b6f31b145e575`.

Scope: only `skills/pstack-statechart/**` changed. `tests/statechart/**` remains unchanged. No paths were deleted. No installation, commit, cache edit, launcher edit, global configuration edit, or external service write ran. Unknown files and unnamespaced symlinks remain untouched.

## Identity and dispositions

`manifest.json` lists all assigned paths, physical modes, SHA-256 hashes, changed paths, and deletions. Its candidate digest hashes the compact JSON files array. `candidate/` and `tests-statechart/` hold the tested snapshot. The scratch-only `candidate/scripts/node_modules` symlink supplies existing test dependencies. It is not delivered source or part of the manifest.

Candidate digest: `82f0998c526b501a0b13e231b4fe0e365c07cb3238d50c006e409626e61d3bb3`.

- `scripts/backends/mermaid.ts`: upstream exact. Draw a unique entry into the parent boundary, then draw internal start edges to its children. Preserve distinct entries from different source states.
- `scripts/run.ts`: adapt SANY diagnostics. Rerun SANY after XML export failure to obtain line and column errors. Preserve explicit existing `TLA2TOOLS` and `JAVA` controls. No discovery, installation, or cache mutation is restored.
- `scripts/test/chart.test.ts`, `cli.test.ts`, `corpus.test.ts`, `corpus/Login/chart.mmd`, `drawn.ts`, and `labels.ts`: upstream exact. Add behavioral expectations, diagnostic cases, and a shared drawn-edge reader.
- `scripts/test/render.test.ts`: add the complete upstream parent-title-bar regression and graph imports. Preserve local trusted-module selection and explicit missing-module skips. No npm bootstrap is restored.
- Namespace, explicit-only metadata, package pins, permission limits, and local portability fixes remain unchanged. The skill-creator guidance reinforced this preservation. No skill instruction change was needed.

Eight paths are modified. `scripts/test/drawn.ts` is added. All nine changed paths have physical mode `0600`; Git records regular non-executable mode `100644`. No executable mode changes were requested.

## Verification environment and reproduction

macOS arm64. Node 22.22.3. Existing Java 17, TLC 1.7.4, Pele 1.8.0, and resvg 2.6.2 come from `/Users/tubakhuym/.local/share/pstack-statechart/toolchain-1/env.sh`. Existing Mermaid 11.16.0, jsdom 20.0.3, and fast-check 4.10.0 modules come from `/Users/tubakhuym/projects/supervisors/paseo/node_modules`. No dependencies were installed.

1. Source the existing toolchain environment.
2. Set `TMPDIR` to this evidence folder's `tmp/`.
3. In `candidate/scripts/`, set `STATECHART_RENDER_MODULES=/Users/tubakhuym/projects/prototypes/pstack-update-20261116-83ZHPM/statechart-NDtXfW/modules/package.json` and `STATECHART_DIFFERENTIAL_SEED=1`.
4. Run `node --disable-warning=ExperimentalWarning --test test/*.test.ts`. Initial results are in `suite.tap`: 290 passed and 76 failed. All failures came from stale prior-evidence dependency symlinks: missing jsdom caused 75 render hook failures; missing fast-check caused one differential file failure. No behavioral assertion failed in that run. Corrected scratch-only links now select the existing modules above. `recovered.tap` records the rerun of `test/render.test.ts test/differential.test.ts`.
5. From the source repository, run `node --test tests/statechart/safety.test.mjs`. Result: 4 passed, zero failed. See `safety.tap`.
6. Run `/usr/bin/python3 -B /Users/tubakhuym/.codex/skills/.system/skill-creator/scripts/quick_validate.py skills/pstack-statechart`. Result: `Skill is valid!`.
7. Run `git diff --check`. Result: passed.

Models are copied into fresh scratch under this recovery root. Invoke the source `scripts/statechart.ts` on `models/Safe.tla` and `models/Unsafe.tla`, each with a fresh `--out` path. Safe exits 0. Unsafe exits 1 and reports the two-step counterexample `0 → 1 → 2` for `Capacity == count <= 1`. The logs, checker outputs, reports, and Mermaid files remain in this folder.

Run `node render.mjs` here to reproduce SVGs and PNGs with the existing trusted renderer. It reads the candidate theme and applies the established CSS resolution helper before rasterization. Safe, Unsafe, and Login PNGs were visually inspected. Labels and arrows are readable. Unsafe highlights state 2 in red. Login's submit arrow enters the parent boundary; an internal start marker leads to its first child. These observations cover these images only.

## Invocation and limits

Explicit skill invocation: `$pstack-codex:pstack-statechart`.

After sourcing the toolchain environment, run `node /Users/tubakhuym/projects/prototypes/pstack-codex/skills/pstack-statechart/scripts/statechart.ts Model.tla --out NewOutput`. The shell entry `scripts/statechart` accepts the same arguments. Output must be new or empty. Exit 0 means holding rules; exit 1 means broken rules; exit 2 means an error. Rendering remains a separate trusted step. Old `from-spec` and `--png` arguments remain unsupported.

Pele 1.8.0 compatibility is tested; the upstream render test names Pele 1.9.0. This does not establish 1.9.0 runtime behavior. Exact pinned fast-check 4.5.3 is not available; existing 4.10.0 is a compatibility probe, not exact-pin proof. No dependency upgrade is proposed or authorized. Model results do not prove arbitrary production models. Trusted view and renderer modules execute code and are not sandboxed. Installation, cache refresh, launcher refresh, publication, and technical acceptance remain outside this scope.

Recovered test result: 83 passed, zero failed, zero skipped. This includes 75 render tests and eight differential tests. The new parent-title-bar regression passes with existing Pele 1.8.0. Together with the initial 290 unaffected passing checks, all 373 behavioral tests passed across these runs. The first failed dependency run remains available, not erased or relabeled. Safety adds four passing checks. No skipped checks remain in the recovered test scope.

PNG SHA-256 values: Safe `2b2e81dcd594fe82daf99391eb420c021f9d0aed8e99a87aa8ebcb5d7babecac`; Unsafe `6855c363b691d30b23b3075074d445e383c87e57d20cf3bff531bc788471c3ca`; Login `2775c8360d76027020237f988fd34146de57d344f82f45cbd3b718cba044769a`.

Manifest file SHA-256: `8cf4568cb4e5c0931253f64a3885550c9f50de5a6915570ae7bc4c04b81384ac`. Run `node audit.mjs` to reproduce the source manifest. The tested snapshot matches the nine delivered changed files. Verification and this handoff do not grant technical acceptance. No migration or dependency upgrade is required by the observed results. Write ownership of both assigned paths is relinquished.
