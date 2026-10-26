import assert from "node:assert/strict";
import { spawnSync } from "node:child_process";
import fs from "node:fs";
import os from "node:os";
import path from "node:path";
import { fileURLToPath } from "node:url";
import test from "node:test";

const scripts = fileURLToPath(new URL("../../skills/pstack-statechart/scripts/", import.meta.url));
const run = (dir, script, args, env = {}) => spawnSync(process.execPath, [path.join(scripts, script), ...args], {
  cwd: dir, encoding: "utf8", timeout: 10000,
  env: { ...process.env, TLA2TOOLS: "", JAVA: "", STATECHART_RENDERER: "", ...env },
});
function scratch(t) {
  const dir = fs.mkdtempSync(path.join(os.tmpdir(), "statechart-safety-"));
  t.after(() => fs.rmSync(dir, { recursive: true, force: true }));
  return dir;
}
function model(dir) {
  fs.writeFileSync(path.join(dir, "Pay.tla"), "---- MODULE Pay ----\nVARIABLE x\nInit == x = 0\nNext == x' = 1\nSpec == Init /\\ [][Next]_x\n====\n");
  fs.writeFileSync(path.join(dir, "Pay.cfg"), "SPECIFICATION Spec\n");
  fs.writeFileSync(path.join(dir, "Pay.map.mjs"), 'export const state = v => v.x ? "Paid" : "Unpaid";\nexport const step = () => "you pay";\n');
}
function traps(dir) {
  const bin = path.join(dir, "bin");
  fs.mkdirSync(bin);
  const marker = path.join(dir, "bootstrap-called");
  for (const name of ["npm", "npx", "mise", "curl", "wget"])
    fs.writeFileSync(path.join(bin, name), '#!/bin/sh\nprintf called >> "$BOOTSTRAP_MARKER"\nexit 99\n', { mode: 0o755 });
  return { PATH: bin, BOOTSTRAP_MARKER: marker, XDG_CACHE_HOME: path.join(dir, "cache"), npm_config_cache: path.join(dir, "npm-cache") };
}
function noBootstrap(dir) {
  for (const name of ["bootstrap-called", "cache", "npm-cache"])
    assert.equal(fs.existsSync(path.join(dir, name)), false, name);
}

test("missing TLC never invokes bootstrap tools or changes an existing output", t => {
  const dir = scratch(t);
  model(dir);
  const env = traps(dir);
  const out = path.join(dir, "Pay-statechart");
  fs.mkdirSync(out);
  fs.writeFileSync(path.join(out, "chart.mmd"), "previous result");
  const r = run(dir, "statechart.mjs", ["from-spec", "Pay.tla"], env);
  assert.equal(r.status, 2, r.stderr);
  assert.match(r.stderr, /No tools were installed; set TLA2TOOLS/);
  assert.equal(fs.readFileSync(path.join(out, "chart.mmd"), "utf8"), "previous result");
  noBootstrap(dir);
});

test("from-chart still produces portable skeletons without installing TLC", t => {
  const dir = scratch(t);
  const env = traps(dir);
  fs.copyFileSync(path.join(scripts, "test/sync.mmd"), path.join(dir, "sync.mmd"));
  const r = run(dir, "statechart.mjs", ["from-chart", "sync.mmd"], env);
  assert.equal(r.status, 2, r.stderr);
  assert.match(r.stderr, /No tools were installed/);
  for (const name of ["Sync.tla", "Sync.cfg", "Sync.map.mjs"]) assert.ok(fs.existsSync(path.join(dir, name)));
  assert.equal(fs.existsSync(path.join(dir, "Sync-statechart")), false);
  noBootstrap(dir);
});

test("missing PNG renderer never installs packages or creates a cache", t => {
  const dir = scratch(t);
  const env = traps(dir);
  fs.writeFileSync(path.join(dir, "c.mmd"), "stateDiagram-v2\n[*] --> Idle\n");
  for (const args of [["render", "c.mmd"], ["from-chart", "c.mmd", "--png"]]) {
    const r = run(dir, "statechart.mjs", args, env);
    assert.equal(r.status, 2, r.stderr);
    assert.match(r.stderr, /Set STATECHART_RENDERER/);
    assert.equal(r.stdout, "");
  }
  assert.deepEqual(fs.readdirSync(dir).sort(), ["bin", "c.mmd"]);
  noBootstrap(dir);
});

