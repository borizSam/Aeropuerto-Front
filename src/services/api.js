import axios from "axios";

const api = axios.create({
  baseURL: "http://18.199.86.241:8080/api",

});

export default api;
