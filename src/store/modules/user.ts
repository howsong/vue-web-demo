import { setToken } from '@/utils/auth'
interface State {
  routes: any[]
  addRoutes: any[]
  isLogin: boolean
}

export enum MUT_ACTIONS {
  SET_ISLOGIN = 'SET_ISLOGIN'
}
export enum ACTIONS {
  LOGIN = 'LOGIN'
}

const state: State = {
  routes: [],
  addRoutes: [],
  isLogin: false
}
const mutations = {
  [MUT_ACTIONS.SET_ISLOGIN](isLogin: boolean) {
    state.isLogin = isLogin
  }
}
const actions = {
  [ACTIONS.LOGIN]({ commit }, params) {
    return new Promise(resolve => {
      const timer = setTimeout(() => {
        commit(MUT_ACTIONS.SET_ISLOGIN, true)
        setToken(`${Date.now()}${params.account}`)
        resolve(true)
        clearTimeout(timer)
      }, 1000)
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
