<template>
  <section class="signup">
    <div class="form-container">
      <header class="form-header">
        <h2>Register</h2>
      </header>
      <Form @submit="handleRegister" :validation-schema="schema">
        <div v-if="!successful" class="form-wrapper">
          <div class="form-group">
            <label for="fullname">Fullname</label>
            <Field
              type="text"
              placeholder="Enter fullname"
              name="fullname"
              class="form-control"
            />
            <ErrorMessage name="fullname" class="error-feedback" />
          </div>
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
          <div class="form-group">
            <label for="phone_number">Phone Number</label>
            <Field
              type="text"
              placeholder="Enter phone number"
              name="phone_number"
              class="form-control"
            />
            <ErrorMessage name="phone_number" class="error-feedback" />
          </div>
          <button type="submit">Submit</button>
        </div>
      </Form>
    </div>
  </section>
</template>
<script>
import { Form, Field, ErrorMessage } from "vee-validate";
import * as yup from "yup";
export default {
  name: "Register",
  components: {
    Form,
    Field,
    ErrorMessage,
  },
  data() {
    const schema = yup.object().shape({
      fullname: yup
        .string()
        .required("Username is required!")
        .min(3, "Must be at least 3 characters!")
        .max(20, "Must be maximum 20 characters!"),
      email: yup
        .string()
        .required("Email is required!")
        .email("Email is invalid!")
        .max(50, "Must be maximum 50 characters!"),
      password: yup
        .string()
        .required("Password is required!")
        .min(6, "Must be at least 6 characters!")
        .max(40, "Must be maximum 40 characters!"),
      phone_number: yup
        .string()
        .required("Phone number is required!")
        .min(6, "Must be at least 6 characters!")
        .max(40, "Must be maximum 40 characters!"),
    });
    return {
      successful: false,
      loading: false,
      message: "",
      schema,
    };
  },
  computed: {
    loggedIn() {
      return this.$store.state.auth.status.loggedIn;
    },
  },
  mounted() {
    if (this.loggedIn) {
      this.$router.push("/Profile");
    }
  },
  methods: {
    handleRegister(user) {
      this.message = "";
      this.successful = false;
      this.loading = true;
      this.$store.dispatch("auth/register", user).then(
        (data) => {
          this.message = data.message;
          this.successful = true;
          this.loading = false;
        },
        (error) => {
          this.message =
            (error.response &&
              error.response.data &&
              error.response.data.message) ||
            error.message ||
            error.toString();
          this.successful = false;
          this.loading = false;
        }
      );
    },
  },
};
</script>
<style scoped>
.signup {
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
  min-height: 75vh;
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
.form-wrapper {
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  row-gap: 1.5rem;
  width: 90%;
  padding: 20px;
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
  width: 100%;
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
</style>
