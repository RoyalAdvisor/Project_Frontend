<template>
  <section class="cart">
    <div class="cart-container">
      <header class="cart-header">
        <h2>Cart</h2>
      </header>
    </div>
  </section>
</template>
<script>
export default {
  name: "Cart",
};
</script>
<style scoped>
.cart {
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  width: 100%;
  background-color: red;
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
  background: blue;
  height: 90vh;
}
</style>
