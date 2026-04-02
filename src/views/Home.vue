<template>
  <div class="home-page">
    <section class="hero">
      <div class="container hero-inner">
        <p class="hero-kicker">WEINING LAB</p>
        <h1 class="hero-title">持续打磨的效率产品</h1>
        <p class="hero-desc">
          我们专注做能真正解决问题的工具。当前仅
          <span class="hero-highlight">Nest</span>
          已开放完整详情并支持本地下载安装，其它产品正在开发中，将分批上线。
        </p>
        <div class="hero-actions">
          <a href="#products" class="btn btn-primary">
            查看全部产品
            <span class="btn-arrow">↓</span>
          </a>
          <router-link to="/nest" class="btn btn-secondary">
            体验 Nest
            <span class="btn-arrow">→</span>
          </router-link>
        </div>
      </div>
    </section>

    <section id="products" class="products">
      <div class="container">
        <div class="products-head">
          <div>
            <h2 class="section-title">产品</h2>
            <p class="section-desc">每个产品采用独立模板展示，便于后续单独扩展。</p>
          </div>
          <span class="product-count">共 1 个产品</span>
        </div>
        <div class="product-grid">
          <NestProductCard />
        
        </div>
      </div>
    </section>

    <section class="nest-focus">
      <div class="container">
        <div class="focus-card">
          <div class="focus-head">
            <p class="focus-kicker">Now Available</p>
            <h2 class="focus-title">Nest：已上线并持续迭代</h2>
            <p class="focus-desc">
              如果你想先体验一个已经可用的产品，Nest 目前是主力产品，功能和详情页都已完整开放。
            </p>
          </div>
          <div class="focus-feature-grid">
            <div class="focus-feature">
              <p class="focus-feature-title">AI 智能分组</p>
              <p>按内容语义归类，而非仅按域名分类。</p>
            </div>
            <div class="focus-feature">
              <p class="focus-feature-title">可视化书签树</p>
              <p>支持搜索、拖拽和结构化管理。</p>
            </div>
            <div class="focus-feature">
              <p class="focus-feature-title">版本回滚</p>
              <p>每次变更自动快照，可随时恢复。</p>
            </div>
          </div>
          <div class="focus-action-wrap">
            <router-link to="/nest" class="btn btn-primary">
              进入 Nest 详情页
              <span class="btn-arrow">→</span>
            </router-link>
          </div>
        </div>
      </div>
    </section>
  </div>
</template>

<script setup>
import AtlasProductCard from '../components/products/AtlasProductCard.vue'
import FluxProductCard from '../components/products/FluxProductCard.vue'
import LoomProductCard from '../components/products/LoomProductCard.vue'
import NestProductCard from '../components/products/NestProductCard.vue'
</script>

<style scoped>
.home-page {
  color: #1f2433;
}

.container {
  width: min(1120px, 92vw);
  margin: 0 auto;
}

.hero {
  padding: 96px 0 112px;
  background: linear-gradient(135deg, #f8fafc 0%, #ffffff 48%, #fff2e8 100%);
}

.hero-inner {
  text-align: center;
}

.hero-kicker {
  margin: 0 0 14px;
  color: #de6219;
  letter-spacing: 0.2em;
  text-transform: uppercase;
  font-size: 12px;
  font-weight: 700;
}

.hero-title {
  margin: 0;
  font-size: clamp(34px, 5.5vw, 60px);
  line-height: 1.12;
}

.hero-desc {
  width: min(700px, 100%);
  margin: 22px auto 34px;
  font-size: clamp(16px, 2.4vw, 22px);
  line-height: 1.7;
  color: #646a7c;
}

.hero-highlight {
  color: #1f2433;
  font-weight: 700;
}

.hero-actions {
  display: flex;
  justify-content: center;
  flex-wrap: wrap;
  gap: 14px;
}

.btn {
  display: inline-flex;
  align-items: center;
  justify-content: center;
  gap: 8px;
  border-radius: 12px;
  padding: 12px 24px;
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
  border: 1px solid #f2caaf;
  background: #ffffff;
  color: #de6219;
}

.btn-secondary:hover {
  background: #fff5ed;
}

.btn-arrow {
  font-size: 16px;
}

.products {
  padding: 86px 0;
  background: #ffffff;
}

.products-head {
  display: flex;
  justify-content: space-between;
  align-items: end;
  gap: 16px;
  margin-bottom: 28px;
}

.section-title {
  margin: 0 0 8px;
  font-size: clamp(28px, 4.2vw, 40px);
}

.section-desc {
  margin: 0;
  color: #71778a;
}

.product-count {
  flex-shrink: 0;
  border-radius: 999px;
  background: #f2f3f6;
  color: #5f6678;
  font-size: 12px;
  font-weight: 600;
  padding: 7px 12px;
}

.product-grid {
  display: grid;
  grid-template-columns: repeat(2, minmax(0, 1fr));
  gap: 22px;
}

.nest-focus {
  padding: 90px 0;
  background: #f7f8fb;
}

.focus-card {
  border: 1px solid #fee0cd;
  border-radius: 24px;
  padding: clamp(26px, 4vw, 44px);
  background: #ffffff;
}

.focus-head {
  text-align: center;
}

.focus-kicker {
  margin: 0 0 10px;
  color: #ef6b1b;
  letter-spacing: 0.16em;
  text-transform: uppercase;
  font-size: 12px;
  font-weight: 700;
}

.focus-title {
  margin: 0;
  font-size: clamp(27px, 3.8vw, 40px);
}

.focus-desc {
  width: min(720px, 100%);
  margin: 16px auto 0;
  color: #696f81;
  line-height: 1.75;
}

.focus-feature-grid {
  margin-top: 26px;
  display: grid;
  grid-template-columns: repeat(3, minmax(0, 1fr));
  gap: 14px;
}

.focus-feature {
  border-radius: 14px;
  background: #fff4ea;
  color: #4e5467;
  font-size: 14px;
  line-height: 1.7;
  padding: 16px;
}

.focus-feature-title {
  margin: 0 0 4px;
  color: #1f2433;
  font-weight: 700;
}

.focus-action-wrap {
  margin-top: 24px;
  text-align: center;
}

@media (max-width: 920px) {
  .product-grid {
    grid-template-columns: 1fr;
  }

  .focus-feature-grid {
    grid-template-columns: 1fr;
  }
}

@media (max-width: 640px) {
  .hero {
    padding: 74px 0 86px;
  }

  .products-head {
    flex-direction: column;
    align-items: flex-start;
  }
}
</style>
