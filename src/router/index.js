import Vue from 'vue'

import VueRouter from 'vue-router'
import Index from '../views/IndexView'
import Login from '../views/LoginView'
import Category from '../views/CategoryView'
import About from '../views/AboutView'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'Index',
    component:Index

  },
  {
    path: '/category',
    name: 'Category',
    component:Category
  },
  {
    path: '/about',
    name: 'about',
    component: About
  },
  {
    path: '/login',
    name: 'login',
    component: Login
  }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
