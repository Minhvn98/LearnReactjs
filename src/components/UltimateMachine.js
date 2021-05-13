import React, { useState } from 'react';
import './UltimateMachine.css';

const OnMessage = () => <span>The machine is ON1</span>;

const OffMessage = () => <span>The machine is OFF</span>;

const UltimateMachine = () => {
  const [isOn, setIsOn] = useState(false);
  const onClickHandler = () => {
    setIsOn(!isOn);
  };

  const getMessage = () => {
    if (isOn) return <OnMessage></OnMessage>;
    return <OffMessage></OffMessage>;
  };

  return (
    <section>
      <h1>Ultimate Machine</h1>
      {getMessage()}
      <button type="button" onClick={onClickHandler} aria-pressed={isOn}>
        On/Off
      </button>
    </section>
  );
};

export default UltimateMachine;
