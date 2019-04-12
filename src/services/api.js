import axios from "axios";

const api = axios.create({
  baseURL: "https://demonbox-api.herokuapp.com"
});

export default api;
