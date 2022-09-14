<template>
    <div id="app">
        <demo-12></demo-12>
    </div>
</template>

<script>
import demo12 from "./views/demo12/index.vue";

export default {
    name: "App",
    components: {
        demo12
    },
};
</script>

<style>
#app {
  font-family: "Avenir", Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}
</style>
