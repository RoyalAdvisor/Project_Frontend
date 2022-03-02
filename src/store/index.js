import { createStore } from "vuex";
import { auth } from "./auth.Model";
const store = createStore({
  modules: {
    auth,
  },
});
export default store;

// export default createStore({
//   state: {
//   },
//   mutations: {
//   },
//   actions: {
//   },
//   modules: {
//   }
// })
