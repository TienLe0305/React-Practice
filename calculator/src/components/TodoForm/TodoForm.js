import React, { useState } from "react";
import "./TodoForm.css";

const TodoForm = () => {
  const [todo, setTodo] = useState("");

  const handleChange = (e) => {
    setTodo(e.target.value);
  };

  const handleAddTodo = () => {
    console.log("New Todo: ", todo);
    setTodo("");
  };

  return (
    <div className="todo-form-container">
      <input
        type="text"
        placeholder="Enter new todo"
        value={todo}
        onChange={handleChange}
      />

      <button onClick={handleAddTodo}>Add Todo</button>
    </div>
  );
};

export default TodoForm;
