import { createApp } from "vue";
import App from "./App.vue";
import store from "./store";
import router from "./router";
import "mdb-vue-ui-kit/css/mdb.min.css";

createApp(App).use(router).use(store).mount("#app");
