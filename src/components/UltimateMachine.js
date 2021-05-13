import React, { useState } from 'react';
import './UltimateMachine.css';

const OnMessage = () => <span>The machine is ON</span>;

const OffMessage = () => <span>The machine is OFF</span>;

const UltimateMachine = () => {
  const [isOn, setIsOn] = useState(false);
  const onClickHandler = () => {
    setIsOn(!isOn);
  };

  return (
    <section>
      <h1>Ultimate Machine</h1>
      {isOn ? <OnMessage></OnMessage> : <OffMessage></OffMessage>}
      <button type="button" onClick={onClickHandler} aria-pressed={isOn}>
        On/Off
      </button>
    </section>
  );
};

export default UltimateMachine;
