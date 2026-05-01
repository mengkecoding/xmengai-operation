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
          { text: '入门指南', link: '/agent/AgentGuide' },
          //{ text: 'Agent 实战', link: '/agent/CozeChatBot' },
        ]
      },
      { 
        text: '💻 全栈之路', 
        items: [
          { text: '博客搭建', link: '/dev/VitePressBlog' },
          //{ text: '后端架构 (Java/Python)', link: '/dev/backend' },
          //{ text: '前端前沿 (Vue/React)', link: '/dev/frontend' },
          //{ text: '运维与部署 (Docker)', link: '/dev/ops' }
        ]
      },
      { text: '🎓 求职八股', link: '/interview/agentbasic' }
    ],

    // 2. 侧边栏：针对不同板块显示不同的详细目录
    sidebar: {
      '/agent/': [
        {
          text: '入门指南',
          collapsed: false,
          items: [
            // { text: '什么是 Agent？', link: '/agent/intro' },
            { text: '🔑 大模型开发：万能钥匙', link: '/agent/AgentGuide' },
            { text: '🪄 提示工程：听懂心声', link: '/agent/PromptGuide' },
            { text: '🎙️ Coze 实战：赋予灵魂', link: '/agent/CozeChatBot' },
            { text: '🏰 Dify 部署：本地工坊', link: '/agent/InstallDify' },
            { text: '⏳ Dify 实战：文献助手', link: '/agent/DifyReadPaper' },
            
            
          ]
        },
        
      ],
      '/dev/': [
        {
          text: '博客搭建',
          items: [
            { text: '🗼 VitePress：搭建灯塔', link: '/dev/VitePressBlog' },
            { text: '🕊️ 个人博客：自动部署', link: '/dev/VitePressBlogAuto' },
            { text: 'Claude Code：DeepSeek 模型', link: '/dev/ClaudeCodeDeepSeek' },

          ]
        },
        
        
      ],
      '/interview/': [
        {
          text: 'agent',
          collapsed: false,
          items: [
            { text: 'agentbasic', link: '/interview/agentbasic' },
          ]
        },
        
      ],
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