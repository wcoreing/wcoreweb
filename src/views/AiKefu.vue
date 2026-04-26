<template>
  <div class="aikefu-page">
    <router-link :to="{ path: '/', hash: '#products' }" class="back-link">
      ← 返回产品列表
    </router-link>

    <section class="section hero">
      <div class="container hero-inner">
        <div class="hero-top">
          <div class="hero-icon">🤖</div>
          <div class="hero-title-wrap">
            <h1 class="hero-title">AI 客服</h1>
            <p class="hero-subtitle">面向企业微信的智能客服与自动化回复</p>
          </div>
        </div>

        <p class="hero-desc">
          这是我们正在迭代中的客服产品，用于连接企业微信会话、沉淀上下文，并通过大模型提供更稳定的自动回复与工作流能力。
        </p>

        <div class="hero-actions">
          <a class="btn btn-primary" href="#features">
            查看能力
            <span class="btn-arrow">↓</span>
          </a>
          <a class="btn btn-secondary" href="#integration">
            接入方式
            <span class="btn-arrow">→</span>
          </a>
        </div>

        <p class="hero-note">
          目前处于内测阶段：页面用于说明能力与接入方式，具体开通请联系我。
        </p>
      </div>
    </section>

    <section id="features" class="section section-white">
      <div class="container">
        <h2 class="section-title center">核心能力</h2>
        <p class="section-subtitle center">围绕“接入、理解、回复、追踪”四个环节设计。</p>
        <div class="feature-grid">
          <div v-for="f in features" :key="f.title" class="feature-card">
            <div class="feature-icon">{{ f.icon }}</div>
            <h3>{{ f.title }}</h3>
            <p>{{ f.desc }}</p>
          </div>
        </div>
      </div>
    </section>

    <section id="integration" class="section section-soft">
      <div class="container">
        <h2 class="section-title center">接入方式</h2>
        <p class="section-subtitle center">后端服务来自 `aikefu/server`，以企业微信回调为入口。</p>
        <div class="integration-card">
          <div class="integration-row">
            <span class="pill">Git 仓库</span>
            <a class="mono link" href="https://github.com/wcoreing/aikefu" target="_blank" rel="noreferrer">
              github.com/wcoreing/aikefu
            </a>
          </div>
          <div class="integration-row">
            <span class="pill">健康检查</span>
            <code class="mono">GET /healthz</code>
          </div>
          <div class="integration-row">
            <span class="pill">企业微信回调</span>
            <code class="mono">/wecom/*</code>
          </div>
          <div class="integration-row">
            <span class="pill">内部工作流</span>
            <code class="mono">internal routes（需 token 开启）</code>
          </div>
          <p class="integration-note">
            说明：具体回调地址、Token、EncodingAESKey 等配置以部署环境为准；你可以先把它当作“可私有化部署的 AI 客服后端”。
          </p>
        </div>
      </div>
    </section>

    <section class="section section-white">
      <div class="container narrow text-center">
        <h2 class="section-title">适用场景</h2>
        <p class="section-subtitle">把“重复回答 + 信息检索 + 流程触发”交给 AI。</p>
        <div class="scene-grid">
          <div class="scene-item">🧾 常见问题自动回复（FAQ）</div>
          <div class="scene-item">📚 结合知识库的检索式问答</div>
          <div class="scene-item">🧠 按会话上下文持续跟进</div>
          <div class="scene-item">🧩 触发内部流程（群发/工单/通知）</div>
        </div>
      </div>
    </section>

    <section class="section section-soft">
      <div class="container">
        <h2 class="section-title center">演示截图</h2>
        <p class="section-subtitle center">左右切换，图片会按比例完整显示（不裁切）。</p>

        <div class="slider">
          <div class="stage-wrap">
            <a
              class="slider-stage"
              :href="demoImages[currentDemoIndex].src"
              target="_blank"
              rel="noreferrer"
              :aria-label="`打开原图：${demoImages[currentDemoIndex].alt}`"
            >
              <img
                class="slider-img"
                :src="demoImages[currentDemoIndex].src"
                :alt="demoImages[currentDemoIndex].alt"
                loading="lazy"
              />
            </a>

            <button class="nav-btn nav-btn-left" type="button" @click="prevDemo" aria-label="上一张">
              ‹
            </button>
            <button class="nav-btn nav-btn-right" type="button" @click="nextDemo" aria-label="下一张">
              ›
            </button>
          </div>

          <div class="thumbs" role="tablist" aria-label="演示截图缩略图">
            <button
              v-for="(img, idx) in demoImages"
              :key="img.src"
              type="button"
              class="thumb"
              :class="{ active: idx === currentDemoIndex }"
              @click="currentDemoIndex = idx"
              :aria-label="`切换到：${img.alt}`"
            >
              <img class="thumb-img" :src="img.src" :alt="img.alt" loading="lazy" />
            </button>
          </div>
        </div>
      </div>
    </section>
  </div>
</template>

<script setup>
import { ref } from 'vue'

const features = [
  { icon: '🔌', title: '企业微信接入', desc: '以回调为入口，接收消息与事件，统一解析与验签。' },
  { icon: '🧠', title: '上下文沉淀', desc: '按会话组织上下文，支持检索、截断与策略化拼接。' },
  { icon: '💬', title: '智能回复', desc: '结合指令与知识，生成更稳定的可控回复（可加审核）。' },
  { icon: '🧩', title: '工作流扩展', desc: '把客服动作连接到内部流程：通知、群发、自动处理。' }
]

const demoImages = [
  { src: '/images/aikefudemopics/微信图片_20260426102845_5_156.jpg', alt: 'AI 客服演示图 1' },
  { src: '/images/aikefudemopics/微信图片_20260426102847_6_156.jpg', alt: 'AI 客服演示图 2' },
  { src: '/images/aikefudemopics/微信图片_20260426102848_7_156.jpg', alt: 'AI 客服演示图 3' },
  { src: '/images/aikefudemopics/微信图片_20260426102848_8_156.jpg', alt: 'AI 客服演示图 4' },
  { src: '/images/aikefudemopics/微信图片_20260426102849_9_156.jpg', alt: 'AI 客服演示图 5' },
  { src: '/images/aikefudemopics/微信图片_20260426102851_10_156.jpg', alt: 'AI 客服演示图 6' },
  { src: '/images/aikefudemopics/微信图片_20260426102851_11_156.jpg', alt: 'AI 客服演示图 7' },
  { src: '/images/aikefudemopics/微信图片_20260426103057_12_156.jpg', alt: 'AI 客服演示图 8' }
]

const currentDemoIndex = ref(0)

function prevDemo() {
  currentDemoIndex.value = (currentDemoIndex.value - 1 + demoImages.length) % demoImages.length
}

function nextDemo() {
  currentDemoIndex.value = (currentDemoIndex.value + 1) % demoImages.length
}
</script>

<style scoped>
.aikefu-page {
  color: #1f2433;
}

.container {
  width: min(1120px, 92vw);
  margin: 0 auto;
}

.narrow {
  width: min(860px, 100%);
}

.text-center {
  text-align: center;
}

.section {
  padding: 86px 0;
}

.section-white {
  background: #ffffff;
}

.section-soft {
  background: #f7f8fb;
}

.hero {
  background: radial-gradient(800px 320px at 10% 10%, rgba(239, 107, 27, 0.16), transparent 60%),
    radial-gradient(760px 320px at 90% 20%, rgba(88, 172, 255, 0.18), transparent 55%),
    linear-gradient(135deg, #f8fafc 0%, #ffffff 45%, #fff2e8 100%);
}

.hero-inner {
  text-align: left;
}

.hero-top {
  display: flex;
  gap: 18px;
  align-items: center;
}

.hero-icon {
  width: 64px;
  height: 64px;
  border-radius: 18px;
  background: #141926;
  color: #ffffff;
  display: inline-flex;
  align-items: center;
  justify-content: center;
  font-size: 30px;
  box-shadow: 0 16px 28px rgba(14, 26, 45, 0.16);
}

.hero-title {
  margin: 0;
  font-size: clamp(34px, 5.4vw, 56px);
  line-height: 1.1;
}

.hero-subtitle {
  margin: 10px 0 0;
  color: #646a7c;
  font-size: clamp(16px, 2.2vw, 22px);
}

.hero-desc {
  width: min(820px, 100%);
  margin: 22px 0 26px;
  color: #596177;
  line-height: 1.8;
  font-size: 16px;
}

.hero-actions {
  display: flex;
  flex-wrap: wrap;
  gap: 12px;
}

.btn {
  display: inline-flex;
  align-items: center;
  justify-content: center;
  gap: 8px;
  border-radius: 12px;
  padding: 12px 22px;
  text-decoration: none;
  font-weight: 700;
  transition: all 0.2s ease;
}

.btn-primary {
  border: 1px solid #f06d22;
  background: #f06d22;
  color: #ffffff;
}

.btn-primary:hover {
  background: #de6219;
  border-color: #de6219;
}

.btn-secondary {
  border: 1px solid #d7dbe6;
  background: #ffffff;
  color: #2c3245;
}

.btn-secondary:hover {
  background: #f2f4f8;
}

.btn-arrow {
  font-size: 16px;
}

.hero-note {
  margin: 14px 0 0;
  color: #7b8296;
  font-size: 13px;
}

.section-title {
  margin: 0;
  font-size: clamp(28px, 4.2vw, 40px);
}

.section-title.center {
  text-align: center;
}

.section-subtitle {
  margin: 10px 0 0;
  color: #71778a;
}

.section-subtitle.center {
  text-align: center;
}

.feature-grid {
  margin-top: 26px;
  display: grid;
  grid-template-columns: repeat(4, minmax(0, 1fr));
  gap: 14px;
}

.feature-card {
  border: 1px solid #eceef5;
  border-radius: 16px;
  background: #ffffff;
  padding: 18px;
}

.feature-icon {
  font-size: 28px;
}

.feature-card h3 {
  margin: 10px 0 6px;
  font-size: 18px;
}

.feature-card p {
  margin: 0;
  color: #5f667a;
  line-height: 1.7;
  font-size: 14px;
}

.integration-card {
  margin-top: 22px;
  border: 1px solid #eceef5;
  border-radius: 16px;
  background: #ffffff;
  padding: 18px;
}

.integration-row {
  display: flex;
  align-items: center;
  gap: 10px;
  padding: 10px 0;
  border-bottom: 1px dashed #eceef5;
}

.integration-row:last-of-type {
  border-bottom: 0;
}

.pill {
  display: inline-flex;
  border-radius: 999px;
  padding: 6px 10px;
  background: #f1f3f8;
  color: #5f667a;
  font-size: 12px;
  font-weight: 700;
  flex-shrink: 0;
}

.mono {
  font-family: ui-monospace, SFMono-Regular, Menlo, Monaco, Consolas, 'Liberation Mono', 'Courier New', monospace;
  font-size: 13px;
  color: #2c3245;
}

.link {
  text-decoration: none;
  border-bottom: 1px dashed rgba(44, 50, 69, 0.35);
  transition: border-color 0.15s ease, color 0.15s ease;
}

.link:hover {
  color: #de6219;
  border-bottom-color: rgba(222, 98, 25, 0.55);
}

.integration-note {
  margin: 12px 0 0;
  color: #6b7286;
  font-size: 13px;
  line-height: 1.8;
}

.scene-grid {
  margin-top: 22px;
  display: grid;
  grid-template-columns: repeat(2, minmax(0, 1fr));
  gap: 12px;
}

.scene-item {
  border-radius: 12px;
  border: 1px solid #eceef5;
  background: #ffffff;
  padding: 14px;
  color: #4f566b;
  line-height: 1.7;
}

.slider {
  margin-top: 22px;
}

.stage-wrap {
  position: relative;
}

.slider-stage {
  position: relative;
  display: block;
  border-radius: 16px;
  overflow: hidden;
  border: 1px solid #eceef5;
  background: #ffffff;
  box-shadow: 0 14px 26px rgba(14, 26, 45, 0.1);
}

.slider-img {
  width: 100%;
  height: min(72vh, 720px);
  object-fit: contain; /* 关键：完整显示不裁切 */
  background: #f6f7fb;
  display: block;
}

