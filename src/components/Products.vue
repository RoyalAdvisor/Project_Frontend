<template>
  <section class="products">
    <div class="product-container">
      <header class="product-header">
        <h2>Products</h2>
      </header>
      <div class="slider">
        <Splide :options="{ rewind: true }" class="splide-container">
          <SplideSlide
            v-for="product in products"
            :key="product.id"
            class="splide-slide"
          >
            <div class="splide-card">
              <div class="card-image">
                <img :src="product.image" :alt="product.id" />
              </div>
              <div class="card-content">
                <p>{{ product.title }}</p>
                <p></p>
                <p>{{ product.catergory }}</p>
                <p></p>
                <p>{{ product.description }}</p>
                <p>{{ product.price }}</p>
              </div>
            </div>
          </SplideSlide>
        </Splide>
      </div>
    </div>
  </section>
</template>
<script>
import "@splidejs/splide/dist/css/splide.min.css";
import { Splide, SplideSlide } from "@splidejs/vue-splide";
import UserService from "../services/userService";

export default {
  name: "Products",
  components: {
    Splide,
    SplideSlide,
  },
  data() {
    return {
      products: [],
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
};
</script>
<style scoped>
.products {
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  min-height: 100vh;
  min-width: 100%;
}
.product-header {
  position: absolute;
  top: 2rem;
}
.product-header h2 {
  font-size: 2.5rem;
  font-weight: 800;
  color: #000;
  margin: 2rem 0;
}
.product-container {
  padding: 0;
  position: relative;
  min-width: 80%;
  min-height: 85vh;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  row-gap: 2rem;
  border-radius: 15px;
  background: transparent;
}
.slider {
  width: 90%;
}

.splide-slide {
  width: 80%;
  min-height: 50vh;
  margin: 2rem 0;
  display: flex;
  justify-content: center;
  align-items: center;
}
.splide-card {
  width: 40%;
  min-height: 50vh;
  margin: 2rem 0;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  border-radius: 15px;
  background: rgba(255, 255, 255, 0.25);
  box-shadow: 0 8px 50px 0 rgba(31, 38, 135, 0.37);
  backdrop-filter: blur(16.5px);
  -webkit-backdrop-filter: blur(16.5px);
}
</style>
