import { createRouter, createWebHistory, RouteRecordRaw } from 'vue-router'
import Home from '@/views/Home.vue'
import layout from '@/views/layouts/layout.vue'

const routes: Array<RouteRecordRaw> = [
  // 1
  {
    path: '',
    component:layout,
    meta:{
      title: ' 常用hooks',
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

// 2

  {
    path: '/goods',
    component:layout,
    meta:{
      title: '图片预览',
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



// 3
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

// 4

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


// 5
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


// 6
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


// 7
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


// 8
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

// 9
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

// 10
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


// 11
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

// 12
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
