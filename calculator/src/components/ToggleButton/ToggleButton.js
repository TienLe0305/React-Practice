import React, { useState } from "react";
import "./ToggleButton.css";

const ToggleButton = () => {
  const [isOn, setIsOn] = useState(false);

  const handleToggle = () => {
    setIsOn(!isOn);
  };

  return (
    <div className="toggle-button-container">
      <button onClick={handleToggle} className={isOn ? "on" : "off"}>
        {isOn ? "ON" : "OFF"}
      </button>
    </div>
  );
};

export default ToggleButton;
