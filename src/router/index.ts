import Vue from 'vue'
import Router from 'vue-router'
import Main from '../pages/main.vue'
import SignUpComplete from '../pages/sign-up-complete.vue'

Vue.use(Router)
 
export default new Router({
  routes: [
    {
      path: '/',
      name: 'Main',
      component: Main
    },
    {
      path: '/sign-up-complete',
      name: 'SignUpComplete',
      component: SignUpComplete
    },
  ]
})
