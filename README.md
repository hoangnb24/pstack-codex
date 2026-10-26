# pstack for Codex

An independent Mac-friendly port of Lauren Tan's [pstack](https://github.com/cursor/plugins/tree/6dbc3ff4b8302a697705f827e9fa92e700d6c6c7/pstack), pinned upstream version 0.15.32, plugin version 0.5.0. Licensed under MIT; see [LICENSE](LICENSE) and [UPSTREAM.json](UPSTREAM.json). Not an official Cursor or OpenAI release.

The source is separate from the installed plugin cache. Editing it does not update an installation automatically. All skill names start with `pstack-` to avoid collisions with existing skills such as `tdd`. The local installation and refresh evidence are recorded in [validation](docs/VALIDATION.md).

## Native plugin

The pack is one native plugin, `pstack-codex@pstack-local`, with 58 skills and 23 playbooks. See [installation and toggle instructions](docs/PLUGIN.md). Plugin invocation is `$pstack-codex:pstack-poteto-mode`. For guidance without starting work, use `$pstack-codex:pstack-poteto-help`. Do not combine plugin installation with standalone skill copies.

New in 0.5.0:

- `pstack-statechart` converts between Mermaid statecharts and TLA+ models, and explains checked bug paths. Its local scripts do not install tools. Model checking and PNG rendering need the documented dependencies already available. The verified local launcher and dependency setup are described in [Local statechart toolchain](docs/PLUGIN.md#local-statechart-toolchain).
- `pstack-maintain-formal-verification-skill` reconciles verification with changed code and separates model drift from real bugs. Create-formal now records coverage and sync evidence, with TLA+ as the default for event ordering.
- `pstack-ketchup-video` renders a local silent catch-up video from existing evidence, with every pending decision in text. It requires available rendering tools; it does not install them or upload artifacts.
- `pstack-sharpen` now rewrites a prompt without doing its task. `pstack-reflect` never edits an installed plugin cache.

New in 0.4.0: `pstack-create-formal-verification-skill` builds a code-grounded property check and a project-local skill to rerun it. `pstack-ketchup` includes every pending decision without forcing the list into a fixed word limit. TypeScript branded values use verifying type guards. These changes add no tool installation or external-action permission.

Introduced in 0.3.0: `pstack-in-your-own-words` restates the goal before work, `pstack-sharpen` refines prompts (rewrite-only since 0.5.0), and `pstack-ketchup` summarizes changes in the current chat. Invoke them with the same `$pstack-codex:` prefix. They do not grant new permissions or expose unavailable history.

## Try in a new isolated workspace

From this source project's directory:

```sh
python3 tools/stage.py /tmp/my-pstack-sandbox
cd /tmp/my-pstack-sandbox
codex
```

The destination must not exist. This copies skills into that workspace's `.agents/skills`; it does not install globally. The staging tool preserves the invocation policy: 57 explicit-only skills, with default discovery for setup. The refresh does not change existing invocation preferences.

In that Codex workspace:

```text
$pstack-poteto-mode Reproduce this bug, find its cause, fix it and verify the behavior.
$pstack-how Explain the cancellation flow with source evidence.
$pstack-architect Compare two interfaces before implementing.
$pstack-correct Turn this recurring mistake into an enforceable check.
```

Use `$pstack-setup-pstack` for a project-local capability/preference review. It never changes the host's permission model. Model selection defaults to the host's current model. Task agents, browser tools, connectors and scheduling are conditional on actual availability and task authorization. Serial work is reported as serial, not independent multi-model review.

## Check the pack

```sh
python3 tools/smoke_discovery.py
```

This starts a temporary Codex app-server, calls `initialize` and `skills/list`, then closes it. It does not start a thread/turn or invoke a model. It uses a fresh temporary `CODEX_HOME`, leaving the user's configuration untouched. See [docs/VALIDATION.md](docs/VALIDATION.md) for checks actually run and limitations, and [docs/PARITY.md](docs/PARITY.md) for workflow coverage.

## Update deliberately

`UPSTREAM.json` pins every original file with a SHA-256 digest. For a future update, fetch the new upstream tree into a temporary directory, confirm the license, diff against this pin, and adapt changed workflows before re-running verification. Do not overwrite this source project or copy new Cursor instructions over the Codex adaptations. No automatic updater or global installer is included.
