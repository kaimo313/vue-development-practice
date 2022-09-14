<template>
    <div id="app">
        <demo-11></demo-11>
    </div>
</template>

<script>
import demo11 from "./views/demo11/index.vue";

export default {
    name: "App",
    components: {
        demo11
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
