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
          { text: '认知基础', link: '/agent/AgentGuide' },
          { text: '实战进阶', link: '/agent/CozeChatBot' },
        ]
      },
      { 
        text: '💻 全栈之路', 
        items: [
          { text: '博客搭建', link: '/dev/VitePressBlog' },
          { text: 'AI 开发提效', link: '/dev/ClaudeCodeDeepSeek' },
          { text: '运维部署', link: '/dev/Docker' },
        ]
      },
      { text: '🎓 求职八股', link: '/interview/努力加更中' }
    ],

    // 2. 侧边栏：针对不同板块显示不同的详细目录
    sidebar: {
      '/agent/': [
        {
          text: '认知基础',
          collapsed: false,
          items: [
            { text: '🔑 大模型开发入门', link: '/agent/AgentGuide' },
            { text: '🪄 提示工程入门', link: '/agent/PromptGuide' },
          ]
        },
        {
          text: '实战进阶',
          collapsed: false,
          items: [
            { text: '🎙️ Coze 实战：公众号助手', link: '/agent/CozeChatBot' },
            { text: '🏰 Dify 本地部署教程', link: '/agent/InstallDify' },
            { text: '⏳ Dify 实战：文献助手', link: '/agent/DifyReadPaper' },
          ]
        },
      ],
      '/dev/': [
        {
          text: '博客搭建',
          collapsed: false,
          items: [
            { text: '🗼 VitePress搭建博客', link: '/dev/VitePressBlog' },
            { text: '🕊️ VitePress搭建博客进阶版', link: '/dev/VitePressBlogAuto' },
            { text: '☁️ 部署HelloWorld到云服务器', link: '/dev/HelloWorld' },
            

          ]
        },
        {
          text: '⚡ AI 开发提效',
          collapsed: false,
          items: [
            { text: 'Claude接入 DeepSeekV4', link: '/dev/ClaudeCodeDeepSeek' },
            { text: 'Codex接入DeepSeekV4', link: '/dev/CodexDeepSeek' },
          ]
        },
        {
          text: '运维部署',
          collapsed: false,
          items: [
            { text: 'Docker入门', link: '/dev/Docker' },
          ]
        },
        // {
        //   text: '前端前沿',
        //   collapsed: false,
        //   items: [
            
        //   ]
        // },
        // {
        //   text: '后端架构',
        //   collapsed: false,
        //   items: [
            
        //   ]
        // },
        
        
      ],
      '/interview/': [
        {
          text: 'agent',
          collapsed: false,
          items: [
            { text: '努力加更正中~', link: '/interview/努力加更中' },

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