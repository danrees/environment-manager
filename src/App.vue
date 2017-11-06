<template>
  <div id="app">
    <h1>Not default anymore</h1>
    <span>{{msg}}</span>
    <div>{{newEnv.name}}</div>
    <input placeholder="Put an environment name here" v-model="newEnv.name">
    <button v-on:click="addEnv">Add Environment</button>
    <ul>
      <li v-for="env in environments" :key="env.id">{{ env.name }}-{{ env.owner}}</li>
    </ul>
    
  </div>
</template>

<script>
export default {
  name: 'app',
  props: ['msg'],
  data() {
    return {
      owner: "bob",
      newEnv: {name: "starting"}
    }
  },
  methods: {
    addEnv: function(event){
      this.$store.commit('add',{name: this.newEnv.name, id: this.newEnv.id, owner: this.owner});
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
