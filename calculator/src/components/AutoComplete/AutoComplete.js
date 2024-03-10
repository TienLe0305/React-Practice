import React from "react";
import "./AutoComplete.css";
import { useState } from "react";

const AutoComplete = () => {
  const [inputValue, setInputValue] = useState("");
  const [options, setOptions] = useState([
    "Apple",
    "Banana",
    "Cherry",
    "Date",
    "Grape",
  ]);

  const handleInputChange = (e) => {
    const value = e.target.value;
    setInputValue(value);
  };

  const handleOptionClick = (selectedOption) => {
    setInputValue(selectedOption);
  };

  const filteredOptions = options.filter((option) =>
    option.toLowerCase().includes(inputValue.toLowerCase())
  );

  return (
    <div className="autocomplete">
      <h2>Autocomplete in ReactJs</h2>
      <input
        type="text"
        value={inputValue}
        onChange={handleInputChange}
        placeholder="Nhap tu khoa ..."
      />
      <ul className="options-list">
        {filteredOptions.map((option, index) => (
          <li key={index} onClick={() => handleOptionClick(option)}>
            {option}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default AutoComplete;
