# 个人博客从零到一自动化部署全纪实

本白皮书完整记录了个人博客 `xmengai.com` 从环境搭建到实现“双路自动化部署”的所有技术细节。这不仅是一次建站记录，更是一场关于 Linux 权限、Docker 容器化及 CI/CD 流水线的实战演练。

## 一、 技术架构全景 (Tech Stack)

* **域名**：xmengai.com (解析至云服务器)
* **服务器**：2核 2G 内存 (轻量应用服务器)
* **前端引擎**：VitePress (基于 Vue 3 的极速静态站点生成器)
* **容器化**：Docker & Docker Compose (环境隔离与快速迁移)
* **自动化**：GitHub Actions (实现 CI/CD 自动化流水线)
* **双路部署策略**：
    * **主站**：云服务器 (通过 Nginx 托管)
    * **备站**：GitHub Pages (利用其全球 CDN 优势)


## 二、 核心部署流程图

整个自动化部署流程如下，实现了“本地写作，一键发布”：

1. **本地开发**：在 VS Code 中编写 Markdown 文章。
2. **代码推送**：执行 `git push` 将源码推送至 GitHub 仓库。
3. **云端触发**：GitHub Actions 监测到推送，启动两个并行任务：
    * **任务 A**：打包根路径版本，通过 SSH 同步至云服务器。
    * **任务 B**：打包子路径版本（通过 `--base` 参数），自动发布至 GitHub Pages。


## 三、 详细操作步骤回顾

### 1. 本地配置
#### 初始化项目
在你的电脑上找一个空文件夹，运行以下命令：
```shell
# 创建目录
mkdir xmeng-blog
cd xmeng-blog

# 初始化并安装 VitePress
npm init -y
npm add -D vitepress vue
npx vitepress init
```
[关键步骤] 统一脚本名称：
打开你项目根目录下的 `package.json`。根据你提供的文件，你的脚本目前带有 `docs: ` 前缀。为了让自动化部署脚本识别，请将 `scripts` 部分修改或添加为以下内容：
```json
"scripts": {
  "dev": "vitepress dev",
  "build": "vitepress build",
  "preview": "vitepress preview"
}
```
#### 完善首页内容 (index.md)

编辑根目录下的 `index.md`，让它看起来更专业：
```markdown
---
layout: home
hero:
  name: "xmengai.com"
  text: "AI Agent & 全栈开发"
  tagline: 从后端思维出发，探索 AI 时代的无限可能
  actions:
    - theme: brand
      text: 开始阅读
      link: /guide
---
```

#### 新建 gitignore 文件。
在项目根目录下创建 .gitignore 文件。

```markdown
node_modules
.vitepress/dist
.vitepress/cache
```

#### 编写部署脚本 (.github/workflows/deploy.yml)

在本地创建该文件。为了适配最新的 `Node.js 24` 环境，我们添加了 `FORCE_JAVASCRIPT_ACTIONS_TO_NODE24` 环境变量：
```markdown
name: Deploy Blog V2
on:
  push:
    branches: [main]

env:
  FORCE_JAVASCRIPT_ACTIONS_TO_NODE24: true

jobs:
  # --- 任务 1：部署到云服务器 (Primary) ---
  deploy-to-server:
    runs-on: ubuntu-latest
    steps:
      - uses: actions/checkout@v4
      - uses: actions/setup-node@v4
        with:
          node-version: 24
          cache: 'npm'
      
      - name: Build for Server
        run: |
          npm ci
          npm run build
          
      - name: Sync to Cloud Server
        uses: easingthemes/ssh-deploy@main
        with:
          SSH_PRIVATE_KEY: ${{ secrets.SERVER_SSH_KEY }}
          SOURCE: ".vitepress/dist/"
          REMOTE_HOST: ${{ secrets.REMOTE_HOST }}
          REMOTE_USER: ${{ secrets.REMOTE_USER }}
          TARGET: "/opt/blog/html"

  # --- 任务 2：部署到 GitHub Pages (Secondary) ---
  deploy-to-pages:
    runs-on: ubuntu-latest
    permissions:
      contents: read
      pages: write
      id-token: write
    steps:
      - uses: actions/checkout@v4
      - uses: actions/setup-node@v4
        with:
          node-version: 24
      
      - name: Build for Pages
        # 我们在这里通过 VitePress 命令行参数强行注入 base 路径
        # 这样就不需要修改 config.mjs 里的代码了
        run: |
          npm ci
          npx vitepress build --base /xmeng-ai-blog/
          touch .vitepress/dist/.nojekyll
          
      - name: Upload to GitHub Pages
        uses: actions/upload-pages-artifact@v3
        with:
          path: .vitepress/dist
          
      - name: Activate GitHub Pages
        id: deployment
        uses: actions/deploy-pages@v4
```

