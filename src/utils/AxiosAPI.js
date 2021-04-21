import axios from "axios";

const instance = axios.create({
  baseURL: "https://assignment-reactjs-co.herokuapp.com",
});

instance.defaults.headers.common["Content-Type"] = "application/json";

export default instance;
