# Hermes 安装与微信 Clawbot 配置指南

## 如果你只知道 OpenClaw，那 Hermes 是什么？

聊 AI Agent，大家最先想到的往往是 OpenClaw（"大龙虾"🦞）——GitHub 37 万 Star，TypeScript 写的，开箱即用。而 Hermes 是 [Nous Research](https://github.com/NousResearch)（开源了 Hermes 系列模型的那个团队）用 Python 打造的另一个选择——13.8 万 Star，核心卖点是 **模型自由**（支持 DeepSeek、通义千问等 20+ 供应商，国内直连）、**越用越聪明**（能自动把经验沉淀成技能）、以及 **原生跨平台**（一套 Agent 同时跑在微信、飞书、Telegram 等 15+ 平台）。如果说 OpenClaw 像一台"开箱即用的苹果设备"，Hermes 就更像"可无限改装的工作站"——Python 技术栈、持久记忆、定时任务、多代理调度，全是内置的。

下面这篇教程，带你从零安装 Hermes、配置 DeepSeek，接上微信 clawbot，在手机上指挥你的 AI Agent。

---

## 食用建议

Windows 用户强烈建议使用 WSL 运行 Hermes。

---

## 一、安装 Hermes

### Linux / WSL 环境

打开终端，运行以下命令：

```bash
curl -fsSL https://res1.hermesagent.org.cn/install.sh | bash
```

### Windows 环境（PowerShell）

以管理员身份打开 PowerShell，运行以下命令：

```powershell
irm https://res1.hermesagent.org.cn/install.ps1 | iex
```

安装完成后，退出当前终端窗口，重新打开一个命令行窗口，输入以下命令启动 Hermes：

```bash
hermes
```

如果可以正常进入交互界面，说明安装成功。

按两次 `Ctrl + C` 即可退出 Hermes。

---

## 二、配置 DeepSeek 模型

在命令行中输入：

```bash
hermes model
```

![Image](/dev/HermesWechat/1.png)

进入模型配置页面后，按以下步骤操作：

1. 选择 **DeepSeek** 作为模型提供商
2. 粘贴你的 API Key（出于安全考虑，粘贴时界面不会显示任何字符，按 `Ctrl + V` 一次即可）
3. 选择默认模型，输入数字 `4`，即选择 **deepseek-v4-pro**

![Image](/dev/HermesWechat/2.png)

### 验证模型配置

启动 Hermes：

```bash
hermes
```

输入"你好"，如果模型能正常回复，说明配置成功。按两次 `Ctrl + C` 退出。

![Image](/dev/HermesWechat/3.png)

---

## 三、接入微信 Clawbot

### 配置消息平台

在命令行输入：

```bash
hermes gateway setup
```

![Image](/dev/HermesWechat/4.png)

进入 Hermes 消息平台配置页面后：

1. 选择 **微信**
2. 在确认提示中选择 **是**
3. 系统会生成一个二维码链接，打开链接并扫描二维码
4. 按照微信端的提示完成扫码操作
5. 扫码完成后回到命令行，一直按回车完成配置

### 绑定 Clawbot

完成上述配置后，向微信中的 **clawbot** 发送一条消息。此时 clawbot 会提示你将一段特定文本发送给 Hermes。

![Image](/dev/HermesWechat/5.jpg)

操作步骤：

1. 复制 clawbot 返回的那段文本
2. 在命令行中启动 Hermes
3. 将复制的文本发送给 Hermes
4. 等待 Hermes 处理完成（约 1-2 分钟）
5. 再次在微信中向 clawbot 发送消息

![Image](/dev/HermesWechat/6.png)

如果 clawbot 能够正常回应，说明微信接入配置成功。

![Image](/dev/HermesWechat/7.jpg)

---

## 附录：常见问题

| 问题 | 解决方案 |
|------|----------|
| `hermes` 命令无法识别 | 关闭终端后重新打开，或检查环境变量是否生效 |
| API Key 粘贴后无响应 | 界面不显示是正常的安全设计，确认已按一次 `Ctrl + V`，直接回车继续 |
| 微信扫码后无反应 | 确保手机网络正常，重新执行 `hermes gateway setup` |
| clawbot 绑定超时 | 确保在 2 分钟内完成文本发送，超时后重新操作即可 |

---

## 命令速查

| 操作 | 命令 |
|------|------|
| 启动 Hermes | `hermes` |
| 退出 Hermes | 按两次 `Ctrl + C` |
| 模型配置 | `hermes model` |
| 消息平台配置 | `hermes gateway setup` |
