


import Vuex, { Store } from 'vuex'
import cookie from 'js-cookie'
import axios from 'axios'


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
    LOGOUT( { commit, state } ){
      
      axios.delete( 'http://localhost:7001/login', { headers:{ 'bgw-access-token':state.accessToken}} ).then( ()=>{
        cookie.remove( 'bgw-access-token' );
        location.reload();
      })
    }
  },

  getters:{
    HAS_ACCESS_TOKEN( state:any ):boolean{
      return !!state.accessToken;
    }
  }
};