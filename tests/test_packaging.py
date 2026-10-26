import importlib.util
import hashlib
import json
from pathlib import Path
import re
import tempfile
import unittest

PACK = Path(__file__).resolve().parents[1]
spec = importlib.util.spec_from_file_location('stage', PACK/'tools/stage.py')
module = importlib.util.module_from_spec(spec)
spec.loader.exec_module(module)

class PackagingTests(unittest.TestCase):
    def test_upstream_inventory_and_license(self):
        upstream = json.loads((PACK/'UPSTREAM.json').read_text())
        files = upstream['files_sha256']
        self.assertEqual(hashlib.sha256((PACK/'LICENSE').read_bytes()).hexdigest(), files['LICENSE'])
        expected = {'pstack-' + path.split('/')[1] for path in files
                    if re.fullmatch(r'skills/[^/]+/SKILL\.md', path)}
        actual = {p.parent.name for p in (PACK/'skills').glob('*/SKILL.md')}
        self.assertEqual(actual, expected)
        for directory in ('skills', 'automations'):
            for document in (PACK/directory).rglob('*.md'):
                for target in re.findall(r'\]\(([^)]+)\)', document.read_text()):
                    if '://' in target or target.startswith('#') or target == 'url':
                        continue
                    self.assertTrue((document.parent/target.split('#')[0]).exists(),
                                    f'{document.relative_to(PACK)} -> {target}')

    def test_plugin_contract_and_invocation_policy(self):
        manifest = json.loads((PACK/'.codex-plugin/plugin.json').read_text())
        self.assertEqual(manifest['name'], 'pstack-codex')
        self.assertEqual(manifest['skills'], './skills/')
        self.assertFalse({'hooks', 'mcpServers', 'apps'} & manifest.keys())
        skills = sorted((PACK/'skills').glob('*/SKILL.md'))
        self.assertEqual(len(skills), 58)
        for skill in skills:
            self.assertIn('name: '+skill.parent.name+'\n', skill.read_text())
            policy = skill.parent/'agents/openai.yaml'
            if skill.parent.name == 'pstack-setup-pstack':
                self.assertFalse(policy.exists())
            else:
                self.assertRegex(policy.read_text(), r'allow_implicit_invocation:\s*false')

    def test_help_references_and_plugin_recipes_resolve(self):
        for document in (PACK/'skills/pstack-poteto-help').rglob('*.md'):
            content = document.read_text()
            for target in re.findall(r'\]\(([^)]+)\)', content):
                if '://' not in target and not target.startswith('#'):
                    self.assertTrue((document.parent/target.split('#')[0]).exists(), target)
            for name in re.findall(r'\$pstack-codex:(pstack-[a-z0-9-]+)', content):
                self.assertTrue((PACK/'skills'/name/'SKILL.md').is_file(), name)

    def test_staged_copy_and_repeat_refusal(self):
        with tempfile.TemporaryDirectory() as tmp:
            target = Path(tmp)/'new project'
            module.stage(target)
            expected = sorted(p.name for p in (PACK/'skills').iterdir() if (p/'SKILL.md').is_file())
            self.assertTrue(expected)
            self.assertEqual(sorted(p.name for p in (target/'.agents/skills').iterdir()), expected)
            for name in expected:
                self.assertEqual((target/'.agents/skills'/name/'SKILL.md').read_bytes(),
                                 (PACK/'skills'/name/'SKILL.md').read_bytes())
                for resource in (PACK/'skills'/name).rglob('*'):
                    if resource.is_file():
                        copy = target/'.agents/skills'/resource.relative_to(PACK/'skills')
                        self.assertEqual(copy.read_bytes(), resource.read_bytes())
            marker = target/'keep.txt'
            marker.write_text('user work')
            with self.assertRaises(FileExistsError):
                module.stage(target)
            self.assertEqual(marker.read_text(), 'user work')

    def test_refuse_broken_symlink(self):
        with tempfile.TemporaryDirectory() as tmp:
            target = Path(tmp)/'destination'
            target.symlink_to(Path(tmp)/'missing')
            with self.assertRaises(FileExistsError):
                module.stage(target)
            self.assertTrue(target.is_symlink())

if __name__ == '__main__':
    unittest.main()
