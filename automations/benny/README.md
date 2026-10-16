# Benny for Codex (dormant)

Benny retains Lauren Tan's two-stage Slack issue workflow: evidence-based triage and dedupe, followed by trusted-marker gated reproduction and optional bounded repair. It is a source pack, not an installed automation or ordinary discoverable skill.

Start by reading [FOR_AGENTS.md](./FOR_AGENTS.md) and [RUN-MODES.md](./RUN-MODES.md). The default is a local dry run with proposed replies only. This port creates no schedules, messages, tracker issues, commits or pull requests.

For a later project install, review a copy under `.agents/automations/benny/` and keep user configuration separately under `.agents/benny/`. The `.agents/automations` path is our storage convention, **not Codex skill discovery**. Do not place these operational `SKILL.md` files inside `.agents/skills`; runners read exact paths directly. The shared pstack skills must be separately available in project scope.

The pack preserves source coordinates, trusted triage identity, duplicate checks, existing-fix verification, two independent UI reproductions, screenshots/recordings, and cleanup. Live Slack/tracker tools, recording, worker isolation and event scheduling are host-dependent and unverified. Read [capabilities](../../docs/CAPABILITIES.md) for limits. MIT attribution is retained in the project license.
