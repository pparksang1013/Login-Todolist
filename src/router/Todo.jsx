import { useEffect, useState } from "react";
import styled from "styled-components";
import { Link } from "react-router-dom";

// API
import { TODO_GET_API } from "../api/todoAxios";

// HOOKS
import useRedirect from "../hooks/useRedirect";

// COMPONENT
import TodoForm from "../components/todo/TodoForm";
import TodoList from "../components/todo/TodoList";

function Todo() {
    useRedirect("/signin");

    const [todos, setTodos] = useState([]);

    useEffect(() => {
        if (localStorage.getItem("access_token")) {
            TODO_GET_API("/todos")
                .then((res) => {
                    setTodos(res.data);
                })
                .catch((err) => alert(err));
        }
    }, []);

    const logout = (e) => {
        window.localStorage.removeItem("access_token");
    };

    return (
        <TodoWrapper>
            <h1>투두투두 🎾</h1>
            <TodoForm todos={todos} setTodos={setTodos} />
            {todos.map((ele) => {
                return (
                    <TodoList
                        id={ele.id}
                        todo={ele.todo}
                        isCompleted={ele.isCompleted}
                        todos={todos}
                        setTodos={setTodos}
                    />
                );
            })}
            <Link to={"/"} onClick={logout}>
                로그아웃
            </Link>
        </TodoWrapper>
    );
}

export default Todo;

const TodoWrapper = styled.section`
    width: 26%;
    height: 100vh;
    margin: 0 auto;
    position: relative;

    h1 {
        font-weight: 900;
        font-size: 3rem;
        margin: 220px 0 40px;
    }

    a {
        font-weight: 900;
        background-color: #fff;
        border: 2px solid #f2a649;
        padding: 8px 16px;
        border-radius: 20px;
        color: #f2a649;
        position: absolute;
        top: -20%;
        right: -120%;
        text-decoration: none;

        &:hover {
            background-color: #f2a649;
            color: #fff;
        }
    }
`;
