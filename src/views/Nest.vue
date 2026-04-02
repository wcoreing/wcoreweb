<template>
  <div class="nest-page">
    <router-link :to="{ path: '/', hash: '#products' }" class="back-link">
      ← 返回产品列表
    </router-link>

    <section class="section hero">
      <div class="container text-center">
        <div class="hero-logo-wrap">
          <img src="/images/nest_logo.png" alt="Nest logo" class="hero-logo">
        </div>
        <h1 class="hero-title">Nest</h1>
        <p class="hero-subtitle">让书签真正为你所用</p>
        <div class="hero-tags">
          <span class="badge">AI 驱动</span>
          <span class="badge">隐私优先</span>
          <span class="badge">免费</span>
        </div>
        <a href="/downloads/nest_install.zip" download class="install-btn">
          <span>下载安装包</span>
          <span>→</span>
        </a>
        <p class="hero-install-note">当前仅支持下载到本地安装，暂不支持线上一键安装。</p>
      </div>
    </section>

    <section class="section section-white">
      <div class="container narrow">
        <h2 class="section-title center">你是否有这些困扰？</h2>
        <div class="pain-grid">
          <div v-for="pain in painPoints" :key="pain" class="pain-item">
            <span>😓</span>
            <p>{{ pain }}</p>
          </div>
        </div>
        <p class="pain-footer"><strong>Nest</strong> 就是为解决这些问题而生的。</p>
      </div>
    </section>

    <section class="section section-soft">
      <div class="container">
        <h2 class="section-title center">核心功能</h2>
        <p class="section-subtitle center">四大功能，让书签管理变得轻松</p>
        <div class="highlight-grid">
          <div v-for="h in highlights" :key="h.title" class="highlight-card">
            <div class="highlight-icon">{{ h.icon }}</div>
            <h3>{{ h.title }}</h3>
            <p>{{ h.desc }}</p>
          </div>
        </div>
      </div>
    </section>

    <section class="section section-white">
      <div class="container">
        <h2 class="section-title center">如何使用</h2>
        <div class="usage-list">
          <div v-for="(step, index) in usage" :key="step" class="usage-item">
            <div class="usage-index">{{ index + 1 }}</div>
            <p>{{ step }}</p>
          </div>
        </div>
      </div>
    </section>

    <section class="section section-accent">
      <div class="container narrow text-center">
        <h2 class="section-title section-title-light">适合谁用？</h2>
        <div class="user-grid">
          <div class="user-item">📚 重度书签用户，收藏夹已失控</div>
          <div class="user-item">🔬 研究人员、开发者，需管理大量资料</div>
          <div class="user-item">⚡ 喜欢整理但没时间手动操作</div>
          <div class="user-item">💎 想重新发现收藏的宝藏</div>
        </div>
      </div>
    </section>

    <section class="section section-white">
      <div class="container narrow text-center">
        <div class="privacy-icon">🔒</div>
        <h2 class="section-title">隐私优先</h2>
        <p class="privacy-text">
          Nest 只在浏览器本地运行，<strong>书签数据不上传任何服务器</strong>。
          AI 分析时仅发送标题和 URL 到你配置的 AI 服务，你完全掌控数据。
        </p>
      </div>
    </section>

    <section class="section section-white">
      <div class="container narrow text-center">
        <h2 class="section-title">立即开始</h2>
        <p class="download-subtitle">当前仅支持本地下载安装，暂不支持在线安装。</p>
        <div class="download-actions">
          <a href="/downloads/nest_install.zip" download class="download-btn">
            <span>📦</span>
            下载 Nest 安装包
          </a>
        </div>
        <p class="version-text">版本 1.0.0 | 更新于 2024-04-01</p>
      </div>
    </section>

    <section class="section section-soft">
      <div class="container narrow">
        <h2 class="section-title center">安装说明</h2>
        <p class="section-subtitle center">按以下步骤完成本地安装（适用于 Chrome / Edge 内核浏览器）。</p>
        <div class="install-guide">
          <div v-for="(step, index) in installSteps" :key="step.title" class="install-step">
            <div class="install-step-index">{{ index + 1 }}</div>
            <div class="install-step-body">
              <p class="install-step-title">{{ step.title }}</p>
              <p class="install-step-desc">{{ step.desc }}</p>
            </div>
          </div>
        </div>
        <div class="install-note-list">
          <p>1) 请先解压 zip，再选择解压后的文件夹进行加载。</p>
          <p>2) 首次安装后，建议将 Nest 固定到浏览器工具栏，便于随时使用。</p>
          <p>3) 如果浏览器提示扩展已损坏，请删除后重新加载解压目录。</p>
        </div>
      </div>
    </section>
  </div>
