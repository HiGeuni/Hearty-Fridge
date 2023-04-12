import axios from "axios";

const axiosInstance = axios.create({
  baseURL: "/api/v1",
  headers: {
    Accept: "*/*",
    "Content-Type": "application/json",
  },
});

export default axiosInstance;
