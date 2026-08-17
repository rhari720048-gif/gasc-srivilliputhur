// API Configuration for GASC Srivilliputhur Frontend
// Connects to Render backend in production and supports local development

export const API_BASE_URL = import.meta.env.VITE_API_URL || 'https://gasc-srivilliputhur-1.onrender.com';

export const getApiUrl = (path) => {
  const cleanPath = path.startsWith('/') ? path : `/${path}`;
  return `${API_BASE_URL}${cleanPath}`;
};
