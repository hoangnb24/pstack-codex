# Match a fixed visual baseline

1. Capture the fixed baseline across required component states before migration. Freeze viewport, device scale, fonts, data, animations, and other nondeterminism. Define any tolerance explicitly with the user/spec; pixel-exact means zero unexplained difference.
2. Do not modify the baseline, relax the harness, or restructure components just to hide failures. If the baseline is wrong, surface the decision.
3. Migrate shared primitives first, then one component at a time. Authorized parallel work requires disjoint ownership and isolated working state.
4. Capture the same states with an available browser/native skill and compare pixels. Investigate each unexplained delta within a bounded attempt budget. No baseline or screenshot capability means parity unverified.
5. Deliver component results and artifacts; PR creation is conditional on the user's scope.

Report baseline/harness location, per-component differences, passed states, and work remaining.
