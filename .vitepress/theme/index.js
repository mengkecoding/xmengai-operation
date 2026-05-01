import DefaultTheme from 'vitepress/theme'
import Layout from './Layout.vue'
import './custom.css'

export default {
  extends: DefaultTheme,
  Layout,

  enhanceApp({ app, router, siteData }) {
    // 后续可在这里注册全局组件或插件
  }
}
