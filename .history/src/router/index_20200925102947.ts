import { createRouter, createWebHistory, RouteRecordRaw } from 'vue-router'
import Home from '@/views/Home.vue'
import layout from '@/views/layouts/layout.vue'

const routes: Array<RouteRecordRaw> = [
  {
    path: '',
    component:layout,
    meta:{
      title: '首页',
      enTitle: 'dashboard',
      icon:'HomeOutlined'
    },
    children:[
      {
        path:'',
        name:'Home',
        component:Home,
        meta:{
          path:'Home'
        }

      }
    ]
  },
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
