import Vue from 'vue'
import Vuex from 'vuex'
import upload from './upload'
import permission from './modules/permission'
import user from './modules/user'

Vue.use(Vuex)

const store: any = {
  state: {},
  mutations: {},
  actions: {},
  getters: {
    addRoutes: (state: any) => state.permission.addRoutes
  },
  modules: {
    upload,
    permission,
    user
  }
}
export default new Vuex.Store(store)
