<script setup>
import { ref, onMounted, onUnmounted, watch, nextTick } from 'vue'
import { useRoute } from 'vitepress'

// ==================== 公众号配置 ====================
const WECHAT_ACCOUNT   = '小孟的技术笔记'   // 公众号名称
const QR_CODE_PATH     = '/wechat-qr.png'   // 二维码图片路径
const VERIFICATION_CODE = '123456'           // 验证码（设为数字，搭配公众号自动回复）
const WECHAT_KEYWORD   = '解锁'              // 公众号回复关键词
const STORAGE_KEY      = 'xmengai_wechat_followed'

// 内容裁剪比例（显示前 55% 作为免费预览）
const CLIP_PERCENT = 0.55
const FADE_HEIGHT  = 150
const MIN_CONTENT_HEIGHT = 500

// ==================== 状态 ====================
const isUnlocked = ref(false)
const showGate   = ref(false)
const isClipped  = ref(false)

// 验证码相关
const userCode   = ref('')
const codeError  = ref(false)
const codeSuccess = ref(false)

let contentEl    = null
let resizeTimer  = null
const route      = useRoute()
const originalStyles = {}

// ==================== 裁剪逻辑 ====================

function findContent() {
  return document.querySelector('.vp-doc')
}

function applyClip() {
  const el = findContent()
  if (!el) return false
  contentEl = el

  const totalHeight = el.scrollHeight
  if (totalHeight < MIN_CONTENT_HEIGHT) return false

  originalStyles.maxHeight       = el.style.maxHeight || ''
  originalStyles.overflow        = el.style.overflow || ''
  originalStyles.maskImage       = el.style.maskImage || ''
  originalStyles.WebkitMaskImage = el.style.WebkitMaskImage || ''

  const clipH = Math.max(Math.round(totalHeight * CLIP_PERCENT), 400)
  el.style.maxHeight = clipH + 'px'
  el.style.overflow  = 'hidden'

  const fadePct = Math.max(((clipH - FADE_HEIGHT) / clipH) * 100, 0)
  const g = `linear-gradient(to bottom, black ${fadePct}%, transparent 100%)`
  el.style.maskImage       = g
  el.style.WebkitMaskImage = g

  isClipped.value = true
  showGate.value  = true
  return true
}

function removeClip() {
  if (!contentEl) return
  contentEl.style.maxHeight       = originalStyles.maxHeight
  contentEl.style.overflow        = originalStyles.overflow
  contentEl.style.maskImage       = originalStyles.maskImage
  contentEl.style.WebkitMaskImage = originalStyles.WebkitMaskImage
  isClipped.value = false
  showGate.value  = false
}

function pollClip(maxAttempts = 20) {
  let n = 0
  function poll() {
    const el = findContent()
    if (el && el.scrollHeight > 100) { applyClip(); return }
    if (++n < maxAttempts) requestAnimationFrame(poll)
  }
  poll()
}

function checkPage() {
  removeClip()
  isUnlocked.value = localStorage.getItem(STORAGE_KEY) === 'true'
  if (isUnlocked.value) { showGate.value = false; return }
  codeError.value = false
  userCode.value  = ''
  nextTick(() => pollClip())
}

// ==================== 验证码逻辑 ====================

function verifyCode() {
  // 去除空格
  const code = userCode.value.trim()
  if (!code) {
    codeError.value  = true
    codeSuccess.value = false
    return
  }

  if (code === VERIFICATION_CODE) {
    // 验证通过 → 永久解锁
    localStorage.setItem(STORAGE_KEY, 'true')
    isUnlocked.value  = true
    codeSuccess.value = true
    codeError.value   = false
    userCode.value    = ''
    removeClip()
  } else {
    codeError.value   = true
    codeSuccess.value = false
  }
}

// 回车可直接提交
function onKeydown(e) {
  if (e.key === 'Enter') verifyCode()
}

// ==================== 生命周期 ====================

onMounted(() => {
  checkPage()
  window.addEventListener('resize', onResize)
})

onUnmounted(() => {
  removeClip()
  if (resizeTimer) clearTimeout(resizeTimer)
  window.removeEventListener('resize', onResize)
})

function onResize() {
  if (isUnlocked.value || !isClipped.value) return
  if (resizeTimer) clearTimeout(resizeTimer)
  resizeTimer = setTimeout(() => { removeClip(); nextTick(() => pollClip()) }, 300)
}

watch(() => route.path, () => { removeClip(); nextTick(() => checkPage()) })

