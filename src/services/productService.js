import axios from "axios";
const API_URL = "https://complete-rest-api.herokuapp.com/api/products/";
export default {
  create(id, data) {
    return axios.post(`${API_URL} + ${id}`, data);
  },
  update(id, data) {
    return axios.put(`${API_URL} + ${id}`, data);
  },
  delete(id) {
    return axios.delete(`${API_URL} + ${id}`);
  },
};
