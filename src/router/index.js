import { createRouter, createWebHistory } from 'vue-router'
import Home from '../views/Home.vue'
import Nest from '../views/Nest.vue'
import AiKefu from '../views/AiKefu.vue'
import About from '../views/About.vue'

const routes = [
  { path: '/', name: 'Home', component: Home },
  { path: '/nest', name: 'Nest', component: Nest },
  { path: '/aikefu', name: 'AiKefu', component: AiKefu },
  { path: '/about', name: 'About', component: About },
  // 兼容旧链接
  { path: '/projects/nest', redirect: '/nest' },
  { path: '/projects', redirect: '/' },
  { path: '/projects/:slug', redirect: '/' }
]

const router = createRouter({
  history: createWebHistory(),
  routes
})

export default router
