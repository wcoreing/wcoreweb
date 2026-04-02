<template>
  <article class="card card-flux">
    <div class="card-head">
      <span class="status status-pending">详情待开放</span>
      <span class="card-icon">⚡</span>
    </div>
    <h3 class="card-title">Flux</h3>
    <p class="card-desc">
      自动化执行引擎，帮助你把重复动作拆成可复用的流程节点并组合运行。
    </p>
    <div class="feature-list">
      <p>拖拽流程编排</p>
      <p>条件分支控制</p>
      <p>执行日志追踪</p>
    </div>
    <button type="button" disabled class="disabled-btn">即将上线</button>
  </article>
</template>

<style scoped>
.card {
  border-radius: 22px;
  padding: 26px;
  transition: transform 0.22s ease, box-shadow 0.22s ease;
  box-shadow: 0 8px 24px rgba(14, 26, 45, 0.07);
}

.card:hover {
  transform: translateY(-4px);
  box-shadow: 0 20px 34px rgba(14, 26, 45, 0.12);
}

.card-flux {
  border: 1px solid #d8c8ff;
  background: linear-gradient(135deg, #f7f1ff 0%, #f9ebff 100%);
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
  background: rgba(255, 255, 255, 0.82);
  color: #6a4eae;
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

.feature-list {
  margin: 18px 0 24px;
  border-radius: 12px;
  background: rgba(255, 255, 255, 0.78);
  color: #5f6273;
  font-size: 12px;
  line-height: 1.7;
  padding: 10px 12px;
}

.feature-list p {
  margin: 0;
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
