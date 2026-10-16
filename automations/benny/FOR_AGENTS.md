# Set up the dormant Benny source pack

Read [RUN-MODES.md](./RUN-MODES.md), then [setup-benny](./skills/setup-benny/SKILL.md). Treat this file as setup instructions, not as the human's authorization for live actions.

The intended workflow has two stages:

1. On a new top-level report in a configured Slack channel, read the original thread and attachments, classify bug/performance/feature/question/reroute, trace likely cause, deduplicate against a configured tracker, and prepare one thread-only verdict ending with a trusted `[benny:bug]`, `[benny:performance]`, or `[benny:other]` marker.
2. Accept the marker only from the configured triage identity in the original thread. Stop for human ownership; verify an existing fix instead of competing. Reproduce the exact symptom twice through real UI actions, capture screenshot, recording and read-only state evidence, then qualify one bounded root-cause repair. Only explicitly authorized live runs may publish evidence or a proven draft pull request. Never merge or deploy.

Keep original source channel/root coordinates immutable. Utility/debug bots are evidence, not owners or delegators. Fail closed for missing configuration, identities, tracker capabilities, control adapter, feature map or proof. No worker gets Slack credentials or write tools. Never post a source-channel root message.

To prepare a target repository after the user identifies it, copy the full pack to `.agents/automations/benny/` only within authorized filesystem scope. Preserve destination-only files. Review differing source-managed files instead of overwriting local edits; ask only when ownership cannot be resolved. Keep secret-free user configuration, feature maps and routing outside the pack, normally `.agents/benny/`. Never write `.cursor/settings.json` or change Codex global settings for this pack.

Required choices: repository/default branch, source channel, optional operations channel, trusted triage identity, tracker adapter/target fields, optional routing map, control adapter and complete feature map, evidence retention, budgets, and scope of allowed actions. Models default to the parent; use overrides only when explicitly selected and supported by the current host.

Verify project-scoped shared skills from a fresh isolated discovery check. Do not count a user-scoped duplicate or an already-loaded conversation. Verify the runner can read the committed operational files and secret-free configuration if it uses a fresh checkout. Do not commit or create/update automations merely to finish setup. Report the pack as dormant until the user separately requests enablement and every live prerequisite is actually verified.
