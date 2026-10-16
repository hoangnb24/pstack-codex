# Evaluate a prompt or skill with realistic cases

1. Define the behavior being evaluated and 3-6 concrete observable criteria. Keep the rubric out of candidate task context.
2. Prepare isolated project-shaped fixtures with the actual relevant skill variant and raw inputs. Give candidates an organic user request, not hints about expected conclusions. Avoid experimental labels in candidate-visible paths.
3. Run candidates only with available authorized subagent tools. Inherit models unless user-selected overrides are supported. No hidden CLI inference. If no independent agents are available, report the experiment blocked or label a serial self-check as non-independent.
4. If independent comparison is possible, have a fresh reviewer score outputs under anonymous labels on one rubric. Do not claim cross-model diversity when every agent used the same model.
5. Inspect generated artifacts and available tool evidence yourself. Use only task-scoped reports/transcripts actually exposed by the host or supplied by the user; do not scan global Codex session files. Self-reported skill usage is not transcript proof.
6. Synthesize observed behavior, reviewer disagreement, limitations, and recommendation. Do not promote or globally install a variant without scope.

Report cases, rubric, results, evidence, independence/model limits, and recommendation.
