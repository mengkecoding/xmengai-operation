import { defineConfig } from 'vitepress'

// 检查是否是在 GitHub Actions 环境中构建
// 如果是部署到 GitHub Pages，我们设置 base 路径
// 如果是本地开发或部署到自己的云服务器，base 为 '/'
const base = process.env.GITHUB_PAGES === 'true' 
  ? '/xmeng-ai-blog/' 
  : '/'

// https://vitepress.dev/reference/site-config
export default defineConfig({
  title: "xmeng-ai-blog",
  description: "A VitePress Site",
  themeConfig: {
    // https://vitepress.dev/reference/default-theme-config
    nav: [
      { text: 'Home', link: '/' },
      { text: 'Examples', link: '/markdown-examples' }
    ],

    sidebar: [
      {
        text: 'Examples',
        items: [
          { text: 'Markdown Examples', link: '/markdown-examples' },
          { text: 'Runtime API Examples', link: '/api-examples' }
        ]
      }
    ],

    socialLinks: [
      { icon: 'github', link: 'https://github.com/vuejs/vitepress' }
    ]
  }
})
