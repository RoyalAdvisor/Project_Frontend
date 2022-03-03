import axios from "axios";
const API_URL = "https://complete-rest-api.herokuapp.com/api/users/";
class AuthService {
  async login(user) {
    const response = await axios.post(`${API_URL}login`, {
      email: user.email,
      password: user.password,
    });
    if (response.data.accessToken) {
      console.log(response.data);
      localStorage.setItem("user", JSON.stringify(response.data));
    }
    return response.data;
  }
  logout() {
    localStorage.removeItem("user");
  }
  register(user) {
    return axios.post(`${API_URL}register`, {
      fullname: user.fullname,
      email: user.email,
      password: user.password,
      phone_number: user.phone_number,
    });
  }
}
export default new AuthService();
