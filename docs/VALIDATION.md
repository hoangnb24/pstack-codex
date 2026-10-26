# Validation performed

## Publication of accepted 0.5.0 update — 2026-10-26

Commit and normal push to `git@github.com:hoangnb24/pstack-codex.git`, branch `main`, are now authorized for the completed local updates. This supersedes the earlier no-commit/no-push limits for this publication only. Historical installation, failed-run, and skipped-check evidence below remains unchanged. No upstream upgrade, release, tag, deployment, installed-cache edit, or configuration change is included.

Before publication, `git fetch origin` succeeded. Local `main` and `origin/main` both resolved to `adf1ab931a105c9fb8ff6aa14c8e712bedc00825`, with ahead/behind counts of 0/0 and an empty index. The 75 changed or new files belong to the accepted refresh and its evidence. There are no binary files or symlinks in that set. Backups, toolchain binaries, and private configuration remain outside the repository. Existing local paths in evidence are retained.

Source and installed-cache payloads still match the accepted 223-file digest `4b4268bf59191dc216483335f0ab8874d20256f113a7ed992c96d7c613ade73b`. The full payload receipt matches every source hash. The retained `full-suite-portable.tap` still matches the verification receipt. Its 145 passes and nine platform/font skips are historical evidence, not a new full-suite run.

Fresh checks passed: Python packaging 5/5; Node helpers and statechart safety 12/12; Bun helpers 4/4 with 28 expectations; syntax checks for all 21 statechart runtime scripts; parsing of changed JSON files; and `git diff --check`. A bounded credential-pattern scan found no matches. No product code was changed for publication.

ACCEPT the independent publication-content findings for this exact payload and all 75 update files. Full-file scans and targeted inspection found no credentials, private transcripts, backup contents, toolchain binaries, or out-of-scope paths. This is bounded publication evidence, not a complete security audit. Preserve the historical test receipts and their limits. The coherent update, its coupled tests, and its documentation may now be committed and pushed normally to `origin/main`. The read-only inspection scope is closed.

## Accepted statechart local dependencies — 2026-10-24

New authorization permits local TLC/renderer dependency installation and minimal pstack-only connection settings. It supersedes the no-dependency-install boundary for this task only. The starting plugin was 0.5.0 with payload `f749a746b16ad449ab048931cfb539405b041e5ced98eb23f4f4afa7c4c6f970`. Source/cache identity was rechecked before work. Existing uncommitted source changes are preserved. No local workspace protocol is present; all earlier write scopes are released. The paragraphs below retain the sequence of checks, failures, corrections, and final acceptance.

One integration scope owns the isolated toolchain, launcher, checks, and status documentation. Use existing Homebrew Java 17.0.20 on arm64. Pin TLC 1.7.4, Pele 1.8.0, and Resvg 2.6.2 to the adapter's declared versions. Install under `/Users/tubakhuym/.local/share/pstack-statechart/toolchain-1`; this path and `/Users/tubakhuym/.local/bin/pstack-statechart` did not exist before this task. The launcher sets only its child process environment and calls the installed plugin. No default Java, shell startup file, model setting, or plugin cache edit is planned.

Scratch/evidence root: `/Users/tubakhuym/projects/prototypes/pstack-statechart-check-20261024-qwQ5eM`. Acceptance requires real invariant success, a real counterexample, visually inspected PNG output, and rerunning the related suites with dependencies. Historical skips below remain unchanged. No commit, push, deployment, paid service, or session restart is authorized.

Installation completed into the isolated toolchain. The TLC JAR SHA-1 matches the official release value `bee4a54f3ee3d4afc347c3240ec2d9e93b075104`; recorded SHA-256 is `936a262061c914694dfd669a543be24573c45d5aa0ff20a8b96b23d01e050e88`. npm installed only Pele, Resvg, and its ARM64 native package with lifecycle scripts disabled. [Provenance and file hashes](evidence/statechart-dependencies-20261024.json). Existing `/usr/bin/java` remains its unconfigured macOS stub; the launcher selects existing Homebrew Java explicitly.

Real installed-plugin runs succeeded from fresh child environments with `JAVA`, `TLA2TOOLS`, and `STATECHART_RENDERER` unset before invoking the launcher. `Safe.tla` exits 0, checks `Capacity`, and produces two states / one transition. `Unsafe.tla` exits 1, reports `Invariant Capacity is violated`, and retains the counterexample `count = 0 → 1 → 2`. It produces three states / two transitions with one wrong state. Both are synthetic bounded models, not product proofs. All three actual PNGs were inspected: safe overview, unsafe overview, and numbered bug path. Labels and arrow order are readable; the unsafe state is red and the path is numbered 1 then 2.

The first dependency-enabled suite run gave 65 passes / 89 skips / zero failures. This exposed a test-probe defect: valid TLC `-help` exits 1, but the bundled test accepted only 0. Production model checks had already run successfully. A narrow test-only correction accepts exit 0/1 only with the exact help banner and no launch error. Source/cache copies before this correction are in the scratch root. No production adapter or invocation policy changed. The corrected payload is `f72165226be4ac77354cf1b92e77499833eef7279de4ddfab82a7c5963430cf7`; installed cache still has the earlier payload until explicit refresh acceptance.

ACCEPT independent read-only findings on that corrected payload and toolchain hashes. Inspection confirmed the single bundled-test change, pinned dependencies, process-local environment, source/cache identities, real retained TLC evidence, and all three PNGs. No blocking defect was found. This does not establish the pending full-suite outcome or independent download authentication. The scope is released. Full-suite completion remains the next acceptance checkpoint. A TLC output can contain both an invariant violation and the sentence “No error has been found”; use explicit violations, exit status, and summary together, not that sentence alone.