.nav-btn {
  position: absolute;
  top: calc(50% - 22px);
  z-index: 2;
  width: 44px;
  height: 44px;
  border-radius: 999px;
  border: 1px solid rgba(255, 255, 255, 0.75);
  background: rgba(20, 25, 38, 0.78);
  color: #ffffff;
  font-size: 26px;
  line-height: 1;
  cursor: pointer;
  display: inline-flex;
  align-items: center;
  justify-content: center;
  transition: transform 0.15s ease, background 0.15s ease;
}

.nav-btn:hover {
  transform: scale(1.04);
  background: rgba(8, 12, 22, 0.88);
}

.nav-btn-left {
  left: 12px;
}

.nav-btn-right {
  right: 12px;
}

.thumbs {
  margin-top: 12px;
  display: grid;
  grid-template-columns: repeat(8, minmax(0, 1fr));
  gap: 10px;
}

.thumb {
  border: 1px solid #eceef5;
  background: #ffffff;
  border-radius: 12px;
  padding: 0;
  overflow: hidden;
  cursor: pointer;
  transition: transform 0.15s ease, box-shadow 0.15s ease, border-color 0.15s ease;
}

.thumb:hover {
  transform: translateY(-2px);
  box-shadow: 0 10px 18px rgba(14, 26, 45, 0.1);
}

