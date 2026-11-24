---
name: pstack-reframe
description: "Teach expert terms for what the user is building, borrow useful terms from neighboring fields, and rewrite their description. Use when explicitly asked to reframe an unclear problem, not to implement it."
---

# Reframe

Teach the user the expert terms for what they are building. Start from their own files, code, and description, not a second-hand summary. Use only authorized read-only access. The result is a rewritten description, not implementation or permission to expand the task.

If the description could name more than one problem, list the two or three likely problems first. Give each its defining term and the sign that distinguishes it. Then teach the terms for the most likely problem and explain that choice as an inference.

1. Give 8 to 12 terms, ranked by how much each would change what gets built. For each term, give its meaning in one plain sentence, the part of the user's description it names, a linked real project, paper, or system that uses it that way, and what it lets the user ask an agent for.
2. Pick 2 or 3 neighboring fields that solved the same kind of problem under other names. For each, explain what carries over, where the analogy breaks, and which terms apply here.
3. Name important concerns the user did not mention. Keep recommendations separate from requirements and authorized decisions.
4. Rewrite the description with the new terms. Preserve the user's scope and constraints. Do not execute the rewritten task.

Open every cited link and confirm that the source uses the term that way. Remove citations you cannot confirm. If browsing or needed files are unavailable, state the evidence gap. Do not invent sources or add filler to reach a term count.

Example invocation for the native plugin:

```text
$pstack-codex:pstack-reframe The settings page saves some fields right away and others only on submit, and people lose edits.
```

Return the explanation and rewritten description. The user can send the rewrite as a separate request or refine it with [sharpen](../pstack-sharpen/SKILL.md).
