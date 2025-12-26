#!/bin/bash
# 每周执行一次：运行 Claude 命令并提交代码

# 设置环境变量（如果需要，例如 PATH 或 API 密钥）
export PATH="/usr/local/bin:$PATH"

# 进入目标目录（换成你的代码目录）
cd /workspace/HuntyZombies || exit 1

# 执行 Claude 指令
claude -p "帮我执行 hunty-zombies-maintainer skill 更新一下code" \
  --allowed-tools Bash,Edit,Read,WebSearch,WebFetch,Write

# 提交代码
git pull
git add .
git commit -m "Weekly auto update by Claude"
git push origin main
