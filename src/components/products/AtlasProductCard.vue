<template>
  <article class="card card-atlas">
    <div class="card-shape" />
    <div class="card-main">
      <div class="card-head">
        <span class="status status-pending">详情待开放</span>
        <span class="card-icon">🧭</span>
      </div>
      <h3 class="card-title">Atlas</h3>
      <p class="card-desc">面向知识工作流的资料地图工具，自动串联文档、标签和任务上下文。</p>
      <div class="feature-grid">
        <div class="feature-item">知识索引</div>
        <div class="feature-item">多源聚合</div>
      </div>
      <button type="button" disabled class="disabled-btn">即将上线</button>
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

.card-atlas {
  border: 1px solid #bfdcf8;
  background: #ffffff;
}

.card-shape {
  position: absolute;
  top: -40px;
  right: -40px;
  width: 128px;
  height: 128px;
  border-radius: 50%;
  background: #e9f5ff;
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

.status-pending {
  background: #f1f3f8;
  color: #6a7185;
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
  border: 1px solid #cfe7fb;
  border-radius: 10px;
  background: #f2f9ff;
  color: #55718e;
  font-size: 12px;
  padding: 8px 10px;
}

.disabled-btn {
  border: 0;
  border-radius: 12px;
  background: #eceff5;
  color: #798199;
  cursor: not-allowed;
  font-size: 14px;
  font-weight: 700;
  padding: 11px 18px;
}
</style>
