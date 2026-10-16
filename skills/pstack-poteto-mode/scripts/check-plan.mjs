#!/usr/bin/env node
// Adapted from Lauren Tan pstack (MIT); see repository LICENSE.
import { readFileSync } from 'node:fs';
import { pathToFileURL } from 'node:url';
const blocks = ['Depends on.', 'Files.', 'Build.', 'You see.', 'Verify, unit.', 'Verify, live.', 'Verify, perf.', 'Review gate.', 'Merge.'];
const box = /^\s*- \[([ xX])\] (.+)$/;
export function checkPlan(text) {
  const errors = [];
  const fail = (line, message) => errors.push({ line, message });
  const lines = [];
  let fence = null;
  for (const [i, textLine] of text.split(/\r?\n/).entries()) {
    if (fence) {
      const close = /^ {0,3}(`+|~+)[ \t]*$/.exec(textLine);
      if (close && close[1][0] === fence.char && close[1].length >= fence.length) fence = null;
      continue;
    }
    const open = /^ {0,3}(`{3,}|~{3,})(.*)$/.exec(textLine);
    if (open && !(open[1][0] === '`' && open[2].includes('`'))) {
      fence = { char: open[1][0], length: open[1].length };
      continue;
    }
    lines.push({ n: i + 1, text: textLine });
  }
  if (!lines.some(l => /^# \S/.test(l.text))) fail(1, 'Missing H1 title');
  const sections = [];
  for (const l of lines) {
    if (l.text.startsWith('## ')) sections.push({ n: l.n, title: l.text.slice(3).trim(), lines: [] });
    else sections.at(-1)?.lines.push(l);
  }
  const find = title => sections.findIndex(s => s.title === title);
  const program = find('Program checklist'), close = find('Close the program');
  for (const name of ['How to read this', 'Program checklist', 'Close the program']) {
    if (find(name) < 0) fail(1, `Missing section: ${name}`);
  }
  for (const index of [program, close]) if (index >= 0 && !sections[index].lines.some(l => box.test(l.text))) fail(sections[index].n, 'Section requires a work checkbox');
  const units = program >= 0 && close > program ? sections.slice(program + 1, close) : [];
  if (!units.length) fail(1, 'Add work units between Program checklist and Close the program');
  for (const unit of units) {
    const found = [];
    for (const l of unit.lines) {
      const match = /^\*\*([^*]+)\*\*(.*)$/.exec(l.text);
      if (match && blocks.includes(match[1])) found.push({ name: match[1], n: l.n, rest: match[2].trim(), lines: [] });
      else found.at(-1)?.lines.push(l);
    }
    if (found.map(b => b.name).join('|') !== blocks.join('|')) fail(unit.n, `${unit.title}: requires ordered blocks ${blocks.join(', ')}`);
    for (const b of found) {
      const boxes = b.lines.filter(l => box.test(l.text));
      if (b.name === 'Depends on.') { if (!b.rest) fail(b.n, 'Name dependencies or None'); continue; }
      const na = /^N\/A:\s+\S.{9,}/.test(b.rest);
      if (na && ['Verify, unit.', 'Verify, live.', 'Verify, perf.', 'Review gate.', 'Merge.'].includes(b.name)) {
        if (boxes.length) fail(b.n, 'N/A block must not contain checkboxes');
        continue;
      }
      if (!boxes.length) fail(b.n, `${b.name} requires a checkbox or an applicable N/A: reason (at least 10 characters)`);
      if (b.name.startsWith('Verify,')) for (const l of boxes) {
        if (!/Evidence:\s*\S/.test(l.text) || !/Pass when\s+\S/.test(l.text)) fail(l.n, 'Verification needs Evidence: location and Pass when predicate');
        if (box.exec(l.text)[1].toLowerCase() === 'x' && !/Observed:\s*\S/.test(l.text)) fail(l.n, 'Checked verification needs Observed: result');
      }
    }
  }
  return { units: units.length, errors };
}
if (process.argv[1] && import.meta.url === pathToFileURL(process.argv[1]).href) {
  if (process.argv.length !== 3) { console.error('Usage: node check-plan.mjs <plan.md>'); process.exitCode = 2; }
  else try {
    const result = checkPlan(readFileSync(process.argv[2], 'utf8'));
    for (const e of result.errors) console.error(`${process.argv[2]}:${e.line}: ${e.message}`);
    console.log(`${result.units} work units, ${result.errors.length} problems (structure only; evidence not independently verified)`);
    process.exitCode = result.errors.length ? 1 : 0;
  } catch (error) { console.error(error.message); process.exitCode = 2; }
}
