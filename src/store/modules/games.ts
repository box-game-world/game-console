


import Vuex, { Store } from 'vuex'
import cookie from 'js-cookie'
import axios, { AxiosPromise } from 'axios'


export default {
  namespaced: true,
  state:{
    games: []
  },

  mutations:{
  },

  actions:{
    GET_GAMES_ALL( { commit, state } ):AxiosPromise{
      const promise:AxiosPromise = axios.get( `http://localhost:7001/games` );
      promise.then( ( res )=> state.games = res.data.games );
      return promise;
    }
  },

  getters:{
    GAMES( state:any ):any[]{
      return state.games;
    }
  }
};

export interface UserVo{
  email:string;
  nickname:string;
}