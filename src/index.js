import Vue from 'vue'
import App from './views/App.vue'
import store from './store';
import router from './router';
import { sync } from 'vuex-router-sync'

const unsync = sync(store, router, { moduleName: 'RouterCore' })

Vue.config.productionTip = false

new Vue({
  el: '#app',
  store,
  router,
  render: h => h(App)
})
