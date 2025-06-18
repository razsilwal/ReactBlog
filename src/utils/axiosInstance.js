import axios from "axios";
import { baseUrl } from "../config";

const axiosInstance = axios.create({
  baseURL: baseUrl,
});

// Attach access token to request
axiosInstance.interceptors.request.use(
  (config) => {
    const token = localStorage.getItem("access"); // your token key
    if (token) {
      config.headers.Authorization = `Bearer ${token}`;
    }
    return config;
  },
  (error) => Promise.reject(error)
);

// Handle token refresh on 401 response
axiosInstance.interceptors.response.use(
  (response) => response,
  async (error) => {
    const originalRequest = error.config;

    if (
      error.response?.status === 401 &&
      !originalRequest._retry &&
      localStorage.getItem("refresh")
    ) {
      originalRequest._retry = true;

      try {
        const res = await axios.post(`${baseUrl}/token/refresh/`, {
          refresh: localStorage.getItem("refresh"),
        });

        localStorage.setItem("access", res.data.access);

        // Set new access token and retry original request
        originalRequest.headers.Authorization = `Bearer ${res.data.access}`;
        return axiosInstance(originalRequest);
      } catch (refreshError) {
        console.error("Refresh token failed:", refreshError);
        // Clear tokens and redirect to login
        localStorage.removeItem("access");
        localStorage.removeItem("refresh");
        window.location.href = "/login";
        return Promise.reject(refreshError);
      }
    }
    if (error.response?.status === 401) {
      localStorage.removeItem("access");
      localStorage.removeItem("refresh");
      window.location.href = "/login";  // add this redirect here
    }

    return Promise.reject(error);
  }
);

export default axiosInstance;
