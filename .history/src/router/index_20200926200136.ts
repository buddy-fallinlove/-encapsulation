import { createRouter, createWebHistory, RouteRecordRaw,createWebHashHistory,RouteLocationNormalized,NavigationGuardNext } from 'vue-router'
import Home from '../views/Home.vue'
import  Layout from '../components/layout/Layout.vue'


const routes: Array<RouteRecordRaw> = [
  {
   path: '',
   name: 'layout',
   component: Layout ,
   children:[
    {
      path: '',
      name: 'Home',
      component: Home,
      meta:{
        title:'首页'
      }
    },
    {
      path: '/hooks',
      name: 'hooks',
      component: () => import( '../views/hooks/Hooks.vue'),
      meta:{
        title:'hooks'
      }
    },
    {
      path: '/previewImg',
      name: 'previewImg',
      component: () => import( '../views/previewImg/PreviewImg.vue'),
      meta:{
        title:'图片预览'
      }
    },
    {
      path: '/trend',
      name: 'trend',
      component: () => import( '../views/trend/trend.vue'),
      meta:{
        title:'趋势'
      }
    },
    {
      path: '/foottool',
      name: 'foottool',
      component: () => import( '../views/foottool/Foottool.vue'),
      meta:{
        title:'底部工具'
      }
    },
    {
      path: '/notice',
      name: 'notice',
      component: () => import( '../views/notice/Notice.vue'),
      meta:{
        title:'通知图标'
      }
    },
    {
      path: '/webpage',
      name: 'webpage',
      component: () => import( '../views/webpage/Webpage.vue'),
      meta:{
        title:'内嵌网页'
      }
    },
    {
      path: '/verification',
      name: 'verification',
      component: () => import( '../views/verification/Verification.vue'),
      meta:{
        title:'验证码'
      }
    },
    {
      path: '/progress',
      name: 'progress',
      component: () => import( '../views/progress/Progress.vue'),
      meta:{
        title:'进度条'
      }
    },
    {
      path: '/qrcode',
      name: 'qrcode',
      component: () => import( '../views/qrcode/Qrcode.vue'),
      meta:{
        title:'二维码'
      }
    },
    {
      path: '/copytext',
      name: 'copytext',
      component: () => import( '../views/copytext/Copytext.vue'),
      meta:{
        title:'复制文本'
      }
    },
    {
      path: '/watermark',
      name: 'watermark',
      component: () => import( '../views/watermark/Watermark.vue'),
      meta:{
        title:'生成水印'
      }
    },
    {
      path: '/editable',
      name: 'editable',
      component: () => import( '../views/editable/Editable.vue'),
      meta:{
        title:'可编辑文字'
      }
    },
   ]
  }
  
]

//决定路由模式
const isPro: boolean = process.env.NODE_ENV === 'production'
const router = createRouter({
  history: isPro ? createWebHashHistory(process.env.BASE_URL) : createWebHistory(process.env.BASE_URL),
  routes
})

router.beforeEach((to: RouteLocationNormalized,from: RouteLocationNormalized,next: NavigationGuardNext) => {
     document.title = to.meta.title
     next()
})

export default router
