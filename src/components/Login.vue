<template>
  <section class="login">
    <div class="form-container">
      <header class="form-header">
        <h2>Login</h2>
      </header>
      <Form @submit="handleLogin" :validation-schema="schema">
        <div class="form-group">
          <label for="email">Email</label>
          <Field
            type="text"
            placeholder="Enter email address"
            name="email"
            class="form-control"
          />
          <ErrorMessage name="email" class="error-feedback" />
        </div>
        <div class="form-group">
          <label for="password">Password</label>
          <Field
            type="text"
            placeholder="Enter password"
            name="password"
            class="form-control"
          />
          <ErrorMessage name="password" class="error-feedback" />
        </div>
        <button type="submit">Login</button>
      </Form>
      <div class="register-heading">
        <h4>Don't have an account?</h4>
        <router-link :to="{ path: '/Register' }" class="nav-link"
          >Register</router-link
        >
      </div>
      <div class="messsage">
        <div v-if="message" class="alert alert-danger" role="alert">
          {{ message }}
        </div>
      </div>
    </div>
  </section>
</template>
<script>
import { Form, Field, ErrorMessage } from "vee-validate";
import * as yup from "yup";
export default {
  name: "Login",
  components: {
    Form,
    Field,
    ErrorMessage,
  },
  data() {
    const schema = yup.object().shape({
      email: yup.string().required("Email is required!"),
      password: yup.string().required("Password is required!"),
    });
    return {
      message: "",
      schema,
    };
  },
  computed: {
    loggedIn() {
      return this.$store.state.auth.status.loggedIn;
    },
  },
  created() {
    if (this.loggedIn) {
      this.$router.push("/Profile");
    }
  },
  methods: {
    handleLogin(user) {
      this.$store.dispatch("auth/login", user).then(
        () => {
          this.$router.push("/Profile");
        },
        (error) => {
          this.message =
            (error.response &&
              error.response.data &&
              error.response.data.message) ||
            error.message ||
            error.toString();
        }
      );
    },
  },
};
</script>
<style scoped>
.login {
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  min-height: 100vh;
  min-width: 100%;
}
.form-container {
  position: relative;
  min-width: 30%;
  min-height: 60vh;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  row-gap: 2rem;
  border-radius: 15px;
  background: rgba(255, 255, 255, 0.25);
  box-shadow: 0 8px 50px 0 rgba(31, 38, 135, 0.37);
  backdrop-filter: blur(16.5px);
  -webkit-backdrop-filter: blur(16.5px);
}
.form-header {
  top: 2rem;
}
.form-header h2 {
  font-size: 2.5rem;
  font-weight: 800;
  color: #000;
}
Form {
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  row-gap: 1.5rem;
  width: 90%;
  padding: 20px;
}
.form-group {
  padding: 0;
  margin: 0;
  display: flex;
  width: 100%;
  row-gap: 0.5rem;
  justify-content: center;
  align-items: center;
  flex-direction: column;
}
.form-control {
  width: 80%;
  height: 40px;
  border-radius: 20px;
  outline: none;
  border: none;
  text-align: center;
  font-size: 1rem;
  font-weight: 600;
  background: rgba(255, 255, 255, 0.7);
  box-shadow: 0 8px 32px 0 rgba(31, 38, 135, 0.37);
  backdrop-filter: blur(6px);
  -webkit-backdrop-filter: blur(6px);
  transition: all 0.8s;
}
.form-control:focus {
  background: transparent;
}
.form-control::placeholder {
  text-align: center;
  color: rgba(0, 0, 0, 0.2);
  font-weight: 300;
}
label {
  font-size: 1.4rem;
  color: #000;
  font-weight: 600;
}
button {
  width: 30%;
  outline: none;
  border: none;
  height: 35px;
  font-weight: 600;
  font-size: 1rem;
  border-radius: 20px;
  background: rgba(255, 255, 255, 0.7);
  box-shadow: 0 8px 32px 0 rgba(31, 38, 135, 0.37);
  backdrop-filter: blur(6px);
  -webkit-backdrop-filter: blur(6px);
  transition: all 0.8s;
}
button:hover {
  background: transparent;
  color: #fff;
}
.register-heading h4 {
  font-size: 1rem;
  font-weight: 600;
  color: rgba(0, 0, 0, 0.8);
}
.nav-link {
  font-size: 1rem;
  font-weight: 400;
  color: rgba(0, 0, 0, 0.8);
  transition: all 0.8s;
}
.nav-link:hover {
  color: #fff;
}
</style>
