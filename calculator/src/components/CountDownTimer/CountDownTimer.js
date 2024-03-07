import React from "react";
import "./CountDownTimer.css";
import { useState } from "react";
import { useEffect } from "react";

const CountdownTimer = () => {
  const [countdown, setCountdown] = useState(10);
  const [isRunning, setIsRunning] = useState(false);

  const handleStart = () => {
    if (!isRunning) {
      setIsRunning(true);
      setCountdown(10);
    }
  };

  const handleCompletion = () => {
    setIsRunning(false);
    alert("Countdown Completed!");
  };

  useEffect(() => {
    let timer;
    if (isRunning) {
      timer = setInterval(() => {
        setCountdown((prevCountDown) => prevCountDown - 1);
      }, 1000);
    }

    if (countdown === 0) {
      handleCompletion();
      clearInterval(timer);
    }

    return () => clearInterval(timer);
  }, [isRunning, countdown]);

  return (
    <div className="countdown-timer">
      <h2>Countdown Timer</h2>
      <div className="timer">
        <p>{countdown}</p>
      </div>
      <button onClick={handleStart} disabled={isRunning}>
        Start
      </button>
    </div>
  );
};
export default CountdownTimer;
