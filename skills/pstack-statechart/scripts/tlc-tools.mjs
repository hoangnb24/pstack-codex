import fs from "node:fs";
import process from "node:process";

// The parser targets TLC 1.7.4 output. The caller supplies the local toolchain.

const SET_TLC_VARS =
  "set TLA2TOOLS to the path of tla2tools.jar, and JAVA to a java binary (Java 11 or later).";
const indent = (text) => text.replace(/^/gm, "  ");

export function findTlc() {
  const { TLA2TOOLS, JAVA } = process.env;
  for (const [name, file] of Object.entries({ JAVA, TLA2TOOLS }))
    if (file && !fs.existsSync(file)) throw new Error(`${name} is ${file}, which does not exist.`);
  if (TLA2TOOLS) return { jar: TLA2TOOLS, java: JAVA || "java" };
  throw new Error(`Cannot find TLC. No tools were installed; ${SET_TLC_VARS}`);
}

export function cannotRunTlc({ java, jar }, r) {
  const said = `java exited ${r.status ?? r.signal}:\n${indent(`${r.stderr}${r.stdout}`.trim())}`;
  return `cannot run TLC with ${java} -cp ${jar}: ${r.error?.message ?? said}\nFix that, or ${SET_TLC_VARS}`;
}
