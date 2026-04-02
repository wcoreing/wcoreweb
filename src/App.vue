<template>
  <div class="app-shell">
    <nav class="top-nav">
      <div class="container nav-inner">
        <router-link to="/" class="brand">
       
          <span class="brand-name">WEINING LAB</span>
        </router-link>
        <div class="nav-links">
          <router-link to="/" class="nav-link">首页</router-link>
          <router-link :to="{ path: '/', hash: '#products' }" class="nav-link">产品</router-link>
          <router-link to="/about" class="nav-link">关于</router-link>
        </div>
      </div>
    </nav>

    <router-view />

    <footer class="site-footer">
      <div class="container footer-inner">
  
        <p class="footer-title">weining lab</p>
        <p class="footer-subtitle">Build useful products, one by one.</p>
        <div class="footer-links">
          <a href="#" class="footer-link">隐私政策</a>
          <a href="#" class="footer-link">使用条款</a>
          <a href="#" class="footer-link">联系我们</a>
        </div>
        <div class="footer-copyright">
          © 2026 weining lab. All rights reserved.
        </div>
      </div>
    </footer>
  </div>
</template>

<script setup>
</script>

<style scoped>
.app-shell {
  min-height: 100vh;
  background: #ffffff;
}

.container {
  width: min(1120px, 92vw);
  margin: 0 auto;
}

.top-nav {
  position: sticky;
  top: 0;
  z-index: 50;
  border-bottom: 1px solid #f1f1f5;
  background: rgba(255, 255, 255, 0.92);
  backdrop-filter: blur(10px);
}

.nav-inner {
  display: flex;
  align-items: center;
  justify-content: space-between;
  min-height: 72px;
}

.brand {
  display: inline-flex;
  align-items: center;
  gap: 8px;
  color: #121525;
  text-decoration: none;
}

.brand-icon {
  font-size: 24px;
  transition: transform 0.2s ease;
}

.brand:hover .brand-icon {
  transform: translateY(-1px) scale(1.06);
}

.brand-name {
  font-size: 16px;
  font-weight: 700;
}

.nav-links {
  display: flex;
  gap: 24px;
}

.nav-link {
  color: #5b5f72;
  text-decoration: none;
  font-size: 14px;
  font-weight: 600;
  transition: color 0.2s ease;
}

.nav-link:hover,
.nav-link.router-link-active {
  color: #ef6b1b;
}

.site-footer {
  margin-top: 80px;
  padding: 52px 0 36px;
  background: #10131c;
  color: #9aa0b2;
}

.footer-inner {
  text-align: center;
}

.footer-logo {
  font-size: 28px;
  margin-bottom: 12px;
}

.footer-title {
  margin: 0;
  color: #ffffff;
  font-size: 18px;
  font-weight: 700;
}

.footer-subtitle {
  margin: 8px 0 26px;
  font-size: 14px;
}

.footer-links {
  display: flex;
  justify-content: center;
  gap: 20px;
  margin-bottom: 26px;
}

.footer-link {
  color: #9aa0b2;
  text-decoration: none;
  font-size: 14px;
  transition: color 0.2s ease;
}

.footer-link:hover {
  color: #ffffff;
}

.footer-copyright {
  border-top: 1px solid #232738;
  padding-top: 18px;
  font-size: 13px;
}
</style>
