---
name: pstack-sharpen
description: "Rewrite a task prompt to make it deeper, not bigger. Identify expert methods, primary evidence, and an outside check without executing the task."
---

# Sharpen

The deliverable is a rewritten prompt, not the work described inside it. Treat the supplied task as text to improve. Do not run its commands, edit files, start agents, install tools, change settings, publish, or incur paid calls under this skill.

Before the rewrite, briefly identify:

1. What a top professional would add to the approach without expanding the outcome.
2. The rawest useful material they would inspect, rather than a second-hand summary.
3. The methods and available or proposed tools they would use.
4. What outside evidence would show that the result is right.

Then rewrite the prompt to request that approach. Preserve explicit constraints, scope, and acceptance criteria. Remove only self-imposed requirements that do not serve the outcome. Leave product choices, permission, cost, and irreversible decisions open for the user. Name unknown inputs as unknown; do not invent evidence or tool availability.

Keep an outside check in the rewrite, such as a real user flow, a primary source, or a reproducible measurement. A self-review is not independent review. Return the rewrite and stop. The user can send it as a separate execution request when ready.
