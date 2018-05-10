

<template>
<div class="sign-up-form">
  <md-field>
    <label>Email</label>
    <md-input v-model="email"></md-input>
  </md-field>
  <md-field>
    <label>Nickname</label>
    <md-input v-model="nickname"></md-input>
  </md-field>
  <md-field :md-toggle-password="false">
    <label>Password</label>
    <md-input v-model="password" type="password"></md-input>
  </md-field>
  <md-field v-if="password" :md-toggle-password="false">
    <label>Confirm Password</label>
    <md-input v-model="confirmPassword" type="password" @focus="confirmPassword=''"></md-input>
  </md-field>
  
  <div class="md-layout md-gutter"> 
    <md-button class="md-layout-item md-alignment-top-center md-raised md-primary" @click="validationData()">sign up</md-button>
  </div>
</div>
</template>


<script lang="ts">
import Vue from 'vue'
import Component from 'vue-class-component' 
import { mapActions } from 'vuex'

@Component({

  methods:{
    ...mapActions({
      signUp:'auth/SIGN_UP'
    })
  }
})
export default class SignUpForm extends Vue{

  public email:string = '';  
  public nickname:string = '';
  public password:string = '';
  public confirmPassword:string = '';

  public validationData():void{
    console.log( this );
    if( !this.email ){
      alert( '이메일을 입력해주세요.' );
      return;
    }

    if( !this.nickname ){
      alert( '닉네임을 입력해주세요.' );
      return;
    }

    if( !this.password ){
      alert( '비밀번호를 입력해주세요.' );
      return;
    }

    if( this.password !== this.confirmPassword ){
      alert( '비밀번호를 확인해주세요.' );
      return;
    }

    ( this as any ).signUp( { email:this.email, nickname:this.nickname, password:this.password } ).then( res=> this.$router.push( 'sign-up-complete') );
  }
}
</script>


<style>

</style>


