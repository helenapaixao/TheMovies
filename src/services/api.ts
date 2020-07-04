import axios from 'axios';

const API_TOKEN = process.env.REACT_APP_API_TOKEN || 'api-token';
axios.defaults.headers.common = { Authorization: `Bearer ${API_TOKEN}` };

const api = axios.create({
  baseURL: 'https://api.themoviedb.org/3',
});

export default api;
