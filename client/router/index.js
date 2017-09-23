import Vue from 'vue'
import Router from 'vue-router'

import Root from '../views/Root.vue'
import Balance from '../views/Balance.vue'
import Dashboard from '../views/Dashboard.vue'

Vue.use(Router)

export default new Router({
  mode: 'history',
  routes: [
    {
      path: '/',
      component: Root,
      redirect: 'dashboard',
      props: route => ({pageTitle: route.fullPath.split('/')[1]}),
      children: [
        {
          path: 'dashboard',
          component: Dashboard
        },
        {
          path: 'balance',
          component: Balance
        }
      ]
    }
  ]
})
