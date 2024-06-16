import axios from 'axios';

const BASE_URL = "http://localhost:8000";

export { BASE_URL };
export const publicRequest = axios.create({
    baseURL: BASE_URL,
});
