import { useNavigate } from "react-router-dom";

import newAxios from "./createAxios";

export const SIGN_UP_POST_API = async (email, password) => {
    return await newAxios.post("/auth/signup", { email, password });
};

export const SIGN_IN_POST_API = async (email, password) => {
    return await newAxios.post("/auth/signin", { email, password });
};

export const TODO_POST_API = async (todo) => {
    return await newAxios.post("/todos", todo);
};
