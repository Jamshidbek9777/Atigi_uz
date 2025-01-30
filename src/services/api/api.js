import axios from "axios";
import Cookies from "js-cookie";

export const api = axios.create({
  baseURL: import.meta.env.VITE_BACK_URL,
  headers: {
    "Content-Type": "application/json",
  },
});

api.interceptors.request.use((config) => {
  const accessToken = Cookies.get("access-token");
  if (accessToken) {
    config.headers.Authorization = `Bearer ${accessToken}`;
  }
  return config;
});
