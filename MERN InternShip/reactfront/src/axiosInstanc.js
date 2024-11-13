import axios from 'axios';
import { baseUrl } from './utils/urls';


const axiosInstance = axios.create({
    baseURL: baseUrl,
    headers: {
        'Content-Type': 'application/json',
        "Access-Control-Allow-Origin": "*"
    },
});


// Add a request interceptor
axiosInstance.interceptors.request.use(
    (config) => {
        const token = localStorage.getItem('token');

        if (token) {
            config.headers['Authorization'] = `${token}`;
        }
        return config;
    },
    (error) => {
        return Promise.reject(error);
    }
);

// Add a response interceptor
axiosInstance.interceptors.response.use(
    (response) => {
        return response;
    },
    (error) => {
        const currentRoute = window.location.href;
        if (error.response && error.response.status === 401 && currentRoute.indexOf("login") == -1
        ) {
            // Handle unauthorized access
            // For example, redirect to login page
            localStorage.removeItem("token");
            window.location.href = '/login';
        }
        return Promise.reject(error);
    }
);


export default axiosInstance;
