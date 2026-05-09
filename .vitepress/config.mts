import { defineConfig } from 'vitepress'

export default defineConfig({
  title: "xmengai.com",
  description: "AI 工具链 · Agent 实战 · 全栈开发 · 求职八股",
  // 保持根目录部署
  base: '/',
  
  // 开启最后更新时间显示
  lastUpdated: true,

  themeConfig: {
    // 1. 顶部导航栏：定义全局大分类
    nav: [
      { text: '首页', link: '/' },
      {
        text: '📖 技术博客',
        items: [
          { text: '🛠️ AI 工具链', link: '/dev/ClaudeCodeDeepSeek' },
          { text: '🧠 Agent 实战', link: '/agent/AgentGuide' },
          { text: '🏗️ 全栈开发', link: '/dev/VitePressBlog' },
        ]
      },
      { text: '🎓 求职八股', link: '/interview/ai_agent/' }
    ],

    // 2. 侧边栏：针对不同板块显示不同的详细目录
    sidebar: {
      '/agent/': [
        {
          text: '🛠️ AI 工具链',
          collapsed: false,
          items: [
            { text: 'Claude Code 接入 DeepSeek', link: '/dev/ClaudeCodeDeepSeek' },
            { text: 'Codex 接入 DeepSeek', link: '/dev/CodexDeepSeek' },
            { text: 'Claude Code 命令手册', link: '/dev/claude-code-commands-reference' },
            { text: 'Hermes + 微信 AI 接入', link: '/dev/hermes-wechat-setup-guide' },
            { text: 'Coze 实战：公众号助手', link: '/agent/CozeChatBot' },
            { text: 'Dify 本地部署', link: '/agent/InstallDify' },
            { text: 'Dify 文献助手', link: '/agent/DifyReadPaper' },
          ]
        },
        {
          text: '🧠 Agent 实战',
          collapsed: false,
          items: [
            { text: '大模型开发入门', link: '/agent/AgentGuide' },
            { text: '提示工程入门', link: '/agent/PromptGuide' },
          ]
        },
        {
          text: '🏗️ 全栈开发',
          collapsed: false,
          items: [
            { text: 'VitePress 搭建博客', link: '/dev/VitePressBlog' },
            { text: 'VitePress 博客进阶', link: '/dev/VitePressBlogAuto' },
            { text: 'Spring Boot 云部署', link: '/dev/HelloWorld' },
            { text: '博客-黑暗森林模拟器', link: '/dev/博客-黑暗森林模拟器' },
            { text: 'Docker 入门', link: '/dev/Docker' },
          ]
        },
      ],
      '/dev/': [
        {
          text: '🛠️ AI 工具链',
          collapsed: false,
          items: [
            { text: 'Claude Code 接入 DeepSeek', link: '/dev/ClaudeCodeDeepSeek' },
            { text: 'Codex 接入 DeepSeek', link: '/dev/CodexDeepSeek' },
            { text: 'Claude Code 命令手册', link: '/dev/claude-code-commands-reference' },
            { text: 'Hermes + 微信 AI 接入', link: '/dev/hermes-wechat-setup-guide' },
            { text: 'Coze 实战：公众号助手', link: '/agent/CozeChatBot' },
            { text: 'Dify 本地部署', link: '/agent/InstallDify' },
            { text: 'Dify 文献助手', link: '/agent/DifyReadPaper' },
          ]
        },
        {
          text: '🧠 Agent 实战',
          collapsed: false,
          items: [
            { text: '大模型开发入门', link: '/agent/AgentGuide' },
            { text: '提示工程入门', link: '/agent/PromptGuide' },
          ]
        },
        {
          text: '🏗️ 全栈开发',
          collapsed: false,
          items: [
            { text: 'VitePress 搭建博客', link: '/dev/VitePressBlog' },
            { text: 'VitePress 博客进阶', link: '/dev/VitePressBlogAuto' },
            { text: 'Spring Boot 云部署', link: '/dev/HelloWorld' },
            { text: '博客-黑暗森林模拟器', link: '/dev/博客-黑暗森林模拟器' },
            { text: 'Docker 入门', link: '/dev/Docker' },
          ]
        },
      ],
      '/interview/': [
        {
          text: 'AI Agent 八股',
          collapsed: false,
          items: [
            { text: '📖 导读', link: '/interview/ai_agent/' },
            { text: 'Agent 基础原理', link: '/interview/ai_agent/Agent_Basics' },
            { text: 'Agent 训练微调', link: '/interview/ai_agent/Agent_Training' },
            { text: 'Agent 规划', link: '/interview/ai_agent/Agent_Planning' },
            { text: '工具调用', link: '/interview/ai_agent/Agent_Tools' },
            { text: '记忆与 RAG', link: '/interview/ai_agent/Agent_Memory_RAG' },
            { text: '评估与安全', link: '/interview/ai_agent/Agent_Eval_Safety' },
            { text: '应用实战', link: '/interview/ai_agent/Agent_Application' },
            { text: '多智能体', link: '/interview/ai_agent/Multi_Agent' },
            { text: '多模态大模型', link: '/interview/ai_agent/Multimodal_VLM' },
            { text: '全栈与系统设计', link: '/interview/ai_agent/Fullstack_System' },
            { text: '基础算法与数学', link: '/interview/ai_agent/Basic_Algorithms_Math' },
          ]
        },
        {
          text: '后端',
          collapsed: true,
          items: [
            { text: '📖 导读', link: '/interview/backend/' },
            { text: '算法与数据结构', link: '/interview/backend/Algorithm_DataStructure' },
            { text: '并发编程', link: '/interview/backend/Concurrency' },
            { text: '容器与云原生', link: '/interview/backend/Container_Cloud' },
            { text: '数据库 MySQL', link: '/interview/backend/Database_MySQL' },
            { text: '设计模式', link: '/interview/backend/DesignPattern' },
            { text: 'Spring 框架', link: '/interview/backend/Framework_Spring' },
            { text: 'JVM 与 GC', link: '/interview/backend/JVM_GC' },
            { text: 'Go 语言', link: '/interview/backend/Language_Go' },
            { text: 'Java 语言', link: '/interview/backend/Language_Java' },
            { text: 'Python 语言', link: '/interview/backend/Language_Python' },
            { text: '消息队列', link: '/interview/backend/MessageQueue' },
            { text: '微服务与分布式', link: '/interview/backend/Microservices_Distributed' },
            { text: '网络与 IO', link: '/interview/backend/Network_IO' },
            { text: 'NoSQL Redis', link: '/interview/backend/NoSQL_Redis' },
            { text: '系统设计', link: '/interview/backend/SystemDesign' },
          ]
        },
        {
          text: '前端',
          collapsed: true,
          items: [
            { text: '📖 导读', link: '/interview/frontend/' },
            { text: 'JavaScript 核心', link: '/interview/frontend/JS_Core' },
            { text: 'HTML & CSS 基础', link: '/interview/frontend/HTML_CSS_Basics' },
            { text: 'DOM & BOM', link: '/interview/frontend/DOM_BOM' },
            { text: '网络与 HTTP', link: '/interview/frontend/Network_HTTP' },
            { text: '浏览器渲染', link: '/interview/frontend/Browser_Rendering' },
            { text: '性能优化', link: '/interview/frontend/Performance_Optimization' },
            { text: '前端工程化', link: '/interview/frontend/Frontend_Engineering' },
            { text: 'React 生态', link: '/interview/frontend/React_Ecosystem' },
            { text: 'Vue 生态', link: '/interview/frontend/Vue_Ecosystem' },
            { text: '设计模式与架构', link: '/interview/frontend/DesignPattern_Architecture' },
            { text: '算法与数据结构', link: '/interview/frontend/Algorithm_DataStructure' },
            { text: '新兴技术与其它', link: '/interview/frontend/Emerging_Others' },
          ]
        },
        {
          text: '测试/测开',
          collapsed: true,
          items: [
            { text: '📖 导读', link: '/interview/testing/' },
            { text: '测试基础', link: '/interview/testing/Testing_Fundamentals' },
            { text: '测试类型与层级', link: '/interview/testing/Test_Types_Levels' },
            { text: '测试设计方法', link: '/interview/testing/Test_Design_Techniques' },
            { text: '自动化测试', link: '/interview/testing/Automation_Testing' },
            { text: 'API 与协议测试', link: '/interview/testing/API_Protocol_Testing' },
            { text: '性能测试', link: '/interview/testing/Performance_Testing' },
            { text: '专项测试', link: '/interview/testing/Specialized_Testing' },
            { text: '测试管理', link: '/interview/testing/Test_Management' },
            { text: '编程/数据库/工具', link: '/interview/testing/Coding_DB_Tools' },
            { text: '面试场景题', link: '/interview/testing/Case_Interview' },
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
      message: '<a href="https://beian.miit.gov.cn/" target="_blank">辽ICP备2025056581号-2</a>',
      copyright: 'Copyright © 2026-present xmengai.com'
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