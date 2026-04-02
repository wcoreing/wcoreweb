# deploy

执行前端**打包**并将 `dist/` **同步到服务器**（Vite + Vue）。

按你的要求：**账号、密码、IP 写在本地脚本里**，执行过程**不再交互询问**（依赖 `sshpass` + `rsync`）。

---

## 一次性准备

1. 安装 `sshpass`（macOS）：

   ```bash
   brew install sshpass
   ```

2. 在项目根复制脚本并填写变量：

   ```bash
   cp deploy.local.example.sh deploy.local.sh
   chmod +x deploy.local.sh
   ```

3. 编辑 `deploy.local.sh` 顶部四个变量：`DEPLOY_USER`、`DEPLOY_HOST`、`DEPLOY_PASS`、`REMOTE_PATH`。

   - `deploy.local.sh` 已在 `.gitignore` 中，**不要提交到 Git**，避免密码进仓库。

---

## 部署命令（/deploy 时执行）

项目根目录任选其一：

```bash
./deploy.local.sh
```

或：

```bash
npm run deploy
```

流程：`npm run build` → `rsync` 到 `REMOTE_PATH`，全程无密码提示。

---

## 服务器侧（按需，脚本结束后自行在服务器执行）

```bash
sudo nginx -t && sudo systemctl reload nginx
```

远端目录须与 Nginx `root` 一致（见仓库 `nginx.conf`）。`deploy.local.sh` 会在 `rsync` 前通过 SSH 执行 `mkdir -p`，自动创建 `REMOTE_PATH` 及其父目录；若 SSH 无权限创建 `/var/www/...`，仍需在服务器上手动建好父目录并授权。

---

## 备选：SSH 公钥（无密码、不用 sshpass）

若以后不想在脚本里放密码，可配置公钥后把 `deploy.local.sh` 改成普通 `rsync`（去掉 `sshpass`），见 OpenSSH 文档或此前方式 A 说明。

---

## 执行时注意

- 不要用 `npm run dev` 当上线产物。
- 含真实 IP/密码的文件只保留本机，勿提交。
