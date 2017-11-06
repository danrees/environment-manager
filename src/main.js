// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import Vuex from 'vuex'
import App from './App'

Vue.config.productionTip = false
Vue.use(Vuex);

const store = new Vuex.Store({
  state: {
    environments: ["default environment"]
  },
  mutations: {
    add(state,environment) {
      state.environments.push(environment)
    }
  }
});

/* eslint-disable no-new */
new Vue({
  el: '#app',
  store: store,
  template: '<App msg="Just starting" />',
  components: { App }
})