function onImgError(e) {
  e.target.style.display = 'none'
  const fb = e.target.parentElement?.querySelector('.qr-fallback')
  if (fb) fb.style.display = 'flex'
}
</script>

<template>
  <div v-if="!isUnlocked && showGate" class="wechat-gate">
    <div class="gate-card">
      <!-- ==================== 分隔标题 ==================== -->
      <div class="gate-header">
        <span class="header-line"></span>
        <span class="header-text">📖 继续阅读需要解锁</span>
        <span class="header-line"></span>
      </div>

      <!-- ==================== 步骤 1：扫码关注 ==================== -->
      <div class="step-section">
        <div class="step-badge">第一步</div>
        <h4 class="step-title">扫码关注公众号</h4>

        <div class="qr-wrapper">
          <img
            :src="QR_CODE_PATH"
            :alt="`${WECHAT_ACCOUNT} 公众号二维码`"
            class="qr-img"
            @error="onImgError"
          />
          <div class="qr-fallback">
            <svg viewBox="0 0 24 24" width="40" height="40" fill="none" stroke="currentColor" stroke-width="1.5">
              <rect x="3" y="3" width="7" height="7" rx="1"/>
              <rect x="14" y="3" width="7" height="7" rx="1"/>
              <rect x="3" y="14" width="7" height="7" rx="1"/>
              <path d="M14 16h2v2M18 16h2v2M14 21h2v-2M18 21h2v-2M16 18v-2M18 18v-2"/>
            </svg>
            <span>请添加公众号二维码图片</span>
          </div>
        </div>
        <p class="step-desc">
          微信扫描上方二维码，关注「<strong>{{ WECHAT_ACCOUNT }}</strong>」
        </p>
      </div>

      <!-- ==================== 分隔 ==================== -->
      <div class="step-divider">
        <span class="divider-dot"></span>
        <span class="divider-dot"></span>
        <span class="divider-dot"></span>
      </div>

      <!-- ==================== 步骤 2：验证码 ==================== -->
      <div class="step-section">
        <div class="step-badge step-badge--active">第二步</div>
        <h4 class="step-title">输入验证码解锁全文</h4>
        <p class="step-desc step-desc--small">
          关注后在公众号聊天框回复「<strong>{{ WECHAT_KEYWORD }}</strong>」
          获取 6 位验证码
        </p>

        <!-- 输入框 -->
        <div class="code-input-row">
          <input
            v-model="userCode"
            type="text"
            inputmode="numeric"
            maxlength="6"
            placeholder="请输入 6 位验证码"
            class="code-input"
            :class="{ 'input-error': codeError }"
            @keydown="onKeydown"
            autocomplete="off"
          />
          <button class="verify-btn" @click="verifyCode">
            🔓 验证
          </button>
        </div>

        <!-- 错误提示 -->
        <p v-if="codeError" class="msg msg--error">
          验证码错误，请检查后重试
        </p>
        <!-- 成功提示 -->
        <p v-if="codeSuccess" class="msg msg--success">
          ✅ 验证成功，正在解锁全文…
        </p>
      </div>

      <!-- ==================== 底部提示 ==================== -->
      <div class="gate-footer">
        <p class="footer-tip">
          💡 验证一次后，再次访问无需重复操作
        </p>
      </div>
    </div>
  </div>
</template>

<style scoped>
/* ===== 容器 — 继承 .content-container 的宽度 ===== */
.wechat-gate {
  margin: 40px 0 56px;
  position: relative;
  z-index: 10;
}

.gate-card {
  background: var(--vp-c-bg);
  border: 1px solid var(--vp-c-divider);
  border-radius: 14px;
  padding: 32px 32px 28px;
  box-shadow: 0 2px 16px rgba(0, 0, 0, 0.05);
}

/* ===== 分隔标题 ===== */
.gate-header {
  display: flex;
  align-items: center;
  gap: 14px;
  margin-bottom: 28px;
}

.header-line {
  flex: 1;
  height: 1px;
  background: var(--vp-c-divider);
}

.header-text {
  font-size: 14px;
  font-weight: 600;
  color: var(--vp-c-text-2);
  white-space: nowrap;
  letter-spacing: 1px;
}

/* ===== 步骤区域 ===== */
.step-section {
  text-align: center;
}

.step-badge {
  display: inline-block;
  font-size: 11px;
  font-weight: 700;
  color: var(--vp-c-text-3);
  background: var(--vp-c-bg-soft);
  border: 1px solid var(--vp-c-divider);
  border-radius: 20px;
  padding: 2px 14px;
  letter-spacing: 1px;
  margin-bottom: 12px;
}

