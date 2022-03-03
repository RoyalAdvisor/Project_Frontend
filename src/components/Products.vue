<template>
  <section class="products">
    <div class="product-container">
      <header class="product-header">
        <h2>Products</h2>
      </header>
      <addProductModal />
      <div class="card-wrapper">
        <div class="card" v-for="product in products" :key="product._id">
          <div class="card-image">
            <img :src="product.image" :alt="product._id" />
          </div>
          <div class="card-content">
            <editProductModal />
            <div class="content-item">
              <h5>Title</h5>
              <span>{{ product.title }}</span>
            </div>
            <!-- <div class="content-item">
              <h5>Catergory</h5>
              <span>{{ product.catergory }}</span>
            </div>
            <div class="content-item">
              <h5>Description</h5>
              <span>{{ product.description }}</span>
            </div> -->
            <div class="content-item">
              <h5>Price</h5>
              <span>{{ product.price }}</span>
            </div>
            <div class="crud-buttons">
              <!-- <button type="button" class="delete">Delete</button>
              <button type="button" class="addToCart">Add to cart</button> -->
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>
<script>
import UserService from "../services/userService";
import addProductModal from "./addProductModal.vue";
import editProductModal from "./editProductModal.vue";
export default {
  name: "Products",
  components: {
    addProductModal,
    editProductModal,
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
  methods: {
    deleteProduct() {
      if (!localStorage.getItem("user")) {
        alert("User not found");
        this.$router.push("/Login");
        return;
      }
      fetch(`${url}`, {
        method: "DELETE",
        body: JSON.stringify({}),
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${
            JSON.parse(localStorage.getItem("user")).accessToken
          }`,
        },
      })
        .then((res) => res.json())
        .then(() => {
          alert("Successfully deleted product");
          this.$router.push("/Products");
        });
    },
  },
};
</script>
<style scoped>
.products {
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  width: 100%;
}
.product-header h2 {
  font-size: 2.5rem;
  font-weight: 800;
  color: #000;
  margin-top: 2rem;
}
.product-container {
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
.card-wrapper {
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: row;
  flex-wrap: wrap;
  width: 100%;
  gap: 2rem;
}
.card {
  z-index: -1;
  width: 25%;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  padding: 15px;
  border-radius: 15px;
  row-gap: 1rem;
  background: rgba(255, 255, 255, 0.25);
  box-shadow: 0 8px 50px 0 rgba(31, 38, 135, 0.37);
  backdrop-filter: blur(16.5px);
  -webkit-backdrop-filter: blur(16.5px);
  color: #000;
}

.card-image {
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
}
.card-image img {
  width: 100%;
  object-fit: cover;
  border-radius: 15px;
}
.card-content {
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  width: 100%;
  line-height: 15px;
}
.content-item {
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: flex-start;
  flex-direction: column;
}
.crud-buttons {
  margin: 1rem 0;
}
.delete {
  z-index: 2;
}
</style>
