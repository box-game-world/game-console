<template>
  <div>
    <a v-if="!hasToken" href="http://localhost:7000/login">Log in</a>
    <a v-if="hasToken" href="" @click.prevent="logout">Log out</a>
    
  </div>
</template>

<script lang="ts">
import Vue from 'vue'
import Component from 'vue-class-component'
import { mapGetters, mapActions } from 'vuex';

@Component({
  computed: mapGetters( {hasToken:'auth/HAS_ACCESS_TOKEN'} ),
  methods: mapActions( { logout:'auth/LOGOUT'} )
})
export default class Main extends Vue{


}
</script>
