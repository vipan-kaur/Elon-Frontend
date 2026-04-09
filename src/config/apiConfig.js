/**
 * API Configuration
 * Switches between local and live API using environment variables
 * Uses OR operator logic for fallback
 */

const API_LOCAL = import.meta.env.VITE_API_LOCAL || "http://localhost:3000";
const API_LIVE = import.meta.env.VITE_API_LIVE || "https://elon-backend-1111.onrender.com";
const USE_LOCAL = import.meta.env.VITE_USE_LOCAL === "true";

// Use OR operator logic: if local is enabled OR live is not available, use local
export const API_BASE_URL = USE_LOCAL ? API_LOCAL : API_LIVE;

// Individual endpoint URLs
export const API_ENDPOINTS = {
  // Product endpoints
  GET_PRODUCTS: `${API_BASE_URL}/api/products`,
  GET_PRODUCTS_MEN: `${API_BASE_URL}/api/products/men`,
  GET_PRODUCTS_WOMEN: `${API_BASE_URL}/api/products/women`,
  GET_PRODUCTS_KIDS: `${API_BASE_URL}/api/products/kids`,
  GET_PRODUCT_BY_ID: (id) => `${API_BASE_URL}/api/getById/${id}`,
  CREATE_PRODUCT: `${API_BASE_URL}/api/createProduct`,
  UPDATE_PRODUCT: (id) => `${API_BASE_URL}/api/updateProduct/${id}`,
  DELETE_PRODUCT: (id) => `${API_BASE_URL}/api/deleteProduct/${id}`,
  
  // Auth endpoints
  AUTH_VERIFY: `${API_BASE_URL}/api/auth/verify`,
  AUTH_LOGIN: `${API_BASE_URL}/api/auth/login`,
  AUTH_SIGNUP: `${API_BASE_URL}/api/auth/signup`,
  AUTH_LOGOUT: `${API_BASE_URL}/api/auth/logout`,
  AUTH_PROFILE: (id) => `${API_BASE_URL}/api/auth/profile/${id}`,
  AUTH_UPDATE_PROFILE: (id) => `${API_BASE_URL}/api/auth/update-profile/${id}`,
};

console.log(`🚀 API Base URL: ${API_BASE_URL} (${USE_LOCAL ? "LOCAL" : "LIVE"})`);

// Helper function for image URLs
export const getImageUrl = (imagePath) => {
  return `${API_BASE_URL}/uploads/${imagePath}`;
};

export default API_BASE_URL;
