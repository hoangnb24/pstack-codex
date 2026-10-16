# Codex evidence, 2026-10-04

Installed CLI: `codex-cli 0.160.0`. Read `codex --help`, `codex app-server --help`, and generated the local protocol JSON schema without inference using a temporary CODEX_HOME.

Official sources actually opened:

- https://learn.chatgpt.com/docs/build-skills (redirect from https://developers.openai.com/codex/skills): repository `.agents/skills`, user `~/.agents/skills`, symlink discovery, `$skill-name`, optional `agents/openai.yaml` policy.
- https://learn.chatgpt.com/docs/app-server (redirect from https://developers.openai.com/codex/app-server): initialization and read-only `skills/list`.

Installed `SkillsListParams` exposes `cwds` and `forceReload`. The current web docs also describe extra roots, but this pack's smoke test deliberately uses only the installed schema. Help confirms app-server stdio transport and schema generation. No inference or model availability was tested.

The current task host exposes task-agent tools and Codex app tools. This is not proof that every CLI or future Codex session exposes the same tools. Skills discover capabilities at execution time and preserve the inherited model. No Cursor `subagent_type`, model aliases, slash-command registration, `/loop`, or Cursor automation runtime is assumed to exist in Codex.

The port uses the locally available skill-creator guidance and its openai.yaml schema. Invocation policy remains upstream-compatible. This section records the original 2026-10-04 audit, not current installation state.

## Refresh evidence — 2026-10-09

The installed CLI now reports 0.162.0. The real user cache exists. See [current validation](VALIDATION.md) and [installation](PLUGIN.md) for its refresh status. The [official packaging documentation](https://developers.openai.com/plugins/build/plugins) was opened again. It still documents the compatibility manifest and versioned cache layout. The port retains the locally tested `.codex-plugin/plugin.json` format; it does not migrate to the newer portable manifest.

In CLI 0.162.0, the observed `skills/list` entries omit invocation policy. Policy verification therefore checks source and cached `agents/openai.yaml` bytes. Listing and toggling are tested separately. No model selection or turn-time implicit selection behavior is inferred from that listing.
