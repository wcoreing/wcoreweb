<template>
  <article class="card card-loom">
    <div class="card-head">
      <span class="status status-pending">详情待开放</span>
      <span class="card-icon">🧵</span>
    </div>
    <h3 class="card-title">Loom</h3>
    <p class="card-desc">
      面向团队协作的发布流水线助手，把需求、评审、发布状态串成可追溯时间线。
    </p>
    <div class="stage-list">
      <div class="stage-item">需求阶段</div>
      <div class="stage-item">评审阶段</div>
      <div class="stage-item">发布阶段</div>
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

.card-loom {
  border: 1px solid #c6e7d6;
  background: #ffffff;
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

.stage-list {
  margin: 18px 0 24px;
  display: grid;
  gap: 8px;
}

.stage-item {
  border-radius: 10px;
  background: #ebf9f0;
  color: #3f8f61;
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
