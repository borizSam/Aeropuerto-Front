import axios from "axios";

const api = axios.create({
  baseURL: "http://18.198.187.5:8080/api", 

});

export default api;
