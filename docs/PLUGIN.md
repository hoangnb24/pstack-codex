# One native Codex plugin

The source root is one native plugin, `pstack-codex@pstack-local`, using the `.codex-plugin/plugin.json` compatibility manifest. Its local marketplace is `.agents/plugins/marketplace.json`, with one entry pointing to `./`. The manifest registers only `./skills/`; no MCP, apps, hooks, credentials or background services are added. Benny stays dormant. Source plugin version: 0.5.0. Current CLI: 0.164.0. See validation for installation state.

## Existing local installation

The 2026-10-24 refresh installed and enabled 0.5.0 at `/Users/tubakhuym/.codex/plugins/cache/pstack-local/pstack-codex/0.5.0`, based on upstream 0.15.32. All 223 payload files match source by bytes and modes. Real discovery returned 58 enabled skills. User config bytes are unchanged. See [validation](VALIDATION.md) and the [receipt](evidence/install-sync-20261024.json). Start a fresh session to load it. This version adds statechart, formal-workflow maintenance, and ketchup-video. Statechart uses existing local TLC and renderer dependencies; it never installs them.

Earlier installation: the 2026-10-22 refresh installed and enabled version 0.4.0 at `/Users/tubakhuym/.codex/plugins/cache/pstack-local/pstack-codex/0.4.0`, based on upstream 0.15.27. Real discovery returned 55 enabled skills with unique cache paths. All 191 payload files match source by bytes and modes. User config bytes are unchanged. See [validation](VALIDATION.md) and the [installation receipt](evidence/install-sync-20261022.json). Start a fresh session to load the new skill and instructions. No existing session was restarted.

The following paragraphs record earlier installation history.

The 2026-10-16 refresh installed and enabled version 0.3.0 at `/Users/tubakhuym/.codex/plugins/cache/pstack-local/pstack-codex/0.3.0`. Real discovery returned 54 enabled skills with unique cache paths. The accepted payload matches source, and user config bytes are unchanged. See [current validation](VALIDATION.md) and the [0.3.0 smoke receipt](evidence/plugin-smoke-20261016.json). Start a new session to load this version.

The paragraph below records the earlier installation history.

The 2026-10-09 refresh upgraded the enabled real installation from 0.1.0 to `/Users/tubakhuym/.codex/plugins/cache/pstack-local/pstack-codex/0.2.0`. Its marketplace now points at the actual source directory. [Validation](VALIDATION.md) records the accepted payload, checks and rollback location. Real discovery returned 51 enabled skills, and source/cache bytes and modes matched. The earlier temporary-install tests did not establish that the real home remained uninstalled.

For this local source, these commands register and install the plugin. Run them only for an authorized installation or refresh:

```sh
codex plugin marketplace add /Users/tubakhuym/projects/prototypes/pstack-codex
codex plugin add pstack-codex@pstack-local
codex plugin list --marketplace pstack-local --json
```

The installed CLI uses `plugin add`, not `plugin install`. A version change replaces the old cache with a new versioned cache. CLI 0.162.0 does not retain the old cache. Back up source, existing cache and relevant config before refreshing. Verify the returned installed path and compare it with the accepted source. Start a fresh Codex session after the sync; existing sessions can retain earlier skill paths and loaded instructions. Do not restart unrelated sessions.

For an existing marketplace whose source moved, change only its existing `marketplaces.pstack-local.source` path. `marketplace add` refuses a duplicate name with a different source. Do not remove other marketplaces or rewrite the complete user configuration. Then run `plugin add pstack-codex@pstack-local` to refresh this plugin.

Invoke the namespaced plugin skill:

```text
$pstack-codex:pstack-poteto-mode Reproduce this bug, fix its cause and verify the result.
```

The offline `skills/list` result confirms that name. Sibling directory references remain inside the plugin cache. The source `tools/stage.py` is an alternative standalone test route, not an additional installation step. Do not stage those same skills into `.agents/skills` in a project where the plugin is enabled: those independent copies would survive disabling the plugin and create duplicates.