#### 提交代码

在 GitHub 上创建一个名为 `xmeng-ai-blog` 的仓库，然后本地执行：

```shell
git init
git add .
git commit -m "feat: 博客初始化"
git branch -M main
git remote add origin [https://github.com/mengkecoding/xmeng-ai-blog.git](https://github.com/mengkecoding/xmeng-ai-blog.git)
git push -u origin main
```

#### 配置 GitHub Secrets

前往 `GitHub 仓库 -> Settings -> Secrets and variables -> Actions`，点击 `New repository secret`。

依次添加：
```shell
REMOTE_HOST: 服务器 IP。

REMOTE_USER: deployer。

SERVER_SSH_KEY: 完整的私钥内容。
```


### 2. 云服务器配置 (非 Root 部署)
#### 创建专用账户
```shell
# 1. 创建用户并指定使用 bash 作为默认 shell
sudo useradd -m -s /bin/bash deployer

# 2. 为新用户设置密码（请记住这个密码，用于 sudo 提权）
sudo passwd deployer

# 将 deployer 加入 docker 组
sudo usermod -aG docker deployer

# 切换到 deployer 用户
su - deployer

# 配置 SSH 密钥登录
# 这一步是让 GitHub Actions 能够自动登录服务器的关键。我们将生成一对密钥：私钥（给 GitHub）和 公钥（留给服务器）。
# 生成 Ed25519 类型的密钥
ssh-keygen -t ed25519 -C "github-actions-deploy"

# 提示保存路径和密码短语时，直接按回车（全部留空）

# 创建 .ssh 目录并设置正确权限
mkdir -p ~/.ssh
chmod 700 ~/.ssh

# 把公钥内容写入授权文件
cat ~/.ssh/id_ed25519.pub >> ~/.ssh/authorized_keys

# 设置授权文件权限
chmod 600 ~/.ssh/authorized_keys

# 查看私钥内容
cat ~/.ssh/id_ed25519
# 注意： 复制从 -----BEGIN OPENSSH PRIVATE KEY----- 开始到 -----END OPENSSH PRIVATE KEY----- 结束的全部内容。

# 确保你现在是 root 用户，然后执行：
chown -R deployer:deployer /opt/blog

```

