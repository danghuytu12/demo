import axios from 'axios';

export const HTTP = axios.create({
  baseURL: `https://62e92196249bb1284ebb1e82.mockapi.io/api/vi`,
})