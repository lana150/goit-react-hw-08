import axios from "axios";

const api = axios.create({
  baseURL: "https://connections-api.goit.global",
});

// Додаємо токен в заголовки
export const setAuthHeader = (token) => {
  api.defaults.headers.common.Authorization = `Bearer ${token}`;
};

// Очищаємо токен
export const clearAuthHeader = () => {
  api.defaults.headers.common.Authorization = "";
};

export default api;



/*import axios from "axios";

const api = axios.create({
  baseURL: "https://connections-api.goit.global",
});

export default api;*/