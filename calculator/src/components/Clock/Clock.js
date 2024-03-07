import React from "react";
import "./Clock.css";
import { useState } from "react";
import { useEffect } from "react";

const Clock = () => {
  const [currentTime, setCurrentTime] = useState(new Date());

  useEffect(() => {
    const intervalId = setInterval(() => {
      setCurrentTime(new Date());
    }, 1000);

    return () => clearInterval(intervalId);
  }, []);

  return (
    <div className="clock">
      <p>Current Time: {currentTime.toLocaleTimeString()}</p>
    </div>
  );
};

export default Clock;
