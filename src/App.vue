<template>
  <Navbar />
  <router-view :key="$route.fullpath" />
</template>

<script>
import Navbar from "./components/Navbar.vue";
export default {
  name: "app",
  components: {
    Navbar,
  },
};
</script>

<style>
#app {
  font-family: "Poppins", sans-serif;
  text-align: center;
  color: #2c3e50;
}

body {
  background: linear-gradient(to right, #ff00cc, #333399);
  color: #ffffff;
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}
</style>
