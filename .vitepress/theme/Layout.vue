<script setup>
import DefaultTheme from 'vitepress/theme'
import { useRoute } from 'vitepress'
import { computed } from 'vue'
import WeChatGate from './components/WeChatGate.vue'

const Layout = DefaultTheme.Layout
const route = useRoute()

const showGate = computed(() => route.path !== '/')
</script>

<template>
  <Layout>
    <!--
      doc-after 位于 VPDoc 的 .content-container 内，
      在 VPDocFooter（上/下篇）之后，
      宽度与文章正文对齐，无需额外设置。
    -->
    <template #doc-after>
      <WeChatGate v-if="showGate" />
    </template>
  </Layout>
</template>
