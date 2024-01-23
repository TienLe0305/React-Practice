// src/App.js
import React, { useCallback, useEffect, useState } from "react";
import Button from "@atlaskit/button";
import Textfield from "@atlaskit/textfield";
import TodoList from "./components/TodoList";
import { v4 } from "uuid";

const TODO_APP_STORAGE_KEY = "TODO_APP";

function App() {
  const [todoList, setTodoList] = useState([]);
  const [textInput, setTextInput] = useState("");

  useEffect(() => {
    const storagedTodoList = localStorage.getItem(TODO_APP_STORAGE_KEY);
    if (storagedTodoList) {
      setTodoList(JSON.parse(storagedTodoList));
    }
  }, []);

  useEffect(() => {
    localStorage.setItem(TODO_APP_STORAGE_KEY, JSON.stringify(todoList));
  }, [todoList]);

  const onTextInputChange = useCallback((e) => {
    setTextInput(e.target.value);
  }, []);

  const onAddBtnClick = useCallback(
    (e) => {
      setTodoList([
        { id: v4(), name: textInput, isCompleted: false },
        ...todoList,
      ]);

      setTextInput("");
    },
    [todoList, textInput]
  );

  const onCheckBtnClick = useCallback((id) => {
    setTodoList((prevState) =>
      prevState.map((todo) =>
        todo.id === id ? { ...todo, isCompleted: true } : todo
      )
    );
  }, []);

  return (
    <>
      <h3>Danh sach can lam</h3>
      <Textfield
        name="add-todo"
        placeholder="Them viec can lam ..."
        elemAfterInput={
          <Button
            isDisabled={!textInput}
            appearance="primary"
            onClick={onAddBtnClick}
          >
            Thêm
          </Button>
        }
        value={textInput}
        onChange={onTextInputChange}
        onKeyPress={(e) => {
          if (e.key === "Enter" && textInput.trim() !== "") {
            onAddBtnClick();
          }
        }}
      ></Textfield>
      <TodoList
        todoList={todoList}
        onCheckBtnClick={onCheckBtnClick}
      ></TodoList>
    </>
  );
}

export default App;
