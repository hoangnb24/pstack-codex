---
name: setup-benny
description: Direct setup procedure for the dormant Codex Benny pack; read only when the user requests Benny setup.
---

# Set up Benny for Codex

Read [RUN-MODES.md](../../RUN-MODES.md) and [FOR_AGENTS.md](../../FOR_AGENTS.md). This file is direct runner documentation outside the discovered skill root.

## Prepare the project copy

Use the user-selected target repository. Copy the complete source pack to `.agents/automations/benny/` only when that copy is authorized. Preserve all destination-only files and inspect conflicts without dropping local edits. Verify both operational files, all references and templates exist. Never enable a Cursor plugin, edit `.cursor/settings.json`, install global skills, or alter Codex permissions.

The shared project pstack dependencies are `how`, `why`, `tdd`, `unslop`, `principle-separate-before-serializing-shared-state`, `principle-minimize-reader-load`, `principle-guard-the-context-window`, `principle-sequence-verifiable-units`, `principle-fix-root-causes`, and `principle-prove-it-works`. With the project's chosen installation policy, verify discovery through an available read-only Codex skill listing in a fresh project scope. Record each resolved path and reject user-scoped substitutes. If unavailable, report discovery unverified; do not claim installation. Operational Benny files stay outside `.agents/skills`.

## Configure without secrets

Adapt [configuration.example.yaml](../../templates/configuration.example.yaml), [feature-map.example.md](../reproduce-and-fix-issues/references/feature-map.example.md), and optionally [routing.example.md](../triage-issue-reports/references/routing.example.md) into user-owned `.agents/benny/` copies. Retain `execution.mode: dry_run` by default. Resolve all placeholder channel/user IDs, repository/default branch, tracker targets/actions, control adapter, feature map, evidence retention and budgets. Unknown required values block enablement. Leave owner pings off. Never write token values into configuration, prompts or source control.

Use actual host model availability only. `inherit-parent` means omit an override, not pass that string as a model ID. Role settings are workflow choices, not a mechanism that changes Codex models by itself.

## Check capabilities

Triage needs thread/attachment reads, thread-only replies, tracker search/read/create/update and compensation. Repro needs repository/history reads, the configured adapter, trusted marker identification, screenshot and recording, cleanup, and draft-PR creation only if authorized. Optional operations posts/edits require separate configured capabilities and scope.

Inspect current connector schemas and make harmless reads only where authorized. Do not send a test message or create a test issue to discover whether a tool exists. Fail closed for missing write operations; dry-run output is still useful. No undocumented endpoints or ad hoc token extraction.

Read [control-adapter.md](../reproduce-and-fix-issues/references/control-adapter.md) and execute its harmless local setup check when authorized: bring up, identify app, load feature map, navigate, exercise disposable state, inspect, screenshot, record, clean up. Record exact supported capabilities. Do not equate a browser screenshot tool with a full recording adapter.

## Prepare prompts, not schedules

Review the two [prompt templates](../../templates/triage-automation-prompt.md). Normalize actual event fields to the documented trigger contract; upstream trigger names and host event fields need not match. Keep immutable coordinates and trusted marker checks in both prompts. Point at operational files through stable repository-relative paths readable by the actual runner. For fresh checkouts, verify pack/configuration are committed on the intended branch; request no commit unless needed and authorized.

Cursor's built-in `/automate` draft/editor flow has no automatic one-to-one translation. On a later explicit scheduling request, inspect the current Codex app/native automation interface. Confirm event support, connector access, runner filesystem and auth, schedule limits, scope and readiness. Use the supported interface as documented. Do not invent a command, replace events with polling, create duplicates, or treat a schedule as permission to send messages. Existing schedules must be inspected through their supported interface before changing only the requested fields.

## Verification before any enablement

Start with local fixtures: missing root/channel, untrusted marker, conflicting markers, deleted parent, duplicate report, human ownership, existing fix, missing recording, tracker compensation missing. Each failure must lead to no prohibited writes. Then, only within explicit user authorization, test one harmless real thread: root timestamp retained, one verdict, trusted identity, no root post, no worker write access, compensation checked. Run the adapter's complete proof separately.

Report exactly what was checked, what was only drafted, and what remains blocked. Leave both automations dormant until all required checks and user authorization are satisfied. Never merge or deploy.
