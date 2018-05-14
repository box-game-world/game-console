

<template>
<div class="game-card-list card-expansion">
  <md-card v-for="item in games" :key="item.code">
      <md-card-header>
        <md-card-header-text>
          <div class="md-title">{{item.name}}</div>
          <div class="md-subhead">{{item.desc}}</div>
        </md-card-header-text>

        <md-card-media md-medium>
          <img src="/assets/examples/card-weather.png" alt="People">
        </md-card-media>
      </md-card-header>

      <md-card-actions>
        <md-button class="md-raised">Detail</md-button>
        <md-button class="md-raised md-primary" >Run</md-button>
      </md-card-actions>
    </md-card>
</div>
</template>


<script lang="ts">
import Vue from 'vue'
import Component from 'vue-class-component' 
import { mapActions, mapGetters } from 'vuex'

@Component({
  computed:{
    ...mapGetters({
      games:'games/GAMES'
    })
  },
  methods:{
    ...mapActions({
      getGamesAll:'games/GET_GAMES_ALL'
    })
  }
})
export default class GameCardList extends Vue{

  public mounted():void{
    ( this as any ).getGamesAll();
  }
}
</script>


<style>
  .md-card {
    margin-bottom: 8px;
  }
</style>


