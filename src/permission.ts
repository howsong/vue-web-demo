import router from './router'
import store from './store'
import { getToken } from '@/utils/auth'
import NProgress from 'nprogress'

// 路由白名单 不需要登录也可以进入的页面
const witheList = ['/login', '/auth-redirect']

router.beforeEach(async (to: any, from, next) => {
  NProgress.start()
  document.title = to.meta.title || 'vue-demo'
  const hasToken = getToken()
  if (hasToken) {
    if (to.path === '/login') {
      next({ path: '/' })
      NProgress.done()
    } else {
      const isPermission = store.getters?.addRoutes?.length > 0 ? true : false
      if (isPermission) {
        next()
      } else {
        const accessRoutes: any = await store.dispatch('permission/GENERATE_ROUTES')
        router.addRoutes(accessRoutes)
        next({ ...to, replace: true })
      }
    }
  } else {
    if (witheList.indexOf(to.path) !== -1) {
      next()
    } else {
      next(`/login?redirect=${to.path}`)
      NProgress.done()
    }
  }
})
router.afterEach(() => {
  NProgress.done()
})
