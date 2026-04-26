<template>
  <article class="card card-aikefu">
    <div class="card-shape" />
    <div class="card-main">
      <div class="card-head">
        <span class="status status-beta">内测中</span>
        <span class="card-icon">🤖</span>
      </div>
      <h3 class="card-title">AI 客服</h3>
      <p class="card-desc">面向企业微信的智能客服后端与工作流能力，支持上下文沉淀与自动化回复。</p>
      <div class="feature-grid">
        <div class="feature-item">企业微信回调</div>
        <div class="feature-item">上下文管理</div>
      </div>
      <router-link to="/aikefu" class="detail-link">
        查看详情
        <span class="detail-arrow">→</span>
      </router-link>
    </div>
  </article>
</template>

<style scoped>
.card {
  position: relative;
  overflow: hidden;
  border-radius: 22px;
  padding: 26px;
  transition: transform 0.22s ease, box-shadow 0.22s ease;
  box-shadow: 0 8px 24px rgba(14, 26, 45, 0.07);
}

.card:hover {
  transform: translateY(-4px);
  box-shadow: 0 20px 34px rgba(14, 26, 45, 0.12);
}

.card-aikefu {
  border: 1px solid #cfe3ff;
  background: linear-gradient(135deg, #f3f8ff 0%, #ffffff 55%, #fff8f0 100%);
}

.card-shape {
  position: absolute;
  top: -52px;
  right: -52px;
  width: 168px;
  height: 168px;
  border-radius: 50%;
  background: rgba(88, 172, 255, 0.22);
}

.card-main {
  position: relative;
  z-index: 1;
}

.card-head {
  margin-bottom: 18px;
  display: flex;
  justify-content: space-between;
  align-items: center;
}

.status {
  display: inline-flex;
  border-radius: 999px;
  padding: 6px 12px;
  font-size: 12px;
  font-weight: 700;
}

.status-beta {
  background: rgba(255, 255, 255, 0.86);
  color: #2d5fb3;
}

.card-icon {
  font-size: 31px;
}

.card-title {
  margin: 0 0 8px;
  color: #161b2a;
  font-size: 30px;
  line-height: 1.2;
}

.card-desc {
  margin: 0;
  color: #596177;
  line-height: 1.7;
}

.feature-grid {
  margin: 18px 0 24px;
  display: grid;
  grid-template-columns: repeat(2, minmax(0, 1fr));
  gap: 8px;
}

.feature-item {
  border: 1px solid #cfe3ff;
  border-radius: 10px;
  background: rgba(255, 255, 255, 0.84);
  color: #4f5f7a;
  font-size: 12px;
  padding: 8px 10px;
}

.detail-link {
  display: inline-flex;
  align-items: center;
  gap: 7px;
  text-decoration: none;
  border-radius: 12px;
  background: #141926;
  color: #ffffff;
  font-size: 14px;
  font-weight: 700;
  padding: 11px 18px;
  transition: background 0.2s ease;
}

.detail-link:hover {
  background: #080c16;
}
</style>
