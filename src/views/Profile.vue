<template>
  <section class="profile">
    <div class="profile-container">
      <header class="profile-header">
        <h2>Profile</h2>
      </header>
      <div class="profile-wrapper">
        <div class="profile-content">
          <div class="profile-image">
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512">
              <path
                d="M224 256c70.7 0 128-57.31 128-128s-57.3-128-128-128C153.3 0 96 57.31 96 128S153.3 256 224 256zM274.7 304H173.3C77.61 304 0 381.6 0 477.3c0 19.14 15.52 34.67 34.66 34.67h378.7C432.5 512 448 496.5 448 477.3C448 381.6 370.4 304 274.7 304z"
              />
            </svg>
          </div>
          <div class="profile-description">
            <div class="item">
              <h4>Fullname</h4>
              <span>{{ currentUser.fullname }}</span>
            </div>
            <div class="item">
              <h4>Email</h4>
              <span>{{ currentUser.email }}</span>
            </div>
            <div class="item">
              <h4>Contact No</h4>
              <span>{{ currentUser.phone_number }}</span>
            </div>
            <div class="item">
              <h4>User ID</h4>
              <span>{{ currentUser._id }}</span>
            </div>
            <div class="item">
              <h4>Token</h4>
              <span>
                {{ currentUser.accessToken.substring(0, 20) }} ...
                {{
                  currentUser.accessToken.substr(
                    currentUser.accessToken.length - 20
                  )
                }}</span
              >
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script>
export default {
  name: "Profile",
  computed: {
    currentUser() {
      return this.$store.state.auth.user;
    },
  },
  mounted() {
    if (!this.currentUser) {
      this.$router.push("/Login");
    }
  },
};
</script>
<style scoped>
.profile {
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  width: 100%;
}

.profile-header h2 {
  font-size: 2.5rem;
  font-weight: 800;
  color: #000;
  margin: 2rem 0;
}
.profile-container {
  padding: 0;
  position: relative;
  width: 90%;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  row-gap: 2rem;
  border-radius: 15px;
}
.profile-wrapper {
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: row;
  flex-wrap: wrap;
  width: 100%;
  gap: 2rem;
}
.profile-content {
  width: 60%;
  display: flex;
  justify-content: space-around;
  align-items: center;
  column-gap: 1rem;
  padding: 15px;
  border-radius: 15px;
  background: rgba(255, 255, 255, 0.25);
  box-shadow: 0 8px 50px 0 rgba(31, 38, 135, 0.37);
  backdrop-filter: blur(16.5px);
  -webkit-backdrop-filter: blur(16.5px);
}
.profile-image {
  padding: 20px;
  width: 40%;
  display: flex;
  justify-content: center;
  align-items: center;
}
.profile-image svg {
  width: 50%;
}
.profile-description {
  width: 50%;
  display: flex;
  justify-content: center;
  align-items: flex-start;
  flex-direction: column;
  row-gap: 1.5rem;
}
.item {
  width: 100%;
  display: flex;
  justify-content: space-between;
  align-items: center;
  flex-direction: row;
}
.item h4 {
  color: #000;
}
.item span {
  color: #000;
  font-weight: 600;
}
</style>
