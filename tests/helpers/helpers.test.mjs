import { test } from 'node:test';
import assert from 'node:assert/strict';
import { realpathSync, mkdtempSync, mkdirSync, writeFileSync, readFileSync, rmSync } from 'node:fs';
import { tmpdir } from 'node:os';
import { join } from 'node:path';
import { execFileSync, spawnSync } from 'node:child_process';
import { audit } from '../../skills/pstack-poteto-mode/scripts/worktree-audit.mjs';
import { checkPlan } from '../../skills/pstack-poteto-mode/scripts/check-plan.mjs';
const git = (cwd, ...args) => execFileSync('git', ['-C', cwd, ...args], { encoding: 'utf8', stdio: ['ignore', 'pipe', 'pipe'] });
const plan = `# Small fix
## How to read this
Check boxes only after collecting evidence.
## Program checklist
- [ ] Confirm task scope.
## Unit 1
**Depends on.** None
**Files.**
- [ ] src/demo.js
**Build.**
- [ ] Fix the reproduction
**You see.**
- [ ] Correct output
**Verify, unit.**
- [ ] Evidence: artifacts/unit.log. Pass when regression passes.
**Verify, live.**
- [ ] Evidence: artifacts/repro.log. Pass when original failure no longer reproduces.
**Verify, perf.** N/A: Text-only output has no measurable performance change.
**Review gate.**
- [ ] Review the diff against scope.
**Merge.** N/A: User only requested a local patch.
## Close the program
- [ ] Report remaining gaps.
`;
test('evidence plan accepts bounded serial work and rejects unchecked claims', () => {
  assert.deepEqual(checkPlan(plan).errors, []);
  assert.ok(checkPlan(plan.replace('Evidence:', 'Output:')).errors.length);
  assert.ok(checkPlan(plan.replace('- [ ] Evidence:', '- [x] Evidence:')).errors.some(e => /Observed/.test(e.message)));
  assert.deepEqual(checkPlan(plan.replace('regression passes.', 'regression passes. Observed: 6 tests pass.').replace('- [ ] Evidence: artifacts/unit', '- [x] Evidence: artifacts/unit')).errors, []);
  assert.ok(checkPlan(plan.replace('N/A: Text-only output has no measurable performance change.', 'N/A:')).errors.length);
  assert.ok(checkPlan('```\n'+plan+'\n```').errors.length);
});
test('plan fences hide examples until a matching, long enough, bare closer', () => {
  const insert = example => plan.replace('## Unit 1', example + '\n## Unit 1');
  for (const indent of ['', ' ', '  ', '   ']) {
    assert.deepEqual(checkPlan(insert(`${indent}\`\`\`markdown\n## Example only\n${indent}\`\`\`\` \t`)).errors, []);
  }
  for (const inner of ['```', '~~~', '```` info']) {
    assert.deepEqual(checkPlan(insert(`\`\`\`\`markdown\n${inner}\n## Example only\n\`\`\`\``)).errors, []);
  }
  assert.deepEqual(checkPlan(insert('~~~markdown `info`\n## Example only\n ~~~')).errors, []);
  for (const nonOpening of ['```markdown `invalid`', '    ```', '\t```']) {
    assert.deepEqual(checkPlan(nonOpening + '\n' + plan).errors, []);
  }
  const outside = checkPlan(insert('```\n## Hidden\n```\t\n## Visible'));
  assert.ok(outside.errors.some(e => e.message.startsWith('Visible:')));
  assert.ok(checkPlan('````\n```\n' + plan).errors.some(e => e.message === 'Missing H1 title'));
});
test('plan CLI keeps success, invalid plan and usage exit codes', () => {
  const directory = mkdtempSync(join(tmpdir(), 'pstack-plan-'));
  const file = join(directory, 'plan.md');
  const script = new URL('../../skills/pstack-poteto-mode/scripts/check-plan.mjs', import.meta.url).pathname;
  try {
    writeFileSync(file, plan);
    assert.equal(spawnSync(process.execPath, [script, file]).status, 0);
    writeFileSync(file, '````\n```\n' + plan);
    assert.equal(spawnSync(process.execPath, [script, file]).status, 1);
    assert.equal(spawnSync(process.execPath, [script]).status, 2);
  } finally { rmSync(directory, { recursive: true, force: true }); }
});
test('audit preserves worktrees and index, holds untracked/ignored/dirty/missing paths; local-only ancestry', () => {
  const root = realpathSync(mkdtempSync(join(tmpdir(), 'pstack audit ')));
  try {
    const repo = join(root, 'main repo'); mkdirSync(repo);
    git(repo, 'init', '-b', 'main'); git(repo, 'config', 'user.name', 'Fixture'); git(repo, 'config', 'user.email', 'fixture@example.invalid');
    writeFileSync(join(repo, 'tracked'), 'base'); writeFileSync(join(repo, '.gitignore'), 'ignored\n');
    git(repo, 'add', '.'); git(repo, 'commit', '-m', 'base');
    const clean = join(root, 'clean path'); const dirty = join(root, 'dirty path'); const ignored = join(root, 'ignored path'); const missing = join(root, 'missing path');
    for (const [i,p] of [clean, dirty, ignored, missing].entries()) git(repo, 'worktree', 'add', '-b', 'branch'+i, p);
    writeFileSync(join(dirty, 'untracked file'), 'save this');
    writeFileSync(join(ignored, 'ignored'), 'save ignored too'); rmSync(missing, { recursive: true });
    const before = git(repo, 'worktree', 'list', '--porcelain'); const index = readFileSync(join(repo, '.git/index'));
    const first = audit(repo); assert.equal(first.baseSha, null);
    assert.equal(first.worktrees.find(w=>w.path===clean).mergedIntoLocalBase, null);
    const report = audit(repo, 'main'); const row = p => report.worktrees.find(w=>w.path===p);
    assert.equal(row(clean).bucket, 'review-only'); assert.equal(row(clean).mergedIntoLocalBase, true);
    assert.equal(row(dirty).bucket, 'hold-local-files'); assert.equal(row(ignored).bucket, 'hold-local-files'); assert.equal(row(missing).bucket, 'hold-unknown');
    assert.ok(report.worktrees.every(w=>w.deletionAuthorized===false));
    assert.equal(git(repo, 'worktree', 'list', '--porcelain'), before); assert.deepEqual(readFileSync(join(repo, '.git/index')), index);
    rmSync(join(dirty, 'untracked file')); writeFileSync(join(dirty, 'tracked'), 'changed'); assert.equal(audit(repo, 'main').worktrees.find(w=>w.path===dirty).bucket, 'hold-local-files');
    git(repo, 'worktree', 'lock', clean); assert.equal(audit(repo).worktrees.find(w=>w.path===clean).bucket, 'hold-locked');
    writeFileSync(join(repo, 'tracked'), 'integration change');
    git(repo, 'commit', '-am', 'integration change');
    git(repo, 'branch', 'integration');
    const mainHead = git(repo, 'rev-parse', 'HEAD').trim();
    git(repo, 'update-ref', 'refs/remotes/origin/main', git(repo, 'rev-parse', 'HEAD^').trim());
    assert.equal(audit(repo).worktrees[0].mergedIntoLocalBase, false);
    assert.equal(audit(repo, 'integration').worktrees[0].mergedIntoLocalBase, true);
    const wrapper = new URL('../../skills/pstack-poteto-mode/scripts/worktree-audit.sh', import.meta.url).pathname;
    const cli = spawnSync('bash', [wrapper, repo, 'integration'], { encoding: 'utf8' });
    assert.equal(cli.status, 0);
    const explicit = JSON.parse(cli.stdout);
    assert.equal(explicit.base, 'integration'); assert.equal(explicit.baseSha, mainHead);
    assert.equal(explicit.deletionAuthorized, false);
    assert.equal(audit(repo, 'missing-base').baseSha, null);
  } finally { rmSync(root, { recursive:true, force:true }); }
});
