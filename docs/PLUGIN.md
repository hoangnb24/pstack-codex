# One native Codex plugin

The source root is one native plugin, `pstack-codex@pstack-local`, using the `.codex-plugin/plugin.json` compatibility manifest. Its local marketplace is `.agents/plugins/marketplace.json`, with one entry pointing to `./`. The manifest registers only `./skills/`; no MCP, apps, hooks, credentials or background services are added. Benny stays dormant. Source plugin version: 0.3.0. Current CLI: 0.163.0. See validation for installation state.

## Existing local installation

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

## Turn the whole pack off or on

The official CLI UI route is `codex`, then `/plugins`, select the installed pstack entry and press **Space**. This UI route is documented by OpenAI; the terminal UI was not driven in this test.

The native configuration key is:

```toml
[plugins."pstack-codex@pstack-local"]
enabled = false
```

`true` enables it. Edit the existing table rather than duplicating it. This config mechanism was actually tested through three fresh app-server sessions: **50 enabled skills → 0 active skills → 50 enabled skills**. No custom toggle script or per-skill disabling is needed. A project `.codex/config.toml` override applies only to a trusted project; the user-level plugin setting controls its default state.

Plugin enabled state is separate from `agents/openai.yaml` implicit invocation. Version 0.3.0 preserves existing policy and adds three explicit-only skills: 53 explicit-only skills, setup with normal discovery. No model or permission changes are needed.

## Reproduce without touching user configuration

```sh
python3 tools/smoke_plugin.py
```

The test uses a temporary home and empty workspace. It installs the native local marketplace/plugin, checks every cached skill resource byte-for-byte and the license, checks every namespaced skill path for uniqueness, checks cached invocation metadata, then toggles native config off and back on. It deletes the temporary environment. It starts no inference/thread/turn. The [0.2.0 receipt](evidence/plugin-smoke-20261009.json) records 51 → 0 → 51. The earlier 50 → 0 → 50 result above belongs to the original version. Current receipts are linked from validation.

To remove an installation when authorized, use `codex plugin remove pstack-codex@pstack-local`; inspect `codex plugin remove --help` before use. Removing the source marketplace is separate. Source modifications require refreshing the cached plugin; this package has no automatic updater.

## Rollback this refresh

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
