import newAxios from "./createAxios";

export const TODO_DELETE_API = async (todo) => {
    return await newAxios.delete(todo);
};