</template>

<script setup>
const painPoints = [
  '书签栏越来越乱，找一个链接要翻半天',
  '收藏了很多东西，但从来不知道自己收藏了什么',
  '想整理，但几百条书签手动分类太费时间',
  '整理完又乱了，下次还得重来'
]

const highlights = [
  { icon: '✨', title: 'AI 智能分组', desc: '分析书签内容，按主题自动归类，创意度可调' },
  { icon: '📂', title: '可视化书签树', desc: '实时展示完整结构，支持搜索、拖拽、编辑' },
  { icon: '🕐', title: '版本历史', desc: '自动保存快照，一键恢复任意版本' },
  { icon: '🔒', title: '隐私优先', desc: '本地运行，数据不上传，完全掌控' }
]

const usage = [
  '安装浏览器扩展（Chrome / Edge）',
  '点击扩展图标打开 Nest',
  '选择要整理的书签目录',
  '点击「AI 分组」开始智能整理',
  '预览并调整分组结果',
  '满意后一键应用到书签'
]

const installSteps = [
  {
    title: '下载本地安装包',
    desc: '点击页面中的“下载安装包”按钮，下载 Nest 的 zip 安装包到本地。'
  },
  {
    title: '解压安装包',
    desc: '在本地创建目录后解压 zip，确保可以看到完整的扩展文件结构。'
  },
  {
    title: '打开扩展管理页',
    desc: 'Chrome 打开 chrome://extensions，Edge 打开 edge://extensions。'
  },
  {
    title: '开启开发者模式',
    desc: '在扩展管理页右上角开启“开发者模式”。'
  },
  {
    title: '加载已解压扩展',
    desc: '点击“加载已解压的扩展程序”，选择刚刚解压后的 Nest 目录。'
  },
  {
    title: '完成安装并开始使用',
    desc: '安装成功后可在浏览器扩展栏看到 Nest，点击图标即可启动。'
  }
]
</script>

<style scoped>
.nest-page {
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
  padding: 74px 0;
}

.section-white {
  background: #ffffff;
}

.section-soft {
  background: #f7f8fb;
}

