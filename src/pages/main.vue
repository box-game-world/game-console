<template>
  <div>
    <a v-if="!accessToken" href="http://localhost:7000/login">Sign in</a>
    <a v-if="accessToken" href="" @click.prevent="signOut">Sign out</a>
    <span v-if="userInfo">Hello {{ userInfo.nickname }}</span>
    <sign-up-form v-if="!accessToken"></sign-up-form>
    <game-card-list></game-card-list>
  </div>
</template>

<script lang="ts">
import Vue from 'vue'
import Component from 'vue-class-component'
import { mapGetters, mapActions } from 'vuex';

import SignUpForm from '../components/sign-up-form/index.vue'
import GameCardList from '../components/game-card-list/index.vue'

@Component({
  computed: {
    ...mapGetters( {
      accessToken:'auth/ACCESS_TOKEN',
      userInfo:'users/USER_INFO',
    } )
  },

  methods: {
    ...mapActions( { 
      signOut:'auth/SIGN_OUT',
      getUserInfo:'users/GET_USER_INFO_BY_TOKEN',
    } )
  },

  components:{
    SignUpForm,
    GameCardList
  }
  
})
export default class Main extends Vue{

  public created():void{
    this['getUserInfo']( { token:this[ 'accessToken' ] } );
  }
}
</script>
