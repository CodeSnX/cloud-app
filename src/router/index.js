import Vue from 'vue'
import VueRouter from 'vue-router'

Vue.use(VueRouter)

const routes = [
  {
    path: '/header',
    name: 'Header',
    component: () => import('../components/Header.vue'),
  },
  {
    path: '/footer',
    name: 'Footer',
    component: () => import('../components/Footer.vue'),
  },
  {
    path: '/sheet',
    name: 'Sheet',
    component: () => import('../views/Sheet.vue'),
  },
  {
    path: '/sheet/:id',
    name: 'Sheetdetails',
    component: () => import('../views/Sheetdetails.vue'),
  },
  {
    path: '/login',
    name: 'Login',
    meta: { title: '登录' },
    component: () => import('../views/Login.vue'),
  },
  {
    path: '/regis',
    name: 'Registered',
    meta: { title: '注册' },
    component: () => import('../views/Registered.vue'),
  },
]

const router = new VueRouter({
  routes,
})

export default router
