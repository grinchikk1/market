import axios from "axios";

export const API_URL = "http://127.0.0.1:8000/";

const api = axios.create({
  // withCredentials: true,
  baseURL: API_URL,
});

api.interceptors.request.use((config) => {
  const token = sessionStorage.getItem("token");
  if (token) {
    config.headers.Authorization = `Bearer ${token}`;
  }
  return config;
});

// api.interceptors.response.use(
//   (config) => {
//     return config;
//   },
//   async (error) => {
//     const originalRequest = error.config;
//     if (
//       error.response.status === 401 &&
//       error.config &&
//       !error.config._isRetry
//     ) {
//       originalRequest._isRetry = true;
//       try {
//         const response = await axios.get(API_URL);
//         sessionStorage.setItem("token", response.data.access);
//         return api.request(originalRequest);
//       } catch (error) {
//         console.log("Не Авторизовано");
//       }
//     }
//     throw error;
//   },
// );

export default api;
