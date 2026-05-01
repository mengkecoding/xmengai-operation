# 在claude code中使用deepseek-v4-pro
## 安装claude code
### 先设置代理再安装
先设置代理（换成你的VPN端口）
$env:HTTP_PROXY = "http://127.0.0.1:7890"
$env:HTTPS_PROXY = "http://127.0.0.1:7890"

再运行安装
irm https://claude.ai/install.ps1 | iex

### 用 npm 安装（推荐）
先确认有没有装 Node.js：
powershellnode --version
如果有的话：
powershellnpm install -g @anthropic-ai/claude-code

### 方法三：去 GitHub 直接下载
访问 github.com/anthropics/claude-code/releases，下载 Windows 的安装包手动安装。

## 设置 DeepSeek 环境变量
```
$env:ANTHROPIC_BASE_URL = "https://api.deepseek.com/anthropic"
$env:ANTHROPIC_API_KEY = "你的DeepSeek API Key"
$env:CLAUDE_MODEL = "deepseek-chat"
```

## 启动 Claude Code
进入你的项目目录
```
cd C:\你的项目路径

claude
```

