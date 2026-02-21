#!/bin/bash
export ANTHROPIC_AUTH_TOKEN=2579a027df191b13a0bd9dcb5754c9b9a75920109bcc1afe816f855647299195
export ANTHROPIC_BASE_URL=https://claude2.sssaicode.com/api
export CLAUDE_CODE_DISABLE_NONESSENTIAL_TRAFFIC=1
export PATH="/usr/local/bin:$PATH"

cd /workspace/HuntyZombies || exit 1

claude -p "帮我执行 hunty-zombies-maintainer skill 更新一下code"   --allowed-tools Bash,Edit,Read,WebSearch,WebFetch,Write

git pull
git add .
git commit -m "Weekly auto update by Claude"
git push origin main
