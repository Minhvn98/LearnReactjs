import React, { useState, useEffect } from 'react';

const subscribe = (count) => console.log(`Subscribe for ${count}`);

const unsubscribe = (count) => console.log(`Unsubscribe for ${count}`);

const Counter = () => {
  const [counter, setCounter] = useState(0);

  useEffect(() => {
    document.title = `Hehe ${counter}`;
  }, [counter]);

  useEffect(() => {
    subscribe(counter);

    return () => {
      unsubscribe(counter);
    };
  }, [counter]);

  const onCountClickHandler = () => setCounter((c) => c + 1);

  return (
    <div>
      <p>{counter}</p>
      <button onClick={onCountClickHandler}>Increment</button>
    </div>
  );
};

export default Counter;
