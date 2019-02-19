import Vue from 'vue'
import App from './views/App.vue'
import store from './store';
import router from './router';

Vue.config.productionTip = false

new Vue({
  el: '#app',
  store,
  router,
  render: h => h(App)
})