## Local statechart toolchain

The local `pstack-statechart` launcher connects plugin 0.5.0 to a separate user-local toolchain. It sets `JAVA`, `TLA2TOOLS`, and `STATECHART_RENDERER` only for its child process. It does not change shell startup files or default Java. See [dependency provenance](evidence/statechart-dependencies-20261024.json) and [validation](VALIDATION.md) for test results.

Installed dependencies: TLA+ release 1.7.4 (`TLC2 Version 2.19`), Pele 1.8.0, and Resvg 2.6.2 with its Darwin ARM64 binary. Existing Homebrew Java 17.0.20 and Node 22.22.3 are reused. The renderer's `package-lock.json` records exact npm URLs and integrity hashes. npm lifecycle scripts were disabled. Toolchain root: `/Users/tubakhuym/.local/share/pstack-statechart/toolchain-1`.

1. Copy trusted model, config, and mapping files into a new scratch directory. The CLI can replace its selected output folder. Do not use a product directory as scratch.
2. In that scratch directory, run `/Users/tubakhuym/.local/bin/pstack-statechart from-spec Model.tla --png`.
3. Inspect the PNG, `summary.json`, `stories.md`, and retained TLC output. Exit 1 means a rule broke; exit 2 means an operational error. A generated chart alone is not evidence that the model describes production code.

The command works in a fresh session without prior exports. For an explicit skill request, include: `Use $pstack-codex:pstack-statechart with /Users/tubakhuym/.local/bin/pstack-statechart in a new scratch directory.` The launcher pins the installed 0.5.0 cache path. A later plugin upgrade that removes that cache requires updating the launcher after verification; it does not silently select another version.

For repository tests, set the same dependencies in a subshell:

```sh
(
  . /Users/tubakhuym/.local/share/pstack-statechart/toolchain-1/env.sh
  node --test skills/pstack-statechart/scripts/test/statechart.test.mjs tests/statechart/safety.test.mjs tests/helpers/helpers.test.mjs
)
```

