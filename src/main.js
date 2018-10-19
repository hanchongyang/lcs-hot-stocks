import Vue from 'vue'
// import axios from 'axios'
import App from './App.vue'
import router from './router'
import store from './store'
import 'amfe-flexible'
import 'normalize.css'
import '@/assets/stylus/index.styl'

Vue.config.productionTip = false

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
