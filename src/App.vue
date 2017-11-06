<template>
  <div id="app">
    <h1>Not default anymore</h1>
    <span>{{msg}}</span>
  </div>
</template>

<script>
export default {
  name: 'app',
  props: ['msg']
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
