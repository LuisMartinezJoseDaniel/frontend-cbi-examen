import Axios from "axios";

const axiosClient = Axios.create({
  baseURL: "http://localhost:8080",
});

export default axiosClient;
