import React, { useState, useEffect, useRef } from 'react';
const StopWatch = () => {
  const [time, setTime] = useState(0);
  const [counterActive, setCounterActive] = useState(true);

  const currentTime = useRef(0);

  useEffect(() => {
    let interval = null;

    if (counterActive) {
      interval = setInterval(() => {
        currentTime.current++;
        setTime(currentTime.current);
        console.log('Set time');
      }, 1000);
    }

    return () => clearInterval(interval);
  }, [counterActive]);

  const onClickHandler = () => {
    setCounterActive(!counterActive);
  };

  return (
    <div>
      <h1>Stop Watch</h1>
      <p>{time}</p>
      <button onClick={onClickHandler} aria-pressed={counterActive}>
        Stop/Start
      </button>
    </div>
  );
};

export default StopWatch;
