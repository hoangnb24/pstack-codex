# Audit and clean authorized local worktrees

1. Start with a read-only disk and worktree audit. From this skill directory, run `bash scripts/worktree-audit.sh [repo-path] [local-base-ref]`. The default base is `refs/remotes/origin/main`. For work against another base, pass its actual local ref as the second positional argument. Do not use upstream's `-b` flag. Missing refs remain unknown. Inspect help/source first if needed. Suggestions are not deletion permission.
2. Cross-check candidates against attached/pinned/active worktrees through available Codex app artifacts and the user-provided scope. An unavailable activity check means usage unknown, not safe. Do not read unrelated transcripts to infer activity.
3. Inspect tracked, untracked, ignored, and unpushed work. A clean tracked diff does not prove no valuable state. Show the concrete candidate list and reasons before destructive action when the user's authorization does not already cover them.
4. Prefer the Codex managed-worktree archive tool for attached managed worktrees when available and authorized; respect its recovery and exclusions. Otherwise use normal non-forced git removal only for confirmed clean, unused candidates within scope. A refusal is evidence to investigate, not permission for `--force` or `rm -rf`.
5. Re-list and report reclaimed space after actual removal. Simulator, cache, runtime, and unrelated app cleanup are separate scopes; do not invoke blanket simulator deletion from a worktree request.

Report audit, held-back reasons, exact authorized removals/archives, and measured disk delta. No activity or recoverability guarantee is inferred from branch merge state alone.
