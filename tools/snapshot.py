#!/usr/bin/env python3
"""Hash the complete installed workflow payload without running a workflow."""
import argparse
import hashlib
import json
from pathlib import Path


def snapshot(root):
    root = Path(root).resolve()
    paths = [root / name for name in (
        'LICENSE', 'UPSTREAM.json', '.codex-plugin/plugin.json',
        '.agents/plugins/marketplace.json')]
    for directory in ('skills', 'automations'):
        paths.extend(p for p in (root / directory).rglob('*') if p.is_file())
    hashes = {}
    for path in sorted(paths):
        if path.is_symlink():
            raise ValueError(f'Unexpected payload symlink: {path}')
        hashes[path.relative_to(root).as_posix()] = hashlib.sha256(path.read_bytes()).hexdigest()
    canonical = json.dumps(hashes, sort_keys=True, separators=(',', ':')).encode()
    return {'sha256': hashlib.sha256(canonical).hexdigest(), 'files_sha256': hashes}


if __name__ == '__main__':
    parser = argparse.ArgumentParser(description=__doc__)
    parser.add_argument('root', nargs='?', default=Path(__file__).resolve().parents[1])
    args = parser.parse_args()
    print(json.dumps(snapshot(args.root), indent=2))
