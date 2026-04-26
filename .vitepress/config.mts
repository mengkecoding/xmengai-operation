import { defineConfig } from 'vitepress'

export default defineConfig({
  title: "xmengai.com",
  description: "AI Agent & 全栈开发实战笔记",
  // 保持根目录部署
  base: '/',
  
  // 开启最后更新时间显示
  lastUpdated: true,

  themeConfig: {
    // 1. 顶部导航栏：定义全局大分类
    nav: [
      { text: '首页', link: '/' },
      { 
        text: '🤖 AI Agent', 
        items: [
          { text: '入门指南', link: '/agent/大模型应用开发极简入门' },
          { text: 'LangChain 实战', link: '/agent/langchain' },
          { text: '多智能体协同', link: '/agent/multi-agent' }
        ]
      },
      { 
        text: '💻 全栈之路', 
        items: [
          { text: '博客', link: '/dev/VitePressBuildBlog' },
          { text: '后端架构 (Java/Python)', link: '/dev/backend' },
          { text: '前端前沿 (Vue/React)', link: '/dev/frontend' },
          { text: '运维与部署 (Docker)', link: '/dev/ops' }
        ]
      },
      { text: '🎓 求职八股', link: '/interview/index' }
    ],

    // 2. 侧边栏：针对不同板块显示不同的详细目录
    sidebar: {
      '/agent/': [
        {
          text: '入门指南',
          collapsed: false,
          items: [
            // { text: '什么是 Agent？', link: '/agent/intro' },
            { text: '🔑 大模型开发：万能钥匙', link: '/agent/大模型应用开发极简入门' },
            { text: '🎙️ Coze 实战：赋予灵魂', link: '/agent/CozeChatBot' },
            { text: '🪄 提示工程：听懂心声', link: '/agent/prompt入门' },
            { text: 'Prompt 工程进阶', link: '/agent/prompts' },
            { text: 'RAG 检索增强实现', link: '/agent/rag' }
          ]
        },
        {
          text: 'AI Agent 实验室',
          collapsed: false,
          items: [
            { text: '什么是 Agent？', link: '/agent/intro' },
            { text: 'Prompt 工程进阶', link: '/agent/prompts' },
            { text: 'RAG 检索增强实现', link: '/agent/rag' }
          ]
        }
      ],
      '/dev/': [
        {
          text: '博客',
          items: [
            { text: 'vitepress搭建博客', link: '/dev/VitePressBuildBlog' },
          ]
        },
        {
          text: '全栈实战营',
          items: [
            { text: '环境搭建', link: '/dev/setup' },
            { text: '工程化实践', link: '/dev/engineering' }
          ]
        }
      ]
    },

    // 3. 社交链接
    socialLinks: [
      { icon: 'github', link: 'https://github.com/mengkecoding' }
    ],

    // 4. 文档底部页脚
    footer: {
      message: 'Released under the MIT License.',
      copyright: 'Copyright © 2024-present xmengai.com'
    },

    // 5. 搜索功能（VitePress 自带的本地搜索）
    search: {
      provider: 'local'
    },

    outline: {
      label: '本页目录',
      level: [2, 3]
    },

    docFooter: {
      prev: '上一篇',
      next: '下一篇'
    }
  }
})