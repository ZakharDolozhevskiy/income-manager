import Vue from 'vue'
import { sync } from 'vuex-router-sync'
import VueMaterial from 'vue-material'

import App from './components/App.vue'
import router from './router'
import store from './store'

import 'vue-material/dist/vue-material.css'

Vue.use(VueMaterial)

sync(store, router)

const app = new Vue({
  router,
  store,
  ...App
})

export { app, router, store }
