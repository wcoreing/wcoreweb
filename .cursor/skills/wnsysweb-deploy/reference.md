# wnsysweb 部署 — 参考手册

本文件由 Skill `wnsysweb-deploy` 引用：细节与排障以本文为准，`SKILL.md` 仅保留入口。

## 仓库约定

- **构建**：`npm run build`，产物目录 **`dist/`**。勿用 `npm run dev` 作为上线产物。
- **部署脚本**：项目根 **`deploy.local.sh`**，已列入 **`.gitignore`**，内含账号密码，**禁止提交**。
- **模板**：**`deploy.local.example.sh`** 仅允许占位符，**禁止**写入真实 IP/密码后提交。
- **一键命令**：`npm run deploy` 等价于 `bash deploy.local.sh`。
- **给人看的步骤**：`.cursor/commands/deploy.md`。
- **Nginx**：仓库内 `nginx.conf` 的 `root` 须与 `REMOTE_PATH` 一致。

## 首次准备（本机）

```bash
brew install sshpass   # macOS
cp deploy.local.example.sh deploy.local.sh
chmod +x deploy.local.sh
# 编辑 deploy.local.sh 填写 DEPLOY_USER / DEPLOY_HOST / DEPLOY_PASS / REMOTE_PATH
```

## Agent 执行流程（用户要部署时）

1. **确认** 项目根存在 `deploy.local.sh`。若无：提示复制 example 并自行填写变量；**不要**在可提交文件中写入真实密码。
2. **PATH**：`export PATH="/opt/homebrew/bin:/usr/local/bin:$PATH"`（非交互环境常缺 Homebrew）。
3. **sshpass**：`command -v sshpass` 失败则提示 `brew install sshpass` 后重试。
4. **执行**（需网络，建议终端权限含 `all` 以便 SSH/rsync）：

   ```bash
   cd <项目根>
   export PATH="/opt/homebrew/bin:/usr/local/bin:$PATH"
   bash deploy.local.sh
   ```

5. **成功反馈**：说明已完成 `build` + `rsync`；可提醒服务器执行 `sudo nginx -t && sudo systemctl reload nginx`。
6. **失败排查**见下文「排障」。

## 脚本逻辑（修改时请保持）

`deploy.local.example.sh` 与 `deploy.local.sh` 应对齐：

- `set -euo pipefail`，`cd` 到脚本所在目录（项目根）。
- `npm run build`
- `export SSHPASS="$DEPLOY_PASS"`
- `sshpass -e ssh -o StrictHostKeyChecking=accept-new "${DEPLOY_USER}@${DEPLOY_HOST}" "mkdir -p '<REMOTE_PATH>'"`
- `sshpass -e rsync -avz --delete --exclude '.DS_Store' -e 'ssh -o StrictHostKeyChecking=accept-new' dist/ "${DEPLOY_USER}@${DEPLOY_HOST}:${REMOTE_PATH}"`

## 排障

| 现象 | 处理 |
|------|------|
| `deploy.local.sh: No such file` | 未创建脚本，按「首次准备」复制并填写。 |
| `缺少 sshpass` | 安装 sshpass 或检查 PATH 是否含 `/opt/homebrew/bin`。 |
| `mkdir ... failed` / `No such file or directory` | 远端无权限创建父目录；SSH 到服务器手动 `mkdir -p` 并授权。 |
| SSH 认证失败 | 检查 `DEPLOY_USER`/`DEPLOY_PASS`/防火墙/安全组。 |
| rsync 很慢 | 正常；大文件（如 `nest_install.zip`）首次会较久。 |

## 安全

- 不在对话、PR、可提交文件中重复用户密码。
- `deploy.local.example.sh` 若曾误提交真实凭据：改回占位符，并建议**轮换**服务器密码与检查 Git 历史。

## 与用户规则对齐

- 部署完成后**不要**自动启动 `npm run dev`。
- 「不要编译」与显式「部署」冲突时：**部署优先**，必须执行 `npm run build`。

## 相关文件路径（仓库内）

| 路径 | 用途 |
|------|------|
| `deploy.local.example.sh` | 可提交的脚本模板 |
| `deploy.local.sh` | 本机私密，gitignore |
| `.cursor/commands/deploy.md` | `/deploy` 命令说明 |
| `nginx.conf` | 静态站 Nginx 示例 |
