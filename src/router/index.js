import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home.vue'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home
  },
  {
    path: '/reset/:token',
    name: 'Reset',
    component: () => import(/* webpackChunkName: "service" */ '../views/Reset.vue')

  },
  {
    path: '/forgot',
    name: 'Forgot',
    component: () => import(/* webpackChunkName: "service" */ '../views/Forgot.vue')

  },
  {
    path: '/register',
    name: 'Register',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "service" */ '../views/Register.vue')
  },
  {
    path: '/services',
    name: 'Service',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "service" */ '../views/Service.vue')
  },
  {
    path: '/book',
    name: 'BookPage',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "service" */ '../views/BookPage.vue')
  },
  {
    path: '/account',
    name: 'Account',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "account" */ '../views/Account.vue')
  },
  {
    path: '/managerHome',
    name: 'ManagerHome',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "service" */ '../views/manager/managerHome.vue')
  },
  {
    path: '/managerService',
    name: 'ManagerService',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "service" */ '../views/manager/managerService.vue')
  },
  {
    path: '/managerBookings',
    name: 'ManagerBookings',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "service" */ '../views/manager/managerBookings.vue')
  },
  {
    path: '/managerCardEdit',
    name: 'ManagerCardEdit',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "service" */ '../views/manager/managerCardEdit.vue')
  },
  {
    path: '/managerUserAccounts',
    name: 'ManagerUserAccounts',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "managerUserAccounts" */ '../views/manager/managerUserAccounts.vue')
  },
  {
    path: '/managerUserAccountHistory',
    name: 'ManagerUserAccountHistory',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "managerUserAccountHistory" */ '../views/manager/managerUserAccountHistory.vue')
  }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
