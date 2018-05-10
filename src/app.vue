<template>
  <div id="app">
    <router-view/>
  </div>
</template>

<script lang="ts">
import Vue from 'vue'
import Component from 'vue-class-component'
import { mapMutations } from 'vuex'
import 'vue-material/dist/vue-material.min.css'
import 'vue-material/dist/theme/default.css'

@Component({

  methods:{
    ...mapMutations({
      updateAccessToken:'auth/UPDATE_ACCESS_TOKEN'
    })
  }
})
export default class App extends Vue{
  public created():void{
    ( this as any ).updateAccessToken(); 
  }
}
</script>

<style>
  #app{
    padding: 1em;
  }
</style>
