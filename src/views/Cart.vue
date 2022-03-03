<template>
  <section class="Cart-container">
    <div class="cart">
      <h1 class="title">Your Cart</h1>
      <p v-show="!products.length">
        <i>Your cart is empty!</i>
        <router-link to="/Products">Go shopping</router-link>
      </p>
      <table class="table is-striped" v-show="products.length">
        <thead>
          <tr>
            <td>Name</td>
            <td>Price</td>
            <td>Quantity</td>
          </tr>
        </thead>
        <tbody>
          <tr v-for="p in products">
            <td>{{ p.name }}</td>
            <td>${{ p.price }}</td>
            <td>{{ p.quantity }}</td>
          </tr>
          <tr>
            <td><b>Total:</b></td>
            <td></td>
            <td>
              <b>${{ total }}</b>
            </td>
          </tr>
        </tbody>
      </table>
      <p>
        <button
          v-show="products.length"
          class="button is-primary"
          @click="checkout"
        >
          Checkout
        </button>
      </p>
    </div>
  </section>
</template>
<script>
export default {
  name: "Cart",

  data() {
    return {
      products: [],
      title: "",
    };
  },
  // mounted() {
  //   UserService.getPublicContent().then(
  //     (response) => {
  //       this.products = response.data;
  //     },
  //     (error) => {
  //       this.products =
  //         (error.response &&
  //           error.response.data &&
  //           error.response.data.message) ||
  //         error.message ||
  //         error.toString();
  //     }
  //   );
  // },
  total() {
    return this.products.reduce((total, p) => {
      return total + p.price * p.quantity;
    }, 0);
  },
  methods: {
    checkout() {
      alert("Pay us $" + this.total);
    },
  },
};
</script>

<style scoped>
.Cart {
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  width: 100%;
  font-weight: 800;
  color: #000;
}
.Cart-container {
  padding: 0;
  position: relative;
  width: 98%;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  row-gap: 2rem;
  border-radius: 15px;
  background: rgb(184, 184, 195);
  height: 90vh;
  margin: 0.5rem 0.5rem 0.5rem;
}
</style>
