import axios from "axios";

const newAxios = axios.create({
    baseURL: process.env.REACT_APP_API,
    headers: {
        "Content-Type": "application/json",
    },
});

newAxios.interceptors.request.use(
    (config) => {
        if (config.headers) {
            config.headers["Authorization"] = `Bearer ${localStorage.getItem(
                "access_token"
            )}`;

            return config;
        }
    },
    (error) => {
        console.log(error);
        return Promise.reject(error);
    }
);

export default newAxios;
