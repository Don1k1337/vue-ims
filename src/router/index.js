import { createRouter, createWebHistory } from 'vue-router'
import store from '../store'
import Home from '../views/Home.vue'

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home,
    meta: {
      layout: 'main',
      auth: true
    }
  },
  {
    path: '/help',
    name: 'Help',
    component: () => import('../views/Help.vue'),
    meta: {
      layout: 'main',
      auth: true
    }
  },
  {
    path: '/login',
    name: 'Auth',
    component: () => import('../views/Auth.vue'),
    meta: {
      layout: 'auth',
      auth: false
    }
  },
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  linkActiveClass: 'active',
  linkExactActiveClass: 'active',
  routes
})

router.beforeEach((to, from, next) => {
  const requiredAuth = to.meta.auth

  if (requiredAuth && store.getters['auth/isAuthenticated']) {
    next()
  } else if (requiredAuth && !store.getters['auth/isAuthenticated']) {
    next('/login?message=auth')
  } else {
    next()
  }
})

export default router
