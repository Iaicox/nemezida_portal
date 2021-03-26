//  Main Styles
import '@/assets/styles/style.scss'

import Vue from 'vue'
import App from './App.vue'

import './registerServiceWorker'
import router from './router'
import store from './store'

import eventBusPlagin from './utils/event-bus.plugin'

Vue.use({
  install(Vue) {
    Vue.prototype.$eb = eventBusPlagin
  }
})

Vue.config.productionTip = false

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
