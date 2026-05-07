# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Commands

```bash
npm run dev       # Start VitePress dev server (http://localhost:5173)
npm run build     # Build static site to .vitepress/dist
npm run preview   # Preview the built site locally
```

## Project Overview

This is a **Chinese-language tech blog** built with [VitePress 1.6](https://vitepress.dev/) + Vue 3.5. It covers AI Agent development, full-stack engineering, and interview prep. No test framework is configured.

### Architecture

```
xmengai.com/
├── .vitepress/
│   ├── config.mts          # VitePress config: nav, sidebar, search, footer
│   ├── theme/
│   │   ├── index.js         # Theme entry — extends DefaultTheme
│   │   ├── Layout.vue       # Custom layout, injects WeChatGate into #doc-after slot
│   │   ├── custom.css       # Full design system (light/dark, typography, cards)
│   │   └── components/
│   │       ├── WeChatGate.vue   # Content gating (55% preview, unlock via WeChat)
│   │       └── ExportPDF.vue    # PDF export using html2pdf.js
│   ├── cache/               # VitePress cache (gitignored)
│   └── dist/                # Build output (gitignored)
├── agent/                   # AI Agent articles (5 .md files)
├── dev/                     # Full-stack/dev articles (7 .md files)
├── interview/               # Interview prep (1 placeholder .md file)
├── public/                  # Static assets (logos, QR codes, article images)
├── index.md                 # Homepage with hero + feature cards
└── .github/workflows/deploy.yml  # CI/CD dual deployment to server + GitHub Pages
```

### Articles

- **agent/**: 5 articles — AgentGuide (入门), PromptGuide (提示工程), CozeChatBot (Coze 实战), InstallDify (Dify 部署), DifyReadPaper (Dify 文献助手)
- **dev/**: 7 articles — VitePressBlog (博客搭建), VitePressBlogAuto (博客进阶), HelloWorld (云部署), ClaudeCodeDeepSeek (Claude + DeepSeek), CodexDeepSeek (Codex + DeepSeek), claude-code-commands-reference (Claude Code 命令手册), Docker (Docker 入门)
- **interview/**: 1 placeholder — `努力加更中.md`

### Theme System

- **Layout.vue** wraps VitePress's `DefaultTheme.Layout` and injects `WeChatGate` into the `#doc-after` slot on all non-home pages; also places `ExportPDF` at the bottom of articles
- **custom.css** defines a custom design system using CSS variables:
  - Electric purple brand (`#8b5cf6`), Studio White / Midnight Black modes
  - `--vp-c-bg-rgb` is a custom RGB tuple (not built-in) used in `rgba()` for the frosted glass navbar
  - Card hover effects, refined typography, custom code block styling
- **WeChatGate.vue** clips article content to 55% height with gradient fade, overlays an unlock card requiring WeChat follow + 6-digit verification code (default: `123456`). Unlock persists in localStorage (`xmengai_wechat_followed`)
- **ExportPDF.vue** adds a "导出 PDF" button at the bottom of articles using dynamically imported html2pdf.js

### Image Assets

Article images are stored under `public/{category}/{article}/` matching the article name (e.g., `public/agent/InstallDify/`, `public/dev/HelloWorld/`). Root-level PNGs in `public/` include logos, QR codes, and other shared assets.

### CI/CD

GitHub Actions on push to `main` (Node 24, npm ci):
1. **deploy-to-server** — Builds site, SSH-deploys to cloud server at `/opt/blog/html`
2. **deploy-to-pages** — Rebuilds with `--base /xmeng-ai-blog/`, deploys to GitHub Pages via `actions/deploy-pages`

### Known Issues / To Clean Up

- `public/` has multiple old/unused logo PNGs (logo(1).png, logo(2).png, logo1.png, logo2.png, logo3.png, `调整图片为正方形_cleanup.png`, `claudeDeskDP.png`)
- Content gating uses a hardcoded `VERIFICATION_CODE = '123456'` in WeChatGate.vue — change before production use
