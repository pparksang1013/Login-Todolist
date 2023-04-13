import { newAxios } from "./createAxios";

export const signupAPI = (email, password) => {
    return newAxios.post("/auth/signup", { email, password });
};

export const signinAPI = (email, password) => {
    return newAxios.post("/auth/signin", { email, password });
};