To reproduce dependencies after an authorized repair, download the fixed [TLA+ 1.7.4 release](https://github.com/tlaplus/tlaplus/releases/tag/v1.7.4) artifact and verify its published SHA-1 plus the recorded SHA-256. In `toolchain-1/renderer`, run `npm ci --ignore-scripts --no-audit --no-fund --registry=https://registry.npmjs.org --cache=../npm-cache` against the retained lock. Do not replace unrelated global packages.

Rollback: preserve generated work, then move only the new launcher and `toolchain-1` directory to a recovery location. Do not remove the pre-existing Homebrew Java or Node installation. No shell or Codex configuration restoration is needed. The source/cache copies before the bundled test-probe correction are in `/Users/tubakhuym/projects/prototypes/pstack-statechart-check-20261024-qwQ5eM/source-before-probe-fix` and `cache-before-probe-fix`. If reverting that correction, preserve later source changes and refresh through `codex plugin add`; never overwrite the cache manually.

## Turn the whole pack off or on

The official CLI UI route is `codex`, then `/plugins`, select the installed pstack entry and press **Space**. This UI route is documented by OpenAI; the terminal UI was not driven in this test.

The native configuration key is:

```toml
[plugins."pstack-codex@pstack-local"]
enabled = false
```

`true` enables it. Edit the existing table rather than duplicating it. This config mechanism was actually tested through three fresh app-server sessions: **50 enabled skills → 0 active skills → 50 enabled skills**. No custom toggle script or per-skill disabling is needed. A project `.codex/config.toml` override applies only to a trusted project; the user-level plugin setting controls its default state.

Plugin enabled state is separate from `agents/openai.yaml` implicit invocation. Version 0.5.0 preserves all 54 existing policy files and adds three explicit-only skills: 57 explicit-only skills, setup with normal discovery. No model or permission changes are needed.

## Reproduce without touching user configuration

```sh
python3 tools/smoke_plugin.py
```

The test uses a temporary home and empty workspace. It installs the native local marketplace/plugin, checks every cached skill resource byte-for-byte and the license, checks every namespaced skill path for uniqueness, checks cached invocation metadata, then toggles native config off and back on. It deletes the temporary environment. It starts no inference/thread/turn. The [0.2.0 receipt](evidence/plugin-smoke-20261009.json) records 51 → 0 → 51. The earlier 50 → 0 → 50 result above belongs to the original version. Current receipts are linked from validation.

To remove an installation when authorized, use `codex plugin remove pstack-codex@pstack-local`; inspect `codex plugin remove --help` before use. Removing the source marketplace is separate. Source modifications require refreshing the cached plugin; this package has no automatic updater.

## Rollback this refresh

For the 2026-10-24 refresh, recovery root `/Users/tubakhuym/projects/prototypes/pstack-update-20261024-kuXw9u` contains verified `source-before` and `install-before` copies of 0.4.0. Preserve later edits before restoring the intended source. Then use the supported `plugin add` command and compare against the backup. Do not edit the cache manually or restore unrelated configuration.

### Earlier 2026-10-22 rollback

For the 2026-10-22 refresh, recovery root `/Users/tubakhuym/projects/prototypes/pstack-update-20261022-XnRr0f` contains verified `source-before` and `install-before` copies of 0.3.0. The CLI removed the old cache during the supported refresh. Do not overwrite the cache manually. Preserve later source edits, restore only the intended source version, then run `CODEX_HOME=/Users/tubakhuym/.codex codex plugin add pstack-codex@pstack-local --json`. Compare its payload to `install-before`. Preserve current unrelated config and start a fresh session. The private `config-before.toml` is recovery data, not part of this package.

### Earlier 2026-10-16 rollback

For the 2026-10-16 refresh, use `/Users/tubakhuym/projects/prototypes/pstack-update-20261016-BX5KoK`. Its `source-before` and `install-before` hold version 0.2.0. Preserve later edits before restoring files. Keep the valid marketplace path and current unrelated configuration. After restoring the intended source, run `CODEX_HOME=/Users/tubakhuym/.codex codex plugin add pstack-codex@pstack-local`, compare the returned cache with `install-before`, and start a fresh session. Do not restore the entire config if it has later changes.

### Earlier 2026-10-09 rollback

Recovery root: `/Users/tubakhuym/projects/prototypes/pstack-update-20261009-Uejo3x`.

1. Before rollback, compare current source and cache against the refresh receipts. Preserve any later user changes separately.
2. Restore the required source files from `source-before`. It contains the complete 0.1.0 source tree. Do not overwrite later unrelated work.
3. Keep the marketplace source pointed at the real project directory. Do not restore the obsolete source path from `config-before.toml`, or replace the whole user config if it has since changed.
4. Run the authorized `plugin add pstack-codex@pstack-local` against the restored 0.1.0 source. The independent `install-before` directory is also a complete cache backup.
5. Compare the restored cache against `install-before`, then start a fresh session. The CLI does not preserve the replaced version automatically.

The config backup contains local recovery data. Do not copy it into the plugin package or publish it.

## Sources and local evidence

- Installed CLI 0.160.0: `plugin --help`, `plugin add --help`, `plugin marketplace add --help`; real temporary install and `plugin list --json` succeeded.
- Generated installed app-server schema: local marketplace source, plugin install, and `skills/list` methods; actual results used instead of assuming newer documentation features.
- [Official packaging documentation](https://developers.openai.com/plugins/build/plugins): compatibility manifest, local marketplace path resolution and native enabled configuration.
- [Official plugin browser documentation](https://learn.chatgpt.com/docs/plugins): `/plugins` and Space toggle.

The newer portable root `plugin.json` format is described in current docs. This port deliberately uses the compatibility format already observed in this installed runtime and verified by the smoke test; it does not claim testing the portable format or the desktop UI toggle.