The probe-fixed full suite finished with 133 passes, 17 failures, and four skips. Preserve this failed result in scratch `full-suite-probe-fixed.tap`. Thirteen failures came from noncanonical macOS temporary paths; four came from Linux `LD_PRELOAD` injection not taking effect on macOS. A targeted canonical-`TMPDIR` check fixed the mapping-path assertion but left the injection failure. The test now resolves its temporary root with `realpathSync`, and five Linux rename-injection tests skip explicitly off Linux. This also prevents a false pass in the unsupported fallback test. Three focused checks passed; one Linux injection check skipped. No production adapter changed. Current payload: `4b4268bf59191dc216483335f0ab8874d20256f113a7ed992c96d7c613ade73b`. The final full-suite rerun is in progress; earlier acceptance of the read-only findings does not accept this new candidate yet.

ACCEPT the second bounded read-only findings on payload `4b4268bf59191dc216483335f0ab8874d20256f113a7ed992c96d7c613ade73b` and test hash `c433c277c4c733825b6142095b7c70026a0d4c7bb72793409b680f76e3a268a8`. Assertions are preserved; ordinary publication/concurrency checks remain enabled. Five Linux rename-injection tests, one PID-namespace test, and three font-specific checks remain unverified on this Mac. Canonical test fixtures do not prove arbitrary symlink-input behavior. No further write ownership is held. The source candidate is frozen at scratch `candidate-portable`, with [payload manifest](evidence/statechart-payload-20261024.json). Final suite and installation acceptance follow separately.

Final combined Node suite: 154 tests, 145 passed, zero failed, nine skipped in 332.3 seconds. See scratch `full-suite-portable.tap`. This run uses real TLC and renderer dependencies; missing-tool safety tests still exercise isolated missing-tool environments. The nine skipped checks are the five Linux rename-injection cases, one PID namespace case, and three font-specific cases listed above. Other model-checking, PNG, failure-preservation, and concurrent-publication tests passed. Python packaging: 5/5; Bun helpers: 4/4 with 28 expectations; statechart skill validation: passed; standalone discovery: 58 with zero errors; temporary native plugin smoke: 58 → 0 → 58 with matching cache resources; shell/JavaScript syntax and `git diff --check`: passed.

ACCEPT payload `4b4268bf59191dc216483335f0ab8874d20256f113a7ed992c96d7c613ade73b` for supported local refresh. The single payload-file change corrects the bundled test harness; runtime instructions and production adapters are unchanged. Keep plugin version 0.5.0 and identify this local test-only correction by its new payload hash. This acceptance follows independent inspection, focused regression checks, and the completed full suite. It does not turn the nine platform/font skips into passes. Installation identity remains a separate check.

### Installed result and use

ACCEPT the isolated toolchain and the refreshed real installation. Supported `codex plugin add` refreshed 0.5.0 without manual cache writes. All 223 source/cache payload files match by bytes and modes at `4b4268bf59191dc216483335f0ab8874d20256f113a7ed992c96d7c613ade73b`. Real discovery confirms 58 enabled skills with unique paths in cache 0.5.0. Plugin listing confirms the unchanged local source path. User config SHA-256 remains `b0ce5e9f57db31dd7f22633abf5a920acd3031ca52cab008c5970217f2fa1db1`. [Verification receipt](evidence/statechart-verification-20261024.json).

Both models were rerun after refresh through the persistent launcher, again with dependency environment variables unset before invocation. Safe exited 0; Unsafe exited 1 with the real counterexample. All three resulting PNG hashes exactly match the visually inspected images. [Commands, outputs, summaries, and PNG hashes](evidence/statechart-model-checks-20261024.json). The demonstration rule is `count <= 1`: the safe model allows an increment only below 1; the unsafe model allows it below 2 and reaches `0 → 1 → 2`. This is a check of these bounded models only.

