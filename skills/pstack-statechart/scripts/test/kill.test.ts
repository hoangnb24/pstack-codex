import assert from "node:assert/strict";
import { test } from "node:test";
import { killGroup } from "../kill.ts";

test("invalid worker PIDs never signal a process group", async (t) => {
  const kill = t.mock.method(process, "kill", () => true);
  for (const pid of [NaN, Infinity, -1, 0, 1, 1.5, Number.MAX_SAFE_INTEGER + 1])
    await killGroup(pid);
  assert.equal(kill.mock.callCount(), 0);
});

test("POSIX cleanup signals only the worker's process group and tolerates an exited group", {
  skip: process.platform === "win32",
}, async (t) => {
  const kill = t.mock.method(process, "kill", () => true);
  await killGroup(12345);
  assert.deepEqual(kill.mock.calls[0].arguments, [-12345, "SIGKILL"]);
  kill.mock.mockImplementation(() => { throw new Error("no such process"); });
  await killGroup(12345);
  assert.equal(kill.mock.callCount(), 2);
});
