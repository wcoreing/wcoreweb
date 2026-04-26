---
name: wnsysweb-deploy
description: >-
  Deploys the Vite + Vue static site: production build and rsync of dist/ to a
  remote server using deploy.local.sh (sshpass + SSH). Use when the user says
  deploy, /deploy, 部署, 上线, 发版, rsync, sync to server, or asks about
  wnsysweb deployment or deploy.local.sh.
---

# wnsysweb 部署

## 快速要点

- 产物：**`npm run build`** → `dist/`；上线走 **`deploy.local.sh`**（本机私密，已 gitignore），勿用 `dev`。
- 无脚本时：提示从 **`deploy.local.example.sh`** 复制为 `deploy.local.sh` 并填写变量；**勿**把密码写进可提交文件。
- 执行前：`PATH` 含 Homebrew；需 **`sshpass`**（`brew install sshpass`）。
- 运行（需网络 / 建议 `all` 权限）：

  ```bash
  export PATH="/opt/homebrew/bin:/usr/local/bin:$PATH"
  bash deploy.local.sh
  ```

- 成功后：可提醒服务器 `sudo nginx -t && sudo systemctl reload nginx`。

## 详细说明（渐进加载）

**完整流程、脚本逐行约定、排障表、安全与用户规则对齐**见同目录 **[reference.md](reference.md)**。处理部署异常或改脚本前请先读该文件。

给人看的操作说明另见：`.cursor/commands/deploy.md`。
