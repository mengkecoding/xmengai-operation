# Windows 开发者指南：在 Claude Code 中集成 DeepSeek-V4-Pro

> **摘要**：本指南专为 Windows 用户设计，详细介绍了如何通过 PowerShell、npm 或手动方式安装 Anthropic 的 **Claude Code** 终端助手，并配置环境变量将其后端无缝切换至高性价比的 **DeepSeek-V4-Pro** 模型。

---

## 📦 步骤一：安装 Claude Code (Windows 三种方案)

根据你的系统环境选择最适合的安装方式：

### 方案 A：使用 PowerShell 脚本（最快捷）
如果你在受限网络环境下，请先为当前 PowerShell 会话设置代理端口（以 7890 为例）：

```powershell
# 设置网络代理
$env:HTTP_PROXY = "http://127.0.0.1:7890"
$env:HTTPS_PROXY = "http://127.0.0.1:7890"

# 执行官方安装脚本
irm https://claude.ai/install.ps1 | iex
```

### 方案 B：使用 npm 安装（推荐）
确保你的系统中已安装 **Node.js** (版本 18+)。在终端执行：

```powershell
npm install -g @anthropic-ai/claude-code
```

### 方案 C：从 GitHub 下载（手动安装）
1. 访问 [Claude Code GitHub Releases](https://github.com/anthropics/claude-code/releases)。
2. 下载适用于 Windows 的最新二进制包（通常为 `.exe` 文件）。
3. 将下载的文件移动到你已添加到系统 `PATH` 的文件夹中，或者直接运行。

---

## ⚙️ 步骤二：配置 DeepSeek 运行环境

为了让 Claude Code 调用 DeepSeek 的模型，我们需要在 Windows 中设置三个关键的环境变量。

### 临时配置（仅对当前窗口有效）
在 PowerShell 中直接运行：

```powershell
# 指向 DeepSeek 的 Anthropic 兼容端点
$env:ANTHROPIC_BASE_URL = "https://api.deepseek.com/anthropic"

# 填入你的 DeepSeek API Key
$env:ANTHROPIC_API_KEY = "sk-你的DeepSeek密钥"

# 指定后端模型名称
$env:CLAUDE_MODEL = "deepseek-chat"
```

### 永久配置（推荐）
为了避免重复设置，建议在 Windows **“编辑系统环境变量”** 中添加上述三个变量，或在 PowerShell 配置文件 (`$PROFILE`) 中加入上述代码。

---

## 🚀 步骤三：在项目中启动

进入你的代码目录，直接唤起 AI：

```powershell
# 切换到项目路径
cd C:\Users\你的用户名\Projects\MyProject

# 启动 Claude Code
claude
```

---

## 💡 避坑指南

* **URL 完整性**：请确保 `ANTHROPIC_BASE_URL` 包含后缀 `/anthropic`，否则 API 调用会返回 404。
* **编码问题**：在 Windows 终端（尤其是旧版 CMD）中，如果遇到乱码，建议切换到 **Windows Terminal** 并使用 PowerShell 7。
* **权限提示**：首次运行脚本可能需要执行 `Set-ExecutionPolicy RemoteSigned -Scope CurrentUser` 以允许本地脚本运行。
