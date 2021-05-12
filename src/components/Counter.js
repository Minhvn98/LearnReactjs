import React, { Fragment, useState } from 'react'

const CounterView = ({ countValue, onIncrement }) => {
  return (
    <Fragment>
      <p>{countValue}</p>
      <button onClick={onIncrement}>Click now</button>
    </Fragment>
  )
}

const Counter = () => {
  let [count, setCount] = useState(0)

  const onIncrementHandler = () => {
    setCount(count + 1)
  }

  return (
    <CounterView
      countValue={count}
      onIncrement={onIncrementHandler}
    ></CounterView>
  )
}

export default Counter
