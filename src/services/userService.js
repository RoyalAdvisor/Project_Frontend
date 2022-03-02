import axios from "axios";
import authHeader from "./authHeader";
const API_URL = "https://complete-rest-api.herokuapp.com/api/";
export default {
  getPublicContent() {
    return axios.get(`${API_URL}products`, { headers: authHeader() });
  },
};
