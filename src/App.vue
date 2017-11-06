<template>
  <div id="app">
    <h1>Not default anymore</h1>
    <span>{{msg}}</span>
    <div>{{newEnv}}</div>
    <input placeholder="Put an environment name here" v-model="newEnv">
    <button v-on:click="addEnv">Add Environment</button>
    <ul>
      <li v-for="env in environments" :key="env">{{ env }}</li>
    </ul>
    
  </div>
</template>

<script>
export default {
  name: 'app',
  props: ['msg'],
  data() {
    return {
      newEnv: 'Starting'
    }
  },
  methods: {
    addEnv: function(event){
      this.$store.commit('add',this.newEnv);
    }
  },
  computed: {
    environments() {
      return this.$store.state.environments;
    }
  }
}
</script>

<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
