import Vue from 'vue'
import VueRouter, { RouteConfig } from 'vue-router'
import PATHS from '@/router/routePath'

const originalPush = VueRouter.prototype.push
VueRouter.prototype.push = function push(location: any) {
  return (originalPush.call(this, location) as any).catch((err: any) => err)
}

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
      },
      {
        path: PATHS.ELEMENT,
        name: 'ElementDemo',
        component: _import_('ElementDemo')
      },
      {
        path: PATHS.SCENARIO,
        name: 'Scenario',
        component: _import_('Scenario'),
        children: [
          { path: '', redirect: PATHS.SCENARIO_LIST },
          { path: PATHS.SCENARIO_LIST, name: 'ScenarioList', component: _import_('ScenarioList') },
          {
            path: `${PATHS.SCENARIO_EXAMPLE}/:id`,
            name: 'ScenarioExample',
            component: _import_('ScenarioExample')
          }
        ]
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
