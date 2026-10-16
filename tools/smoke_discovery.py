#!/usr/bin/env python3
"""Offline skills/list smoke test. No thread/turn, credentials, or inference."""
import json
import os
from pathlib import Path
import selectors
import shutil
import subprocess
import tempfile
import time
from stage import stage

def main():
    executable = shutil.which('codex')
    if not executable:
        raise SystemExit('codex unavailable')
    with tempfile.TemporaryDirectory(prefix='pstack-discovery-') as tmp:
        root = Path(tmp)
        workspace = stage(root / 'workspace')
        codex_home = root / 'codex-home'
        codex_home.mkdir()
        env = dict(os.environ, CODEX_HOME=str(codex_home))
        # A fresh home prevents loading account/config/MCP state. No model call.
        with (root / 'stderr').open('w') as errors:
            process = subprocess.Popen([executable, 'app-server', '--stdio'],
                cwd=workspace, env=env, stdin=subprocess.PIPE,
                stdout=subprocess.PIPE, stderr=errors, text=True, bufsize=1)
            selector = selectors.DefaultSelector()
            selector.register(process.stdout, selectors.EVENT_READ)
            def send(message):
                process.stdin.write(json.dumps(message) + '\n')
                process.stdin.flush()
            def receive(identifier):
                deadline = time.monotonic() + 25
                while time.monotonic() < deadline:
                    if not selector.select(max(0, deadline-time.monotonic())):
                        break
                    line = process.stdout.readline()
                    if not line:
                        raise RuntimeError('app-server closed output')
                    message = json.loads(line)
                    if message.get('id') == identifier:
                        if 'error' in message:
                            raise RuntimeError(message['error'])
                        return message['result']
                raise TimeoutError('app-server response timeout')
            try:
                send({'id':1,'method':'initialize','params':{'clientInfo':{
                    'name':'pstack-offline-smoke','version':'1'}}})
                receive(1)
                send({'method':'initialized','params':{}})
                send({'id':2,'method':'skills/list','params':{
                    'cwds':[str(workspace)],'forceReload':True}})
                response = receive(2)
                expected = sorted(p.name for p in (workspace/'.agents/skills').iterdir())
                found = sorted(s['name'] for row in response['data'] for s in row['skills']
                               if s['name'].startswith('pstack-'))
                errors = [e for row in response['data'] for e in row.get('errors',[])]
                assert found == expected, (expected, found)
                assert not errors, errors
                print(json.dumps({'codex':subprocess.check_output([executable,'--version'],env=env,text=True).strip(),
                    'discovered':found,'count':len(found),'errors':errors,'inference':False},indent=2))
            finally:
                selector.close()
                process.terminate()
                try:
                    process.wait(timeout=5)
                except subprocess.TimeoutExpired:
                    process.kill()
                    process.wait()

if __name__ == '__main__':
    main()
