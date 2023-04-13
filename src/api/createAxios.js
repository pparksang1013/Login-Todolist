import axios from "axios";

export const newAxios = axios.create({
    baseURL: process.env.REACT_APP_API,
    headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer access_token`,
    },
});
