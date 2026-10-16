#!/usr/bin/env python3
"""Stage this pack into a NEW isolated project; never overwrite/install globally."""
import argparse
import os
from pathlib import Path
import shutil

def stage(target):
    target = Path(target).expanduser().absolute()
    source = Path(__file__).resolve().parents[1]
    if target.exists() or target.is_symlink():
        raise FileExistsError(f"Refusing existing destination: {target}")
    if not target.parent.is_dir():
        raise ValueError("Destination parent must already exist")
    target.mkdir()
    try:
        skills = target / '.agents' / 'skills'
        skills.mkdir(parents=True)
        for skill in sorted((source / 'skills').iterdir()):
            if (skill / 'SKILL.md').is_file():
                shutil.copytree(skill, skills / skill.name)
        shutil.copy2(source / 'LICENSE', target / 'PSTACK-LICENSE')
    except Exception:
        # Only remove the directory this call exclusively created.
        shutil.rmtree(target)
        raise
    return target

if __name__ == '__main__':
    parser = argparse.ArgumentParser(description=__doc__)
    parser.add_argument('new_workspace')
    args = parser.parse_args()
    print(stage(args.new_workspace))