test("explicit trusted renderer modules load without cache writes", t => {
  const dir = scratch(t);
  const entry = path.join(dir, "renderer.mjs");
  fs.writeFileSync(entry, 'export function render() {}\nexport class Resvg {}\n');
  const probe = spawnSync(process.execPath, ["--input-type=module", "-e", `import {loadRenderer} from ${JSON.stringify(new URL("../../skills/pstack-statechart/scripts/render.mjs", import.meta.url).href)}; const lib = await loadRenderer(); console.log(typeof lib.render, typeof lib.Resvg);`], {
    encoding: "utf8", env: { ...process.env, STATECHART_RENDERER: entry, XDG_CACHE_HOME: path.join(dir, "cache") },
  });
  assert.equal(probe.status, 0, probe.stderr);
  assert.equal(probe.stdout, "function function\n");
  noBootstrap(dir);
});

test("invalid renderer exports fail before any input or cache write", t => {
  const dir = scratch(t);
  const entry = path.join(dir, "renderer.mjs");
  fs.writeFileSync(entry, "export const render = 1;\n");
  const r = run(dir, "statechart.mjs", ["render", "missing.mmd"], { ...traps(dir), STATECHART_RENDERER: entry });
  assert.equal(r.status, 2, r.stderr);
  assert.match(r.stderr, /module must export render and Resvg functions/);
  assert.equal(fs.existsSync(path.join(dir, "missing.png")), false);
  noBootstrap(dir);
});

test("a failing explicit Java binary leaves published output unchanged", t => {
  const dir = scratch(t);
  model(dir);
  const java = path.join(dir, "java");
  const jar = path.join(dir, "tla2tools.jar");
  fs.writeFileSync(java, "#!/bin/sh\necho broken-java >&2\nexit 7\n", { mode: 0o755 });
  fs.writeFileSync(jar, "not a real jar");
  fs.mkdirSync(path.join(dir, "Pay-statechart"));
  fs.writeFileSync(path.join(dir, "Pay-statechart/chart.mmd"), "previous result");
  const r = run(dir, "statechart.mjs", ["from-spec", "Pay.tla"], { ...traps(dir), JAVA: java, TLA2TOOLS: jar });
  assert.equal(r.status, 2, r.stderr);
  assert.match(r.stderr, /cannot run TLC.*java exited 7/s);
  assert.match(r.stderr, /broken-java/);
  assert.equal(fs.readFileSync(path.join(dir, "Pay-statechart/chart.mmd"), "utf8"), "previous result");
  noBootstrap(dir);
});

test("trusted mapping code executes while converting an existing graph", t => {
  const dir = scratch(t);
  const marker = path.join(dir, "mapping-executed");
  fs.writeFileSync(path.join(dir, "graph.dot"), 'digraph {\n1 [label="x = 0",style=filled];\n2 [label="x = 1"];\n1 -> 2 [label="Pay"];\n}\n');
  fs.writeFileSync(path.join(dir, "map.mjs"), `import fs from "node:fs"; fs.writeFileSync(${JSON.stringify(marker)}, "trusted code"); export const state = v => v.x ? "Paid" : "Unpaid"; export const step = () => "you pay";\n`);
  const r = run(dir, "tlc-to-chart.mjs", ["--dot", "graph.dot", "--map", "map.mjs", "--highlight", "0", "--out", "chart.mmd"]);
  assert.equal(r.status, 0, r.stderr);
  assert.equal(fs.readFileSync(marker, "utf8"), "trusted code");
  assert.match(fs.readFileSync(path.join(dir, "chart.mmd"), "utf8"), /you pay/);
});

test("simulated TLC output exercises owned-folder replacement without a toolchain", t => {
  const dir = scratch(t);
  model(dir);
  const java = path.join(dir, "fake-java.mjs");
  const jar = path.join(dir, "fake.jar");
  fs.writeFileSync(jar, "fixture, not a TLC jar");
  fs.writeFileSync(java, `#!${process.execPath}\nimport fs from "node:fs"; const args=process.argv.slice(2); const at=args.indexOf("-dump"); if(at>=0) fs.writeFileSync(args[at+2], 'digraph {\\n1 [label="x = 0",style=filled];\\n2 [label="x = 1"];\\n1 -> 2 [label="Pay"];\\n}\\n'); console.log("TLC2 Version fixture\\nModel checking completed.");\n`, { mode: 0o755 });
  const out = path.join(dir, "Pay-statechart");
  fs.mkdirSync(out);
  fs.writeFileSync(path.join(out, "chart.png"), "old image");
  const r = run(dir, "statechart.mjs", ["from-spec", "Pay.tla"], { JAVA: java, TLA2TOOLS: jar });
  assert.equal(r.status, 0, r.stderr);
  const summary = JSON.parse(fs.readFileSync(path.join(out, "summary.json"), "utf8"));
  assert.equal(summary.modelStates, 2);
  assert.equal(summary.chartTransitions, 1);
  assert.equal(fs.existsSync(path.join(out, "chart.png")), false);
  assert.equal(fs.existsSync(path.join(out, "tlc/Pay.out")), true);
  assert.match(fs.readFileSync(path.join(out, "chart.mmd"), "utf8"), /you pay/);
});
