import { spawn } from "node:child_process";

export const killGroup = (pid: number) =>
  new Promise<void>((resolve) => {
    // Reject group-wide sentinel values before calling either platform's kill API.
    if (!Number.isSafeInteger(pid) || pid <= 1) {
      resolve();
      return;
    }
    if (process.platform === "win32") {
      spawn("taskkill", ["/pid", String(pid), "/t", "/f"], { stdio: "ignore" })
        .on("error", () => resolve())
        .on("exit", () => resolve());
      return;
    }
    try {
      process.kill(-pid, "SIGKILL");
    } catch {}
    resolve();
  });
