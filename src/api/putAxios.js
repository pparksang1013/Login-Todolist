import newAxios from "./createAxios";

export const TODO_PUT_API = async (todo, body) => {
    return await newAxios.put(todo, body);
};
