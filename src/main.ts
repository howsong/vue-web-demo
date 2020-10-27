import Vue from 'vue'
import App from './App.vue'
import './registerServiceWorker'
import router from './router'
import store from './store'
//import '@/assets/styles/theme/element-variables.scss'
import '@/assets/styles/index.scss'
import SvgIcon from '@/components/Common/SvgIcon/SvgIcon.vue'
import './permission'
const req = require.context('@/assets/icons', false, /\.svg$/)
const requireAll = (requireContent: __WebpackModuleApi.RequireContext) =>
  requireContent.keys().map(requireContent)
requireAll(req)

// Vue.use(Element, { size: 'medium' })

Vue.config.productionTip = false
Vue.component('svg-icon', SvgIcon)

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
