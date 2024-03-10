import React from "react";
import "./DragAndDrop.css";

const DragAndDrop = () => {
  const handleDragStart = (e) => {
    e.dataTransfer.setData("text/plain", "Drag me!");
  };

  const handleDragOver = (e) => {
    e.preventDefault();
  };

  const handleDrop = (e) => {
    e.preventDefault();
    const newPosition = e.clientX + "," + e.clientY;
    console.log("New posision: ", newPosition);
  };

  return (
    <div
      className="draggable-element"
      draggable="true"
      onDragStart={handleDragStart}
      onDragOver={handleDragOver}
      onDrop={handleDrop}
    >
      Drag me!
    </div>
  );
};

export default DragAndDrop;
