import axios from 'axios';

const BASE_URL = "https://tiny-link-server.vercel.app";

// export { BASE_URL };
export const publicRequest = axios.create({
    baseURL: BASE_URL,
});
