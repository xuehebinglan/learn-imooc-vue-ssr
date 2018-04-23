import Vue from 'vue'
import App from './app.vue'
import VueRouter from 'vue-router'

import './assets/styles/global.styl'

import createRouter from './config/router'

const root = document.createElement('div')
document.body.appendChild(root)

Vue.use(VueRouter)

const router = createRouter()

router.beforeEach((to, from, next) => {
  console.log('before each invoked')
  // if (to.fullPath === '/app') {
  //   next('/login')
  // } else {
  //   next()
  // }
  next()
})
router.beforeResolve((to, from, next) => {
  console.log('before resolve invoked')
  next()
})
router.afterEach((to, from, next) => {
  console.log('after each invoked')
})

new Vue({
  router,
  render: (h) => h(App)
}).$mount(root)
