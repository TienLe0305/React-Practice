import React, { useState } from "react";
import "./Question.css";

function Question({ question, options, correctAnswer, onAnswer }) {
  const [selectedOption, setSelectedOption] = useState(null);

  const handleOptionSelect = (option) => {
    setSelectedOption(option);
  };

  const handleSubmit = () => {
    const isCorrect = selectedOption === correctAnswer;
    onAnswer(isCorrect);
    setSelectedOption(null);
  };

  return (
    <div className="question">
      <h3>{question}</h3>
      <ul>
        {options.map((option, index) => (
          <li
            key={index}
            className={selectedOption === option ? "selected" : ""}
            onClick={() => handleOptionSelect(option)}
          >
            {option}
          </li>
        ))}
      </ul>
      <button onClick={handleSubmit} disabled={!selectedOption}>
        Submit
      </button>
    </div>
  );
}

export default Question;
