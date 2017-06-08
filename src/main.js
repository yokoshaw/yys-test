// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import VueRouter from 'vue-router'
import week from './components/week/week'
import month from './components/month/month'
import total from './components/total/total'

Vue.config.productionTip = false

Vue.use(VueRouter)

const routes = [{
  path: '/',
  redirect: '/week'
}, {
  path: '/week',
  component: week
}, {
  path: '/month',
  component: month
}, {
  path: '/total',
  component: total
}]

const router = new VueRouter({
  linkActiveClass: 'active',
  routes
})

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  template: '<App/>',
  components: { App }
})
