// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import Vuex from 'vuex';
import App from './app.vue'
import router from './router'
import store from './store/'
import VueMaterial from 'vue-material'


Vue.config.productionTip = false;

Vue.use(VueMaterial);

/* eslint-disable no-new */
new Vue({
  el: '#app', 
  store,
  router,
  components: { App },
  template: '<App/>'
})
