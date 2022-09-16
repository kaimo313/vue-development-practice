<template>
  <div id="app">
    <h1>count：{{count}}</h1>
    <button @click="$store.commit('increment')">min-vuex--commit：count++</button>
  </div>
</template>

<script>

export default {
  name: 'app',
  computed: {
    count() {
      return this.$store.state.count
    }
  }
}
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
