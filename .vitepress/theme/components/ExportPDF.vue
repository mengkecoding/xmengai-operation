<script setup>
import { ref } from 'vue'

const loading = ref(false)

async function exportPDF() {
  loading.value = true

  const html2pdf = (await import('html2pdf.js')).default

  const doc = document.querySelector('.vp-doc')
  if (!doc) {
    loading.value = false
    return
  }

  const clone = doc.cloneNode(true)

  const title = doc.querySelector('h1')?.textContent?.trim() || 'document'

  const container = document.createElement('div')
  container.style.cssText = `
    padding: 40px;
    font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif;
    line-height: 1.8;
    color: #1a1a2e;
  `
  container.appendChild(clone)

  const images = container.querySelectorAll('img')
  await Promise.all(
    Array.from(images).map((img) => {
      return new Promise((resolve) => {
        if (img.complete) return resolve()
        img.onload = resolve
        img.onerror = resolve
      })
    })
  )

  const opt = {
    margin: [15, 15, 15, 15],
    filename: `${title}.pdf`,
    image: { type: 'jpeg', quality: 0.95 },
    html2canvas: {
      scale: 2,
      useCORS: true,
      logging: false,
    },
    jsPDF: {
      unit: 'mm',
      format: 'a4',
      orientation: 'portrait',
    },
    pagebreak: { mode: ['avoid-all', 'css', 'legacy'] },
  }

  await html2pdf().set(opt).from(container).save()
  loading.value = false
  container.remove()
}
</script>

<template>
  <div class="export-pdf-wrapper">
    <button class="export-pdf-btn" :disabled="loading" @click="exportPDF">
      <span v-if="loading" class="spinner"></span>
      <span>{{ loading ? '生成中...' : '📄 导出 PDF' }}</span>
    </button>
  </div>
</template>

<style scoped>
.export-pdf-wrapper {
  margin-top: 48px;
  display: flex;
  justify-content: center;
}

.export-pdf-btn {
  display: inline-flex;
  align-items: center;
  gap: 8px;
  padding: 10px 28px;
  border: 1px solid var(--vp-c-brand-1);
  border-radius: 12px;
  background: transparent;
  color: var(--vp-c-brand-1);
  font-size: 0.95rem;
  font-weight: 500;
  cursor: pointer;
  transition: all 0.25s ease;
}

.export-pdf-btn:hover:not(:disabled) {
  background: var(--vp-c-brand-1);
  color: #fff;
}

.export-pdf-btn:disabled {
  opacity: 0.6;
  cursor: not-allowed;
}

.spinner {
  width: 16px;
  height: 16px;
  border: 2px solid var(--vp-c-brand-3);
  border-top-color: transparent;
  border-radius: 50%;
  animation: spin 0.6s linear infinite;
}

@keyframes spin {
  to { transform: rotate(360deg); }
}
</style>
