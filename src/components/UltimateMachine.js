import React, { useState } from 'react';
import './UltimateMachine.css';

const KhoeChim = () => <span>Con chim dai 20cm</span>;

const UltimateMachine = () => {
  const [showChim, setShowChim] = useState(false);
  const onClickHandler = () => {
    setShowChim(!showChim);
  };

  return (
    <section>
      <h1>Ultimate Machine</h1>
      {showChim && <KhoeChim></KhoeChim>}
      <button type="button" onClick={onClickHandler} aria-pressed={showChim}>
        On/Off
      </button>
    </section>
  );
};

export default UltimateMachine;
