<template>
  <section class="home">
    <Login />
  </section>
</template>

<script>
import Login from "../components/Login.vue";
export default {
  name: "Home",
  components: {
    Login,
  },
};
</script>

<style scoped>
.home {
  width: 100%;
  max-height: 100vh;
}
</style>
