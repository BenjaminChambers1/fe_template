import Vue from 'vue';
import App from './App.vue';
import router from './router';
import store from './store';
import axios from 'axios';
import 'bulma';

Vue.prototype.$http = axios.create({
  baseURL: 'http://18.216.160.160/api/',
  timeout: 3000,
  withCredentials: true
});

Vue.config.productionTip = false;

new Vue({
  router,
  store,
  render: function (h) { return h(App) }
}).$mount('#app')