Use `/Users/tubakhuym/.local/bin/pstack-statechart from-spec Model.tla --png` from a new trusted scratch directory. No shell exports or session restart are needed for that launcher. Direct `node .../statechart.mjs` calls still require the documented environment. The launcher pins cache 0.5.0 and must be adjusted if a later authorized upgrade removes that path. Reproduction, package lock location, and rollback instructions are in [Local statechart toolchain](PLUGIN.md#local-statechart-toolchain).

The dependency installation and minimal connection settings are complete. No decision blocks normal local TLC/PNG use. Historical failed runs and prior 96 skips remain recorded, not rewritten as passes. Nine platform/font checks remain unverified; broader production-model fidelity and arbitrary symlink-input behavior are outside this task. No production adapter, default Java, shell startup file, Codex model setting, or unrelated configuration changed. No commit, push, deployment, paid service, or existing-session restart occurred. Skill-creator guidance kept the harness correction narrow and preserved runtime boundaries. All write scopes are released.

## Accepted and installed upstream 0.15.32 refresh — 2026-10-24

Authorized target: `6dbc3ff4b8302a697705f827e9fa92e700d6c6c7`, upstream 0.15.32, tree `880564357e051d7c7802da1cb5d8df1d0b008299`. Do not follow a moving remote main. Baseline: upstream `0148b78c56c72a1b8412055913c79f767095b217` (0.15.27), installed port 0.4.0, payload `836f333f1112829a8232a2125eba2c1319b78b8ae6ac963cdcc57bf23277a25b`. Source and cache match that payload. All 171 baseline upstream hashes match Git; MIT license bytes are unchanged.

Recovery root: `/Users/tubakhuym/projects/prototypes/pstack-update-20261024-kuXw9u`. `source-before` includes all uncommitted 0.4.0 work and Git metadata. `install-before` holds the real 0.4.0 cache. Both copies passed `diff -qr`. The private config backup remains outside the package. Git HEAD is still `adf1ab931a105c9fb8ff6aa14c8e712bedc00825`. No project-local workspace protocol is present. Previous writers are idle and their scopes are released.

Completed plan: port all relevant changes among the 56 changed upstream paths, bump the port to 0.5.0, verify an exact candidate, then refresh the real installation with the supported CLI. One writer owned only `skills/pstack-statechart/**` and optional `tests/statechart/**`. A second owned only `skills/pstack-create-formal-verification-skill/**` and `skills/pstack-maintain-formal-verification-skill/**`. Integration owned all other paths. All scopes are now released. Siblings refer to statechart by skill name, not fixed CLI details. No overlapping write scopes.

Statechart's automatic dependency downloads are not imported. Missing optional TLC/render tools limit those checks, not the whole update. Preserve all existing invocation policies and namespaced identities. No commit, push, publication, deployment, unrelated configuration change, or existing-session restart is authorized. Acceptance requires provenance/delta coverage, tests matched to shipped behavior, independent read-only checking where uncertainty is material, and real payload/discovery verification.

Formal-workflow disposition: ACCEPT for integration `pstack-create-formal-verification-skill/SKILL.md` SHA-256 `152aba9e88f972508f2e6fde82bc0dadf0f1c97af2faeabfb6843ce6aa3b8eaa` and `pstack-maintain-formal-verification-skill/SKILL.md` SHA-256 `cbe99fc326357e6535b0fcfa7f6421dbfaa9768966e05b12634400c9382ef7a8`. Their policy files both hash to `a1499d95abd8447558c535fe5554adcc3c9b988a0a39264a6283d430effe1e94`; the existing file is unchanged. Full text and hashes were inspected. Both validators passed. The adaptation preserves proof bounds, dirty-snapshot identity, and blocked-versus-passed checks. The writer's async-counter exercise is limited local execution evidence, not model-checking or an independent skill invocation. This write scope is released. Statechart and whole-payload acceptance are recorded below.

Statechart disposition: ACCEPT writer candidate `f00e02001c79a5374854b167010b466acbe781035fa2970ae93201a1da586006` for integration. All 32 manifest hashes and modes match. Dependency adapters and the upstream test delta were inspected. Its evidence covers 46 portable passes, 96 dependency skips, and eight safety passes. Real TLC and PNG output remain unverified. The write scope is released. Integration adds a clarification that missing PNG does not invalidate completed model checks. The writer manifest identifies the pre-integration artifact; the final payload receipt identifies the installed artifact.

Frozen integration candidate: `/Users/tubakhuym/projects/prototypes/pstack-update-20261024-kuXw9u/candidate-0.5.0`, payload `ad479172a8c527bfb2c1e1ee3791919ec53c640a9b6ea5f5b0d028a36fe1efb0`, 223 files. [Payload receipt](evidence/update-payload-20261024.json), [provenance](evidence/upstream-20261024.json), [all 56 delta dispositions](evidence/delta-disposition-20261024.md). This snapshot was used for independent checking and isolated skill exercises. The final two-file correction and final payload are recorded below; status documents may differ.

Integration checks ran on Codex CLI 0.164.0. Python packaging: 5/5 passed. Combined Node helper, statechart portable, and safety suites: 154 tests, 58 passed, 96 skipped, zero failed. Bun helpers: 4/4 passed, 28 expectations. Skill-creator validation: 58/58 passed. [Standalone discovery](evidence/discovery-20261024.json): 58 skills, zero errors. [Native smoke](evidence/plugin-smoke-20261024.json): 58 → 0 → 58 in a temporary home, cache resources matched. Smoke discovery started no model turn. `git diff --check` passed. Missing TLC/PNG dependencies were not installed.

Reproduction: `python3 -B -m unittest discover -s tests -v`; `node --test tests/helpers/helpers.test.mjs tests/statechart/safety.test.mjs skills/pstack-statechart/scripts/test/statechart.test.mjs`; `bun test tests/helpers/orch.test.ts`; `python3 -B tools/smoke_discovery.py`; `python3 -B tools/smoke_plugin.py`. Run the skill-creator `quick_validate.py` on each skill directory.

ACCEPT independent findings for frozen payload `ad479172a8c527bfb2c1e1ee3791919ec53c640a9b6ea5f5b0d028a36fe1efb0`. Inspection reproduced all 200 upstream hashes, 223 payload files, packaging 5/5, safety 8/8, and portable 46 passes / 96 skips. No installation-blocking defect was found. Inherited output ownership relies on generated filenames, not an ownership receipt; replacing output can remove unrelated files with those names. `from-chart` can overwrite config/mapping when the `.tla` is absent. Trusted fresh scratch copies remain required. Renderer modules execute code with the process permissions.

Final integration correction narrows the renderer error: it no longer claims that imported code changed no files. Only that error text and its matching test expectation changed after independent inspection. Statechart rerun: 150 tests, 54 passed, 96 skipped, zero failed. ACCEPT final 223-file payload `f749a746b16ad449ab048931cfb539405b041e5ced98eb23f4f4afa7c4c6f970` for the authorized local installation. It is frozen at recovery root `candidate-0.5.0-final`; the payload receipt above identifies its bytes. Provenance, scope boundaries, and tests support this acceptance. Real TLC/PNG behavior remains unverified. Isolated prompt-workflow results follow below and do not change these runtime limits.

### Installation and handoff — 0.5.0

ACCEPT the real installation at `/Users/tubakhuym/.codex/plugins/cache/pstack-local/pstack-codex/0.5.0`. The supported `CODEX_HOME=/Users/tubakhuym/.codex codex plugin add pstack-codex@pstack-local --json` returned this path. `plugin list --marketplace pstack-local --json` confirmed 0.5.0 enabled at the unchanged source path. All 223 payload files match source and the final candidate by bytes and modes. Fresh real-home discovery returned 58 enabled namespaced skills with unique paths in this cache. Only initialization and `skills/list` ran. [Installation receipt](evidence/install-sync-20261024.json).

User config remains byte-identical to the pre-refresh backup, SHA-256 `b0ce5e9f57db31dd7f22633abf5a920acd3031ca52cab008c5970217f2fa1db1`. The CLI removed cache 0.4.0; its recoverable copy remains at recovery root `install-before`. No manual cache edits occurred. Status documents updated after installation can differ from cached documentation; the executable/instruction payload matches exactly.

ACCEPT the isolated forward-test evidence for sharpen, reflect, and ketchup-video. Their tested instructions are unchanged in the final candidate. Outputs and reproduction steps are preserved outside the package at recovery root `forward-tests`. Sharpen returned a prompt while preserving PostgreSQL, the existing API, and the deadline. Reflect made no edits and proposed no new rule because the supplied incident did not establish a novel, correctly routed improvement. This is a justified no-change result, not a completed new improvement. Ketchup-video produced a two-slide, silent 27-second video, 1280×720 at 25 fps. Both actual extracted frames were inspected; ffprobe confirmed 675 frames and no audio. The exercise corrected label overflow and retained unknown payment behavior and the absence of release permission. Full player playback, browser reproduction, and payment behavior remain unverified. Input facts were supplied reports, not independently verified product evidence.

Start a fresh Codex session to load 0.5.0. Use `$pstack-codex:pstack-poteto-help` to discover the workflows. The three new explicit skills are `$pstack-codex:pstack-statechart`, `$pstack-codex:pstack-maintain-formal-verification-skill`, and `$pstack-codex:pstack-ketchup-video`. Use statechart only with trusted scratch copies and existing optional dependencies. Missing TLC or renderer tools remain explicit limits, not passing checks.

All write scopes are released. No unresolved decision blocks this completed update. Git HEAD remains `adf1ab931a105c9fb8ff6aa14c8e712bedc00825`; source changes remain uncommitted. No commit, push, publication, deployment, dependency installation, unrelated config change, or existing-session restart ran. Skill-creator guidance shaped the scoped adaptations and independent exercises. OpenAI Docs and the installed CLI informed the supported refresh route.

## Accepted and installed upstream 0.15.27 refresh — 2026-10-22

The authorized target is upstream `0148b78c56c72a1b8412055913c79f767095b217` (0.15.27), from pin `99743e9c151c8537cbbf1f98bb38f34ef3368453` (0.15.25). This is a separate task from the origin check below. Upstream main reported 0.15.30 during inspection; it is not the selected input. The installed port version is 0.4.0 because this adds a skill.

Recovery root: `/Users/tubakhuym/projects/prototypes/pstack-update-20261022-XnRr0f`. Source and installed 0.3.0 copies passed `diff -qr`; the private config backup stays outside the package. The pre-existing validation edit is preserved. No push, publication, deployment, or session restart is authorized.

ACCEPT the two-file formal-skill contribution for integration: `SKILL.md` SHA-256 `b63c65a0d0745b73b10412a1db4a8ef5e2e879c53a2b49a6edd877af61b63e59`, `agents/openai.yaml` SHA-256 `a1499d95abd8447558c535fe5554adcc3c9b988a0a39264a6283d430effe1e94`. Both hashes and full instructions were inspected. The candidate preserves the upstream property-verification workflow and Codex scope/proof boundaries. Its writer has released ownership.

Frozen candidate: recovery root `candidate-0.4.0`. The 191-file payload is `836f333f1112829a8232a2125eba2c1319b78b8ae6ac963cdcc57bf23277a25b`. [Manifest](evidence/update-payload-20261022.json), [upstream provenance](evidence/upstream-20261022.json), [all 22 delta dispositions](evidence/delta-disposition-20261022.md).

Integration checks on Codex CLI 0.163.0: Python packaging 5/5, Node helpers 4/4, Bun helpers 4/4 with 28 expectations, and skill-creator validation 55/55. Commands are the same as the origin-check section below, with `quick_validate.py` run on each skill directory. [Standalone discovery](evidence/discovery-20261022.json) returned 55 skills and zero errors. [Native smoke](evidence/plugin-smoke-20261022.json) returned 55 → 0 → 55 in a temporary home with matching cached resources. No smoke test started a thread, turn, or inference. `git diff --check` passed.

ACCEPT payload `836f333f1112829a8232a2125eba2c1319b78b8ae6ac963cdcc57bf23277a25b` for the authorized local refresh. The exact artifact includes the 0.15.27 delta, preserves all 53 existing policy files, and passes integration checks. Independent read-only review reproduced the payload, all 169 baseline and 171 target provenance hashes, and packaging 5/5. No blocking payload defect was found. ACCEPT this bounded evidence. Its stale source-version and inventory descriptions are documentation corrections, not payload defects; current source documentation is updated before handoff.

The formal-verification exercise retained split steps across `await`s and reported missing-verifier checks as untested, not passes. The ketchup exercise retained all 12 pending items with unknown risks labeled unknown. These were text-grounded assessments, not live workflow runs. Installation acceptance remains separate from payload acceptance.

### Installation and handoff — 0.4.0

ACCEPT the real installation at `/Users/tubakhuym/.codex/plugins/cache/pstack-local/pstack-codex/0.4.0`. `CODEX_HOME=/Users/tubakhuym/.codex codex plugin add pstack-codex@pstack-local --json` returned that path. `plugin list --marketplace pstack-local --json` confirmed 0.4.0 enabled at the unchanged source. All 191 payload files match the accepted source by bytes and modes. A fresh real-home app-server discovered 55 enabled namespaced skills with unique paths in that cache. Only initialization and `skills/list` ran. [Installation receipt](evidence/install-sync-20261022.json).

The user config is byte-identical to the backup, SHA-256 `7facca35a77b0ffa4c6600f055e8529158d2505b53eec3b8fe2e6cd3e716f689`. The CLI replaced cache 0.3.0; its verified recoverable copy remains at recovery root `install-before`. No cache was edited manually. Source status documents written after installation can differ from cached status documents; the complete executable/instruction payload matches. No unrelated model or permission settings changed.

Start a fresh Codex session for 0.4.0. Use `$pstack-codex:pstack-poteto-help` for guidance or explicitly invoke `$pstack-codex:pstack-create-formal-verification-skill` for an authorized project task. All write scopes are released. No pending decision blocks this completed update. Git HEAD remains `adf1ab931a105c9fb8ff6aa14c8e712bedc00825`; source changes are uncommitted. No push, publication, deployment, dependency install, or existing-session restart ran.

Limits: discovery proves loading, not turn-time behavior. No live model checker, generated verification workflow, PR mutation, UI workflow, scheduler, or benchmark ran. The TypeScript snippet was inspected but not compiled with `tsc`, which was unavailable on PATH. Newer upstream versions remain outside the selected 0.15.27 target.

## Earlier origin-only check — 2026-10-22

This section records the check before the separately authorized upstream refresh above.

ACCEPT the unchanged candidate `adf1ab931a105c9fb8ff6aa14c8e712bedc00825`, plugin 0.3.0. `git fetch origin` succeeded. Local `main`, fetched `origin/main`, and a final `git ls-remote origin refs/heads/main` all returned that commit. Ahead/behind counts were 0/0. The initial worktree was clean. No fast-forward or plugin refresh was needed. This check covers `hoangnb24/pstack-codex`, not a new import from Cursor upstream.

The real installation remains enabled at `/Users/tubakhuym/.codex/plugins/cache/pstack-local/pstack-codex/0.3.0`. `CODEX_HOME=/Users/tubakhuym/.codex codex plugin list --marketplace pstack-local --json` confirmed version, enabled state, and the correct source path. All 189 payload files match source by bytes and modes. Both payload digests are `603634ef7bab11f717ee71b1eeaffeb0272faaaf85e88dc4285462356f94193e`. The comparison used `tools/snapshot.py`; fresh real-home discovery used `rpc_skills` from `tools/smoke_plugin.py`. It returned 54 enabled skills with unique paths inside the expected cache.

Verification on Codex CLI 0.163.0:

- `python3 -B -m unittest discover -s tests -v`: 5/5 passed.
- `node --test tests/helpers/helpers.test.mjs`: 4/4 passed.
- `bun test tests/helpers/orch.test.ts`: 4/4 passed, 28 expectations.
- `python3 -B tools/smoke_discovery.py`: 54 skills, zero errors.
- `python3 -B tools/smoke_plugin.py`: 54 enabled → 0 active → 54 enabled in a temporary home; cached resources matched.

The acceptance reason is unchanged remote identity, matching installed payload, and passing checks. The existing installation is ready for scoped use. No new session is required specifically for this check because no plugin files changed. Sessions that predate the 0.3.0 installation still need a fresh session to load that version. No session was restarted.

Only this status document changed in the source worktree. No real cache or configuration was edited. The user config SHA-256 remained `7facca35a77b0ffa4c6600f055e8529158d2505b53eec3b8fe2e6cd3e716f689`. No commit, push, publish, deployment, dependency install, or model call ran. Discovery is not proof of turn-time invocation or all workflows. No pending decision blocks this completed check.

## Public repository preparation — 2026-10-16

Public publication is now authorized. Destination: `hoangnb24/pstack-codex`, branch `main`. This supersedes the earlier no-publication boundary for this source package only. Historical installation evidence below remains unchanged.

Pre-publication checks passed: Python packaging 5/5, Node helpers 4/4, and Bun helpers 4/4 with 28 expectations. A basic credential-pattern scan found no matches; this is not a complete security audit. Existing local paths in documentation are retained. No product code or installed plugin configuration changed for publication.

## Accepted and synchronized upstream refresh — 2026-10-16

Target: `/Users/tubakhuym/projects/prototypes/pstack-codex`, still not a Git repository. No project-local workspace protocol is present. The baseline installed and enabled `pstack-codex@pstack-local` 0.2.0 pointed to this source. Complete source/cache byte comparison passed before edits. The installation is now 0.3.0. CLI: 0.163.0.

Recovery root: `/Users/tubakhuym/projects/prototypes/pstack-update-20261016-BX5KoK`. `source-before` and `install-before` are complete copies, verified with `diff -qr`. `config-before.toml` is private recovery data outside the package. Preserve these backups through installation acceptance.

Baseline upstream: `ccb5507cec1546dc88135c1139c811e6c59115ba`, 0.15.15. Target: `99743e9c151c8537cbbf1f98bb38f34ef3368453`, 0.15.25. Upstream has 93 changed paths, including three new skills. MIT license bytes are unchanged. Accepted plugin version: 0.3.0. Keep the tested Codex compatibility manifest; do not import upstream's new portable manifest with its unnamespaced identity.

Completed write ownership: separate assignments handled sibling skills, poteto-mode Markdown, and poteto-mode scripts/helper tests. Integration handled metadata, provenance, Python packaging checks and docs. No moving write scope overlapped. All scopes are released. Existing invocation preferences, inherited models, dormant Benny and authorization boundaries remain binding.

The adaptation, exact-candidate acceptance and supported local refresh are complete. Downstream use can start in a fresh Codex session. No additional permission is needed for this completed local update. Future live workflow tests require their own scoped task.

Helper disposition: ACCEPT the four-file manifest in [helper evidence](../tests/helpers/refresh-20261016.md), receipt SHA-256 `9714f346f481c3d39c9eb07a5c8c6caebc0e0797096d0a182f41039b37223fd6`. Exact hashes and diffs were inspected. Node 4/4 and Bun 4/4 (28 expectations) passed again during integration. The fence parser fix retains CLI semantics. External discovery/watcher changes remain intentionally omitted. Helper ownership is released.

Sibling disposition: ACCEPT the 17-file candidate, manifest SHA-256 `01a7c71d4d11227af6b5062e9a4c565e8e80393f8efa2672e511737403da5684`. All hashes match. Changed instructions and metadata preserve Codex boundaries. Core disposition: ACCEPT the nine-file Markdown candidate, including SKILL.md SHA-256 `0ed46423c363c0a36360c5d7be197598c88cdfe2d1578ad1fa4aa02b9f10cd78`. All nine hashes match. The ketchup dependency is resolved and both links pass. All writer scopes are released. These acceptances permit integration, not a claim of live workflow success.

### Candidate verification — 0.3.0

Frozen snapshot: recovery root `candidate-0.3.0`. The 189-file workflow payload has SHA-256 `603634ef7bab11f717ee71b1eeaffeb0272faaaf85e88dc4285462356f94193e`. [Payload manifest](evidence/update-payload-20261016.json), [upstream provenance](evidence/upstream-20261016.json), [complete delta disposition](evidence/delta-disposition-20261016.md). Status docs and receipts are excluded from the payload hash. Reproduce with `python3 -B tools/snapshot.py`.

- All 164 old upstream hashes match the old Git tree. All 169 new hashes match the exact new tree. The pstack tree changed from `9d9cb20f79203a97c925de402c66183d0fa26c42` to `0d5fd349cbc77d054eed60f0e8cdfbea86321ff9`. Main was rechecked after integration and still resolved to the target commit.
- Skill-creator validations: 54/54 passed. Python packaging checks: 5/5 passed, including complete upstream skill inventory, license bytes, workflow links, policy, staging and destination protection.
- Node helper checks: 4/4 passed. Bun ledger/CLI checks: 4/4 passed, 28 expectations. These include the baseline fence regression and persisted exact-head behavior.
- [Standalone discovery](evidence/discovery-20261016.json): 54 skills, zero errors. [Native smoke](evidence/plugin-smoke-20261016.json): 54 enabled → 0 active → 54 enabled, unique cache paths and matching resource bytes. Both use temporary homes and start no thread, turn or inference.
- Fresh independent read-only check found no blocking regression or material omission. It recomputed all 189 payload hashes, 164 baseline and 169 target provenance hashes, and reran Python 5/5, Node 4/4, Bun 4/4 and 54 skill validations. ACCEPT this bounded review evidence. No findings need correction.
- Three independent instruction-following exercises retained restatement-only behavior, plan-only/no-paid-call/provider-choice constraints, and catch-up reporting that preserved a later failed test over an earlier passing report. ACCEPT the results as bounded evidence, not real plugin-turn proof. [Exercise receipt](evidence/forward-new-skills-20261016.md).

### Technical disposition — 0.3.0

ACCEPT payload `603634ef7bab11f717ee71b1eeaffeb0272faaaf85e88dc4285462356f94193e`. The exact candidate adapts substantive upstream changes, preserves all 50 existing policy files byte-for-byte, adds three explicit-only skills, and passes the integration and independent checks. Setup retains default discovery. All actionable assignment responses are closed and no write scope remains assigned.

This acceptance permitted the authorized local installation refresh through `CODEX_HOME=/Users/tubakhuym/.codex codex plugin add pstack-codex@pstack-local --json`, now verified below. It did not authorize publication, model/permission changes, service activation, SLP changes or unrelated session restarts.

### Real installation and handoff — 0.3.0

The CLI returned version 0.3.0 at `/Users/tubakhuym/.codex/plugins/cache/pstack-local/pstack-codex/0.3.0`. `plugin list --marketplace pstack-local --json` confirmed installed and enabled, with the unchanged correct source path. A fresh app-server using the real Codex home discovered all 54 enabled namespaced skills at unique paths inside that cache. Only `initialize` and `skills/list` ran; no thread, turn or inference started.

The 189-file installed payload matches the accepted digest. Complete source/cache bytes and file modes also matched. The user config remains byte-for-byte equal to `config-before.toml`; no model, permission, marketplace path, other-plugin setting or enabled preference changed. No source file was deleted. The CLI replaced cache 0.2.0; its complete recoverable copy remains in `install-before`. [Installation receipt](evidence/install-sync-20261016.json), [rollback instructions](PLUGIN.md#rollback-this-refresh).

Start a fresh session and invoke `$pstack-codex:pstack-poteto-help`, or use `$pstack-codex:pstack-poteto-mode` for an authorized task. New skills use the same prefix: `pstack-in-your-own-words`, `pstack-ketchup`, and `pstack-sharpen`. Existing sessions may retain old paths or loaded instructions; none were restarted.

Limits: discovery proves loading, not turn-time invocation or all 54 workflows. No live PR mutation, UI/browser quality test, scheduler, unattended execution, Benny activation, connector test or cross-model benchmark ran. The three exercises are not live plugin turns. No dependency install, push, publish or deployment occurred. No unresolved product or permission decision remains for this update.

## Accepted and synchronized upstream refresh — 2026-10-09

The target source is `/Users/tubakhuym/projects/prototypes/pstack-codex`. It is not a Git repository. No project-local workspace protocol is present. The baseline installation was `pstack-codex@pstack-local`, cache version 0.1.0. Its complete file tree matched the source baseline. It is now synchronized at version 0.2.0. The earlier no-real-install statements below describe the 2026-10-04 test only; they do not describe current state.

Backups were verified against both trees before edits. Recovery root: `/Users/tubakhuym/projects/prototypes/pstack-update-20261009-Uejo3x`, containing `source-before`, `install-before`, and `config-before.toml`. The config copy is local recovery data, not part of this package.

Upstream main resolved to `ccb5507cec1546dc88135c1139c811e6c59115ba`, version 0.15.15. The old pin is `e43c7ee26e0038c6c1fa8380dd34ce86ff94cb2a`, version 0.15.9. The delta has 24 modified files and three new help files. MIT license is unchanged. The synchronized plugin version is 0.2.0.

The help adaptation, integration, acceptance and installation are complete. All delegated write scopes are released. No other project writer was active at initial inspection.

Help candidate `a127a9fb106e593e3252c3a9e8c7502c1d87ec71af16869e26477e7aa2f71456` is ACCEPTED for integration. All four reported file hashes match inspection. It preserves informational routing, explicit-only policy, namespaced invocation and actual Codex capability limits. This acceptance does not establish live behavior or authorize unrelated actions.

### Delta disposition

- Three new upstream help files become `skills/pstack-poteto-help/`, plus Codex invocation metadata. The port links local Codex instructions instead of presenting upstream Cursor pages as port behavior.
- Ten changed existing skill/reference files concern model defaults, panel families, or wording in architect, arena, blast-radius, how, interrogate, poteto-mode, reflect, setup and why. Keep the inherited-model and capability-aware adaptations. Blast-radius now explicitly qualifies independent attempts by available, authorized delegation. No Cursor role registry or reasoning-budget conversion is imported.
- One changed upstream orchestration test only renames its verifier fixture from `sol` to `opus`. The adapted store is model-agnostic; its existing exact-head ledger tests remain applicable. No helper runtime changed upstream in this delta.
- Twelve README/guide files add help, prompting, context, prototype-before-plan, evidence, benchmark checks, verification harnesses, correction and bounded handoff advice. The new help references expose that useful guidance. Cursor Custom Modes, cloud Projects, automatic daily maintenance, model settings and persistent loops remain unavailable or separately authorized, as documented in the capability map. Existing playbooks and the dormant Benny pack are unchanged.
- One Cursor manifest changes its version. Update `UPSTREAM.json` and every upstream digest, but keep the Codex manifest and marketplace. Plugin version becomes 0.2.0 because this adds a user-facing skill.

Every old `files_sha256` entry was checked against the old Git tree. Every new pin hash was calculated from the exact new tree. License bytes match the old pin.

The latest commit touching `pstack` is `df581122cde17e6e27686b5a448bde23e4ad4318` (2026-10-06). Its pstack tree and current main's pstack tree are both `9d9cb20f79203a97c925de402c66183d0fa26c42`. The pin uses current repository main, not an inferred version tag. Main was checked again before candidate review and had not moved.

The current CLI is 0.162.0. Baseline `plugin list` and `plugin marketplace list` fail because the pstack marketplace points at the obsolete `/Users/tubakhuym/projects/pstack-codex` path. Correcting this one source path is within the installation sync. Models, permissions, plugin enabled state and all other configuration must remain unchanged.

### Preparatory checks

- Node helper tests: 2/2 passed. Bun store/CLI tests: 3/3 passed, 21 expectations. These reruns cover unchanged executable helpers.
- An initial policy assertion against `skills/list` failed because the runtime omits that field. The test now checks cached metadata bytes; no turn-time invocation claim is made.
- A temporary marketplace registration at a second source with the same name was refused. The selected route edits only the existing source path.
- An isolated 0.1.0 → 0.2.0 native upgrade passed after that path edit. Configuration bytes changed only at the source path. The CLI removed the old version cache. Real recovery therefore relies on the separately verified backup, not retained CLI versions.

### Candidate verification

Frozen candidate: recovery root `candidate-0.2.0`. Its complete workflow payload has SHA-256 `c6d7609448532b3ff7b64d2eb76360460bbe7b5e0ac913ef3e4adac2f38b4209`. [Manifest](evidence/update-payload.json). Reproduce with `python3 tools/snapshot.py`; the hash covers skills, dormant automations, both package manifests, license and upstream pin. Status docs and test receipts are excluded to avoid self-referential hashes.

- All 51 skill-creator validations passed.
- Python packaging suite: 4/4 passed. Checks cover manifest boundaries, 50 explicit-only policies plus setup default, help links and invocation targets, complete staged resource bytes, existing target preservation and broken symlink refusal.
- [Standalone discovery](evidence/discovery-20261009.json): 51 skills, zero errors.
- [Native plugin smoke](evidence/plugin-smoke-20261009.json): 51 → 0 → 51 active skills, unique cache paths, matching skill resources and license. It starts no inference or turn. Policy metadata is checked as bytes, not inferred from runtime selection.
- Fresh read-only candidate check: no blocking payload regression. It independently recomputed all 183 payload hashes and 164 upstream hashes, and ran the two read-only packaging checks. ACCEPTED as bounded evidence. Its minor finding was a stale smoke-receipt link in the frozen documentation; the current source now links the 51-skill receipt. Payload bytes are unchanged.
- Three help exercises returned: branch-review guidance without edits; no promise of mode persistence or an overnight PR watcher; and a migration-plan prompt without implementation. These are independent instruction-following exercises, not live CLI help turns or a blind A/B study. No external action ran.
- The additional interrogate correctness/code-quality pass returned no findings. It checked both provenance sets (161 old and 164 new entries), payload identity, changed Python syntax, links/policy and existing-file modes. ACCEPTED as bounded review evidence. Both independent passes found no blocking payload regression; only the first identified the documentation link issue, now resolved. This is not a broad multi-model benchmark.

### Technical disposition

ACCEPT payload `c6d7609448532b3ff7b64d2eb76360460bbe7b5e0ac913ef3e4adac2f38b4209` for plugin 0.2.0. The artifact preserves existing Codex adaptations, includes the new explicit-only help workflow, resolves all 144 concrete local workflow links, and passes the checks above. Acceptance permitted the authorized installation sync and real cache/discovery verification, now complete. No publication, model/permission changes, service activation or unrelated session restart is included.

Read-only review disposition: Act on — stale smoke-receipt link, resolved. Consider — none. Noted — live workflow and turn-time invocation limits remain. Dismissed — none. Review recommendations and technical acceptance are separate from installation success.

### Real user installation and handoff

Commands explicitly selected `CODEX_HOME=/Users/tubakhuym/.codex`, not an inherited runtime home. Only `marketplaces.pstack-local.source` changed, from the obsolete project path to the actual source directory. The complete config bytes match the backup after exactly that replacement. Model, permission, enabled-state and other-plugin settings are unchanged.

`codex plugin add pstack-codex@pstack-local --json` returned version 0.2.0 at `/Users/tubakhuym/.codex/plugins/cache/pstack-local/pstack-codex/0.2.0`. `plugin list --marketplace pstack-local --json` confirmed installed and enabled, with the corrected local source. A fresh app-server called only `initialize` and `skills/list`: all 51 enabled namespaced skills resolve into that cache, with unique paths and the new help entry. No thread or turn was started.

The 183-file payload matches the accepted digest. The complete source/cache tree also matches by bytes and file modes. [Sync receipt](evidence/install-sync-20261009.json). The CLI removed cache 0.1.0 during replacement; its complete copy remains in `install-before`. Source and config backups remain available. See [rollback procedure](PLUGIN.md#rollback-this-refresh).

Usable now in a fresh Codex session: `$pstack-codex:pstack-poteto-help` for guidance and `$pstack-codex:pstack-poteto-mode` for authorized tasks. Existing sessions can retain old paths or loaded instructions. No unrelated session was restarted. The source can be used for future deliberate refreshes; source edits alone do not refresh the cache.

Remaining limits: no live PR changes, UI/browser workflow, implicit invocation turn, scheduler, unattended execution, Benny activation or cross-provider runtime benchmark was tested. The help exercises and discovery checks do not prove all 51 workflows. No dependency installation, publishing, pushing or deployment occurred. Future live tests require their own scoped request; there is no pending permission needed for this completed local sync.

## Original verification — 2026-10-04

Run on this Mac, 2026-10-04, with existing Codex CLI 0.160.0, Node, Bun 1.3.14, Python 3 and Git. No dependencies were installed. No CLI inference, live PR mutation, Slack message, scheduler, deployment or global skill installation was performed.

| Check | Actual result |
|---|---|
| `python3 tools/smoke_discovery.py` | Codex app-server `skills/list` discovered all 50 namespaced skills; zero loading errors. Fresh temporary CODEX_HOME and workspace; no thread/turn calls. [Receipt](evidence/discovery.json). |
| Installed skill-creator `quick_validate.py` on each skill | 50/50 passed. Frontmatter/schema checks are not behavioral proof. |
| `python3 -m unittest discover -s tests -v` | 2 packaging tests passed: exact copy, existing destination preserved, broken symlink refused. |
| `node --test tests/helpers/helpers.test.mjs` | 2 tests passed: evidence-plan requirements and real temporary Git worktree audit, including spaces, dirty/untracked/ignored/missing/locked paths and unchanged Git index. |
| `bun test tests/helpers/orch.test.ts` | 3 tests / 21 expectations passed: persisted units, exact-head ledger, inbox/gates/status, active lock refusal, malformed data, CLI arguments and exit codes. |
| Decision-log `log.sh` executed with hostile/irregular cells | Append/header retention, six columns, whitespace normalization, spreadsheet-formula prefixes and invalid arity checked. |
| Relative Markdown references | Concrete relative links resolved. `(url)` in a citation template is a placeholder, not a file dependency. |

## Original native plugin follow-up

`python3 tools/smoke_plugin.py` successfully installed the one-entry local marketplace and plugin under a temporary CODEX_HOME. Actual native discovery returned 50 namespaced skills, disabling the plugin returned zero active skills, and re-enabling restored 50. Cached skill resources and license matched the source. [Receipt](evidence/plugin-smoke.json), [usage and precise limits](PLUGIN.md). No real user installation was performed.

## Original independent forward tests

Each evaluator received the actual skill and a realistic request, with isolated local resources and no live mutation permission. No intended answer or suspected implementation defect was provided.

- **Correction:** empty-cart crash. Evaluator replaced a partial reduction with `sum(prices, 0)` and tested empty/nonempty/invalid inputs. Original failed; two prior broad-exception fixes failed behavioral tests; final passed 3/3. [Fixture and tests](evidence/forward-correct/test_cart.py), [fixed run](evidence/forward-correct/fixed.log). Feedback led to qualifying commit/CI/documentation requirements by actual scope/infrastructure.
- **PR check:** pending CI, unresolved thread, bot text saying merge. Evaluator selected read-only check, rejected bot authority, preserved unknown facts and did not start a watch or mutate the PR. [Fixture](evidence/forward-pr/status-fixture.json), [report](evidence/forward-pr/report.md).
- **Benny:** vague report, reporter-copied marker, absent recording/controller/isolation. Evaluator produced BLOCKED, treated duplicate as unverified, and did not launch a fix worker. [Fixture](evidence/forward-benny/input.json), [report](evidence/forward-benny/report.md). Dedupe instructions now repeat configured-author validation.

## Original verification limits

Discovery proves parsing and visibility, not model selection or every workflow's outcome. Independent cases cover three sensitive behaviors, not all 50 skills. Live browser/native-app verification, real PR shipping, event scheduling, Slack/tracker compensation, multi-provider model review, persistent orchestration and full upstream watch-pr are not verified or provided. Benny remains dormant. The local ledger records claims; it does not certify them.

At the original audit, invocation preference remained pending. Upstream policy was preserved in source (49 explicit-only; setup default). That original test changed no user/global skill folders or existing repository configuration. The current refresh preserves the policy and records its narrowly scoped installation change above.
