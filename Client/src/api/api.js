import axios from "axios";

// Configurație de bază pentru axios
const API_BASE_URL = "http://localhost:3004/api";

const api = axios.create({
  baseURL: API_BASE_URL,
  headers: {
    "Content-Type": "application/json",
  },
});

// Interceptor pentru logging (opțional)
api.interceptors.request.use(
  (config) => {
    console.log(
      `🚀 Making ${config.method?.toUpperCase()} request to ${config.url}`
    );
    return config;
  },
  (error) => {
    return Promise.reject(error);
  }
);

api.interceptors.response.use(
  (response) => {
    console.log(`✅ Response received:`, response.data);
    return response;
  },
  (error) => {
    console.error(`❌ API Error:`, error.response?.data || error.message);
    return Promise.reject(error);
  }
);

// User API functions
export const userAPI = {
  // Signup user
  signup: async (userData) => {
    try {
      const response = await api.post("/users/signup", userData);
      return { success: true, data: response.data };
    } catch (error) {
      return {
        success: false,
        error: error.response?.data?.message || "Eroare la creare cont",
      };
    }
  },

  // Login user
  login: async (credentials) => {
    try {
      const response = await api.post("/users/login", credentials);
      return { success: true, data: response.data };
    } catch (error) {
      return {
        success: false,
        error: error.response?.data?.message || "Eroare la autentificare",
      };
    }
  },
};

// Budget API functions (pentru viitor)
export const budgetAPI = {
  // Placeholder pentru budget endpoints
  getBudgets: async () => {
    try {
      const response = await api.get("/budget");
      return { success: true, data: response.data };
    } catch (error) {
      return {
        success: false,
        error: error.response?.data?.message || "Eroare la încărcare buget",
      };
    }
  },
};

export default api;
