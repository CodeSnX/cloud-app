import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'

// axios
import axios from 'axios'
Vue.prototype.axios = axios
axios.defaults.baseURL = 'http://localhost:3000'

// 引入Vant
import Vant from 'vant'
import 'vant/lib/index.css'
Vue.use(Vant)

Vue.config.productionTip = false

// 路由导航守卫，当路由发生变化的时候，我们想要做的事情，这就是导航守卫的重点
router.beforeEach((to, from, next) => {
  let token = localStorage.getItem('token')
  let isLogin
  if (!token) {
    isLogin = false
  } else {
    isLogin = true
  }
  if (!isLogin) {
    if (to.path !== '/login' && to.path !== '/regis') {
      return next({ path: '/login' })
    } else {
      next()
    }
  } else {
    if (to.path === '/login') {
      return next({ path: '/sheet' })
    }
    next()
  }
})
new Vue({
  router,
  store,
  render: (h) => h(App),
}).$mount('#app')
