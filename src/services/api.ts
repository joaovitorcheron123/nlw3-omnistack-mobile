import axios from 'axios';

const api = axios.create({
  baseURL: 'exp://192.168.0.13',
});

export default api;