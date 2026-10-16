# Diagnose a live process

1. Capture the live signal with an available authorized profiler/control surface: CPU profile, heap snapshot, trace, or process diagnostics. Record capture conditions.
2. Reduce the artifact to the hot path, retainer chain, or idle loop. Parse large data with a narrow local query or an authorized delegate.
3. Test the proposed mechanism with scoped instrumentation only when runtime mutation is authorized. Do not hotfix a live process under a read-only diagnosis request. Without a confirming probe, label the cause a hypothesis.
4. Map evidence to file, symbol, and allocating/scheduling line. Keep the deliverable a diagnosis; no production fix unless requested.

Report capture, reduced evidence, mechanism confidence, source, and artifact paths. Mark throughput not applicable to read-only forensics.
