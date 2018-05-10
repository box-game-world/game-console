


import Vuex, { Store } from 'vuex'
import cookie from 'js-cookie'
import axios, { AxiosPromise } from 'axios'


export default {
  namespaced: true,
  state:{
    accessToken: ''
  },

  mutations:{
    UPDATE_ACCESS_TOKEN( state:any ):void{
      state.accessToken = cookie.get( 'bgw-access-token' );
    }
  },

  actions:{
    SIGN_OUT( { commit, state } ):AxiosPromise{
      const promise:AxiosPromise = axios.delete( 'http://localhost:7001/login', { headers:{ 'bgw-access-token':state.accessToken}} );
      promise.then( ()=>{
        cookie.remove( 'bgw-access-token' );
        location.reload();
      })
      return promise;
    },

    SIGN_UP( { commit, state }, { email, nickname, password } ):AxiosPromise{
      const promise:AxiosPromise = axios.post( 'http://localhost:7001/users', { email, nickname, password } );
      return promise;
    }
  },

  getters:{
    ACCESS_TOKEN( state:any ):string{
      return state.accessToken;
    },
    HAS_ACCESS_TOKEN( state:any ):boolean{
      return !!state.accessToken;
    }
  }
};