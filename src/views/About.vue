<template>
  <div class="about-page">
    <div class="container">
      <div class="profile">
        <div class="avatar">
          W
        </div>
        <h1>Weining</h1>
        <p>独立开发者 · 软件设计师</p>
      </div>

      <div class="intro">
        <p>
          我相信好的软件应该让人几乎感觉不到它的存在——它只是默默地帮你解决问题，然后退到幕后。
        </p>
        <p>
          我开发工具，是因为我自己需要它们。每个项目都源于一个真实的痛点，然后尝试用最简洁的方式去解决。
        </p>
      </div>

      <section class="section-block">
        <h2><span>💻</span> 常用技术</h2>
        <div class="skill-list">
          <span v-for="skill in skills" :key="skill" class="skill-tag">
            {{ skill }}
          </span>
        </div>
      </section>

      <section class="section-block">
        <h2><span>📬</span> 找到我</h2>
        <div class="contact-list">
          <a href="#" class="contact-item">
            <span class="contact-icon">📧</span>
            <span>hello@example.com</span>
          </a>
          <a href="#" class="contact-item">
            <span class="contact-icon">🐙</span>
            <span>GitHub</span>
          </a>
          <a href="#" class="contact-item">
            <span class="contact-icon">🐦</span>
            <span>Twitter</span>
          </a>
        </div>
      </section>

      <div class="motto">
        "Make it work, make it right, make it fast."
      </div>
    </div>
  </div>
</template>

<script setup>
const skills = [
  'Vue.js', 'React', 'TypeScript', 'Node.js',
  'Go', 'Python', 'PostgreSQL', 'Redis',
  'Docker', 'Kubernetes', 'AWS'
]
</script>

<style scoped>
.about-page {
  color: #1f2433;
  padding: 74px 0;
}

.container {
  width: min(900px, 92vw);
  margin: 0 auto;
}

.profile {
  text-align: center;
  margin-bottom: 52px;
}

.avatar {
  width: 130px;
  height: 130px;
  margin: 0 auto 18px;
  border-radius: 50%;
  background: linear-gradient(135deg, #ef6b1b 0%, #ea4b7a 100%);
  color: #ffffff;
  display: inline-flex;
  align-items: center;
  justify-content: center;
  font-size: 52px;
  font-weight: 700;
  box-shadow: 0 14px 26px rgba(239, 107, 27, 0.22);
}

.profile h1 {
  margin: 0;
  font-size: clamp(34px, 6vw, 46px);
}

.profile p {
  margin: 10px 0 0;
  color: #6a7083;
  font-size: 18px;
}

.intro {
  margin-bottom: 40px;
  color: #596177;
  line-height: 1.9;
  font-size: 17px;
}

.intro p {
  margin: 0 0 14px;
}

.section-block {
  margin-bottom: 44px;
}

.section-block h2 {
  margin: 0 0 16px;
  font-size: 24px;
  display: inline-flex;
  align-items: center;
  gap: 8px;
}

.skill-list {
  display: flex;
  flex-wrap: wrap;
  gap: 10px;
}

.skill-tag {
  border-radius: 10px;
  background: #f2f4f8;
  color: #4f566b;
  padding: 9px 12px;
  font-size: 13px;
  transition: background 0.2s ease;
}

.skill-tag:hover {
  background: #e6eaf1;
}

.contact-list {
  display: grid;
  gap: 10px;
}

.contact-item {
  display: flex;
  align-items: center;
  gap: 12px;
  border-radius: 12px;
  background: #f7f8fb;
  color: #596177;
  text-decoration: none;
  padding: 13px 14px;
  transition: background 0.2s ease, color 0.2s ease;
}

.contact-item:hover {
  background: #eceff5;
  color: #202635;
}

.contact-icon {
  font-size: 22px;
}

.motto {
  border-top: 1px solid #e8ebf2;
  padding-top: 28px;
  text-align: center;
  color: #8f95a8;
  font-size: 26px;
  font-style: italic;
}

@media (max-width: 640px) {
  .motto {
    font-size: 20px;
  }
}
</style>