.step-badge--active {
  color: #fff;
  background: #07c160;
  border-color: #07c160;
}

.step-title {
  font-size: 17px;
  font-weight: 700;
  color: var(--vp-c-text-1);
  margin: 0 0 16px;
}

.step-desc {
  font-size: 14px;
  color: var(--vp-c-text-2);
  line-height: 1.6;
  margin: 0;
}

.step-desc strong {
  color: var(--vp-c-brand-1);
  font-weight: 700;
}

.step-desc--small {
  font-size: 13px;
  margin-bottom: 16px;
}

/* ===== QR 码 ===== */
.qr-wrapper {
  width: 130px;
  height: 130px;
  margin: 0 auto 14px;
  position: relative;
}

.qr-img {
  width: 130px;
  height: 130px;
  border-radius: 8px;
  border: 2px solid var(--vp-c-divider);
  display: block;
}

.qr-fallback {
  display: none;
  width: 130px;
  height: 130px;
  border-radius: 8px;
  border: 2px dashed var(--vp-c-divider);
  background: var(--vp-c-bg-soft);
  flex-direction: column;
  align-items: center;
  justify-content: center;
  gap: 6px;
  color: var(--vp-c-text-3);
  font-size: 11px;
  position: absolute;
  inset: 0;
}

/* ===== 步骤分隔点 ===== */
.step-divider {
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 8px;
  margin: 24px 0;
}

.divider-dot {
  width: 5px;
  height: 5px;
  border-radius: 50%;
  background: var(--vp-c-divider);
}

/* ===== 验证码输入行 ===== */
.code-input-row {
  display: flex;
  gap: 10px;
  justify-content: center;
  align-items: center;
  max-width: 360px;
  margin: 0 auto;
}

.code-input {
  flex: 1;
  padding: 11px 14px;
  font-size: 16px;
  font-weight: 600;
  letter-spacing: 4px;
  text-align: center;
  border: 1.5px solid var(--vp-c-divider);
  border-radius: 8px;
  background: var(--vp-c-bg-soft);
  color: var(--vp-c-text-1);
  outline: none;
  transition: border-color 0.2s;
}

.code-input::placeholder {
  font-weight: 400;
  letter-spacing: 0;
  font-size: 13px;
  color: var(--vp-c-text-3);
}

.code-input:focus {
  border-color: var(--vp-c-brand-1);
}

.code-input.input-error {
  border-color: #e53e3e;
  animation: shake 0.35s ease;
}

@keyframes shake {
  0%, 100% { transform: translateX(0); }
  25%      { transform: translateX(-5px); }
  75%      { transform: translateX(5px); }
}

/* ===== 验证按钮 ===== */
.verify-btn {
  padding: 11px 22px;
  background: #07c160;
  color: #fff;
  border: none;
  border-radius: 8px;
  font-size: 14px;
  font-weight: 600;
  cursor: pointer;
  white-space: nowrap;
  transition: all 0.2s ease;
}

.verify-btn:hover {
  background: #06ad56;
  transform: translateY(-1px);
  box-shadow: 0 3px 12px rgba(7, 193, 96, 0.3);
}

.verify-btn:active {
  transform: translateY(0);
}

/* ===== 消息提示 ===== */
.msg {
  font-size: 13px;
  margin: 10px 0 0;
  text-align: center;
}

.msg--error {
  color: #e53e3e;
}

.msg--success {
  color: #07c160;
}

/* ===== 底部 ===== */
.gate-footer {
  margin-top: 24px;
  padding-top: 16px;
  border-top: 1px solid var(--vp-c-divider);
}

.footer-tip {
  font-size: 12px;
  color: var(--vp-c-text-3);
  margin: 0;
  text-align: center;
}

/* ===== 暗色主题 ===== */
:root.dark .gate-card {
  box-shadow: 0 2px 16px rgba(0, 0, 0, 0.2);
}

:root.dark .step-badge--active {
  background: #07c160;
  border-color: #07c160;
}

/* ===== 移动端 ===== */
@media (max-width: 640px) {
  .gate-card {
    padding: 24px 20px 24px;
    border-radius: 12px;
  }

  .qr-wrapper,
  .qr-img,
  .qr-fallback {
    width: 110px;
    height: 110px;
  }

  .code-input-row {
    flex-direction: column;
  }

  .code-input {
    width: 100%;
  }

  .verify-btn {
    width: 100%;
  }
}
</style>
