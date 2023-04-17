import newAxios from "./createAxios";

export const TODO_GET_API = async (todo) => {
    return await newAxios.get(todo);
};
