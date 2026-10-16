#!/usr/bin/env python3
"""Install and toggle the native plugin in a temporary Codex home, no inference."""
import json
import os
from pathlib import Path
import selectors
import shutil
import subprocess
import tempfile
import time

def rpc_skills(executable, env, workspace):
    with tempfile.TemporaryFile(mode='w+') as errors:
        proc = subprocess.Popen([executable, 'app-server', '--stdio'], cwd=workspace,
            env=env, stdin=subprocess.PIPE, stdout=subprocess.PIPE, stderr=errors,
            text=True, bufsize=1)
        selector = selectors.DefaultSelector()
        selector.register(proc.stdout, selectors.EVENT_READ)
        def call(identifier, method, params):
            proc.stdin.write(json.dumps(dict(id=identifier, method=method, params=params))+'\n')
            proc.stdin.flush()
            deadline = time.monotonic()+25
            while time.monotonic()<deadline:
                if not selector.select(max(0, deadline-time.monotonic())):
                    break
                line = proc.stdout.readline()
                if not line: raise RuntimeError('app-server closed output')
                message = json.loads(line)
                if message.get('id') == identifier:
                    if 'error' in message: raise RuntimeError(message['error'])
                    return message['result']
            raise TimeoutError(method)
        try:
            call(1, 'initialize', {'clientInfo':{'name':'pstack-plugin-smoke','version':'1'}})
            proc.stdin.write('{"method":"initialized","params":{}}\n')
            proc.stdin.flush()
            result = call(2, 'skills/list', {'cwds':[str(workspace)],'forceReload':True})
            failures = [e for row in result['data'] for e in row.get('errors',[])]
            assert not failures, failures
            return [s for row in result['data'] for s in row['skills']
                    if s['name'].startswith('pstack-')]
        finally:
            selector.close()
            proc.terminate()
            try: proc.wait(timeout=5)
            except subprocess.TimeoutExpired:
                proc.kill()
                proc.wait()

def main():
    source = Path(__file__).resolve().parents[1]
    executable = shutil.which('codex')
    if not executable: raise SystemExit('codex unavailable')
    expected = sorted('pstack-codex:'+p.parent.name for p in (source/'skills').glob('*/SKILL.md'))
    with tempfile.TemporaryDirectory(prefix='pstack-plugin-smoke-') as tmp:
        root = Path(tmp)
        codex_home = root/'home'
        codex_home.mkdir()
        workspace = root/'workspace'
        workspace.mkdir()
        env = dict(os.environ, CODEX_HOME=str(codex_home))
        def cli(*args):
            return subprocess.check_output([executable,*args], cwd=workspace,
                env=env,text=True,timeout=30)
        marketplace = json.loads(cli('plugin','marketplace','add',str(source),'--json'))
        installed = json.loads(cli('plugin','add','pstack-codex@pstack-local','--json'))
        assert installed['pluginId']=='pstack-codex@pstack-local'
        cache = Path(installed['installedPath'])
        assert (cache/'LICENSE').read_bytes() == (source/'LICENSE').read_bytes()
        for file in (source/'skills').rglob('*'):
            if file.is_file() and '__pycache__' not in file.parts:
                assert (cache/file.relative_to(source)).read_bytes()==file.read_bytes(), file
        config = codex_home/'config.toml'
        enabled_config = config.read_text()
        assert 'enabled = true' in enabled_config, enabled_config
        enabled = rpc_skills(executable,env,workspace)
        assert sorted(s['name'] for s in enabled)==expected
        assert len({s['path'] for s in enabled})==len(expected)
        assert all(str(cache.resolve()) in str(Path(s['path']).resolve()) for s in enabled)
        # This runtime omits invocation policy from skills/list. Check cached bytes.
        policies = list((cache/'skills').glob('*/agents/openai.yaml'))
        assert len(policies) == len(expected)-1
        assert all('allow_implicit_invocation: false' in p.read_text() for p in policies)
        config.write_text(enabled_config.replace('enabled = true','enabled = false'))
        disabled = rpc_skills(executable,env,workspace)
        assert not [s for s in disabled if s.get('enabled',True)], disabled
        config.write_text(enabled_config)
        restored = rpc_skills(executable,env,workspace)
        assert sorted(s['name'] for s in restored)==expected
        print(json.dumps({'codex':cli('--version').strip(), 'pluginId':installed['pluginId'],
            'manifest':'.codex-plugin/plugin.json','marketplaceSource':'local ./',
            'enabledSkillCount':len(enabled),'disabledActiveSkillCount':0,
            'reenabledSkillCount':len(restored),'duplicateSkillPaths':False,
            'cachedResourcesMatch':True,'inference':False,
            'globalInstallation':False},indent=2))

if __name__ == '__main__': main()
