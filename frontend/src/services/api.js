import axios from 'axios';

const API_URL = process.env.REACT_APP_API_URL || 'http://localhost:1337';

const api = axios.create({
  baseURL: API_URL,
  headers: {
    'Content-Type': 'application/json',
  },
});

export const getPages = async () => {
  const response = await api.get('/api/pages');
  return response.data;
};

export const getPageBySlug = async (slug) => {
  const response = await api.get(`/api/pages/slug/${slug}`);
  return response.data;
};

export const getPageById = async (id) => {
  const response = await api.get(`/api/pages/${id}`);
  return response.data;
};

export default api; 