import Vue from 'vue';
import App from './App.vue';
import router from './router';
import store from './store';
import myaxios from './axios.js';
import 'bulma';

Vue.prototype.$http = myaxios;

Vue.config.productionTip = false;

new Vue({
  router,
  store,
  render: function (h) { return h(App) }
}).$mount('#app');
