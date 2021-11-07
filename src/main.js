import Vue from 'vue'
import App from './App.vue'
import router from './router'

import { BootstrapVue, IconsPlugin } from 'bootstrap-vue'
import 'bootstrap/dist/css/bootstrap.css'
import 'bootstrap-vue/dist/bootstrap-vue.css'


// Install BootstrapVue
Vue.use(BootstrapVue)

// Install BootstrapVue icon
Vue.use(IconsPlugin)

Vue.config.productionTip = false

import mock from './cookie-data.js'

let data = {
  products: mock
}

new Vue({
  router,
  data,
  render: h => h(App)
}).$mount('#app')
