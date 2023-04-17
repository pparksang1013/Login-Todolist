import { useRef, useEffect, useState } from "react";
import styled from "styled-components";

// API
import { TODO_POST_API } from "../api/postAxios";
import { TODO_GET_API } from "../api/getAxios";

// HOOKS
import useRedirect from "../hooks/useRedirect";

function Todo() {
    const [todo, setTodo] = useState(null);
    useRedirect("/signin");

    useEffect(() => {
        TODO_GET_API("/todos").then((res) => {
            if (res.data) {
                setTodo(res.data);
            }
        });
    }, []);

    const TODO_INPUT = useRef();

    const addTodo = (e) => {
        if (!TODO_INPUT.current.value) {
            alert("입력해주세요.");
        } else {
            TODO_POST_API({ todo: TODO_INPUT.current.value }).then((res) => {
                setTodo(res.data);
            });
            TODO_INPUT.current.value = "";
        }
    };

    const handelSubmit = (e) => {
        e.preventDefault();
    };

    return (
        <div>
            <form onSubmit={handelSubmit}>
                <input data-testid="new-todo-input" ref={TODO_INPUT} />
                <button data-testid="new-todo-add-button" onClick={addTodo}>
                    추가
                </button>
            </form>

            <div>
                {todo.length > 0
                    ? todo.map((item, key) => {
                          return (
                              <li key={key}>
                                  <label>
                                      <input type="checkbox" />
                                      <span>{item.todo}</span>
                                  </label>
                              </li>
                          );
                      })
                    : null}
            </div>
        </div>
    );
}

export default Todo;
