import { asyncRoutes } from '@/router'

// 登录
export function getAsyncRoutes() {
  return new Promise(resolve => {
    const timer = setTimeout(() => {
      resolve(asyncRoutes)
      clearTimeout(timer)
    }, 1000)
  })
}
