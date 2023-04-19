import newAxios from "./createAxios";

export const TODO_POST_API = async (todo) => {
    return await newAxios.post("/todos", todo);
};

export const TODO_PUT_API = async (todo, body) => {
    return await newAxios.put(todo, body);
};

export const TODO_GET_API = async (todo) => {
    return await newAxios.get(todo);
};

export const TODO_DELETE_API = async (todo) => {
    return await newAxios.delete(todo);
};
