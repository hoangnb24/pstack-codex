# Checkpoint and stop work

1. Honor an explicit stop or pause immediately at a safe atomic boundary. Start no new work. Tell authorized running workers to stop writes and reconcile their actual state. “Going to bed, keep going” is not itself a pause request, but runtime limits still require checkpoints.
2. Preserve current edits without destructive reset, cleanup, push, or publication. Make a WIP commit only if committing is in scope; otherwise retain files and record git status. Do not sweep unrelated changes into a commit.
3. Write a durable workspace resume note when authorized. Include intent, corrections, scope, branch/head, changed files, tests and evidence, active processes/children, blockers, next exact action, and existing trail path. Temporary paths may disappear, so label them if used.
4. Report which processes stopped and which could not be confirmed stopped. Do not promise continuity after compaction or app restart.

Report checkpoint path, state on disk, actual commits, verification status, and first resume action.
