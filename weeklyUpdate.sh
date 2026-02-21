#!/bin/bash
export ANTHROPIC_AUTH_TOKEN=sk-sssaicode-ffd0858eb0f80b562cf5b7af603d29167dbe63083d5167beeac8de195be5e4c2
export ANTHROPIC_BASE_URL=https://node-hk.sssaicode.com/api
export CLAUDE_CODE_DISABLE_NONESSENTIAL_TRAFFIC=1
export PATH="/usr/local/bin:$PATH"

cd /workspace/HuntyZombies || exit 1

claude -p "帮我执行 hunty-zombies-maintainer skill 更新一下code"   --allowed-tools Bash,Edit,Read,WebSearch,WebFetch,Write

git pull
git add .
git commit -m "Weekly auto update by Claude"
git push origin main
