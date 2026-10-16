# Diagnose a supplied capture

1. Identify the supplied artifact and parse its real format with existing tools. Keep access limited to the supplied scope; do not search unrelated captures.
2. Reduce to a queryable form when useful, such as sample/frame/node tables. Avoid dumping the full artifact into the conversation.
3. Find dominant CPU paths, retainer chains, blocked threads, or wait reasons. Distinguish inclusive from self time and samples from elapsed time.
4. Resolve symbols to source locations. If the artifact lacks mappings, report the limitation rather than inventing a file or cause.
5. Compare a paired capture when available. Without a confirming pair or probe, report the strongest supported hypothesis. Do not recapture or implement a fix unless requested.

Report format, findings, source attribution, artifacts, and what confirms or limits the diagnosis.
