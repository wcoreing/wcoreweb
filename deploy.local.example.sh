#!/usr/bin/env bash
# 复制为 deploy.local.sh 后填写下面变量，执行 ./deploy.local.sh 或 npm run deploy
# deploy.local.sh 已加入 .gitignore，勿提交到 Git

set -euo pipefail
ROOT="$(cd "$(dirname "${BASH_SOURCE[0]}")" && pwd)"
cd "$ROOT"

# 确保能找到 brew 安装的 sshpass（非交互 shell 时 PATH 可能不含 Homebrew）
export PATH="/opt/homebrew/bin:/usr/local/bin:$PATH"

# ========== 在下面填写 ==========
DEPLOY_USER="root"
DEPLOY_HOST="你的服务器IP或域名"
DEPLOY_PASS="你的SSH登录密码"
REMOTE_PATH="/var/www/wnsysweb/dist/"
# ================================

if ! command -v sshpass >/dev/null 2>&1; then
  echo "缺少 sshpass。macOS: brew install sshpass" >&2
  exit 1
fi

npm run build

export SSHPASS="$DEPLOY_PASS"
# 确保远端目录存在（含 /var/www/wnsysweb 等父目录）
sshpass -e ssh -o StrictHostKeyChecking=accept-new \
  "${DEPLOY_USER}@${DEPLOY_HOST}" "mkdir -p '${REMOTE_PATH}'"

sshpass -e rsync -avz --delete \
  --exclude '.DS_Store' \
  -e 'ssh -o StrictHostKeyChecking=accept-new' \
  "dist/" "${DEPLOY_USER}@${DEPLOY_HOST}:${REMOTE_PATH}"

echo "同步完成。服务器按需执行: sudo nginx -t && sudo systemctl reload nginx"
