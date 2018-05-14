
import Vue from 'vue'
import Vuex, { Store } from 'vuex'
Vue.use( Vuex );

import auth from './modules/auth'
import users from './modules/users'
import games from './modules/games'

const store:any = new Vuex.Store({
  modules:{
    auth,
    users,
    games
  }
});

export default store;