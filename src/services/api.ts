import axios, { AxiosInstance } from 'axios';


const BASE_URL = 'http://127.0.0.1:8080/quiz';
const TIMEOUT = 5000;

export const createApi = ():AxiosInstance => {
  const api = axios.create({
    baseURL: BASE_URL,
    timeout: TIMEOUT,
  });
  return api;
};
