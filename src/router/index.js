import Vue from 'vue'
import Router from 'vue-router'
import index from '@/components/index'

Vue.use(Router)

export default new Router({
  mode: process.env.ROUTER_MODE || 'hash',
  routes: [
    {
      path: '/',
      name: 'index',
      component: index
    }
  ]
})
