import axios from 'axios';
import Configuration from "../config/config";

export const apiAxios = axios.create();

apiAxios.interceptors.request.use((config) => {
  const baseURL = Configuration.api.hostname;
  return { baseURL, ...config }
})