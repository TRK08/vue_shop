import Vue from 'vue'
import VueRouter from 'vue-router'

import Catalog from '../components/Catalog'
import Cart from '../components/Cart'


Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'catalog',
    component: Catalog
  },
  {
    path: '/cart',
    name: 'cart',
    component: Cart
  }
]

const router = new VueRouter({
  routes
})

export default router
