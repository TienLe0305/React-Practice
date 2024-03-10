import React from "react";
import "./MouseHover.css";

const MouseHover = () => {
  const handleMouseOver = () => {
    console.log("Mouse is hovering!");
  };

  return (
    <div className="mouse-hover" onMouseOver={handleMouseOver}>
      Hover over me!
    </div>
  );
};

export default MouseHover;
