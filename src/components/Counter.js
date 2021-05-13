import React, { useState, useEffect } from 'react';

const Counter = () => {
  const [counter, setCounter] = useState(0);
  const [internalCount, setInternalCount] = useState(0);

  useEffect(() => {
    document.title = `Hehe ${counter}`;
    console.log('Title was set!');
  }, [counter]);

  const onCountClickHandler = () => setCounter((c) => c + 1);

  const onInternalClickHandler = () => setInternalCount(internalCount + 1);

  console.log('Main Rendered!');

  return (
    <div>
      <h1>Ultimate Counter</h1>
      <p>{counter}</p>
      <button onClick={onCountClickHandler}>Increment</button>
      <button onClick={onInternalClickHandler}>Internal Increment</button>
    </div>
  );
};

export default Counter;
