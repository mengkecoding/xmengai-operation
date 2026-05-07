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

## 🚀 与IDE集成

### VS Code（推荐）

Anthropic 已发布官方的 **Claude Code for VS Code** 扩展，在 Windows 上原生可用。

**安装步骤：**

1. 确保 VS Code 版本 ≥ 1.98（推荐升级到 1.109+，2026 年 1 月版原生支持 `CLAUDE.md` 等生态文件）。
2. 在扩展商店搜索 **"Claude Code"**（发布者：Anthropic）并安装。
3. 安装完成后，可通过以下方式启动：
   - 点击编辑器右上角的 ✦ 图标
   - `Ctrl+Shift+P` → 输入 "Claude Code"
   - 点击状态栏右下角的 ✱ Claude Code

**配置 DeepSeek 后端：**

打开 VS Code 设置 JSON（`Ctrl+Shift+P` → "Preferences: Open User Settings (JSON)"），添加：

```json
{
  "claudeCode.environmentVariables": [
    { "name": "ANTHROPIC_BASE_URL", "value": "https://api.deepseek.com/anthropic" },
    { "name": "ANTHROPIC_API_KEY", "value": "sk-你的DeepSeek密钥" },
    { "name": "ANTHROPIC_MODEL", "value": "deepseek-v4-pro[1m]" }
  ]
}
```

> VS Code 扩展的环境变量与会话窗口是独立的——终端中用 PowerShell 设置的环境变量不会自动传递给扩展，因此建议直接写入 VS Code 设置。

**快捷操作：**

| 功能 | 快捷键 |
|------|--------|
| 插入文件引用（`@app.ts#L5-L10`） | `Alt+Ctrl+K` |
| 快速唤起 Claude Code | `Ctrl+Esc` |
| 内联 Diff 查看 | 自动弹出，可直接逐块接受/拒绝 |

---

### JetBrains IDE（IntelliJ / PyCharm / WebStorm 等）

JetBrains 平台也有官方 **Claude Code (Beta)** 插件。

**安装步骤：**

1. 打开 IDE → **Settings → Plugins → Marketplace**，搜索 **"Claude Code (Beta)"**，安装后重启 IDE。
2. 在 IDE 底部的**内置终端**（而非外部 PowerShell）中运行：

```powershell
claude
```

3. 插件会自动检测正在运行的 Claude Code 会话，随即启用集成功能。

**配置 DeepSeek 后端：**

由于 JetBrains 插件通过内置终端启动 `claude`，只需确保终端环境变量已正确设置。在 IDE 内置终端中运行：

```powershell
$env:ANTHROPIC_BASE_URL = "https://api.deepseek.com/anthropic"
$env:ANTHROPIC_API_KEY = "sk-你的DeepSeek密钥"
$env:ANTHROPIC_MODEL = "deepseek-chat"
claude
```

或者将这些变量写入 PowerShell 配置文件（`$PROFILE`），之后每次打开终端都会自动加载。

| 功能 | 快捷键 |
|------|--------|
| 快速唤起 Claude Code | `Ctrl+Esc` |
| 插入文件引用 | `Alt+Ctrl+K` |
| Diff 查看 | 自动在 IDE 原生 Diff 窗口展示 |

---


## 💡 避坑指南

* **URL 完整性**：请确保 `ANTHROPIC_BASE_URL` 包含后缀 `/anthropic`，否则 API 调用会返回 404。
* **编码问题**：在 Windows 终端（尤其是旧版 CMD）中，如果遇到乱码，建议切换到 **Windows Terminal** 并使用 PowerShell 7。
* **权限提示**：首次运行脚本可能需要执行 `Set-ExecutionPolicy RemoteSigned -Scope CurrentUser` 以允许本地脚本运行。
