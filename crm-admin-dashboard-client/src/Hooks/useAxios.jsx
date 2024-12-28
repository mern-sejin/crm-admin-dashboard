import axios from 'axios';
const axiosPublic = axios.create({
    baseURL: import.meta.env.SERVER_URL,
    withCredentials: true,
});
export const useAxios = () => {
    return { axiosPublic };
};