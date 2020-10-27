/**
 * 这里写权限控制逻辑、根据权限设置动态路由
 */
import { asyncRoutes, constantRoutes } from '@/router'

interface State {
  routes: any[]
  addRoutes: any[]
  isLogin: boolean
}

export enum MUT_ACTIONS {
  SET_ROUTES = 'SET_ROUTES',
  SET_ISLOGIN = 'SET_ISLOGIN'
}
export enum ACTIONS {
  LOGIN = 'LOGIN',
  GENERATE_ROUTES = 'GENERATE_ROUTES'
}

const state: State = {
  routes: [],
  addRoutes: [],
  isLogin: false
}
const mutations = {
  [MUT_ACTIONS.SET_ROUTES](state: State, routes: any[]) {
    state.addRoutes = routes
    state.routes = constantRoutes.concat(routes)
  },
  [MUT_ACTIONS.SET_ISLOGIN](isLogin: boolean) {
    state.isLogin = isLogin
  }
}
const actions = {
  [ACTIONS.LOGIN]({ commit }, params) {
    return new Promise(resolve => {
      const timer = setTimeout(() => {
        console.log(params, '登录账号密码')
        commit(MUT_ACTIONS.SET_ISLOGIN, true)
        resolve(true)
        clearTimeout(timer)
      }, 1000)
    })
  },
  [ACTIONS.GENERATE_ROUTES]({ commit }) {
    return new Promise<any[]>(resolve => {
      const timer = setTimeout(() => {
        commit(MUT_ACTIONS.SET_ROUTES, asyncRoutes)
        resolve(asyncRoutes)
        clearTimeout(timer)
      }, 500)
    })
  }
}

const getters = {}

export default {
  namespaced: true,
  state,
  mutations,
  actions,
  getters
}