#### 安装docker
我们使用 Docker 来运行 Nginx，这样以后如果你想升级博客或更换服务器，只需要搬走配置文件即可。
```shell
# 1. 更新软件包索引
sudo apt-get update

# 2. 安装 Docker (如果是 Ubuntu/Debian)
sudo apt-get install -y docker.io docker-compose

# 3. 启动 Docker 并设置开机自启
sudo systemctl start docker
sudo systemctl enable docker
```
#### 创建目录与权限配置
GitHub Actions 会把文件传送到 /opt/blog/html。我们需要预先创建好这些文件夹，并确保 rsync 工具已安装（Actions 同步文件需要它）。
```shell
# 1. 创建博客根目录和配置目录
sudo mkdir -p /opt/blog/html
sudo mkdir -p /opt/blog/nginx/conf.d

# 2. 确保安装了 rsync (同步工具)
sudo apt-get install -y rsync

# 3. 检查权限 (因为 GitHub Actions 使用 root 登录，通常没问题)
sudo chown -R $USER:$USER /opt/blog
```
#### 配置 Nginx 反向代理
在 /opt/blog/nginx/conf.d 目录下创建一个名为 blog.conf 的文件，告诉 Nginx 怎么找到你的博客。
```shell
# HTTP 自动跳转到 HTTPS
server {
    listen 80;
    server_name xmengai.com www.xmengai.com; # 这里替换为你的域名

    # 验证 Let's Encrypt 证书时需要用到的临时目录
    location /.well-known/acme-challenge/ {
        root /usr/share/nginx/html;
    }

    location / {
        return 301 https://$host$request_uri;
    }
}
```
#### 编写 Docker Compose
在 /opt/blog 目录下创建 docker-compose.yaml 文件：
```
version: '3'

services:
  nginx:
    image: nginx:alpine
    container_name: blog-nginx
    restart: always
    ports:
      - "80:80"
      - "443:443"
    volumes:
      # 挂载 GitHub Actions 传过来的 HTML 文件
      - ./html:/usr/share/nginx/html:ro
      # 挂载 Nginx 配置文件
      - ./nginx/conf.d:/etc/nginx/conf.d:ro
      # 映射证书目录 (用于存放 HTTPS 证书)
      - /etc/letsencrypt:/etc/nginx/cert:ro
    networks:
      - blog-network

networks:
  blog-network:

```
#### 启动服务

```shell
cd /opt/blog
docker compose up -d
```
## 四、GitHub 与云服务器连接测试指南（可选）

### 在本地项目中创建测试文件
在你的博客项目根目录下，确保存在 `.github/workflows/test-ssh.yml` 文件。
```shell
name: Test SSH Connection

on:
  workflow_dispatch: # 允许你在 GitHub 页面上点击按钮手动触发测试

jobs:
  test-connection:
    runs-on: ubuntu-latest
    steps:
      - name: 测试 SSH 连接
        uses: appleboy/ssh-action@v1.0.3
        with:
          host: ${{ secrets.REMOTE_HOST }}
          username: ${{ secrets.REMOTE_USER }}
          key: ${{ secrets.SERVER_SSH_KEY }}
          port: 22
          script: |
            echo "你好，GitHub！我是你的服务器。"
            echo "当前登录用户是: $(whoami)"
            echo "服务器运行时间: $(uptime)"
            docker --version
```

### 提交代码到 GitHub 
请按照以下顺序执行命令。
```shell
# 1. 初始化 (如果还没做过)
git init

# 2. 重新关联远程仓库为 "origin" (这样比较标准，方便记忆)
# 先删掉刚才那个名字比较长的，换成标准的 origin
git remote remove xmeng-ai-blog 2>/dev/null
git remote add origin [https://github.com/mengkecoding/xmeng-ai-blog.git](https://github.com/mengkecoding/xmeng-ai-blog.git)

# 3. 确保本地有文件并提交 (关键！必须先 commit 才能 push)
git add .
git commit -m "chore: 准备测试 SSH 连接"

# 4. 确保本地分支名字叫 main
git branch -M main

# 5. 推送到 GitHub
git push -u origin main
```
### 在 GitHub 页面手动运行测试
1. 打开你的 GitHub 仓库页面 `mengkecoding/xmeng-ai-blog`（**此处改为你的GitHub仓库**）。

2. 点击顶部的 `Actions` 标签。

3. 在左侧菜单中点击 `Test SSH Connection`。

4. 点击右侧的 `Run workflow` 下拉按钮，然后点击绿色的 `Run workflow` 按钮。

### 观察结果
**如果圆圈变绿** (Success)：恭喜你！GitHub 已经成功通过 SSH 密钥登录到了你的服务器。

**如果圆圈变红** (Failure)：请点击进入查看日志，看看是 `Connection timeout`（网络/防火墙问题）还是 `Permission denied`（密钥配置问题）。


## 四、日常更新流程

以后你只需要做三件事：

写文章：在本地 `docs` 目录下写 Markdown 文件。

提交：`git add . -> git commit -m "更新内容"`。

发布：`git push`。

`GitHub Actions` 会自动帮你完成打包、传输、部署的全过程。