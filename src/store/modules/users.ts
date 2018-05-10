


import Vuex, { Store } from 'vuex'
import cookie from 'js-cookie'
import axios, { AxiosPromise } from 'axios'


export default {
  namespaced: true,
  state:{
    userInfo: {}
  },

  mutations:{
  },

  actions:{
    GET_USER_INFO_BY_TOKEN( { commit, state }, { token } ):AxiosPromise{
      const promise:AxiosPromise = axios.get( `http://localhost:7001/users/${token}` );
      promise.then( ( res:{ data:UserVo } )=> state.userInfo = res.data )
      return promise;
    }
  },

  getters:{
    USER_INFO( state:any ):UserVo{
      return state.userInfo;
    }
  }
};

export interface UserVo{
  email:string;
  nickname:string;
}