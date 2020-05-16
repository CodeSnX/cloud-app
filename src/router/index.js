import Vue from 'vue'
import VueRouter from 'vue-router'
import Layout from '../views/index/Layout.vue'

Vue.use(VueRouter)

const routes = [
  {
    path: '/login',
    name: 'Login',
    meta: { title: '登录' },
    component: () => import('../views/login/Login.vue'),
  },
  {
    path: '/regis',
    name: 'Registered',
    meta: { title: '注册' },
    component: () => import('../views/login/Registered.vue'),
  },
  {
    path: '/',
    name: 'Layout',
    meta: { title: '主页' },
    component: Layout,
    redirect: 'sheet',
    children: [
      {
        path: '/sheet',
        name: 'Sheet',
        component: () => import('../components/layout/Sheet.vue'),
      },
      {
        path: '/sheet/:id',
        name: 'Sheetdetails',
        component: () => import('../views/Sheetdetails.vue'),
      },
      {
        path: '/my',
        name: 'My',
        component: () => import('../components/layout/My.vue'),
      },
    ],
  },
  {
    path: '/recom',
    name: 'Recommend',
    meta: { title: '每日推荐' },
    component: () => import('../components/bar/Recommend.vue'),
  },
  {
    path: '/lead',
    name: 'Leaderboard',
    meta: { title: '排行榜' },
    component: () => import('../components/layout/Leaderboard.vue'),
  },
]

const router = new VueRouter({
  routes,
})

export default router
