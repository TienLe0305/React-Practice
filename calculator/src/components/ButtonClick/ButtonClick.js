import React from "react";
import "./ButtonClick.css";

const ButtonClick = () => {
  const handleClick = () => {
    console.log("Button clicked !");
  };

  return (
    <div className="button-container">
      <button onClick={handleClick}>Click me!</button>
    </div>
  );
};

export default ButtonClick;
