import React, { useState, useEffect } from 'react';
const StopWatch = () => {
  const [time, setTime] = useState(0);
  const [counterActive, setCounterActive] = useState(true);

  const fomattedTime = new Date(time * 1000).toISOString().substr(11, 8);
  useEffect(() => {
    let interval = null;

    if (counterActive) {
      interval = setInterval(() => {
        setTime((t) => t + 1);
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
      <p>{fomattedTime}</p>
      <button onClick={onClickHandler} aria-pressed={counterActive}>
        Stop/Start
      </button>
    </div>
  );
};

export default StopWatch;
