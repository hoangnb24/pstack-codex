# Upstream 0.15.36 delta disposition

Exact input: `6dbc3ff4b8302a697705f827e9fa92e700d6c6c7` → `4dd1d05818d19792e7cd6e818f1667f95f7e1dbe`.

All 464 changed upstream paths are listed. Historical evidence is retained. Source deletions do not delete user ledger data.

| Upstream path | Git status | Port location | Decision |
|---|---|---|---|
| `pstack/.cursor-plugin/plugin.json` | M | `.codex-plugin/plugin.json; UPSTREAM.json` | Provenance updated; native compatibility manifest version 0.6.0. |
| `pstack/README.md` | M | `README.md; docs/CAPABILITIES.md; skills/pstack-poteto-help/` | Reconciled current command, review, queue, and subtitle guidance. Cursor runtime assumptions not imported. |
| `pstack/docs/guide/04-design.md` | M | `README.md; docs/CAPABILITIES.md; skills/pstack-poteto-help/` | Reconciled current command, review, queue, and subtitle guidance. Cursor runtime assumptions not imported. |
| `pstack/docs/guide/06-verify-and-ship.md` | M | `README.md; docs/CAPABILITIES.md; skills/pstack-poteto-help/` | Reconciled current command, review, queue, and subtitle guidance. Cursor runtime assumptions not imported. |
| `pstack/docs/guide/07-overnight.md` | M | `README.md; docs/CAPABILITIES.md; skills/pstack-poteto-help/` | Reconciled current command, review, queue, and subtitle guidance. Cursor runtime assumptions not imported. |
| `pstack/docs/guide/10-recipes-and-pitfalls.md` | M | `README.md; docs/CAPABILITIES.md; skills/pstack-poteto-help/` | Reconciled current command, review, queue, and subtitle guidance. Cursor runtime assumptions not imported. |
| `pstack/plugin.json` | M | `.codex-plugin/plugin.json; UPSTREAM.json` | Provenance updated; native compatibility manifest version 0.6.0. |
| `pstack/skills/arena/SKILL.md` | M | `skills/pstack-arena/SKILL.md` | Adapted or already covered; see workflow disposition. |
| `pstack/skills/create-formal-verification-skill/SKILL.md` | M | `skills/pstack-create-formal-verification-skill/SKILL.md` | Already adapted: names the sibling skill; no fixed CLI or fixed-by-PR promise. |
| `pstack/skills/interrogate/SKILL.md` | M | `skills/pstack-interrogate/SKILL.md` | Adapted or already covered; see workflow disposition. |
| `pstack/skills/interrogate/references/code-quality-review.md` | D | `skills/pstack-interrogate/references/code-quality-review.md` | Removed; preserved in Git/backup. No user data deletion. |
| `pstack/skills/interrogate/references/lead-judgment.md` | D | `skills/pstack-interrogate/references/lead-judgment.md` | Removed; preserved in Git/backup. No user data deletion. |
| `pstack/skills/interrogate/references/reviewer-prompt.md` | D | `skills/pstack-interrogate/references/reviewer-prompt.md` | Removed; preserved in Git/backup. No user data deletion. |
| `pstack/skills/interrogate/references/rubric.md` | D | `skills/pstack-interrogate/references/rubric.md` | Removed; preserved in Git/backup. No user data deletion. |
| `pstack/skills/ketchup-video/SKILL.md` | M | `skills/pstack-ketchup-video/SKILL.md` | Adapted: subtitles/timing, current help routes, or premeasurement decision threshold. |
| `pstack/skills/poteto-help/SKILL.md` | M | `skills/pstack-poteto-help/SKILL.md` | Adapted: subtitles/timing, current help routes, or premeasurement decision threshold. |
| `pstack/skills/poteto-help/references/recipes.md` | M | `skills/pstack-poteto-help/references/recipes.md` | Adapted: subtitles/timing, current help routes, or premeasurement decision threshold. |
| `pstack/skills/poteto-mode/SKILL.md` | M | `skills/pstack-poteto-mode/SKILL.md` | Adapted or already covered; see workflow disposition. |
| `pstack/skills/poteto-mode/playbooks/autonomous-run.md` | M | `skills/pstack-poteto-mode/playbooks/autonomous-run.md` | Adapted or already covered; see workflow disposition. |
| `pstack/skills/poteto-mode/playbooks/autopilot-full.md` | M | `skills/pstack-poteto-mode/playbooks/autopilot-full.md` | Adapted or already covered; see workflow disposition. |
| `pstack/skills/poteto-mode/playbooks/autopilot-stack.md` | M | `skills/pstack-poteto-mode/playbooks/autopilot-stack.md` | Adapted or already covered; see workflow disposition. |
| `pstack/skills/poteto-mode/playbooks/babysit.md` | M | `skills/pstack-poteto-mode/playbooks/babysit.md` | Adapted or already covered; see workflow disposition. |
| `pstack/skills/poteto-mode/playbooks/multi-phase-plan.md` | M | `skills/pstack-poteto-mode/playbooks/multi-phase-plan.md` | Adapted or already covered; see workflow disposition. |
| `pstack/skills/poteto-mode/playbooks/opening-a-pr.md` | M | `skills/pstack-poteto-mode/playbooks/opening-a-pr.md` | Adapted or already covered; see workflow disposition. |
| `pstack/skills/poteto-mode/playbooks/orchestrate.md` | M | `skills/pstack-poteto-mode/playbooks/orchestrate.md` | Adapted or already covered; see workflow disposition. |
| `pstack/skills/poteto-mode/scripts/orch/orch.test.ts` | D | `tests/helpers/orch.test.ts` | Removed; preserved in Git/backup. No user data deletion. |
| `pstack/skills/poteto-mode/scripts/orch/orch.ts` | D | `skills/pstack-poteto-mode/scripts/orch/orch.ts` | Removed; preserved in Git/backup. No user data deletion. |
| `pstack/skills/poteto-mode/scripts/orch/store.ts` | D | `skills/pstack-poteto-mode/scripts/orch/store.ts` | Removed; preserved in Git/backup. No user data deletion. |
| `pstack/skills/poteto-mode/scripts/package.json` | M | `skills/pstack-poteto-mode/scripts/package.json` | Not shipped: upstream package bootstrap metadata; retained helpers have no package dependency. |
| `pstack/skills/principle-explain-the-number/SKILL.md` | M | `skills/pstack-principle-explain-the-number/SKILL.md` | Adapted: subtitles/timing, current help routes, or premeasurement decision threshold. |
| `pstack/skills/setup-pstack/SKILL.md` | M | `skills/pstack-setup-pstack/SKILL.md` | Not imported: Cursor per-role model registry. Preserve inherited host settings. |
| `pstack/skills/statechart/SKILL.md` | M | `skills/pstack-statechart/SKILL.md` | Adapted; namespace, local dependencies, rendering boundaries. See statechart handoff. |
| `pstack/skills/statechart/references/render.md` | A | `skills/pstack-statechart/references/render.md` | Adapted; namespace, local dependencies, rendering boundaries. See statechart handoff. |
| `pstack/skills/statechart/scripts/backends/cfg.ts` | A | `skills/pstack-statechart/scripts/backends/cfg.ts` | Ported unchanged. |
| `pstack/skills/statechart/scripts/backends/mermaid.ts` | A | `skills/pstack-statechart/scripts/backends/mermaid.ts` | Ported unchanged. |
| `pstack/skills/statechart/scripts/backends/plain-text.ts` | A | `skills/pstack-statechart/scripts/backends/plain-text.ts` | Ported unchanged. |
| `pstack/skills/statechart/scripts/backends/report.ts` | A | `skills/pstack-statechart/scripts/backends/report.ts` | Ported unchanged. |
| `pstack/skills/statechart/scripts/bug-states.mjs` | D | `skills/pstack-statechart/scripts/bug-states.mjs` | Removed; preserved in Git/backup. No user data deletion. |
| `pstack/skills/statechart/scripts/chart-edges.mjs` | D | `skills/pstack-statechart/scripts/chart-edges.mjs` | Removed; preserved in Git/backup. No user data deletion. |
| `pstack/skills/statechart/scripts/chart-parts.mjs` | D | `skills/pstack-statechart/scripts/chart-parts.mjs` | Removed; preserved in Git/backup. No user data deletion. |
| `pstack/skills/statechart/scripts/chart-to-tla.mjs` | D | `skills/pstack-statechart/scripts/chart-to-tla.mjs` | Removed; preserved in Git/backup. No user data deletion. |
| `pstack/skills/statechart/scripts/compare-charts.mjs` | D | `skills/pstack-statechart/scripts/compare-charts.mjs` | Removed; preserved in Git/backup. No user data deletion. |
| `pstack/skills/statechart/scripts/frontends/config.ts` | A | `skills/pstack-statechart/scripts/frontends/config.ts` | Ported unchanged. |
| `pstack/skills/statechart/scripts/frontends/dot.ts` | A | `skills/pstack-statechart/scripts/frontends/dot.ts` | Ported unchanged. |
| `pstack/skills/statechart/scripts/frontends/marks.ts` | A | `skills/pstack-statechart/scripts/frontends/marks.ts` | Ported unchanged. |
| `pstack/skills/statechart/scripts/frontends/messages.ts` | A | `skills/pstack-statechart/scripts/frontends/messages.ts` | Ported unchanged. |
| `pstack/skills/statechart/scripts/frontends/spec.ts` | A | `skills/pstack-statechart/scripts/frontends/spec.ts` | Ported unchanged. |
| `pstack/skills/statechart/scripts/frontends/trace.ts` | A | `skills/pstack-statechart/scripts/frontends/trace.ts` | Ported unchanged. |
| `pstack/skills/statechart/scripts/frontends/value.ts` | A | `skills/pstack-statechart/scripts/frontends/value.ts` | Ported unchanged. |
| `pstack/skills/statechart/scripts/frontends/verdict.ts` | A | `skills/pstack-statechart/scripts/frontends/verdict.ts` | Ported unchanged. |
| `pstack/skills/statechart/scripts/frontends/view.ts` | A | `skills/pstack-statechart/scripts/frontends/view.ts` | Ported unchanged. |
| `pstack/skills/statechart/scripts/ir.ts` | A | `skills/pstack-statechart/scripts/ir.ts` | Ported unchanged. |
| `pstack/skills/statechart/scripts/lib.mjs` | D | `skills/pstack-statechart/scripts/lib.mjs` | Removed; preserved in Git/backup. No user data deletion. |
| `pstack/skills/statechart/scripts/map-view.mjs` | D | `skills/pstack-statechart/scripts/map-view.mjs` | Removed; preserved in Git/backup. No user data deletion. |
| `pstack/skills/statechart/scripts/package.json` | A | `skills/pstack-statechart/scripts/package.json` | Adapted; namespace, local dependencies, rendering boundaries. See statechart handoff. |
| `pstack/skills/statechart/scripts/passes/annotate.ts` | A | `skills/pstack-statechart/scripts/passes/annotate.ts` | Ported unchanged. |
| `pstack/skills/statechart/scripts/passes/label.ts` | A | `skills/pstack-statechart/scripts/passes/label.ts` | Ported unchanged. |
| `pstack/skills/statechart/scripts/passes/lift.ts` | A | `skills/pstack-statechart/scripts/passes/lift.ts` | Ported unchanged. |
| `pstack/skills/statechart/scripts/passes/loop-check.ts` | A | `skills/pstack-statechart/scripts/passes/loop-check.ts` | Ported unchanged. |
| `pstack/skills/statechart/scripts/passes/paths.ts` | A | `skills/pstack-statechart/scripts/passes/paths.ts` | Ported unchanged. |
| `pstack/skills/statechart/scripts/passes/reach.ts` | A | `skills/pstack-statechart/scripts/passes/reach.ts` | Ported unchanged. |
| `pstack/skills/statechart/scripts/passes/region-check.ts` | A | `skills/pstack-statechart/scripts/passes/region-check.ts` | Ported unchanged. |
| `pstack/skills/statechart/scripts/passes/regions.ts` | A | `skills/pstack-statechart/scripts/passes/regions.ts` | Ported unchanged. |
| `pstack/skills/statechart/scripts/pipeline.ts` | A | `skills/pstack-statechart/scripts/pipeline.ts` | Ported unchanged. |
| `pstack/skills/statechart/scripts/property-loop.mjs` | D | `skills/pstack-statechart/scripts/property-loop.mjs` | Removed; preserved in Git/backup. No user data deletion. |
| `pstack/skills/statechart/scripts/read-check.mjs` | D | `skills/pstack-statechart/scripts/read-check.mjs` | Removed; preserved in Git/backup. No user data deletion. |
| `pstack/skills/statechart/scripts/regions-chart.mjs` | D | `skills/pstack-statechart/scripts/regions-chart.mjs` | Removed; preserved in Git/backup. No user data deletion. |
| `pstack/skills/statechart/scripts/render.mjs` | D | `skills/pstack-statechart/scripts/render.mjs` | Removed; preserved in Git/backup. No user data deletion. |
| `pstack/skills/statechart/scripts/rule-book.mjs` | D | `skills/pstack-statechart/scripts/rule-book.mjs` | Removed; preserved in Git/backup. No user data deletion. |
| `pstack/skills/statechart/scripts/run.ts` | A | `skills/pstack-statechart/scripts/run.ts` | Adapted; namespace, local dependencies, rendering boundaries. See statechart handoff. |
| `pstack/skills/statechart/scripts/second-replay.mjs` | D | `skills/pstack-statechart/scripts/second-replay.mjs` | Removed; preserved in Git/backup. No user data deletion. |
| `pstack/skills/statechart/scripts/snapshot.mjs` | D | `skills/pstack-statechart/scripts/snapshot.mjs` | Removed; preserved in Git/backup. No user data deletion. |
| `pstack/skills/statechart/scripts/spec-text.mjs` | D | `skills/pstack-statechart/scripts/spec-text.mjs` | Removed; preserved in Git/backup. No user data deletion. |
| `pstack/skills/statechart/scripts/statechart` | A | `skills/pstack-statechart/scripts/statechart` | Ported unchanged. |
| `pstack/skills/statechart/scripts/statechart-help.mjs` | D | `skills/pstack-statechart/scripts/statechart-help.mjs` | Removed; preserved in Git/backup. No user data deletion. |
| `pstack/skills/statechart/scripts/statechart.mjs` | D | `skills/pstack-statechart/scripts/statechart.mjs` | Removed; preserved in Git/backup. No user data deletion. |
| `pstack/skills/statechart/scripts/statechart.ts` | A | `skills/pstack-statechart/scripts/statechart.ts` | Ported unchanged. |
| `pstack/skills/statechart/scripts/test/ConfigOracle.java` | A | `skills/pstack-statechart/scripts/test/ConfigOracle.java` | Ported unchanged. |
| `pstack/skills/statechart/scripts/test/band.mmd` | D | `skills/pstack-statechart/scripts/test/band.mmd` | Removed; preserved in Git/backup. No user data deletion. |
| `pstack/skills/statechart/scripts/test/chart.test.ts` | A | `skills/pstack-statechart/scripts/test/chart.test.ts` | Ported unchanged. |
| `pstack/skills/statechart/scripts/test/charts/Braces.mmd` | A | `skills/pstack-statechart/scripts/test/charts/Braces.mmd` | Ported unchanged. |
| `pstack/skills/statechart/scripts/test/charts/Escapes.mmd` | A | `skills/pstack-statechart/scripts/test/charts/Escapes.mmd` | Ported unchanged. |
| `pstack/skills/statechart/scripts/test/charts/Phases.mmd` | A | `skills/pstack-statechart/scripts/test/charts/Phases.mmd` | Ported unchanged. |
| `pstack/skills/statechart/scripts/test/cli.test.ts` | A | `skills/pstack-statechart/scripts/test/cli.test.ts` | Ported unchanged. |
| `pstack/skills/statechart/scripts/test/config-fuzz.test.ts` | A | `skills/pstack-statechart/scripts/test/config-fuzz.test.ts` | Ported unchanged. |
| `pstack/skills/statechart/scripts/test/corpus.test.ts` | A | `skills/pstack-statechart/scripts/test/corpus.test.ts` | Ported unchanged. |
| `pstack/skills/statechart/scripts/test/corpus/Counter/ChartRun.out` | A | `skills/pstack-statechart/scripts/test/corpus/Counter/ChartRun.out` | Ported unchanged. |
| `pstack/skills/statechart/scripts/test/corpus/Counter/Counter.cfg` | A | `skills/pstack-statechart/scripts/test/corpus/Counter/Counter.cfg` | Ported unchanged. |
| `pstack/skills/statechart/scripts/test/corpus/Counter/Counter.tla` | A | `skills/pstack-statechart/scripts/test/corpus/Counter/Counter.tla` | Ported unchanged. |
| `pstack/skills/statechart/scripts/test/corpus/Counter/chart.mmd` | A | `skills/pstack-statechart/scripts/test/corpus/Counter/chart.mmd` | Ported unchanged. |
| `pstack/skills/statechart/scripts/test/corpus/Counter/graph.dot` | A | `skills/pstack-statechart/scripts/test/corpus/Counter/graph.dot` | Ported; terminal newline only. |
| `pstack/skills/statechart/scripts/test/corpus/Counter/report.md` | A | `skills/pstack-statechart/scripts/test/corpus/Counter/report.md` | Ported unchanged. |
| `pstack/skills/statechart/scripts/test/corpus/Counter/sany.out` | A | `skills/pstack-statechart/scripts/test/corpus/Counter/sany.out` | Ported unchanged. |
| `pstack/skills/statechart/scripts/test/corpus/Counter/verdict-1.out` | A | `skills/pstack-statechart/scripts/test/corpus/Counter/verdict-1.out` | Ported unchanged. |
| `pstack/skills/statechart/scripts/test/corpus/CounterAction/ChartRun.out` | A | `skills/pstack-statechart/scripts/test/corpus/CounterAction/ChartRun.out` | Ported unchanged. |
| `pstack/skills/statechart/scripts/test/corpus/CounterAction/CounterAction.cfg` | A | `skills/pstack-statechart/scripts/test/corpus/CounterAction/CounterAction.cfg` | Ported unchanged. |
| `pstack/skills/statechart/scripts/test/corpus/CounterAction/CounterAction.tla` | A | `skills/pstack-statechart/scripts/test/corpus/CounterAction/CounterAction.tla` | Ported unchanged. |
| `pstack/skills/statechart/scripts/test/corpus/CounterAction/chart.mmd` | A | `skills/pstack-statechart/scripts/test/corpus/CounterAction/chart.mmd` | Ported unchanged. |
| `pstack/skills/statechart/scripts/test/corpus/CounterAction/graph.dot` | A | `skills/pstack-statechart/scripts/test/corpus/CounterAction/graph.dot` | Ported; terminal newline only. |
| `pstack/skills/statechart/scripts/test/corpus/CounterAction/report.md` | A | `skills/pstack-statechart/scripts/test/corpus/CounterAction/report.md` | Ported unchanged. |
| `pstack/skills/statechart/scripts/test/corpus/CounterAction/sany.out` | A | `skills/pstack-statechart/scripts/test/corpus/CounterAction/sany.out` | Ported unchanged. |
| `pstack/skills/statechart/scripts/test/corpus/CounterAction/verdict-1.exit` | A | `skills/pstack-statechart/scripts/test/corpus/CounterAction/verdict-1.exit` | Ported unchanged. |
| `pstack/skills/statechart/scripts/test/corpus/CounterAction/verdict-1.out` | A | `skills/pstack-statechart/scripts/test/corpus/CounterAction/verdict-1.out` | Ported unchanged. |
| `pstack/skills/statechart/scripts/test/corpus/CounterAction/verdict-2.exit` | A | `skills/pstack-statechart/scripts/test/corpus/CounterAction/verdict-2.exit` | Ported unchanged. |
| `pstack/skills/statechart/scripts/test/corpus/CounterAction/verdict-2.out` | A | `skills/pstack-statechart/scripts/test/corpus/CounterAction/verdict-2.out` | Ported unchanged. |
| `pstack/skills/statechart/scripts/test/corpus/CounterAction/verdict-3.out` | A | `skills/pstack-statechart/scripts/test/corpus/CounterAction/verdict-3.out` | Ported unchanged. |
| `pstack/skills/statechart/scripts/test/corpus/CounterDeadlock/ChartRun.out` | A | `skills/pstack-statechart/scripts/test/corpus/CounterDeadlock/ChartRun.out` | Ported unchanged. |
| `pstack/skills/statechart/scripts/test/corpus/CounterDeadlock/CounterDeadlock.cfg` | A | `skills/pstack-statechart/scripts/test/corpus/CounterDeadlock/CounterDeadlock.cfg` | Ported unchanged. |
| `pstack/skills/statechart/scripts/test/corpus/CounterDeadlock/CounterDeadlock.tla` | A | `skills/pstack-statechart/scripts/test/corpus/CounterDeadlock/CounterDeadlock.tla` | Ported unchanged. |
| `pstack/skills/statechart/scripts/test/corpus/CounterDeadlock/chart.mmd` | A | `skills/pstack-statechart/scripts/test/corpus/CounterDeadlock/chart.mmd` | Ported unchanged. |
| `pstack/skills/statechart/scripts/test/corpus/CounterDeadlock/graph.dot` | A | `skills/pstack-statechart/scripts/test/corpus/CounterDeadlock/graph.dot` | Ported; terminal newline only. |
| `pstack/skills/statechart/scripts/test/corpus/CounterDeadlock/report.md` | A | `skills/pstack-statechart/scripts/test/corpus/CounterDeadlock/report.md` | Ported unchanged. |
| `pstack/skills/statechart/scripts/test/corpus/CounterDeadlock/sany.out` | A | `skills/pstack-statechart/scripts/test/corpus/CounterDeadlock/sany.out` | Ported unchanged. |
| `pstack/skills/statechart/scripts/test/corpus/CounterDeadlock/verdict-1.exit` | A | `skills/pstack-statechart/scripts/test/corpus/CounterDeadlock/verdict-1.exit` | Ported unchanged. |
| `pstack/skills/statechart/scripts/test/corpus/CounterDeadlock/verdict-1.out` | A | `skills/pstack-statechart/scripts/test/corpus/CounterDeadlock/verdict-1.out` | Ported unchanged. |
| `pstack/skills/statechart/scripts/test/corpus/CounterDeadlock/verdict-2.exit` | A | `skills/pstack-statechart/scripts/test/corpus/CounterDeadlock/verdict-2.exit` | Ported unchanged. |
| `pstack/skills/statechart/scripts/test/corpus/CounterDeadlock/verdict-2.out` | A | `skills/pstack-statechart/scripts/test/corpus/CounterDeadlock/verdict-2.out` | Ported unchanged. |
| `pstack/skills/statechart/scripts/test/corpus/CounterFan/ChartRun.out` | A | `skills/pstack-statechart/scripts/test/corpus/CounterFan/ChartRun.out` | Ported unchanged. |
| `pstack/skills/statechart/scripts/test/corpus/CounterFan/CounterFan.cfg` | A | `skills/pstack-statechart/scripts/test/corpus/CounterFan/CounterFan.cfg` | Ported unchanged. |
| `pstack/skills/statechart/scripts/test/corpus/CounterFan/CounterFan.tla` | A | `skills/pstack-statechart/scripts/test/corpus/CounterFan/CounterFan.tla` | Ported unchanged. |
| `pstack/skills/statechart/scripts/test/corpus/CounterFan/chart.mmd` | A | `skills/pstack-statechart/scripts/test/corpus/CounterFan/chart.mmd` | Ported unchanged. |
| `pstack/skills/statechart/scripts/test/corpus/CounterFan/graph.dot` | A | `skills/pstack-statechart/scripts/test/corpus/CounterFan/graph.dot` | Ported; terminal newline only. |
| `pstack/skills/statechart/scripts/test/corpus/CounterFan/report.md` | A | `skills/pstack-statechart/scripts/test/corpus/CounterFan/report.md` | Ported unchanged. |
| `pstack/skills/statechart/scripts/test/corpus/CounterFan/sany.out` | A | `skills/pstack-statechart/scripts/test/corpus/CounterFan/sany.out` | Ported unchanged. |
| `pstack/skills/statechart/scripts/test/corpus/CounterFan/verdict-1.exit` | A | `skills/pstack-statechart/scripts/test/corpus/CounterFan/verdict-1.exit` | Ported unchanged. |
| `pstack/skills/statechart/scripts/test/corpus/CounterFan/verdict-1.out` | A | `skills/pstack-statechart/scripts/test/corpus/CounterFan/verdict-1.out` | Ported unchanged. |
| `pstack/skills/statechart/scripts/test/corpus/CounterFan/verdict-2.out` | A | `skills/pstack-statechart/scripts/test/corpus/CounterFan/verdict-2.out` | Ported unchanged. |
| `pstack/skills/statechart/scripts/test/corpus/CounterGuard/ChartRun.exit` | A | `skills/pstack-statechart/scripts/test/corpus/CounterGuard/ChartRun.exit` | Ported unchanged. |
| `pstack/skills/statechart/scripts/test/corpus/CounterGuard/ChartRun.out` | A | `skills/pstack-statechart/scripts/test/corpus/CounterGuard/ChartRun.out` | Ported unchanged. |
| `pstack/skills/statechart/scripts/test/corpus/CounterGuard/CounterGuard.cfg` | A | `skills/pstack-statechart/scripts/test/corpus/CounterGuard/CounterGuard.cfg` | Ported unchanged. |
| `pstack/skills/statechart/scripts/test/corpus/CounterGuard/CounterGuard.tla` | A | `skills/pstack-statechart/scripts/test/corpus/CounterGuard/CounterGuard.tla` | Ported unchanged. |
| `pstack/skills/statechart/scripts/test/corpus/CounterGuard/chart.mmd` | A | `skills/pstack-statechart/scripts/test/corpus/CounterGuard/chart.mmd` | Ported unchanged. |
| `pstack/skills/statechart/scripts/test/corpus/CounterGuard/graph.dot` | A | `skills/pstack-statechart/scripts/test/corpus/CounterGuard/graph.dot` | Ported; terminal newline only. |
| `pstack/skills/statechart/scripts/test/corpus/CounterGuard/report.md` | A | `skills/pstack-statechart/scripts/test/corpus/CounterGuard/report.md` | Ported unchanged. |
| `pstack/skills/statechart/scripts/test/corpus/CounterGuard/sany.out` | A | `skills/pstack-statechart/scripts/test/corpus/CounterGuard/sany.out` | Ported unchanged. |
| `pstack/skills/statechart/scripts/test/corpus/CounterGuard/verdict-1.exit` | A | `skills/pstack-statechart/scripts/test/corpus/CounterGuard/verdict-1.exit` | Ported unchanged. |
| `pstack/skills/statechart/scripts/test/corpus/CounterGuard/verdict-1.out` | A | `skills/pstack-statechart/scripts/test/corpus/CounterGuard/verdict-1.out` | Ported unchanged. |
| `pstack/skills/statechart/scripts/test/corpus/CounterGuard/verdict-2.exit` | A | `skills/pstack-statechart/scripts/test/corpus/CounterGuard/verdict-2.exit` | Ported unchanged. |
| `pstack/skills/statechart/scripts/test/corpus/CounterGuard/verdict-2.out` | A | `skills/pstack-statechart/scripts/test/corpus/CounterGuard/verdict-2.out` | Ported unchanged. |
| `pstack/skills/statechart/scripts/test/corpus/CounterInitPast/ChartRun.out` | A | `skills/pstack-statechart/scripts/test/corpus/CounterInitPast/ChartRun.out` | Ported unchanged. |
| `pstack/skills/statechart/scripts/test/corpus/CounterInitPast/CounterInitPast.cfg` | A | `skills/pstack-statechart/scripts/test/corpus/CounterInitPast/CounterInitPast.cfg` | Ported unchanged. |
| `pstack/skills/statechart/scripts/test/corpus/CounterInitPast/CounterInitPast.tla` | A | `skills/pstack-statechart/scripts/test/corpus/CounterInitPast/CounterInitPast.tla` | Ported unchanged. |
| `pstack/skills/statechart/scripts/test/corpus/CounterInitPast/chart.mmd` | A | `skills/pstack-statechart/scripts/test/corpus/CounterInitPast/chart.mmd` | Ported unchanged. |
| `pstack/skills/statechart/scripts/test/corpus/CounterInitPast/graph.dot` | A | `skills/pstack-statechart/scripts/test/corpus/CounterInitPast/graph.dot` | Ported; terminal newline only. |
| `pstack/skills/statechart/scripts/test/corpus/CounterInitPast/report.md` | A | `skills/pstack-statechart/scripts/test/corpus/CounterInitPast/report.md` | Ported unchanged. |
| `pstack/skills/statechart/scripts/test/corpus/CounterInitPast/sany.out` | A | `skills/pstack-statechart/scripts/test/corpus/CounterInitPast/sany.out` | Ported unchanged. |
| `pstack/skills/statechart/scripts/test/corpus/CounterInitPast/verdict-1.exit` | A | `skills/pstack-statechart/scripts/test/corpus/CounterInitPast/verdict-1.exit` | Ported unchanged. |
| `pstack/skills/statechart/scripts/test/corpus/CounterInitPast/verdict-1.out` | A | `skills/pstack-statechart/scripts/test/corpus/CounterInitPast/verdict-1.out` | Ported unchanged. |
| `pstack/skills/statechart/scripts/test/corpus/CounterInitPast/verdict-2.out` | A | `skills/pstack-statechart/scripts/test/corpus/CounterInitPast/verdict-2.out` | Ported unchanged. |
| `pstack/skills/statechart/scripts/test/corpus/CounterInitPastHolds/ChartRun.out` | A | `skills/pstack-statechart/scripts/test/corpus/CounterInitPastHolds/ChartRun.out` | Ported unchanged. |
| `pstack/skills/statechart/scripts/test/corpus/CounterInitPastHolds/CounterInitPastHolds.cfg` | A | `skills/pstack-statechart/scripts/test/corpus/CounterInitPastHolds/CounterInitPastHolds.cfg` | Ported unchanged. |
| `pstack/skills/statechart/scripts/test/corpus/CounterInitPastHolds/CounterInitPastHolds.tla` | A | `skills/pstack-statechart/scripts/test/corpus/CounterInitPastHolds/CounterInitPastHolds.tla` | Ported unchanged. |
| `pstack/skills/statechart/scripts/test/corpus/CounterInitPastHolds/chart.mmd` | A | `skills/pstack-statechart/scripts/test/corpus/CounterInitPastHolds/chart.mmd` | Ported unchanged. |
| `pstack/skills/statechart/scripts/test/corpus/CounterInitPastHolds/graph.dot` | A | `skills/pstack-statechart/scripts/test/corpus/CounterInitPastHolds/graph.dot` | Ported; terminal newline only. |
| `pstack/skills/statechart/scripts/test/corpus/CounterInitPastHolds/report.md` | A | `skills/pstack-statechart/scripts/test/corpus/CounterInitPastHolds/report.md` | Ported unchanged. |
| `pstack/skills/statechart/scripts/test/corpus/CounterInitPastHolds/sany.out` | A | `skills/pstack-statechart/scripts/test/corpus/CounterInitPastHolds/sany.out` | Ported unchanged. |
| `pstack/skills/statechart/scripts/test/corpus/CounterInitPastHolds/verdict-1.out` | A | `skills/pstack-statechart/scripts/test/corpus/CounterInitPastHolds/verdict-1.out` | Ported unchanged. |
| `pstack/skills/statechart/scripts/test/corpus/CounterInstance/ChartRun.out` | A | `skills/pstack-statechart/scripts/test/corpus/CounterInstance/ChartRun.out` | Ported unchanged. |
| `pstack/skills/statechart/scripts/test/corpus/CounterInstance/CounterInstance.cfg` | A | `skills/pstack-statechart/scripts/test/corpus/CounterInstance/CounterInstance.cfg` | Ported unchanged. |
| `pstack/skills/statechart/scripts/test/corpus/CounterInstance/CounterInstance.tla` | A | `skills/pstack-statechart/scripts/test/corpus/CounterInstance/CounterInstance.tla` | Ported unchanged. |
| `pstack/skills/statechart/scripts/test/corpus/CounterInstance/CounterSteps.tla` | A | `skills/pstack-statechart/scripts/test/corpus/CounterInstance/CounterSteps.tla` | Ported unchanged. |
| `pstack/skills/statechart/scripts/test/corpus/CounterInstance/chart.mmd` | A | `skills/pstack-statechart/scripts/test/corpus/CounterInstance/chart.mmd` | Ported unchanged. |
| `pstack/skills/statechart/scripts/test/corpus/CounterInstance/graph.dot` | A | `skills/pstack-statechart/scripts/test/corpus/CounterInstance/graph.dot` | Ported; terminal newline only. |
| `pstack/skills/statechart/scripts/test/corpus/CounterInstance/report.md` | A | `skills/pstack-statechart/scripts/test/corpus/CounterInstance/report.md` | Ported unchanged. |
| `pstack/skills/statechart/scripts/test/corpus/CounterInstance/sany.out` | A | `skills/pstack-statechart/scripts/test/corpus/CounterInstance/sany.out` | Ported unchanged. |
| `pstack/skills/statechart/scripts/test/corpus/CounterInstance/verdict-1.exit` | A | `skills/pstack-statechart/scripts/test/corpus/CounterInstance/verdict-1.exit` | Ported unchanged. |
| `pstack/skills/statechart/scripts/test/corpus/CounterInstance/verdict-1.out` | A | `skills/pstack-statechart/scripts/test/corpus/CounterInstance/verdict-1.out` | Ported unchanged. |
| `pstack/skills/statechart/scripts/test/corpus/CounterJump/ChartRun.out` | A | `skills/pstack-statechart/scripts/test/corpus/CounterJump/ChartRun.out` | Ported unchanged. |
| `pstack/skills/statechart/scripts/test/corpus/CounterJump/CounterJump.cfg` | A | `skills/pstack-statechart/scripts/test/corpus/CounterJump/CounterJump.cfg` | Ported unchanged. |
| `pstack/skills/statechart/scripts/test/corpus/CounterJump/CounterJump.tla` | A | `skills/pstack-statechart/scripts/test/corpus/CounterJump/CounterJump.tla` | Ported unchanged. |
| `pstack/skills/statechart/scripts/test/corpus/CounterJump/chart.mmd` | A | `skills/pstack-statechart/scripts/test/corpus/CounterJump/chart.mmd` | Ported unchanged. |
| `pstack/skills/statechart/scripts/test/corpus/CounterJump/graph.dot` | A | `skills/pstack-statechart/scripts/test/corpus/CounterJump/graph.dot` | Ported; terminal newline only. |
| `pstack/skills/statechart/scripts/test/corpus/CounterJump/report.md` | A | `skills/pstack-statechart/scripts/test/corpus/CounterJump/report.md` | Ported unchanged. |
| `pstack/skills/statechart/scripts/test/corpus/CounterJump/sany.out` | A | `skills/pstack-statechart/scripts/test/corpus/CounterJump/sany.out` | Ported unchanged. |
| `pstack/skills/statechart/scripts/test/corpus/CounterJump/verdict-1.exit` | A | `skills/pstack-statechart/scripts/test/corpus/CounterJump/verdict-1.exit` | Ported unchanged. |
| `pstack/skills/statechart/scripts/test/corpus/CounterJump/verdict-1.out` | A | `skills/pstack-statechart/scripts/test/corpus/CounterJump/verdict-1.out` | Ported unchanged. |
| `pstack/skills/statechart/scripts/test/corpus/CounterJump/verdict-2.out` | A | `skills/pstack-statechart/scripts/test/corpus/CounterJump/verdict-2.out` | Ported unchanged. |
| `pstack/skills/statechart/scripts/test/corpus/CounterLoop/ChartRun.out` | A | `skills/pstack-statechart/scripts/test/corpus/CounterLoop/ChartRun.out` | Ported unchanged. |
| `pstack/skills/statechart/scripts/test/corpus/CounterLoop/CounterLoop.cfg` | A | `skills/pstack-statechart/scripts/test/corpus/CounterLoop/CounterLoop.cfg` | Ported unchanged. |
| `pstack/skills/statechart/scripts/test/corpus/CounterLoop/CounterLoop.tla` | A | `skills/pstack-statechart/scripts/test/corpus/CounterLoop/CounterLoop.tla` | Ported unchanged. |
| `pstack/skills/statechart/scripts/test/corpus/CounterLoop/chart.mmd` | A | `skills/pstack-statechart/scripts/test/corpus/CounterLoop/chart.mmd` | Ported unchanged. |
| `pstack/skills/statechart/scripts/test/corpus/CounterLoop/graph.dot` | A | `skills/pstack-statechart/scripts/test/corpus/CounterLoop/graph.dot` | Ported; terminal newline only. |
| `pstack/skills/statechart/scripts/test/corpus/CounterLoop/report.md` | A | `skills/pstack-statechart/scripts/test/corpus/CounterLoop/report.md` | Ported unchanged. |
| `pstack/skills/statechart/scripts/test/corpus/CounterLoop/sany.out` | A | `skills/pstack-statechart/scripts/test/corpus/CounterLoop/sany.out` | Ported unchanged. |
| `pstack/skills/statechart/scripts/test/corpus/CounterLoop/verdict-1.exit` | A | `skills/pstack-statechart/scripts/test/corpus/CounterLoop/verdict-1.exit` | Ported unchanged. |
| `pstack/skills/statechart/scripts/test/corpus/CounterLoop/verdict-1.out` | A | `skills/pstack-statechart/scripts/test/corpus/CounterLoop/verdict-1.out` | Ported unchanged. |
| `pstack/skills/statechart/scripts/test/corpus/CounterOrder/ChartRun.out` | A | `skills/pstack-statechart/scripts/test/corpus/CounterOrder/ChartRun.out` | Ported unchanged. |
| `pstack/skills/statechart/scripts/test/corpus/CounterOrder/CounterOrder.cfg` | A | `skills/pstack-statechart/scripts/test/corpus/CounterOrder/CounterOrder.cfg` | Ported unchanged. |
| `pstack/skills/statechart/scripts/test/corpus/CounterOrder/CounterOrder.tla` | A | `skills/pstack-statechart/scripts/test/corpus/CounterOrder/CounterOrder.tla` | Ported unchanged. |
| `pstack/skills/statechart/scripts/test/corpus/CounterOrder/chart.mmd` | A | `skills/pstack-statechart/scripts/test/corpus/CounterOrder/chart.mmd` | Ported unchanged. |
| `pstack/skills/statechart/scripts/test/corpus/CounterOrder/graph.dot` | A | `skills/pstack-statechart/scripts/test/corpus/CounterOrder/graph.dot` | Ported; terminal newline only. |
| `pstack/skills/statechart/scripts/test/corpus/CounterOrder/report.md` | A | `skills/pstack-statechart/scripts/test/corpus/CounterOrder/report.md` | Ported unchanged. |
| `pstack/skills/statechart/scripts/test/corpus/CounterOrder/sany.out` | A | `skills/pstack-statechart/scripts/test/corpus/CounterOrder/sany.out` | Ported unchanged. |
| `pstack/skills/statechart/scripts/test/corpus/CounterOrder/verdict-1.exit` | A | `skills/pstack-statechart/scripts/test/corpus/CounterOrder/verdict-1.exit` | Ported unchanged. |
| `pstack/skills/statechart/scripts/test/corpus/CounterOrder/verdict-1.out` | A | `skills/pstack-statechart/scripts/test/corpus/CounterOrder/verdict-1.out` | Ported unchanged. |
| `pstack/skills/statechart/scripts/test/corpus/CounterOrder/verdict-2.exit` | A | `skills/pstack-statechart/scripts/test/corpus/CounterOrder/verdict-2.exit` | Ported unchanged. |
| `pstack/skills/statechart/scripts/test/corpus/CounterOrder/verdict-2.out` | A | `skills/pstack-statechart/scripts/test/corpus/CounterOrder/verdict-2.out` | Ported unchanged. |
| `pstack/skills/statechart/scripts/test/corpus/CounterRules/ChartRun.out` | A | `skills/pstack-statechart/scripts/test/corpus/CounterRules/ChartRun.out` | Ported unchanged. |
| `pstack/skills/statechart/scripts/test/corpus/CounterRules/CounterRules.cfg` | A | `skills/pstack-statechart/scripts/test/corpus/CounterRules/CounterRules.cfg` | Ported unchanged. |
| `pstack/skills/statechart/scripts/test/corpus/CounterRules/CounterRules.tla` | A | `skills/pstack-statechart/scripts/test/corpus/CounterRules/CounterRules.tla` | Ported unchanged. |
| `pstack/skills/statechart/scripts/test/corpus/CounterRules/Moves.tla` | A | `skills/pstack-statechart/scripts/test/corpus/CounterRules/Moves.tla` | Ported unchanged. |
| `pstack/skills/statechart/scripts/test/corpus/CounterRules/chart.mmd` | A | `skills/pstack-statechart/scripts/test/corpus/CounterRules/chart.mmd` | Ported unchanged. |
| `pstack/skills/statechart/scripts/test/corpus/CounterRules/graph.dot` | A | `skills/pstack-statechart/scripts/test/corpus/CounterRules/graph.dot` | Ported; terminal newline only. |
| `pstack/skills/statechart/scripts/test/corpus/CounterRules/report.md` | A | `skills/pstack-statechart/scripts/test/corpus/CounterRules/report.md` | Ported unchanged. |
| `pstack/skills/statechart/scripts/test/corpus/CounterRules/sany.out` | A | `skills/pstack-statechart/scripts/test/corpus/CounterRules/sany.out` | Ported unchanged. |
| `pstack/skills/statechart/scripts/test/corpus/CounterRules/verdict-1.exit` | A | `skills/pstack-statechart/scripts/test/corpus/CounterRules/verdict-1.exit` | Ported unchanged. |
| `pstack/skills/statechart/scripts/test/corpus/CounterRules/verdict-1.out` | A | `skills/pstack-statechart/scripts/test/corpus/CounterRules/verdict-1.out` | Ported unchanged. |
| `pstack/skills/statechart/scripts/test/corpus/CounterRules/verdict-2.exit` | A | `skills/pstack-statechart/scripts/test/corpus/CounterRules/verdict-2.exit` | Ported unchanged. |
| `pstack/skills/statechart/scripts/test/corpus/CounterRules/verdict-2.out` | A | `skills/pstack-statechart/scripts/test/corpus/CounterRules/verdict-2.out` | Ported unchanged. |
| `pstack/skills/statechart/scripts/test/corpus/CounterRules/verdict-3.exit` | A | `skills/pstack-statechart/scripts/test/corpus/CounterRules/verdict-3.exit` | Ported unchanged. |
| `pstack/skills/statechart/scripts/test/corpus/CounterRules/verdict-3.out` | A | `skills/pstack-statechart/scripts/test/corpus/CounterRules/verdict-3.out` | Ported unchanged. |
| `pstack/skills/statechart/scripts/test/corpus/CounterRules/verdict-4.out` | A | `skills/pstack-statechart/scripts/test/corpus/CounterRules/verdict-4.out` | Ported unchanged. |
| `pstack/skills/statechart/scripts/test/corpus/CounterStart/ChartRun.out` | A | `skills/pstack-statechart/scripts/test/corpus/CounterStart/ChartRun.out` | Ported unchanged. |
| `pstack/skills/statechart/scripts/test/corpus/CounterStart/CounterStart.cfg` | A | `skills/pstack-statechart/scripts/test/corpus/CounterStart/CounterStart.cfg` | Ported unchanged. |
| `pstack/skills/statechart/scripts/test/corpus/CounterStart/CounterStart.tla` | A | `skills/pstack-statechart/scripts/test/corpus/CounterStart/CounterStart.tla` | Ported unchanged. |
| `pstack/skills/statechart/scripts/test/corpus/CounterStart/chart.mmd` | A | `skills/pstack-statechart/scripts/test/corpus/CounterStart/chart.mmd` | Ported unchanged. |
| `pstack/skills/statechart/scripts/test/corpus/CounterStart/graph.dot` | A | `skills/pstack-statechart/scripts/test/corpus/CounterStart/graph.dot` | Ported; terminal newline only. |
| `pstack/skills/statechart/scripts/test/corpus/CounterStart/report.md` | A | `skills/pstack-statechart/scripts/test/corpus/CounterStart/report.md` | Ported unchanged. |
| `pstack/skills/statechart/scripts/test/corpus/CounterStart/sany.out` | A | `skills/pstack-statechart/scripts/test/corpus/CounterStart/sany.out` | Ported unchanged. |
| `pstack/skills/statechart/scripts/test/corpus/CounterStart/verdict-1.exit` | A | `skills/pstack-statechart/scripts/test/corpus/CounterStart/verdict-1.exit` | Ported unchanged. |
| `pstack/skills/statechart/scripts/test/corpus/CounterStart/verdict-1.out` | A | `skills/pstack-statechart/scripts/test/corpus/CounterStart/verdict-1.out` | Ported unchanged. |
| `pstack/skills/statechart/scripts/test/corpus/CounterStart/verdict-2.out` | A | `skills/pstack-statechart/scripts/test/corpus/CounterStart/verdict-2.out` | Ported unchanged. |
| `pstack/skills/statechart/scripts/test/corpus/CounterStop/ChartRun.out` | A | `skills/pstack-statechart/scripts/test/corpus/CounterStop/ChartRun.out` | Ported unchanged. |
| `pstack/skills/statechart/scripts/test/corpus/CounterStop/CounterStop.cfg` | A | `skills/pstack-statechart/scripts/test/corpus/CounterStop/CounterStop.cfg` | Ported unchanged. |
| `pstack/skills/statechart/scripts/test/corpus/CounterStop/CounterStop.tla` | A | `skills/pstack-statechart/scripts/test/corpus/CounterStop/CounterStop.tla` | Ported unchanged. |
| `pstack/skills/statechart/scripts/test/corpus/CounterStop/chart.mmd` | A | `skills/pstack-statechart/scripts/test/corpus/CounterStop/chart.mmd` | Ported unchanged. |
| `pstack/skills/statechart/scripts/test/corpus/CounterStop/graph.dot` | A | `skills/pstack-statechart/scripts/test/corpus/CounterStop/graph.dot` | Ported; terminal newline only. |
| `pstack/skills/statechart/scripts/test/corpus/CounterStop/report.md` | A | `skills/pstack-statechart/scripts/test/corpus/CounterStop/report.md` | Ported unchanged. |
| `pstack/skills/statechart/scripts/test/corpus/CounterStop/sany.out` | A | `skills/pstack-statechart/scripts/test/corpus/CounterStop/sany.out` | Ported unchanged. |
| `pstack/skills/statechart/scripts/test/corpus/CounterStop/verdict-1.out` | A | `skills/pstack-statechart/scripts/test/corpus/CounterStop/verdict-1.out` | Ported unchanged. |
| `pstack/skills/statechart/scripts/test/corpus/CounterTie/ChartRun.out` | A | `skills/pstack-statechart/scripts/test/corpus/CounterTie/ChartRun.out` | Ported unchanged. |
| `pstack/skills/statechart/scripts/test/corpus/CounterTie/CounterTie.cfg` | A | `skills/pstack-statechart/scripts/test/corpus/CounterTie/CounterTie.cfg` | Ported unchanged. |
| `pstack/skills/statechart/scripts/test/corpus/CounterTie/CounterTie.tla` | A | `skills/pstack-statechart/scripts/test/corpus/CounterTie/CounterTie.tla` | Ported unchanged. |
| `pstack/skills/statechart/scripts/test/corpus/CounterTie/chart.mmd` | A | `skills/pstack-statechart/scripts/test/corpus/CounterTie/chart.mmd` | Ported unchanged. |
| `pstack/skills/statechart/scripts/test/corpus/CounterTie/graph.dot` | A | `skills/pstack-statechart/scripts/test/corpus/CounterTie/graph.dot` | Ported; terminal newline only. |
| `pstack/skills/statechart/scripts/test/corpus/CounterTie/report.md` | A | `skills/pstack-statechart/scripts/test/corpus/CounterTie/report.md` | Ported unchanged. |
| `pstack/skills/statechart/scripts/test/corpus/CounterTie/sany.out` | A | `skills/pstack-statechart/scripts/test/corpus/CounterTie/sany.out` | Ported unchanged. |
| `pstack/skills/statechart/scripts/test/corpus/CounterTie/verdict-1.exit` | A | `skills/pstack-statechart/scripts/test/corpus/CounterTie/verdict-1.exit` | Ported unchanged. |
| `pstack/skills/statechart/scripts/test/corpus/CounterTie/verdict-1.out` | A | `skills/pstack-statechart/scripts/test/corpus/CounterTie/verdict-1.out` | Ported unchanged. |
| `pstack/skills/statechart/scripts/test/corpus/CounterTie/verdict-2.exit` | A | `skills/pstack-statechart/scripts/test/corpus/CounterTie/verdict-2.exit` | Ported unchanged. |
| `pstack/skills/statechart/scripts/test/corpus/CounterTie/verdict-2.out` | A | `skills/pstack-statechart/scripts/test/corpus/CounterTie/verdict-2.out` | Ported unchanged. |
| `pstack/skills/statechart/scripts/test/corpus/CounterTie/verdict-3.exit` | A | `skills/pstack-statechart/scripts/test/corpus/CounterTie/verdict-3.exit` | Ported unchanged. |
| `pstack/skills/statechart/scripts/test/corpus/CounterTie/verdict-3.out` | A | `skills/pstack-statechart/scripts/test/corpus/CounterTie/verdict-3.out` | Ported unchanged. |
| `pstack/skills/statechart/scripts/test/corpus/CounterTie/verdict-4.out` | A | `skills/pstack-statechart/scripts/test/corpus/CounterTie/verdict-4.out` | Ported unchanged. |
| `pstack/skills/statechart/scripts/test/corpus/CounterTieInGraph/ChartRun.out` | A | `skills/pstack-statechart/scripts/test/corpus/CounterTieInGraph/ChartRun.out` | Ported unchanged. |
| `pstack/skills/statechart/scripts/test/corpus/CounterTieInGraph/CounterTieInGraph.cfg` | A | `skills/pstack-statechart/scripts/test/corpus/CounterTieInGraph/CounterTieInGraph.cfg` | Ported unchanged. |
| `pstack/skills/statechart/scripts/test/corpus/CounterTieInGraph/CounterTieInGraph.tla` | A | `skills/pstack-statechart/scripts/test/corpus/CounterTieInGraph/CounterTieInGraph.tla` | Ported unchanged. |
| `pstack/skills/statechart/scripts/test/corpus/CounterTieInGraph/chart.mmd` | A | `skills/pstack-statechart/scripts/test/corpus/CounterTieInGraph/chart.mmd` | Ported unchanged. |
| `pstack/skills/statechart/scripts/test/corpus/CounterTieInGraph/graph.dot` | A | `skills/pstack-statechart/scripts/test/corpus/CounterTieInGraph/graph.dot` | Ported; terminal newline only. |
| `pstack/skills/statechart/scripts/test/corpus/CounterTieInGraph/report.md` | A | `skills/pstack-statechart/scripts/test/corpus/CounterTieInGraph/report.md` | Ported unchanged. |
| `pstack/skills/statechart/scripts/test/corpus/CounterTieInGraph/sany.out` | A | `skills/pstack-statechart/scripts/test/corpus/CounterTieInGraph/sany.out` | Ported unchanged. |
| `pstack/skills/statechart/scripts/test/corpus/CounterTieInGraph/verdict-1.exit` | A | `skills/pstack-statechart/scripts/test/corpus/CounterTieInGraph/verdict-1.exit` | Ported unchanged. |
| `pstack/skills/statechart/scripts/test/corpus/CounterTieInGraph/verdict-1.out` | A | `skills/pstack-statechart/scripts/test/corpus/CounterTieInGraph/verdict-1.out` | Ported unchanged. |
| `pstack/skills/statechart/scripts/test/corpus/CounterTieInGraph/verdict-2.out` | A | `skills/pstack-statechart/scripts/test/corpus/CounterTieInGraph/verdict-2.out` | Ported unchanged. |
| `pstack/skills/statechart/scripts/test/corpus/CounterView/ChartRun.out` | A | `skills/pstack-statechart/scripts/test/corpus/CounterView/ChartRun.out` | Ported unchanged. |
| `pstack/skills/statechart/scripts/test/corpus/CounterView/CounterView.cfg` | A | `skills/pstack-statechart/scripts/test/corpus/CounterView/CounterView.cfg` | Ported unchanged. |
| `pstack/skills/statechart/scripts/test/corpus/CounterView/CounterView.tla` | A | `skills/pstack-statechart/scripts/test/corpus/CounterView/CounterView.tla` | Ported unchanged. |
| `pstack/skills/statechart/scripts/test/corpus/CounterView/chart.mmd` | A | `skills/pstack-statechart/scripts/test/corpus/CounterView/chart.mmd` | Ported unchanged. |
| `pstack/skills/statechart/scripts/test/corpus/CounterView/graph.dot` | A | `skills/pstack-statechart/scripts/test/corpus/CounterView/graph.dot` | Ported; terminal newline only. |
| `pstack/skills/statechart/scripts/test/corpus/CounterView/report.md` | A | `skills/pstack-statechart/scripts/test/corpus/CounterView/report.md` | Ported unchanged. |
| `pstack/skills/statechart/scripts/test/corpus/CounterView/sany.out` | A | `skills/pstack-statechart/scripts/test/corpus/CounterView/sany.out` | Ported unchanged. |
| `pstack/skills/statechart/scripts/test/corpus/CounterView/verdict-1.exit` | A | `skills/pstack-statechart/scripts/test/corpus/CounterView/verdict-1.exit` | Ported unchanged. |
| `pstack/skills/statechart/scripts/test/corpus/CounterView/verdict-1.out` | A | `skills/pstack-statechart/scripts/test/corpus/CounterView/verdict-1.out` | Ported unchanged. |
| `pstack/skills/statechart/scripts/test/corpus/CounterView/verdict-2.exit` | A | `skills/pstack-statechart/scripts/test/corpus/CounterView/verdict-2.exit` | Ported unchanged. |
| `pstack/skills/statechart/scripts/test/corpus/CounterView/verdict-2.out` | A | `skills/pstack-statechart/scripts/test/corpus/CounterView/verdict-2.out` | Ported unchanged. |
| `pstack/skills/statechart/scripts/test/corpus/CounterView/verdict-3.exit` | A | `skills/pstack-statechart/scripts/test/corpus/CounterView/verdict-3.exit` | Ported unchanged. |
| `pstack/skills/statechart/scripts/test/corpus/CounterView/verdict-3.out` | A | `skills/pstack-statechart/scripts/test/corpus/CounterView/verdict-3.out` | Ported unchanged. |
| `pstack/skills/statechart/scripts/test/corpus/CounterView/verdict-4.out` | A | `skills/pstack-statechart/scripts/test/corpus/CounterView/verdict-4.out` | Ported unchanged. |
| `pstack/skills/statechart/scripts/test/corpus/CounterView/view.mjs` | A | `skills/pstack-statechart/scripts/test/corpus/CounterView/view.mjs` | Ported unchanged. |
| `pstack/skills/statechart/scripts/test/corpus/DieHard/ChartRun.out` | A | `skills/pstack-statechart/scripts/test/corpus/DieHard/ChartRun.out` | Ported unchanged. |
| `pstack/skills/statechart/scripts/test/corpus/DieHard/DieHard.cfg` | A | `skills/pstack-statechart/scripts/test/corpus/DieHard/DieHard.cfg` | Ported unchanged. |
| `pstack/skills/statechart/scripts/test/corpus/DieHard/DieHard.tla` | A | `skills/pstack-statechart/scripts/test/corpus/DieHard/DieHard.tla` | Ported unchanged. |
| `pstack/skills/statechart/scripts/test/corpus/DieHard/chart.mmd` | A | `skills/pstack-statechart/scripts/test/corpus/DieHard/chart.mmd` | Ported unchanged. |
| `pstack/skills/statechart/scripts/test/corpus/DieHard/graph.dot` | A | `skills/pstack-statechart/scripts/test/corpus/DieHard/graph.dot` | Ported; terminal newline only. |
| `pstack/skills/statechart/scripts/test/corpus/DieHard/report.md` | A | `skills/pstack-statechart/scripts/test/corpus/DieHard/report.md` | Ported unchanged. |
| `pstack/skills/statechart/scripts/test/corpus/DieHard/sany.out` | A | `skills/pstack-statechart/scripts/test/corpus/DieHard/sany.out` | Ported unchanged. |
| `pstack/skills/statechart/scripts/test/corpus/DieHard/verdict-1.exit` | A | `skills/pstack-statechart/scripts/test/corpus/DieHard/verdict-1.exit` | Ported unchanged. |
| `pstack/skills/statechart/scripts/test/corpus/DieHard/verdict-1.out` | A | `skills/pstack-statechart/scripts/test/corpus/DieHard/verdict-1.out` | Ported unchanged. |
| `pstack/skills/statechart/scripts/test/corpus/DieHard/verdict-2.out` | A | `skills/pstack-statechart/scripts/test/corpus/DieHard/verdict-2.out` | Ported unchanged. |
| `pstack/skills/statechart/scripts/test/corpus/FirstRule/ChartRun.out` | A | `skills/pstack-statechart/scripts/test/corpus/FirstRule/ChartRun.out` | Ported unchanged. |
| `pstack/skills/statechart/scripts/test/corpus/FirstRule/FirstRule.cfg` | A | `skills/pstack-statechart/scripts/test/corpus/FirstRule/FirstRule.cfg` | Ported unchanged. |
| `pstack/skills/statechart/scripts/test/corpus/FirstRule/FirstRule.tla` | A | `skills/pstack-statechart/scripts/test/corpus/FirstRule/FirstRule.tla` | Ported unchanged. |
| `pstack/skills/statechart/scripts/test/corpus/FirstRule/chart.mmd` | A | `skills/pstack-statechart/scripts/test/corpus/FirstRule/chart.mmd` | Ported unchanged. |
| `pstack/skills/statechart/scripts/test/corpus/FirstRule/graph.dot` | A | `skills/pstack-statechart/scripts/test/corpus/FirstRule/graph.dot` | Ported; terminal newline only. |
| `pstack/skills/statechart/scripts/test/corpus/FirstRule/report.md` | A | `skills/pstack-statechart/scripts/test/corpus/FirstRule/report.md` | Ported unchanged. |
| `pstack/skills/statechart/scripts/test/corpus/FirstRule/sany.out` | A | `skills/pstack-statechart/scripts/test/corpus/FirstRule/sany.out` | Ported unchanged. |
| `pstack/skills/statechart/scripts/test/corpus/FirstRule/verdict-1.exit` | A | `skills/pstack-statechart/scripts/test/corpus/FirstRule/verdict-1.exit` | Ported unchanged. |
| `pstack/skills/statechart/scripts/test/corpus/FirstRule/verdict-1.out` | A | `skills/pstack-statechart/scripts/test/corpus/FirstRule/verdict-1.out` | Ported unchanged. |
| `pstack/skills/statechart/scripts/test/corpus/FirstRule/verdict-2.exit` | A | `skills/pstack-statechart/scripts/test/corpus/FirstRule/verdict-2.exit` | Ported unchanged. |
| `pstack/skills/statechart/scripts/test/corpus/FirstRule/verdict-2.out` | A | `skills/pstack-statechart/scripts/test/corpus/FirstRule/verdict-2.out` | Ported unchanged. |
| `pstack/skills/statechart/scripts/test/corpus/FirstRule/verdict-3.exit` | A | `skills/pstack-statechart/scripts/test/corpus/FirstRule/verdict-3.exit` | Ported unchanged. |
| `pstack/skills/statechart/scripts/test/corpus/FirstRule/verdict-3.out` | A | `skills/pstack-statechart/scripts/test/corpus/FirstRule/verdict-3.out` | Ported unchanged. |
| `pstack/skills/statechart/scripts/test/corpus/FirstRule/verdict-4.exit` | A | `skills/pstack-statechart/scripts/test/corpus/FirstRule/verdict-4.exit` | Ported unchanged. |
| `pstack/skills/statechart/scripts/test/corpus/FirstRule/verdict-4.out` | A | `skills/pstack-statechart/scripts/test/corpus/FirstRule/verdict-4.out` | Ported unchanged. |
| `pstack/skills/statechart/scripts/test/corpus/HiddenClock/ChartRun.out` | A | `skills/pstack-statechart/scripts/test/corpus/HiddenClock/ChartRun.out` | Ported unchanged. |
| `pstack/skills/statechart/scripts/test/corpus/HiddenClock/HiddenClock.cfg` | A | `skills/pstack-statechart/scripts/test/corpus/HiddenClock/HiddenClock.cfg` | Ported unchanged. |
| `pstack/skills/statechart/scripts/test/corpus/HiddenClock/HiddenClock.tla` | A | `skills/pstack-statechart/scripts/test/corpus/HiddenClock/HiddenClock.tla` | Ported unchanged. |
| `pstack/skills/statechart/scripts/test/corpus/HiddenClock/chart.mmd` | A | `skills/pstack-statechart/scripts/test/corpus/HiddenClock/chart.mmd` | Ported unchanged. |
| `pstack/skills/statechart/scripts/test/corpus/HiddenClock/graph.dot` | A | `skills/pstack-statechart/scripts/test/corpus/HiddenClock/graph.dot` | Ported; terminal newline only. |
| `pstack/skills/statechart/scripts/test/corpus/HiddenClock/report.md` | A | `skills/pstack-statechart/scripts/test/corpus/HiddenClock/report.md` | Ported unchanged. |
| `pstack/skills/statechart/scripts/test/corpus/HiddenClock/sany.out` | A | `skills/pstack-statechart/scripts/test/corpus/HiddenClock/sany.out` | Ported unchanged. |
| `pstack/skills/statechart/scripts/test/corpus/HiddenClock/verdict-1.exit` | A | `skills/pstack-statechart/scripts/test/corpus/HiddenClock/verdict-1.exit` | Ported unchanged. |
| `pstack/skills/statechart/scripts/test/corpus/HiddenClock/verdict-1.out` | A | `skills/pstack-statechart/scripts/test/corpus/HiddenClock/verdict-1.out` | Ported unchanged. |
| `pstack/skills/statechart/scripts/test/corpus/Login/ChartRun.out` | A | `skills/pstack-statechart/scripts/test/corpus/Login/ChartRun.out` | Ported unchanged. |
| `pstack/skills/statechart/scripts/test/corpus/Login/Login.cfg` | A | `skills/pstack-statechart/scripts/test/corpus/Login/Login.cfg` | Ported unchanged. |
| `pstack/skills/statechart/scripts/test/corpus/Login/Login.tla` | A | `skills/pstack-statechart/scripts/test/corpus/Login/Login.tla` | Ported unchanged. |
| `pstack/skills/statechart/scripts/test/corpus/Login/chart.mmd` | A | `skills/pstack-statechart/scripts/test/corpus/Login/chart.mmd` | Ported unchanged. |
| `pstack/skills/statechart/scripts/test/corpus/Login/graph.dot` | A | `skills/pstack-statechart/scripts/test/corpus/Login/graph.dot` | Ported; terminal newline only. |
| `pstack/skills/statechart/scripts/test/corpus/Login/report.md` | A | `skills/pstack-statechart/scripts/test/corpus/Login/report.md` | Ported unchanged. |
| `pstack/skills/statechart/scripts/test/corpus/Login/sany.out` | A | `skills/pstack-statechart/scripts/test/corpus/Login/sany.out` | Ported unchanged. |
| `pstack/skills/statechart/scripts/test/corpus/Login/verdict-1.out` | A | `skills/pstack-statechart/scripts/test/corpus/Login/verdict-1.out` | Ported unchanged. |
| `pstack/skills/statechart/scripts/test/corpus/Login/view.mjs` | A | `skills/pstack-statechart/scripts/test/corpus/Login/view.mjs` | Ported unchanged. |
| `pstack/skills/statechart/scripts/test/corpus/LoginGuarded/ChartRun.out` | A | `skills/pstack-statechart/scripts/test/corpus/LoginGuarded/ChartRun.out` | Ported unchanged. |
| `pstack/skills/statechart/scripts/test/corpus/LoginGuarded/LoginGuarded.cfg` | A | `skills/pstack-statechart/scripts/test/corpus/LoginGuarded/LoginGuarded.cfg` | Ported unchanged. |
| `pstack/skills/statechart/scripts/test/corpus/LoginGuarded/LoginGuarded.tla` | A | `skills/pstack-statechart/scripts/test/corpus/LoginGuarded/LoginGuarded.tla` | Ported unchanged. |
| `pstack/skills/statechart/scripts/test/corpus/LoginGuarded/chart.mmd` | A | `skills/pstack-statechart/scripts/test/corpus/LoginGuarded/chart.mmd` | Ported unchanged. |
| `pstack/skills/statechart/scripts/test/corpus/LoginGuarded/graph.dot` | A | `skills/pstack-statechart/scripts/test/corpus/LoginGuarded/graph.dot` | Ported; terminal newline only. |
| `pstack/skills/statechart/scripts/test/corpus/LoginGuarded/report.md` | A | `skills/pstack-statechart/scripts/test/corpus/LoginGuarded/report.md` | Ported unchanged. |
| `pstack/skills/statechart/scripts/test/corpus/LoginGuarded/sany.out` | A | `skills/pstack-statechart/scripts/test/corpus/LoginGuarded/sany.out` | Ported unchanged. |
| `pstack/skills/statechart/scripts/test/corpus/LoginGuarded/verdict-1.out` | A | `skills/pstack-statechart/scripts/test/corpus/LoginGuarded/verdict-1.out` | Ported unchanged. |
| `pstack/skills/statechart/scripts/test/corpus/LoginGuarded/view.mjs` | A | `skills/pstack-statechart/scripts/test/corpus/LoginGuarded/view.mjs` | Ported unchanged. |
| `pstack/skills/statechart/scripts/test/corpus/LoginParallel/ChartRun.out` | A | `skills/pstack-statechart/scripts/test/corpus/LoginParallel/ChartRun.out` | Ported unchanged. |
| `pstack/skills/statechart/scripts/test/corpus/LoginParallel/LoginParallel.cfg` | A | `skills/pstack-statechart/scripts/test/corpus/LoginParallel/LoginParallel.cfg` | Ported unchanged. |
| `pstack/skills/statechart/scripts/test/corpus/LoginParallel/LoginParallel.tla` | A | `skills/pstack-statechart/scripts/test/corpus/LoginParallel/LoginParallel.tla` | Ported unchanged. |
| `pstack/skills/statechart/scripts/test/corpus/LoginParallel/chart.mmd` | A | `skills/pstack-statechart/scripts/test/corpus/LoginParallel/chart.mmd` | Ported unchanged. |
| `pstack/skills/statechart/scripts/test/corpus/LoginParallel/graph.dot` | A | `skills/pstack-statechart/scripts/test/corpus/LoginParallel/graph.dot` | Ported; terminal newline only. |
| `pstack/skills/statechart/scripts/test/corpus/LoginParallel/report.md` | A | `skills/pstack-statechart/scripts/test/corpus/LoginParallel/report.md` | Ported unchanged. |
| `pstack/skills/statechart/scripts/test/corpus/LoginParallel/sany.out` | A | `skills/pstack-statechart/scripts/test/corpus/LoginParallel/sany.out` | Ported unchanged. |
| `pstack/skills/statechart/scripts/test/corpus/LoginParallel/verdict-1.exit` | A | `skills/pstack-statechart/scripts/test/corpus/LoginParallel/verdict-1.exit` | Ported unchanged. |
| `pstack/skills/statechart/scripts/test/corpus/LoginParallel/verdict-1.out` | A | `skills/pstack-statechart/scripts/test/corpus/LoginParallel/verdict-1.out` | Ported unchanged. |
| `pstack/skills/statechart/scripts/test/corpus/LoginParallel/verdict-2.out` | A | `skills/pstack-statechart/scripts/test/corpus/LoginParallel/verdict-2.out` | Ported unchanged. |
| `pstack/skills/statechart/scripts/test/corpus/LoginParallel/view.mjs` | A | `skills/pstack-statechart/scripts/test/corpus/LoginParallel/view.mjs` | Ported unchanged. |
| `pstack/skills/statechart/scripts/test/corpus/MediaPlayer/ChartRun.out` | A | `skills/pstack-statechart/scripts/test/corpus/MediaPlayer/ChartRun.out` | Ported unchanged. |
| `pstack/skills/statechart/scripts/test/corpus/MediaPlayer/MediaPlayer.cfg` | A | `skills/pstack-statechart/scripts/test/corpus/MediaPlayer/MediaPlayer.cfg` | Ported unchanged. |
| `pstack/skills/statechart/scripts/test/corpus/MediaPlayer/MediaPlayer.tla` | A | `skills/pstack-statechart/scripts/test/corpus/MediaPlayer/MediaPlayer.tla` | Ported unchanged. |
| `pstack/skills/statechart/scripts/test/corpus/MediaPlayer/chart.mmd` | A | `skills/pstack-statechart/scripts/test/corpus/MediaPlayer/chart.mmd` | Ported unchanged. |
| `pstack/skills/statechart/scripts/test/corpus/MediaPlayer/graph.dot` | A | `skills/pstack-statechart/scripts/test/corpus/MediaPlayer/graph.dot` | Ported; terminal newline only. |
| `pstack/skills/statechart/scripts/test/corpus/MediaPlayer/report.md` | A | `skills/pstack-statechart/scripts/test/corpus/MediaPlayer/report.md` | Ported unchanged. |
| `pstack/skills/statechart/scripts/test/corpus/MediaPlayer/sany.out` | A | `skills/pstack-statechart/scripts/test/corpus/MediaPlayer/sany.out` | Ported unchanged. |
| `pstack/skills/statechart/scripts/test/corpus/MediaPlayer/verdict-1.exit` | A | `skills/pstack-statechart/scripts/test/corpus/MediaPlayer/verdict-1.exit` | Ported unchanged. |
| `pstack/skills/statechart/scripts/test/corpus/MediaPlayer/verdict-1.out` | A | `skills/pstack-statechart/scripts/test/corpus/MediaPlayer/verdict-1.out` | Ported unchanged. |
| `pstack/skills/statechart/scripts/test/corpus/MediaPlayer/verdict-2.out` | A | `skills/pstack-statechart/scripts/test/corpus/MediaPlayer/verdict-2.out` | Ported unchanged. |
| `pstack/skills/statechart/scripts/test/corpus/MediaPlayer/view.mjs` | A | `skills/pstack-statechart/scripts/test/corpus/MediaPlayer/view.mjs` | Ported unchanged. |
| `pstack/skills/statechart/scripts/test/corpus/MediaPlayerFixed/ChartRun.out` | A | `skills/pstack-statechart/scripts/test/corpus/MediaPlayerFixed/ChartRun.out` | Ported unchanged. |
| `pstack/skills/statechart/scripts/test/corpus/MediaPlayerFixed/MediaPlayerFixed.cfg` | A | `skills/pstack-statechart/scripts/test/corpus/MediaPlayerFixed/MediaPlayerFixed.cfg` | Ported unchanged. |
| `pstack/skills/statechart/scripts/test/corpus/MediaPlayerFixed/MediaPlayerFixed.tla` | A | `skills/pstack-statechart/scripts/test/corpus/MediaPlayerFixed/MediaPlayerFixed.tla` | Ported unchanged. |
| `pstack/skills/statechart/scripts/test/corpus/MediaPlayerFixed/chart.mmd` | A | `skills/pstack-statechart/scripts/test/corpus/MediaPlayerFixed/chart.mmd` | Ported unchanged. |
| `pstack/skills/statechart/scripts/test/corpus/MediaPlayerFixed/graph.dot` | A | `skills/pstack-statechart/scripts/test/corpus/MediaPlayerFixed/graph.dot` | Ported; terminal newline only. |
| `pstack/skills/statechart/scripts/test/corpus/MediaPlayerFixed/report.md` | A | `skills/pstack-statechart/scripts/test/corpus/MediaPlayerFixed/report.md` | Ported unchanged. |
| `pstack/skills/statechart/scripts/test/corpus/MediaPlayerFixed/sany.out` | A | `skills/pstack-statechart/scripts/test/corpus/MediaPlayerFixed/sany.out` | Ported unchanged. |
| `pstack/skills/statechart/scripts/test/corpus/MediaPlayerFixed/verdict-1.out` | A | `skills/pstack-statechart/scripts/test/corpus/MediaPlayerFixed/verdict-1.out` | Ported unchanged. |
| `pstack/skills/statechart/scripts/test/corpus/MediaPlayerFixed/view.mjs` | A | `skills/pstack-statechart/scripts/test/corpus/MediaPlayerFixed/view.mjs` | Ported unchanged. |
| `pstack/skills/statechart/scripts/test/corpus/MediaPlayerProps/ChartRun.out` | A | `skills/pstack-statechart/scripts/test/corpus/MediaPlayerProps/ChartRun.out` | Ported unchanged. |
| `pstack/skills/statechart/scripts/test/corpus/MediaPlayerProps/MediaPlayer.tla` | A | `skills/pstack-statechart/scripts/test/corpus/MediaPlayerProps/MediaPlayer.tla` | Ported unchanged. |
| `pstack/skills/statechart/scripts/test/corpus/MediaPlayerProps/MediaPlayerProps.cfg` | A | `skills/pstack-statechart/scripts/test/corpus/MediaPlayerProps/MediaPlayerProps.cfg` | Ported unchanged. |
| `pstack/skills/statechart/scripts/test/corpus/MediaPlayerProps/MediaPlayerProps.tla` | A | `skills/pstack-statechart/scripts/test/corpus/MediaPlayerProps/MediaPlayerProps.tla` | Ported unchanged. |
| `pstack/skills/statechart/scripts/test/corpus/MediaPlayerProps/chart.mmd` | A | `skills/pstack-statechart/scripts/test/corpus/MediaPlayerProps/chart.mmd` | Ported unchanged. |
| `pstack/skills/statechart/scripts/test/corpus/MediaPlayerProps/graph.dot` | A | `skills/pstack-statechart/scripts/test/corpus/MediaPlayerProps/graph.dot` | Ported; terminal newline only. |
| `pstack/skills/statechart/scripts/test/corpus/MediaPlayerProps/report.md` | A | `skills/pstack-statechart/scripts/test/corpus/MediaPlayerProps/report.md` | Ported unchanged. |
| `pstack/skills/statechart/scripts/test/corpus/MediaPlayerProps/sany.out` | A | `skills/pstack-statechart/scripts/test/corpus/MediaPlayerProps/sany.out` | Ported unchanged. |
| `pstack/skills/statechart/scripts/test/corpus/MediaPlayerProps/verdict-1.exit` | A | `skills/pstack-statechart/scripts/test/corpus/MediaPlayerProps/verdict-1.exit` | Ported unchanged. |
| `pstack/skills/statechart/scripts/test/corpus/MediaPlayerProps/verdict-1.out` | A | `skills/pstack-statechart/scripts/test/corpus/MediaPlayerProps/verdict-1.out` | Ported unchanged. |
| `pstack/skills/statechart/scripts/test/corpus/MediaPlayerProps/verdict-2.out` | A | `skills/pstack-statechart/scripts/test/corpus/MediaPlayerProps/verdict-2.out` | Ported unchanged. |
| `pstack/skills/statechart/scripts/test/corpus/MediaPlayerProps/verdict-3.out` | A | `skills/pstack-statechart/scripts/test/corpus/MediaPlayerProps/verdict-3.out` | Ported unchanged. |
| `pstack/skills/statechart/scripts/test/corpus/MediaPlayerProps/verdict-4.exit` | A | `skills/pstack-statechart/scripts/test/corpus/MediaPlayerProps/verdict-4.exit` | Ported unchanged. |
| `pstack/skills/statechart/scripts/test/corpus/MediaPlayerProps/verdict-4.out` | A | `skills/pstack-statechart/scripts/test/corpus/MediaPlayerProps/verdict-4.out` | Ported unchanged. |
| `pstack/skills/statechart/scripts/test/corpus/MediaPlayerProps/verdict-5.exit` | A | `skills/pstack-statechart/scripts/test/corpus/MediaPlayerProps/verdict-5.exit` | Ported unchanged. |
| `pstack/skills/statechart/scripts/test/corpus/MediaPlayerProps/verdict-5.out` | A | `skills/pstack-statechart/scripts/test/corpus/MediaPlayerProps/verdict-5.out` | Ported unchanged. |
| `pstack/skills/statechart/scripts/test/corpus/MediaPlayerProps/verdict-6.out` | A | `skills/pstack-statechart/scripts/test/corpus/MediaPlayerProps/verdict-6.out` | Ported unchanged. |
| `pstack/skills/statechart/scripts/test/corpus/MediaPlayerProps/view.mjs` | A | `skills/pstack-statechart/scripts/test/corpus/MediaPlayerProps/view.mjs` | Ported unchanged. |
| `pstack/skills/statechart/scripts/test/corpus/PickWorker/ChartRun.out` | A | `skills/pstack-statechart/scripts/test/corpus/PickWorker/ChartRun.out` | Ported unchanged. |
| `pstack/skills/statechart/scripts/test/corpus/PickWorker/PickWorker.cfg` | A | `skills/pstack-statechart/scripts/test/corpus/PickWorker/PickWorker.cfg` | Ported unchanged. |
| `pstack/skills/statechart/scripts/test/corpus/PickWorker/PickWorker.tla` | A | `skills/pstack-statechart/scripts/test/corpus/PickWorker/PickWorker.tla` | Ported unchanged. |
| `pstack/skills/statechart/scripts/test/corpus/PickWorker/chart.mmd` | A | `skills/pstack-statechart/scripts/test/corpus/PickWorker/chart.mmd` | Ported unchanged. |
| `pstack/skills/statechart/scripts/test/corpus/PickWorker/graph.dot` | A | `skills/pstack-statechart/scripts/test/corpus/PickWorker/graph.dot` | Ported; terminal newline only. |
| `pstack/skills/statechart/scripts/test/corpus/PickWorker/report.md` | A | `skills/pstack-statechart/scripts/test/corpus/PickWorker/report.md` | Ported unchanged. |
| `pstack/skills/statechart/scripts/test/corpus/PickWorker/sany.out` | A | `skills/pstack-statechart/scripts/test/corpus/PickWorker/sany.out` | Ported unchanged. |
| `pstack/skills/statechart/scripts/test/corpus/PickWorker/verdict-1.out` | A | `skills/pstack-statechart/scripts/test/corpus/PickWorker/verdict-1.out` | Ported unchanged. |
| `pstack/skills/statechart/scripts/test/corpus/Shadow/ChartRun.out` | A | `skills/pstack-statechart/scripts/test/corpus/Shadow/ChartRun.out` | Ported unchanged. |
| `pstack/skills/statechart/scripts/test/corpus/Shadow/Shadow.cfg` | A | `skills/pstack-statechart/scripts/test/corpus/Shadow/Shadow.cfg` | Ported unchanged. |
| `pstack/skills/statechart/scripts/test/corpus/Shadow/Shadow.tla` | A | `skills/pstack-statechart/scripts/test/corpus/Shadow/Shadow.tla` | Ported unchanged. |
| `pstack/skills/statechart/scripts/test/corpus/Shadow/ShadowLib.tla` | A | `skills/pstack-statechart/scripts/test/corpus/Shadow/ShadowLib.tla` | Ported unchanged. |
| `pstack/skills/statechart/scripts/test/corpus/Shadow/ShadowSub.tla` | A | `skills/pstack-statechart/scripts/test/corpus/Shadow/ShadowSub.tla` | Ported unchanged. |
| `pstack/skills/statechart/scripts/test/corpus/Shadow/chart.mmd` | A | `skills/pstack-statechart/scripts/test/corpus/Shadow/chart.mmd` | Ported unchanged. |
| `pstack/skills/statechart/scripts/test/corpus/Shadow/graph.dot` | A | `skills/pstack-statechart/scripts/test/corpus/Shadow/graph.dot` | Ported; terminal newline only. |
| `pstack/skills/statechart/scripts/test/corpus/Shadow/report.md` | A | `skills/pstack-statechart/scripts/test/corpus/Shadow/report.md` | Ported unchanged. |
| `pstack/skills/statechart/scripts/test/corpus/Shadow/sany.out` | A | `skills/pstack-statechart/scripts/test/corpus/Shadow/sany.out` | Ported unchanged. |
| `pstack/skills/statechart/scripts/test/corpus/Shadow/verdict-1.out` | A | `skills/pstack-statechart/scripts/test/corpus/Shadow/verdict-1.out` | Ported unchanged. |
| `pstack/skills/statechart/scripts/test/corpus/SpacedNames/ChartRun.out` | A | `skills/pstack-statechart/scripts/test/corpus/SpacedNames/ChartRun.out` | Ported unchanged. |
| `pstack/skills/statechart/scripts/test/corpus/SpacedNames/SpacedNames.cfg` | A | `skills/pstack-statechart/scripts/test/corpus/SpacedNames/SpacedNames.cfg` | Ported unchanged. |
| `pstack/skills/statechart/scripts/test/corpus/SpacedNames/SpacedNames.tla` | A | `skills/pstack-statechart/scripts/test/corpus/SpacedNames/SpacedNames.tla` | Ported unchanged. |
| `pstack/skills/statechart/scripts/test/corpus/SpacedNames/chart.mmd` | A | `skills/pstack-statechart/scripts/test/corpus/SpacedNames/chart.mmd` | Ported unchanged. |
| `pstack/skills/statechart/scripts/test/corpus/SpacedNames/graph.dot` | A | `skills/pstack-statechart/scripts/test/corpus/SpacedNames/graph.dot` | Ported; terminal newline only. |
| `pstack/skills/statechart/scripts/test/corpus/SpacedNames/report.md` | A | `skills/pstack-statechart/scripts/test/corpus/SpacedNames/report.md` | Ported unchanged. |
| `pstack/skills/statechart/scripts/test/corpus/SpacedNames/sany.out` | A | `skills/pstack-statechart/scripts/test/corpus/SpacedNames/sany.out` | Ported unchanged. |
| `pstack/skills/statechart/scripts/test/corpus/SpacedNames/verdict-1.exit` | A | `skills/pstack-statechart/scripts/test/corpus/SpacedNames/verdict-1.exit` | Ported unchanged. |
| `pstack/skills/statechart/scripts/test/corpus/SpacedNames/verdict-1.out` | A | `skills/pstack-statechart/scripts/test/corpus/SpacedNames/verdict-1.out` | Ported unchanged. |
| `pstack/skills/statechart/scripts/test/corpus/SpacedNames/verdict-2.exit` | A | `skills/pstack-statechart/scripts/test/corpus/SpacedNames/verdict-2.exit` | Ported unchanged. |
| `pstack/skills/statechart/scripts/test/corpus/SpacedNames/verdict-2.out` | A | `skills/pstack-statechart/scripts/test/corpus/SpacedNames/verdict-2.out` | Ported unchanged. |
| `pstack/skills/statechart/scripts/test/corpus/TwoPhase/ChartRun.out` | A | `skills/pstack-statechart/scripts/test/corpus/TwoPhase/ChartRun.out` | Ported unchanged. |
| `pstack/skills/statechart/scripts/test/corpus/TwoPhase/TwoPhase.cfg` | A | `skills/pstack-statechart/scripts/test/corpus/TwoPhase/TwoPhase.cfg` | Ported unchanged. |
| `pstack/skills/statechart/scripts/test/corpus/TwoPhase/TwoPhase.tla` | A | `skills/pstack-statechart/scripts/test/corpus/TwoPhase/TwoPhase.tla` | Ported unchanged. |
| `pstack/skills/statechart/scripts/test/corpus/TwoPhase/chart.mmd` | A | `skills/pstack-statechart/scripts/test/corpus/TwoPhase/chart.mmd` | Ported unchanged. |
| `pstack/skills/statechart/scripts/test/corpus/TwoPhase/graph.dot` | A | `skills/pstack-statechart/scripts/test/corpus/TwoPhase/graph.dot` | Ported; terminal newline only. |
| `pstack/skills/statechart/scripts/test/corpus/TwoPhase/report.md` | A | `skills/pstack-statechart/scripts/test/corpus/TwoPhase/report.md` | Ported unchanged. |
| `pstack/skills/statechart/scripts/test/corpus/TwoPhase/sany.out` | A | `skills/pstack-statechart/scripts/test/corpus/TwoPhase/sany.out` | Ported unchanged. |
| `pstack/skills/statechart/scripts/test/corpus/TwoPhase/verdict-1.exit` | A | `skills/pstack-statechart/scripts/test/corpus/TwoPhase/verdict-1.exit` | Ported unchanged. |
| `pstack/skills/statechart/scripts/test/corpus/TwoPhase/verdict-1.out` | A | `skills/pstack-statechart/scripts/test/corpus/TwoPhase/verdict-1.out` | Ported unchanged. |
| `pstack/skills/statechart/scripts/test/corpus/TwoPhase/verdict-2.out` | A | `skills/pstack-statechart/scripts/test/corpus/TwoPhase/verdict-2.out` | Ported unchanged. |
| `pstack/skills/statechart/scripts/test/corpus/TwoPhase/view.mjs` | A | `skills/pstack-statechart/scripts/test/corpus/TwoPhase/view.mjs` | Ported unchanged. |
| `pstack/skills/statechart/scripts/test/corpus/TwoPhaseFixed/ChartRun.out` | A | `skills/pstack-statechart/scripts/test/corpus/TwoPhaseFixed/ChartRun.out` | Ported unchanged. |
| `pstack/skills/statechart/scripts/test/corpus/TwoPhaseFixed/TwoPhaseFixed.cfg` | A | `skills/pstack-statechart/scripts/test/corpus/TwoPhaseFixed/TwoPhaseFixed.cfg` | Ported unchanged. |
| `pstack/skills/statechart/scripts/test/corpus/TwoPhaseFixed/TwoPhaseFixed.tla` | A | `skills/pstack-statechart/scripts/test/corpus/TwoPhaseFixed/TwoPhaseFixed.tla` | Ported unchanged. |
| `pstack/skills/statechart/scripts/test/corpus/TwoPhaseFixed/chart.mmd` | A | `skills/pstack-statechart/scripts/test/corpus/TwoPhaseFixed/chart.mmd` | Ported unchanged. |
| `pstack/skills/statechart/scripts/test/corpus/TwoPhaseFixed/graph.dot` | A | `skills/pstack-statechart/scripts/test/corpus/TwoPhaseFixed/graph.dot` | Ported; terminal newline only. |
| `pstack/skills/statechart/scripts/test/corpus/TwoPhaseFixed/report.md` | A | `skills/pstack-statechart/scripts/test/corpus/TwoPhaseFixed/report.md` | Ported unchanged. |
| `pstack/skills/statechart/scripts/test/corpus/TwoPhaseFixed/sany.out` | A | `skills/pstack-statechart/scripts/test/corpus/TwoPhaseFixed/sany.out` | Ported unchanged. |
| `pstack/skills/statechart/scripts/test/corpus/TwoPhaseFixed/verdict-1.out` | A | `skills/pstack-statechart/scripts/test/corpus/TwoPhaseFixed/verdict-1.out` | Ported unchanged. |
| `pstack/skills/statechart/scripts/test/corpus/TwoPhaseFixed/view.mjs` | A | `skills/pstack-statechart/scripts/test/corpus/TwoPhaseFixed/view.mjs` | Ported unchanged. |
| `pstack/skills/statechart/scripts/test/corpus/TypeGuard/ChartRun.exit` | A | `skills/pstack-statechart/scripts/test/corpus/TypeGuard/ChartRun.exit` | Ported unchanged. |
| `pstack/skills/statechart/scripts/test/corpus/TypeGuard/ChartRun.out` | A | `skills/pstack-statechart/scripts/test/corpus/TypeGuard/ChartRun.out` | Ported unchanged. |
| `pstack/skills/statechart/scripts/test/corpus/TypeGuard/TypeGuard.cfg` | A | `skills/pstack-statechart/scripts/test/corpus/TypeGuard/TypeGuard.cfg` | Ported unchanged. |
| `pstack/skills/statechart/scripts/test/corpus/TypeGuard/TypeGuard.tla` | A | `skills/pstack-statechart/scripts/test/corpus/TypeGuard/TypeGuard.tla` | Ported unchanged. |
| `pstack/skills/statechart/scripts/test/corpus/TypeGuard/chart.mmd` | A | `skills/pstack-statechart/scripts/test/corpus/TypeGuard/chart.mmd` | Ported unchanged. |
| `pstack/skills/statechart/scripts/test/corpus/TypeGuard/graph.dot` | A | `skills/pstack-statechart/scripts/test/corpus/TypeGuard/graph.dot` | Ported; terminal newline only. |
| `pstack/skills/statechart/scripts/test/corpus/TypeGuard/report.md` | A | `skills/pstack-statechart/scripts/test/corpus/TypeGuard/report.md` | Ported unchanged. |
| `pstack/skills/statechart/scripts/test/corpus/TypeGuard/sany.out` | A | `skills/pstack-statechart/scripts/test/corpus/TypeGuard/sany.out` | Ported unchanged. |
| `pstack/skills/statechart/scripts/test/corpus/TypeGuard/verdict-1.exit` | A | `skills/pstack-statechart/scripts/test/corpus/TypeGuard/verdict-1.exit` | Ported unchanged. |
| `pstack/skills/statechart/scripts/test/corpus/TypeGuard/verdict-1.out` | A | `skills/pstack-statechart/scripts/test/corpus/TypeGuard/verdict-1.out` | Ported unchanged. |
| `pstack/skills/statechart/scripts/test/corpus/TypeGuard/verdict-2.exit` | A | `skills/pstack-statechart/scripts/test/corpus/TypeGuard/verdict-2.exit` | Ported unchanged. |
| `pstack/skills/statechart/scripts/test/corpus/TypeGuard/verdict-2.out` | A | `skills/pstack-statechart/scripts/test/corpus/TypeGuard/verdict-2.out` | Ported unchanged. |
| `pstack/skills/statechart/scripts/test/corpus/UserNoDeadlock/ChartRun.out` | A | `skills/pstack-statechart/scripts/test/corpus/UserNoDeadlock/ChartRun.out` | Ported unchanged. |
| `pstack/skills/statechart/scripts/test/corpus/UserNoDeadlock/UserNoDeadlock.cfg` | A | `skills/pstack-statechart/scripts/test/corpus/UserNoDeadlock/UserNoDeadlock.cfg` | Ported unchanged. |
| `pstack/skills/statechart/scripts/test/corpus/UserNoDeadlock/UserNoDeadlock.tla` | A | `skills/pstack-statechart/scripts/test/corpus/UserNoDeadlock/UserNoDeadlock.tla` | Ported unchanged. |
| `pstack/skills/statechart/scripts/test/corpus/UserNoDeadlock/chart.mmd` | A | `skills/pstack-statechart/scripts/test/corpus/UserNoDeadlock/chart.mmd` | Ported unchanged. |
| `pstack/skills/statechart/scripts/test/corpus/UserNoDeadlock/graph.dot` | A | `skills/pstack-statechart/scripts/test/corpus/UserNoDeadlock/graph.dot` | Ported; terminal newline only. |
| `pstack/skills/statechart/scripts/test/corpus/UserNoDeadlock/report.md` | A | `skills/pstack-statechart/scripts/test/corpus/UserNoDeadlock/report.md` | Ported unchanged. |
| `pstack/skills/statechart/scripts/test/corpus/UserNoDeadlock/sany.out` | A | `skills/pstack-statechart/scripts/test/corpus/UserNoDeadlock/sany.out` | Ported unchanged. |
| `pstack/skills/statechart/scripts/test/corpus/UserNoDeadlock/verdict-1.exit` | A | `skills/pstack-statechart/scripts/test/corpus/UserNoDeadlock/verdict-1.exit` | Ported unchanged. |
| `pstack/skills/statechart/scripts/test/corpus/UserNoDeadlock/verdict-1.out` | A | `skills/pstack-statechart/scripts/test/corpus/UserNoDeadlock/verdict-1.out` | Ported unchanged. |
| `pstack/skills/statechart/scripts/test/corpus/UserNoDeadlock/verdict-2.exit` | A | `skills/pstack-statechart/scripts/test/corpus/UserNoDeadlock/verdict-2.exit` | Ported unchanged. |
| `pstack/skills/statechart/scripts/test/corpus/UserNoDeadlock/verdict-2.out` | A | `skills/pstack-statechart/scripts/test/corpus/UserNoDeadlock/verdict-2.out` | Ported unchanged. |
| `pstack/skills/statechart/scripts/test/differential.test.ts` | A | `skills/pstack-statechart/scripts/test/differential.test.ts` | Ported unchanged. |
| `pstack/skills/statechart/scripts/test/grid/Grid.cfg` | A | `skills/pstack-statechart/scripts/test/grid/Grid.cfg` | Ported unchanged. |
| `pstack/skills/statechart/scripts/test/grid/Grid.tla` | A | `skills/pstack-statechart/scripts/test/grid/Grid.tla` | Ported unchanged. |
| `pstack/skills/statechart/scripts/test/grid/sany.out` | A | `skills/pstack-statechart/scripts/test/grid/sany.out` | Ported unchanged. |
| `pstack/skills/statechart/scripts/test/java.ts` | A | `skills/pstack-statechart/scripts/test/java.ts` | Ported unchanged. |
| `pstack/skills/statechart/scripts/test/labels.ts` | A | `skills/pstack-statechart/scripts/test/labels.ts` | Ported unchanged. |
| `pstack/skills/statechart/scripts/test/messages.test.ts` | A | `skills/pstack-statechart/scripts/test/messages.test.ts` | Ported unchanged. |
| `pstack/skills/statechart/scripts/test/pipeline.test.ts` | A | `skills/pstack-statechart/scripts/test/pipeline.test.ts` | Ported unchanged. |
| `pstack/skills/statechart/scripts/test/plain-tlc.test.ts` | A | `skills/pstack-statechart/scripts/test/plain-tlc.test.ts` | Ported unchanged. |
| `pstack/skills/statechart/scripts/test/regions.mmd` | D | `skills/pstack-statechart/scripts/test/regions.mmd` | Removed; preserved in Git/backup. No user data deletion. |
| `pstack/skills/statechart/scripts/test/render.test.ts` | A | `skills/pstack-statechart/scripts/test/render.test.ts` | Adapted; namespace, local dependencies, rendering boundaries. See statechart handoff. |
| `pstack/skills/statechart/scripts/test/statechart.test.mjs` | D | `skills/pstack-statechart/scripts/test/statechart.test.mjs` | Removed; preserved in Git/backup. No user data deletion. |
| `pstack/skills/statechart/scripts/test/sync.mmd` | D | `skills/pstack-statechart/scripts/test/sync.mmd` | Removed; preserved in Git/backup. No user data deletion. |
| `pstack/skills/statechart/scripts/test/tlc-out.test.ts` | A | `skills/pstack-statechart/scripts/test/tlc-out.test.ts` | Ported unchanged. |
| `pstack/skills/statechart/scripts/test/tlc.ts` | A | `skills/pstack-statechart/scripts/test/tlc.ts` | Ported unchanged. |
| `pstack/skills/statechart/scripts/test/upload.mmd` | D | `skills/pstack-statechart/scripts/test/upload.mmd` | Removed; preserved in Git/backup. No user data deletion. |
| `pstack/skills/statechart/scripts/tlc-to-chart-args.mjs` | D | `skills/pstack-statechart/scripts/tlc-to-chart-args.mjs` | Removed; preserved in Git/backup. No user data deletion. |
| `pstack/skills/statechart/scripts/tlc-to-chart.mjs` | D | `skills/pstack-statechart/scripts/tlc-to-chart.mjs` | Removed; preserved in Git/backup. No user data deletion. |
| `pstack/skills/statechart/scripts/tlc-tools.mjs` | D | `skills/pstack-statechart/scripts/tlc-tools.mjs` | Removed; preserved in Git/backup. No user data deletion. |
| `pstack/skills/statechart/scripts/tsconfig.json` | A | `skills/pstack-statechart/scripts/tsconfig.json` | Ported unchanged. |
| `pstack/skills/statechart/scripts/ways-in.mjs` | D | `skills/pstack-statechart/scripts/ways-in.mjs` | Removed; preserved in Git/backup. No user data deletion. |
| `pstack/skills/statechart/scripts/worker.ts` | A | `skills/pstack-statechart/scripts/worker.ts` | Ported unchanged. |
