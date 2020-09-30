import { createRouter, createWebHistory, RouteRecordRaw } from 'vue-router'
import Home from '@/views/Home.vue'
import layout from '@/views/layout/layout.vue'

const routes: Array<RouteRecordRaw> = [
  {
    path: '',
    name: 'layout',
    component:layout
  },
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
