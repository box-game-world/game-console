
import Vue from 'vue'
import Vuex, { Store } from 'vuex'
Vue.use( Vuex );

import auth from './modules/auth'

const store:any = new Vuex.Store({
  modules:{
    auth,
  }
});

export default store;