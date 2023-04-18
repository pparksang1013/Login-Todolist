import { useRef } from "react";
import styled from "styled-components";

// API

import { TODO_POST_API } from "../../api/postAxios";

function TodoForm({ todos, setTodos }) {
    const TODO_INPUT_REF = useRef();

    const addItem = (e) => {
        if (!TODO_INPUT_REF.current.value) {
            alert("입력해주세요.");
            return;
        }

        TODO_POST_API({ todo: TODO_INPUT_REF.current.value }).then((res) => {
            setTodos([...todos, res.data]);
            TODO_INPUT_REF.current.value = "";
        });
    };

    return (
        <TodoFormWrapper
            onSubmit={(e) => {
                e.preventDefault();
            }}
        >
            <input
                data-testid="new-todo-input"
                ref={TODO_INPUT_REF}
                type="text"
            />
            <button data-testid="new-todo-add-button" onClick={addItem}>
                추가
            </button>
        </TodoFormWrapper>
    );
}

export default TodoForm;

const TodoFormWrapper = styled.form`
    input {
        width: 77%;
        line-height: 2;
        padding: 6px;
        padding-inline-start: 0.8em;
        border: 1px solid rgba(16, 16, 16, 0.2);
        border-radius: 6px;
        margin-bottom: 40px;

        &:focus {
            outline: 1px solid#f2a649;
            border: none;
        }
    }

    button {
        font-size: 1.05rem;
        font-weight: 900;
        line-height: 1.7;
        padding: 6px 28px;
        border-radius: 20px;
        margin-left: 12px;
        vertical-align: middle;
        background-color: #f2a649;
        color: #fff;
    }
`;
