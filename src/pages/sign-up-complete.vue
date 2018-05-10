<template>
<div>
  <div>
    <h1>
      <p>Thank you</p>
      <p><small>회원가입이 완료 되었습니다.</small></p>
    </h1>
  </div>
  <div class="md-layout">
    <md-button class="md-layout-item md-alignment-top-center md-raised md-primary" href="http://localhost:7000/login">sign in</md-button>
  </div>
</div>
</template>


<script lang="ts">
import Vue from 'vue'
import Component from 'vue-class-component'

@Component({})
export default class SignUpComplete extends Vue {

}
</script>

<style scoped>

h1{
  text-align: center;
}
</style>