.thumb.active {
  border-color: #f06d22;
  box-shadow: 0 10px 18px rgba(240, 109, 34, 0.18);
}

.thumb-img {
  width: 100%;
  height: 66px;
  object-fit: cover;
  display: block;
}

.back-link {
  position: fixed;
  top: 86px;
  left: 26px;
  z-index: 40;
  text-decoration: none;
  border-radius: 10px;
  background: rgba(255, 255, 255, 0.94);
  color: #545b71;
  border: 1px solid #eceef5;
  box-shadow: 0 10px 20px rgba(15, 25, 40, 0.08);
  padding: 8px 12px;
}

@media (max-width: 980px) {
  .feature-grid {
    grid-template-columns: repeat(2, minmax(0, 1fr));
  }

  .thumbs {
    grid-template-columns: repeat(4, minmax(0, 1fr));
  }
}

@media (max-width: 720px) {
  .hero-inner {
    text-align: center;
  }

  .hero-top {
    justify-content: center;
  }

  .hero-desc {
    margin-left: auto;
    margin-right: auto;
  }

  .hero-actions {
    justify-content: center;
  }

  .scene-grid {
    grid-template-columns: 1fr;
  }

  .thumbs {
    grid-template-columns: repeat(3, minmax(0, 1fr));
  }

  .slider-img {
    height: min(64vh, 640px);
  }
}

@media (max-width: 640px) {
  .back-link {
    left: 10px;
    top: 82px;
  }
}
</style>
