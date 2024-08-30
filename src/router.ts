import { createRouter, createWebHistory } from 'vue-router'
import Market from '@/lib/features/market/presentation/pages/index.vue'

const routes = [
  {
    path: '/',
    name: 'home',
    component: Market,
  },
]

const router = createRouter({
  history: createWebHistory(),
  routes,
})

export default router
