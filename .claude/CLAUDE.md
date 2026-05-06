# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Commands

```bash
npm run dev       # Start VitePress dev server (http://localhost:5173)
npm run build     # Build static site to .vitepress/dist
npm run preview   # Preview the built site locally
```

## Project Overview

This is a **Chinese-language tech blog** built with [VitePress 1.6](https://vitepress.dev/) + Vue 3.5. It covers AI Agent development, full-stack engineering, and interview prep.

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
│   └── dist/               # Build output (gitignored)
├── agent/                  # AI Agent articles
├── dev/                    # Full-stack/dev articles
├── interview/
│   └── agentbasic.md       # 100+ Agent interview Q&A (single large file)
├── public/                 # Static assets (logos, QR codes)
├── index.md                # Homepage with hero + feature cards
└── .github/workflows/deploy.yml  # CI/CD dual deployment
```

### Theme System

- **Layout.vue** wraps VitePress's `DefaultTheme.Layout` and injects `WeChatGate` into the `#doc-after` slot on all non-home pages
- **custom.css** defines a custom design system using CSS variables:
  - Electric purple brand (`#8b5cf6`), Studio White / Midnight Black modes
  - Modern card design with hover effects, frosted glass navbar (`backdrop-filter`), refined typography
  - `--vp-c-bg-rgb` is a custom RGB tuple (not built-in) used in `rgba()` for the navbar
- **WeChatGate.vue** clips article content to 55% height with a gradient fade, overlays an unlock card requiring WeChat follow + 6-digit verification code (default: `123456`). Unlock persists in localStorage (`xmengai_wechat_followed`)
- **ExportPDF.vue** adds a "导出 PDF" button at the bottom of articles using html2pdf.js

### Content Structure

- **Nav**: 首页 → AI Agent (认知基础, 实战进阶) → 全栈之路 (博客搭建, AI 开发提效, 运维部署) → 求职八股
- **Sidebar** is organized by path prefix (`/agent/`, `/dev/`, `/interview/`)
- Article files use `.md` with no `.md` extension in links (VitePress convention)
- All article content is in Chinese

### CI/CD

GitHub Actions on push to `main`:
1. **deploy-to-server** — Builds site, SSH-deploys to cloud server at `/opt/blog/html`
2. **deploy-to-pages** — Rebuilds with `--base /xmeng-ai-blog/`, deploys to GitHub Pages

### Known Issues / To Clean Up

- `/interview/` sidebar links point to `interview/ai_agent/*.md` files that don't exist — only `interview/agentbasic.md` exists
- `dev/ClaudeCodeDeepSeek copy.md` is a duplicate file that should be deleted
- `public/` has multiple old/unused logo PNGs (logo(1).png, logo(2).png, logo1.png, logo2.png, logo3.png)
- Content gating uses a hardcoded `VERIFICATION_CODE = '123456'` in WeChatGate.vue — change before production use
