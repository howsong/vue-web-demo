import Vue from 'vue'
import VueRouter, { RouteConfig } from 'vue-router'
import PATHS from '@/router/routePath'

const _import_ = (file: string) => () => import(`@/views/${file}.vue`)

Vue.use(VueRouter)

const routes: Array<RouteConfig> = [
  {
    path: PATHS.LOGIN,
    name: 'Login',
    component: _import_('Login')
  },
  {
    path: PATHS.ROOT,
    name: 'Admin',
    component: _import_('Admin'),
    children: [
      {
        path: '',
        redirect: PATHS.HOME
      },
      {
        path: PATHS.HOME,
        name: 'Home',
        component: _import_('Home')
      },
      {
        path: PATHS.ECHARTS,
        name: 'Echarts',
        component: _import_('Echarts')
      }
    ]
  }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
