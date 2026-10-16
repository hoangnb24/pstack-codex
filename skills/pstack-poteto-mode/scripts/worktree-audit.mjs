#!/usr/bin/env node
// Adapted from Lauren Tan pstack (MIT); see repository LICENSE.
// Local observations only. Never fetches, contacts GitHub, reads chats or deletes.
import { spawnSync } from 'node:child_process';
import { pathToFileURL } from 'node:url';
const git = (cwd, args) => spawnSync('git', ['--no-optional-locks', '-c', 'core.fsmonitor=false', '-C', cwd, ...args], {
  encoding: 'utf8', timeout: 15000, env: { ...process.env, GIT_OPTIONAL_LOCKS: '0', GIT_TERMINAL_PROMPT: '0' },
});
export function audit(repo = '.', base = 'refs/remotes/origin/main') {
  const listing = git(repo, ['worktree', 'list', '--porcelain', '-z']);
  if (listing.status !== 0) throw new Error(`Cannot list worktrees: ${listing.error?.message ?? listing.stderr.trim()}`);
  const records = [];
  let current = null;
  for (const field of listing.stdout.split('\0')) {
    if (field.startsWith('worktree ')) { current = { path: field.slice(9) }; records.push(current); }
    else if (current && field) {
      const split = field.indexOf(' ');
      current[split < 0 ? field : field.slice(0, split)] = split < 0 ? true : field.slice(split + 1);
    }
  }
  const ref = git(repo, ['rev-parse', '--verify', '--end-of-options', `${base}^{commit}`]);
  const baseSha = ref.status === 0 ? ref.stdout.trim() : null;
  return {
    schemaVersion: 1, base, baseSha, baseFreshness: 'not-checked-local-ref-only',
    remotePrState: 'not-queried', chatActivity: 'not-queried', deletionAuthorized: false,
    worktrees: records.map((entry, index) => {
      const status = git(entry.path, ['status', '--porcelain=v1', '-z', '--untracked-files=all', '--ignored=matching']);
      const clean = status.status === 0 && status.stdout.length === 0;
      const head = git(entry.path, ['rev-parse', '--verify', 'HEAD']);
      const headSha = head.status === 0 ? head.stdout.trim() : null;
      const ancestry = headSha && baseSha ? git(repo, ['merge-base', '--is-ancestor', headSha, baseSha]) : null;
      const mergedIntoLocalBase = ancestry?.status === 0 ? true : ancestry?.status === 1 ? false : null;
      const protection = index === 0 ? 'hold-main' : entry.locked ? 'hold-locked' : status.status !== 0 || !headSha ? 'hold-unknown' : !clean ? 'hold-local-files' : 'review-only';
      return {
        path: entry.path, branch: entry.branch ?? null, detached: !!entry.detached,
        locked: entry.locked ?? false, prunable: entry.prunable ?? false,
        headSha, mergedIntoLocalBase, localFiles: status.status !== 0 ? 'unknown' : clean ? 'clean' : 'present-including-ignored',
        bucket: protection, deletionAuthorized: false,
        error: status.status !== 0 ? status.error?.message ?? status.stderr.trim() : null,
      };
    }),
  };
}
if (process.argv[1] && import.meta.url === pathToFileURL(process.argv[1]).href) {
  if (process.argv.includes('--help')) console.log('Usage: node worktree-audit.mjs [repo-path] [local-base-ref]\nRead-only JSON report. Local refs may be stale. No result authorizes deletion.');
  else if (process.argv.length > 4) { console.error('Too many arguments'); process.exitCode = 2; }
  else try { console.log(JSON.stringify(audit(process.argv[2], process.argv[3]), null, 2)); }
  catch (error) { console.error(error.message); process.exitCode = 1; }
}
