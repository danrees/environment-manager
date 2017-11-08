// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import Vuex from 'vuex'
import Router from 'vue-router'
import App from './App'
import AuthService from './auth/AuthService'
import Home from './components/Home.vue'
import Callback from './components/Callback.vue'

Vue.config.productionTip = false
Vue.use(Vuex);
Vue.use(Router)

const router = new Router({
  mode: 'history',
  routes: [
    {
      path: '/home',
      name: 'Home',
      component: Home
    },
    {
      path: '/callback',
      name: 'Callback',
      component: Callback
    },
    {
      path: '*',
      redirect: '/home'
    }
  ]
})

const store = new Vuex.Store({
  state: {
    environments: [{name: "Test", id: "test", owner: "Bob2"}],
    owner: "Bob1"
  },
  mutations: {
    add(state,environment) {
      state.environments.push(environment)
    },
    CLAIM(state,owner,environment){
      environment.owner = owner
    }
  }
});

/* eslint-disable no-new */
new Vue({
  el: '#app',
  store,
  router,
  template: '<App />',
  components: { App }
})
