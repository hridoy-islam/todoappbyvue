<template>
  <div id="app">
    <Task />
  </div>
</template>

<script>
import Task from "./components/Task";
export default {
  name: "App",
  components: {
    Task,
  },
  data() {
    return {};
  },
};
</script>

<style>
#app {
  font-family: "Avenir", Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  color: #2c3e50;
  margin-top: 80px;
  width: 400px;
  margin: 0 auto;
}
</style>
