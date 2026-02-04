import axios from 'axios';

const BASE_URL = 'https://api.escuelajs.co/api/v1/products';

export const productApi = {
  getAll: () => axios.get(BASE_URL),
  create: (data) => axios.post(BASE_URL, data),
  update: (id, data) => axios.put(`${BASE_URL}/${id}`, data),
};