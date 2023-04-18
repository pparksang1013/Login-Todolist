import { useRef } from "react";

// API

import { TODO_POST_API } from "../../api/postAxios";

// STYLE
import { SignInput } from "../../style/CommonStlye";

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
        <form
            onSubmit={(e) => {
                e.preventDefault();
            }}
        >
            <SignInput
                data-testid="new-todo-input"
                ref={TODO_INPUT_REF}
                type="text"
            />
            <button data-testid="new-todo-add-button" onClick={addItem}>
                추가
            </button>
        </form>
    );
}

export default TodoForm;
