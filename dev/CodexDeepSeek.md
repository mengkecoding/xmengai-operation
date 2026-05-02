# 教程：在 Windows WSL 中为 Codex 接入 DeepSeek V4 Pro

> **摘要**：在 AI 编程工具领域，由 OpenAI 倾力打造的 Codex 作为一款与 Cursor 齐名的 AI 原生 IDE，凭借其深度集成的 Linux 兼容性和插件生态受到了开发者青睐。而 DeepSeek V4 Pro 作为 2026 年最具性价比的顶级大模型，其代码逻辑推理能力已经稳居行业第一梯队。本文将带你实现在 Windows WSL (Windows Subsystem for Linux) 环境下，将这款来自 OpenAI 的强大助手与 DeepSeek V4 Pro 强强联手，打造最强本地开发环境。

---

**适用环境**：已安装 WSL 的 Windows 10/11；拥有 DeepSeek 账号。预计 10 分钟完成。

---

## 1. 安装 WSL（如尚未安装）

以管理员身份打开 PowerShell 或 Windows 命令提示符，执行：

```powershell
wsl --install
```

重启电脑后，首次启动 WSL 会提示创建 Linux 用户和密码。完成后，你就有了一个完整的 Linux 子系统。详情参阅[WSL 安装](https://learn.microsoft.com/zh-cn/windows/wsl/install)。


## 2. 安装 x-cmd

在 WSL 终端（非 PowerShell）中执行：

```bash
eval "$(curl https://get.x-cmd.com)"
```

安装脚本会自动配置环境变量。重启终端（或执行 `exec bash` / `exec zsh`）后，验证安装：

```bash
x --version
```

若看到版本号，说明安装成功。
![](/dev/CodexDeepSeek/1.png)

## 3. 安装 Codex 并切换到 v0.80.0

直接使用 x-cmd 的 codex 模块安装指定版本：

```bash
# 安装 Codex 0.80.0（稳定版，支持 chat 协议）
x codex use 0.80.0
```

该命令会自动下载并激活该版本。验证版本：

```bash
x codex version
# 输出：Codex version 0.80.0
```

> **为什么用 0.80.0？**  
> 新版 Codex（≥ 0.81.0）移除了对旧 `chat` 协议的支持，而 DeepSeek 目前的集成依赖该协议。0.80.0 是最后一个完美兼容的版本，所有功能稳定可用。

## 4. 获取 DeepSeek API Key

1. 访问 [DeepSeek 开放平台 API Keys](https://platform.deepseek.com/api-keys) 并登录。
2. 点击 **“创建 API key”**，复制生成的 `sk-` 开头的密钥。**请妥善保管，不要泄露**。
3. 如果还没有账号，先[注册](https://platform.deepseek.com/signup)（提供免费额度）。

## 5. 配置 Codex 使用 DeepSeek

在 WSL 终端中运行以下命令，会弹出交互式图形界面：

```bash
x deepseek init
```

按界面提示输入你的 API Key，并选择模型（推荐 `deepseek-v4-pro`）。配置完成后，界面会提示成功。
![](/dev/CodexDeepSeek/2.png)

最后，启用 DeepSeek 作为 Codex 的后端：

```bash
x codex ds
```

如果看到类似 `Codex backend switched to DeepSeek` 的消息，就表示配置成功。

## 6. 验证功能

在终端中尝试一次对话,如果返回了 DeepSeek 的正常回复，恭喜！你可以随时用 `x codex` 命令调用 AI 助手。

---

## 常见问题

**Q: 运行 `x deepseek init` 时提示没有图形界面？**  
A: 确保你在 WSL 的终端（如 Windows Terminal）中运行，而非纯命令行界面。如果仍有问题，可以手动编辑配置文件：`~/.config/x/deepseek/config`，手动填入 `api_key` 和 `model`。

**Q: 怎么切换回其他 Codex 版本？**  
```bash
x codex use 0.81.0    # 切到最新版
x codex use system    # 使用系统默认版本
```

**Q: 如何卸载 x-cmd？**  
```bash
x uninstall
```

---

## 学到了什么？

- 用 `x <module>` 统一管理命令行工具，告别繁琐的手动下载和版本切换。
- DeepSeek 的 API 可以本地配置给 Codex，离线体验与隐私可控。
- 版本锁定是解决兼容性问题的通用手段——不是最新就是最好。

**下一步**：你可以用 `x codex` 做更多事情，比如代码解释、自动补全，甚至用 `x codex agent` 创建自定义 AI 助手。

有问题？去 [x-cmd 社区](https://github.com/x-cmd/x-cmd/discussions) 或 [DeepSeek 官方文档](https://platform.deepseek.com/docs) 聊聊。