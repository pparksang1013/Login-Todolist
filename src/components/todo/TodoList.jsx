import { useState, useRef, useEffect } from "react";
import styled from "styled-components";

// API
import { TODO_PUT_API, TODO_DELETE_API } from "../../api/todoAxios";

function TodoList({ id, todo, isCompleted, todos, setTodos }) {
    const [edit, setEdit] = useState(false);
    const [complete, setComplete] = useState(isCompleted);
    const [inputValue, setInputValue] = useState("");
    const EDIT_REF = useRef();

    useEffect(() => {
        if (edit) {
            setInputValue(EDIT_REF.current.value);
        }
    }, [edit]);

    const deleteItem = () => {
        setTodos(todos.filter((item) => item.id !== id));
        TODO_DELETE_API(`/todos/${id}`).catch((err) => alert(err));
    };

    const handleEdit = () => {
        setInputValue();
        setEdit(true);
    };

    const handleChange = (e) => {
        setInputValue(e.target.value);
    };

    const handelComplete = () => {
        setComplete((prev) => !prev);
    };

    const handelCancle = () => {
        setEdit(false);
    };

    const editItem = (e) => {
        TODO_PUT_API(`/todos/${id}`, {
            todo: inputValue,
            isCompleted: complete,
        })
            .then((res) => {
                const index = todos.findIndex(
                    (todo) => todo.id === res.data.id
                );
                todos.splice(index, 1, res.data);
                setTodos([...todos]);
                setEdit(false);
            })
            .catch((err) => alert(err));
    };

    return (
        <ListWrapper complete={complete}>
            {edit ? (
                <>
                    <li>
                        <label>
                            <input
                                type="checkbox"
                                complete={complete}
                                onClick={handelComplete}
                            />
                            <input
                                data-testid="modify-input"
                                onChange={handleChange}
                                defaultValue={todo}
                                ref={EDIT_REF}
                                type="text"
                            />
                        </label>
                        <Button
                            data-testid="submit-button"
                            onClick={editItem}
                            fontChange={edit}
                        >
                            제출
                        </Button>

                        <Button
                            data-testid="cancel-button"
                            onClick={handelCancle}
                        >
                            취소
                        </Button>
                    </li>
                </>
            ) : (
                <>
                    <li>
                        <label>
                            <input
                                type="checkbox"
                                complete={complete}
                                onClick={handelComplete}
                            />
                            <span>{todo}</span>
                        </label>
                        <Button
                            data-testid="modify-button"
                            onClick={handleEdit}
                        >
                            수정
                        </Button>
                        <Button
                            data-testid="delete-button"
                            onClick={deleteItem}
                        >
                            삭제
                        </Button>
                    </li>
                </>
            )}
        </ListWrapper>
    );
}

export default TodoList;

const Button = styled.button`
    font-size: 0.82em;
    border: 1px solid #f2a649;
    border-radius: 20px;
    padding: 0.3em 1em;
    margin-left: 6px;
    vertical-align: middle;
    background-color: ${(props) => (props.fontChange ? "#f2a649" : "#fff")};
    color: ${(props) => (props.fontChange ? "#fff" : "#000")};

    &:disabled:hover {
        border: 1px solid rgba(16, 16, 16, 0.3);
        background-color: transparent;
        color: rgba(16, 16, 16, 0.3);
    }

    &:hover {
        border: 1px solid #f2a649;
        background-color: #f2a649;
        color: #fff;
    }
`;

const ListWrapper = styled.ul`
    li {
        height: 50px;
    }

    span {
        display: inline-block;
        margin-left: 8px;
        width: 320px;
        font-size: 18.9px;
        font-weight: 500;
        vertical-align: middle;
        text-decoration: ${(props) =>
            props.complete ? "line-through 2px #f2a649" : null};
    }

    input[type="checkbox"] {
        vertical-align: middle;
    }

    input[type="text"] {
        width: 320px;
        display: inline-block;
        font-size: 18.9px;
        font-weight: 500;
        margin-left: 8px;
        vertical-align: middle;
    }
`;
