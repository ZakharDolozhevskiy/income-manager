import Vue from 'vue'
import Router from 'vue-router'

import Root from '../views/Root.vue'
import Balance from '../views/Balance.vue'
import Category from '../views/Category.vue'
import Categories from '../views/Categories.vue'

Vue.use(Router)

export default new Router({
  mode: 'history',
  routes: [
    {
      path: '/',
      component: Root,
      redirect: 'balance',
      props: route => ({pageTitle: route.fullPath.split('/')[1]}),
      children: [
        {
          name: 'balance',
          path: 'balance',
          component: Balance
        },
        {
          name: 'categories',
          path: 'categories',
          component: Categories
        },
        {
          name: 'category',
          path: 'category/:id',
          component: Category
        }
      ]
    }
  ]
})
