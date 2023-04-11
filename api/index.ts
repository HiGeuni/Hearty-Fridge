import axios from "axios";

export const axiosInstance = axios.create({
  baseURL: "/api/v1",
  headers: {
    Accept: "*/*",
    "Content-Type": "application/json",
  },
});
