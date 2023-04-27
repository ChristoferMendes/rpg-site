import axios from "axios";


const baseURL = import.meta.env.DEV ? import.meta.env.VITE_API_LOCAL : import.meta.env.VITE_API_PROD
export const api = axios.create({ baseURL })
