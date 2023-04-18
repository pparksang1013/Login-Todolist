import { useState } from "react";

// API
import { TODO_DELETE_API } from "../../api/deleteAxios";
import { TODO_PUT_API } from "../../api/putAxios";

function TodoList({ id, todo, isCompleted, todos, setTodos }) {
    const [edit, setEdit] = useState(false);
    const [complete, setComplete] = useState(isCompleted);
    const [inputValue, setInputValue] = useState("");

    const deleteItem = () => {
        setTodos(todos.filter((item) => item.id !== id));
        TODO_DELETE_API(`/todos/${id}`);
    };

    const handleEdit = () => {
        setEdit(true);
    };

    const handleChange = (e) => {
        setInputValue(e.target.value);
    };

    const handelComplete = () => {
        setComplete((prev) => !prev);
        console.log(complete);
    };

    const editItem = (e) => {
        TODO_PUT_API(`/todos/${id}`, {
            todo: inputValue,
            isCompleted: complete,
        }).then((res) => {
            const index = todos.findIndex((todo) => todo.id === res.data.id);
            todos.splice(index, 1, res.data);
            setTodos([...todos]);
            setEdit(false);
        });
    };

    return (
        <div>
            {edit ? (
                <>
                    <li key={id}>
                        <label>
                            <input
                                type="checkbox"
                                complete
                                onClick={handelComplete}
                            />
                            <input
                                data-testid="modify-input"
                                onChange={handleChange}
                            />
                        </label>
                        <button data-testid="submit-button" onClick={editItem}>
                            제출
                        </button>

                        <button data-testid="cancel-button">취소</button>
                    </li>
                </>
            ) : (
                <>
                    <li key={id}>
                        <label>
                            <input
                                type="checkbox"
                                complete
                                onClick={handelComplete}
                            />
                            <span>{todo}</span>
                        </label>
                        <button
                            data-testid="modify-button"
                            onClick={handleEdit}
                        >
                            수정
                        </button>
                        <button
                            data-testid="delete-button"
                            onClick={deleteItem}
                        >
                            삭제
                        </button>
                    </li>
                </>
            )}
        </div>
    );
}

export default TodoList;
