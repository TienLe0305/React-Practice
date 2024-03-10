import React from "react";
import "./InputChange.css";
import { useState } from "react";

const InputChange = () => {
  const [inputValue, setInputValue] = useState("");

  const handleInputChange = (e) => {
    setInputValue(e.target.value);
  };

  return (
    <div className="input-change">
      <label htmlFor="inputField">Nhap text:</label>
      <input
        type="text"
        id="inputField"
        value={inputValue}
        onChange={handleInputChange}
      />
      <p>Du lieu nhap: {inputValue}</p>
    </div>
  );
};

export default InputChange;
