import axios from 'axios';
import { API_BASE_URL } from './apiConfig';

// Create axios instance
const axiosInstance = axios.create({
  baseURL: API_BASE_URL,
  timeout: 10000,
  headers: {
    'Content-Type': 'application/json',
  }
});

// Request interceptor
axiosInstance.interceptors.request.use(
  (config) => {
    // Add token if available
    const token = localStorage.getItem('token');
    if (token) {
      config.headers.Authorization = `Bearer ${token}`;
    }
    
    console.log('🚀 API Request:', {
      method: config.method.toUpperCase(),
      url: config.url,
      baseURL: config.baseURL,
      data: config.data
    });
    
    return config;
  },
  (error) => {
    console.error('❌ Request Error:', error);
    return Promise.reject(error);
  }
);

// Response interceptor
axiosInstance.interceptors.response.use(
  (response) => {
    console.log('✅ API Response:', {
      status: response.status,
      url: response.config.url,
      data: response.data
    });
    return response;
  },
  (error) => {
    console.error('❌ API Error:', {
      status: error.response?.status,
      url: error.config?.url,
      message: error.response?.data?.message || error.message,
      data: error.response?.data,
      fullError: error
    });
    
    // Handle specific errors
    if (error.response?.status === 401) {
      console.warn('⚠️  Unauthorized - Token may be invalid');
      localStorage.removeItem('token');
      localStorage.removeItem('user');
    }
    
    if (error.response?.status === 500) {
      console.error('⚠️  Server Error (500) - Backend issue');
    }
    
    return Promise.reject(error);
  }
);

export default axiosInstance;