.hero {
  background: linear-gradient(135deg, #fff8ef 0%, #fff2e6 55%, #ffe3c2 100%);
}

.hero-logo-wrap {
  margin-bottom: 14px;
}

.hero-logo {
  width: clamp(120px, 22vw, 180px);
  height: clamp(120px, 22vw, 180px);
  object-fit: cover;
  border-radius: 28px;
  border: 1px solid rgba(255, 255, 255, 0.75);
  box-shadow: 0 16px 30px rgba(14, 26, 45, 0.16);
}

.hero-title {
  margin: 0;
  font-size: clamp(36px, 6vw, 72px);
}

.hero-subtitle {
  margin: 12px 0 0;
  font-size: clamp(18px, 2.8vw, 32px);
  color: #646a7c;
}

.hero-tags {
  margin: 18px 0 26px;
  display: flex;
  justify-content: center;
  flex-wrap: wrap;
  gap: 10px;
}

.badge {
  border-radius: 999px;
  background: #ffe4d0;
  color: #d85b14;
  font-size: 13px;
  font-weight: 600;
  padding: 6px 14px;
}

.install-btn {
  display: inline-flex;
  align-items: center;
  gap: 8px;
  text-decoration: none;
  border-radius: 12px;
  border: 1px solid #ef6b1b;
  background: #ef6b1b;
  color: #ffffff;
  font-weight: 700;
  padding: 12px 24px;
  box-shadow: 0 12px 24px rgba(239, 107, 27, 0.25);
  transition: background 0.2s ease;
}

.install-btn:hover {
  background: #da5f14;
}

.hero-install-note {
  margin: 12px 0 0;
  color: #6a7083;
  font-size: 13px;
}

.section-title {
  margin: 0;
  font-size: clamp(28px, 4.2vw, 44px);
}

.section-title.center {
  text-align: center;
}

.section-subtitle {
  margin: 10px 0 0;
  color: #646a7c;
}

.pain-grid {
  margin-top: 24px;
  display: grid;
  grid-template-columns: repeat(2, minmax(0, 1fr));
  gap: 12px;
}

.pain-item {
  display: flex;
  align-items: flex-start;
  gap: 10px;
  border-radius: 12px;
  background: #fff0f0;
  color: #5a6073;
  padding: 14px 16px;
}

.pain-item p {
  margin: 0;
}

.pain-footer {
  margin: 22px 0 0;
  text-align: center;
  color: #4e5467;
  font-size: 18px;
}

.pain-footer strong {
  color: #ef6b1b;
}

.highlight-grid {
  margin-top: 28px;
  display: grid;
  grid-template-columns: repeat(2, minmax(0, 1fr));
  gap: 14px;
}

.highlight-card {
  border: 1px solid #ebeef6;
  border-radius: 16px;
  background: #ffffff;
  padding: 22px;
}

.highlight-icon {
  font-size: 34px;
}

.highlight-card h3 {
  margin: 8px 0;
  font-size: 21px;
}

.highlight-card p {
  margin: 0;
  color: #62697e;
  line-height: 1.7;
}

.usage-list {
  margin-top: 22px;
  display: grid;
  gap: 10px;
}

.usage-item {
  display: flex;
  align-items: center;
  gap: 12px;
  border: 1px solid #eceef5;
  border-radius: 12px;
  background: #ffffff;
  padding: 13px 14px;
}

.usage-index {
  width: 30px;
  height: 30px;
  border-radius: 50%;
  background: #ef6b1b;
  color: #ffffff;
  font-size: 14px;
  font-weight: 700;
  display: inline-flex;
  align-items: center;
  justify-content: center;
  flex-shrink: 0;
}

.usage-item p {
  margin: 0;
  color: #4f566b;
}

.section-accent {
  background: linear-gradient(135deg, #ef6b1b 0%, #f69d2f 100%);
}

.section-title-light {
  color: #ffffff;
}

.user-grid {
  margin-top: 24px;
  display: grid;
  grid-template-columns: repeat(2, minmax(0, 1fr));
  gap: 12px;
}

.user-item {
  border-radius: 12px;
  background: rgba(255, 255, 255, 0.2);
  color: #ffffff;
  text-align: left;
  line-height: 1.7;
  padding: 16px;
}

.privacy-icon {
  width: 72px;
  height: 72px;
  margin: 0 auto 14px;
  border-radius: 50%;
  background: #e9f8ef;
  display: inline-flex;
  align-items: center;
  justify-content: center;
  font-size: 33px;
}

.privacy-text {
  margin: 14px auto 0;
  width: min(680px, 100%);
  color: #5f667a;
  line-height: 1.9;
}

.download-subtitle {
  margin: 10px 0 0;
  color: #646a7c;
}

.download-actions {
  margin-top: 20px;
  display: flex;
  justify-content: center;
  flex-wrap: wrap;
  gap: 12px;
}

.download-btn {
  display: inline-flex;
  align-items: center;
  gap: 8px;
  border-radius: 12px;
  text-decoration: none;
  background: #141926;
  color: #ffffff;
  font-size: 14px;
  font-weight: 700;
  padding: 12px 18px;
  transition: background 0.2s ease;
}

.download-btn:hover {
  background: #080c16;
}

.version-text {
  margin: 14px 0 0;
  color: #7e8598;
  font-size: 13px;
}

.install-guide {
  margin-top: 24px;
  display: grid;
  gap: 10px;
}

.install-step {
  display: flex;
  align-items: flex-start;
  gap: 12px;
  border: 1px solid #eceef5;
  border-radius: 12px;
  background: #ffffff;
  padding: 14px;
}

.install-step-index {
  width: 30px;
  height: 30px;
  border-radius: 50%;
  background: #ef6b1b;
  color: #ffffff;
  font-size: 14px;
  font-weight: 700;
  display: inline-flex;
  align-items: center;
  justify-content: center;
  flex-shrink: 0;
}

.install-step-title {
  margin: 0 0 4px;
  color: #1f2433;
  font-weight: 700;
}

.install-step-desc {
  margin: 0;
  color: #5f667a;
  line-height: 1.7;
}

.install-note-list {
  margin-top: 14px;
  border-radius: 12px;
  background: #fff7ef;
  color: #5f667a;
  font-size: 13px;
  line-height: 1.8;
  padding: 12px 14px;
}

.install-note-list p {
  margin: 0;
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

@media (max-width: 920px) {
  .pain-grid,
  .highlight-grid,
  .user-grid {
    grid-template-columns: 1fr;
  }
}

@media (max-width: 640px) {
  .back-link {
    left: 10px;
    top: 82px;
  }
}
</style>
