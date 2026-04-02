<template>
  <article class="card card-nest">
    <div class="card-head">
      <span class="status status-live">已上线</span>
      <img src="/images/nest_logo.png" alt="Nest logo" class="card-logo">
    </div>
    <h3 class="card-title">Nest</h3>
    <p class="card-desc">
      AI 驱动的书签智能整理工具，自动理解内容并完成分组，让收藏夹真正可用。
    </p>
    <div class="tag-list">
      <span class="tag">浏览器扩展</span>
      <span class="tag">AI 分组</span>
      <span class="tag">隐私优先</span>
    </div>
    <router-link to="/nest" class="detail-link">
      查看详情
      <span class="detail-arrow">→</span>
    </router-link>
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

.card-nest {
  border: 1px solid #f8c9ab;
  background: linear-gradient(135deg, #fff8ef 0%, #fff1e6 55%, #ffe5cc 100%);
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

.status-live {
  background: #ffe3d2;
  color: #d55a14;
}

.card-logo {
  width: 44px;
  height: 44px;
  border-radius: 12px;
  object-fit: cover;
  border: 1px solid rgba(255, 255, 255, 0.75);
  box-shadow: 0 8px 20px rgba(14, 26, 45, 0.12);
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

.tag-list {
  margin: 18px 0 24px;
  display: flex;
  flex-wrap: wrap;
  gap: 8px;
}

.tag {
  border-radius: 999px;
  padding: 5px 10px;
  font-size: 12px;
  color: #d55a14;
  background: rgba(255, 255, 255, 0.84);
}

.detail-link {
  display: inline-flex;
  align-items: center;
  gap: 7px;
  text-decoration: none;
  border-radius: 12px;
  background: #ef6b1b;
  color: #ffffff;
  font-size: 14px;
  font-weight: 700;
  padding: 11px 18px;
  transition: background 0.2s ease;
}

.detail-link:hover {
  background: #da5f14;
}
</style>
