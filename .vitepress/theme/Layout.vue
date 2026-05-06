<script setup>
import DefaultTheme from 'vitepress/theme'
import { useRoute } from 'vitepress'
import { computed } from 'vue'
import WeChatGate from './components/WeChatGate.vue'
import ExportPDF from './components/ExportPDF.vue'

const Layout = DefaultTheme.Layout
const route = useRoute()

const showGate = computed(() => route.path !== '/')
</script>

<template>
  <Layout>
    <template #doc-after>
      <WeChatGate v-if="showGate" />
    </template>
  </Layout>
</template>
