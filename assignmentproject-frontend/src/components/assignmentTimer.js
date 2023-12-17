import React, { useState, useEffect } from 'react';

const AssignmentTimer = () => {
  const [totalSeconds, setTotalSeconds] = useState(0);
  const [isActive, setIsActive] = useState(false);

  useEffect(() => {
    let interval = null;

    if (isActive) {
      interval = setInterval(() => {
        setTotalSeconds((prevSeconds) => prevSeconds + 1);
      }, 1000);
    } else {
      clearInterval(interval);
    }

    return () => clearInterval(interval);
  }, [isActive]);

  const minutes = Math.floor(totalSeconds / 60);
  const seconds = totalSeconds % 60;

  const handleToggle = () => {
    setIsActive(!isActive);
  };

  const handleReset = () => {
    setTotalSeconds(0);
    setIsActive(false);
  };

  return (
    <div className="timer">
      <h2>Assignment Timer</h2>
      <h2>Timer: {minutes < 10 ? `0${minutes}` : minutes}:{seconds < 10 ? `0${seconds}` : seconds}</h2>
      <div className="timer-buttons">
        <button onClick={handleToggle}>
          {isActive ? 'Pause' : 'Start'}
        </button>
        <button onClick={handleReset}>Reset</button>
      </div>
    </div>
  );
};

export default AssignmentTimer;