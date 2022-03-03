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
            <div class="content-item">
              <h5>Title</h5>
              <span>{{ product.title }}</span>
            </div>
            <div class="content-item">
              <h5>Price</h5>
              <span>{{ product.price }}</span>
            </div>
            <div class="crud-buttons">
              <MDBBtn color="primary">Edit</MDBBtn>
              <MDBBtn color="danger" @click="deleteProduct(product._id)"
                >Delete</MDBBtn
              >
              <MDBBtn color="success">Add To Cart</MDBBtn>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>
<script>
import { MDBBtn } from "mdb-vue-ui-kit";
import axios from "axios";
import UserService from "../services/userService";
import addProductModal from "./addProductModal.vue";
const url = "https://complete-rest-api.herokuapp.com/api/products/";
export default {
  name: "Products",
  components: {
    addProductModal,
    MDBBtn,
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
    deleteProduct(id) {
      const config = {
        headers: {
          "Content-type": "application/json; charset=UTF-8",
          Authorization: `Bearer ${
            JSON.parse(localStorage.getItem("user")).accessToken
          }`,
        },
      };
      let API = `${url}${id}`;
      let indexOfArrayItem = this.products.findIndex((i) => i._id === id);
      if (window.confirm("Do you really want to delete?")) {
        axios
          .delete(API, config)
          .then(() => {
            this.products.splice(indexOfArrayItem, 1);
          })
          .catch((error) => {
            console.log(error);
          });
      }
    },
    editProduct() {
      if (!localStorage.getItem("user")) {
        alert("User not found");
        this.$router.push("/Login");
        return;
      }
      fetch(`${url}`, {
        method: "PUT",
        body: JSON.stringify({
          title: this.title,
          catergory: this.catergory,
          description: this.description,
          image: this.image,
          price: this.price,
        }),
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${
            JSON.parse(localStorage.getItem("user")).accessToken
          }`,
        },
      })
        .then((res) => res.json())
        .then(() => {
          alert("Successfully created a new product");
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
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: row;
  column-gap: 0.5rem;
  width: 100%;
}
.delete {
  z-index: 2;
}
</style>
