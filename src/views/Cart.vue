<template>
  <!-- <section class="cart">
    <div class="cart-container">
      <header class="cart-header">
        <h2>Cart</h2>
      </header>
      <div class="Product">
        <h3 class="product-name" alt="" src>product</h3>
        <p class="product-description">description</p>
        <button class="cart-button">-</button>
        <div class="cart-quantity">0</div>
        <button class="cart-button">+</button>
      </div>
    </div>
  </section> -->
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
  mounted() {
    UserService.getPublicContent().then(
      (response) => {
        this.products = response.data;
      },
      (error) => {
        this.products =
          (error.response &&
            error.response.data &&
            error.response.data.message) ||
          error.message ||
          error.toString();
      }
    );
  },
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
.cart {
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  width: 100%;
  background-color: rgb(134, 126, 126);
  height: 100vh;
}
.cart-header h2 {
  font-size: 2.5rem;
  font-weight: 800;
  color: #000;
}
.cart-container {
  padding: 0;
  position: relative;
  width: 90%;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  row-gap: 2rem;
  border-radius: 15px;
  background: rgb(184, 184, 195);
  height: 90vh;
}
</style>
