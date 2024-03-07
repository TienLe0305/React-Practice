import React from "react";
import "./TodoList.css";
import { useState } from "react";

function TodoList(props) {
  const [todos, setTodos] = useState([]);
  const [input, setInput] = useState("");

  const handleKeyDown = (e) => {
    if (e.key === "Enter") {
      if (input.trim() !== "") {
        setTodos([...todos, { text: input, completed: false }]);
        setInput("");
      }
    }
  };

  const toggleTodo = (index) => {
    const newTodos = [...todos];
    newTodos[index].completed = !newTodos[index].completed;
    setTodos(newTodos);
  };

  return (
    <div className="todo-list">
      <h2>Todo List</h2>
      <div className="todos">
        {todos.map((todo, index) => (
          <div
            key={index}
            className={`todo ${todo.completed ? "completed" : ""}`}
            onClick={() => toggleTodo(index)}
          >
            {todo.text}
          </div>
        ))}
      </div>
      <input
        type="text"
        placeholder="Add a new todo ..."
        value={input}
        onChange={(e) => setInput(e.target.value)}
        onKeyDown={handleKeyDown}
      />
    </div>
  );
}

export default TodoList;
