<template>
  <div id="app" class="container">
    <router-view :auth="auth" :authenticated="authenticated" ></router-view>
    <h1 class="title is-2">Environment Manager</h1>
    <button v-if="!authenticated" @click="login()">Login</button>
    <button v-else @click="logout()">Logout</button>
    <div>
     
    <environments />
    </div>
    
  </div>
</template>

<script>
import Environments from './components/Environments'
import AuthService from './auth/AuthService.js'

const auth = new AuthService()
const { login, logout, authenticated, authNotifier } = auth

export default {
  name: 'app',
  data () {
    authNotifier.on('authChange', authState => {
      this.authenticated = authState.authenticated
    })
    return {
      auth,authenticated
    }
  },
  computed: {
    environments() {
      return this.$store.state.environments;
    }
  },
  components: {
    Environments
  },
  methods: {
    login,logout
  }
  
}
</script>

<style>

</style>
