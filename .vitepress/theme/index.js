// 导入 VitePress 默认主题
import DefaultTheme from 'vitepress/theme'
// 导入你的自定义 CSS
import './custom.css'

export default {
  // 继承默认主题的所有功能
  extends: DefaultTheme,
  
  // 如果你以后想加入全局组件（比如评论插件、背景动画），就在这里配置
  enhanceApp({ app, router, siteData }) {
    // app 是 Vue 实例
  }
}