<template>
  <div id="app">
    <h1>count：{{count}}</h1>
    <h2>doubleCount：{{$store.getters.doubleCount}}</h2>
    <button @click="$store.commit('increment')">commit：count++</button>
    <button @click="$store.dispatch('increment')">dispatch：count++</button>
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
