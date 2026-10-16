# Build changed behavior

1. Understand the subsystem through source and `pstack-how`. Choose the core data shape and organizing structure before logic. Explore meaningful competing interfaces with `pstack-architect` when available.
2. Record the throughput checkpoint: blocking prerequisites, independent workstreams, shared mutable state, and smallest safe decomposition. Keep shared writes under one owner.
3. Implement the chosen shape in small verified units. Delegate only under the entrypoint's contract; otherwise own the implementation directly. Where alternatives matter, compare isolated sketches or use `pstack-arena` when available. Review every delegated diff.
4. Verify the actual user behavior on the matching surface and run the relevant repository gates. Check every consumer of a changed shared primitive. Contested decisions merit a distinct review; unavailable independent review must be labeled.
5. Organize commits only when requested or already within scope. Read Opening a PR only if delivery includes a PR; otherwise deliver the local changes.

Report what changed for users and maintainers, the chosen design and alternatives, verification, checkpoint, and open decisions.
