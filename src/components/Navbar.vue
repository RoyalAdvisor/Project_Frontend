<template>
  <nav class="navbar">
    <div class="nav-item">
      <a href="/" class="nav">
        <router-link :to="{ path: '/' }" class="navbar-brand"
          >Random Store</router-link
        >
      </a>
    </div>
    <div class="nav-item" v-if="currentUser">
      <a href="">
        <router-link :to="{ path: '/Products' }" class="nav-link"
          >Products</router-link
        >
      </a>
      <a href="">
        <router-link :to="{ path: '/Profile' }" class="nav-link"
          >Profile</router-link
        >
      </a>
      <a href="">
        <router-link :to="{ path: '/Cart' }" class="nav-link">Cart</router-link>
      </a>
      <a class="nav-link" @click.prevent="logOut">Logout</a>
    </div>
    <div v-if="!currentUser" class="nav-item">
      <a href="">
        <router-link :to="{ path: '/Login' }" class="nav-link"
          >Login</router-link
        >
      </a>
    </div>
  </nav>
</template>
<script>
export default {
  name: "Navbar",
  computed: {
    currentUser() {
      return this.$store.state.auth.user;
    },
  },
  methods: {
    logOut() {
      this.$store.dispatch("auth/logout");
      this.$router.push("/login");
    },
  },
};
</script>

<style scoped>
.navbar {
  width: 100%;
  padding: 0;
  margin: 0;
  height: 80px;
  display: flex;
  justify-content: space-around;
  align-items: center;
  column-gap: 5rem;
  background: rgba(255, 255, 255, 0.4);
  box-shadow: 0 0px 25px 0 rgba(31, 38, 135, 0.37);
  backdrop-filter: blur(16.5px);
  -webkit-backdrop-filter: blur(16.5px);
}
.nav-link {
  font-size: 20px;
  font-weight: 600;
  color: #000;
  transition: all 0.8s;
}
.navbar-brand {
  font-size: 25px;
  font-weight: 800;
  color: #000;
}
a {
  text-decoration: none;
}
.nav-link:hover {
  color: #fff;
}
.nav-item {
  display: flex;
  justify-content: center;
  align-items: center;
  column-gap: 3rem;
}
</style>
