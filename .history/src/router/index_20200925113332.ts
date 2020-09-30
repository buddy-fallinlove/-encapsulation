import { createRouter, createWebHistory, RouteRecordRaw } from 'vue-router'
import Home from '@/views/Home.vue'
import layout from '@/views/layouts/layout.vue'
import goods from '@/views/goods/goods.vue'
import preview from 
const routes: Array<RouteRecordRaw> = [
  {
    path:'Home',
    redirect:'/'
  },
  {
    path:'',
    name:'layout',
    component:layout,
    children:[
      {
        path:'',
        name:'Home',
        component:Home
      },
      {
        path:'',
        name:'goods',
        component:goods
      },
      {

      }
    ]
  }
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
