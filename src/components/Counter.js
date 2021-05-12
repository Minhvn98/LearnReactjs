import React, { useState } from 'react'
import InteractiveView from './Interactive'

const Counter = () => {
  let [count, setCount] = useState(0)

  const onIncrementHandler = () => {
    setCount(count + 1)
  }

  return (
    <InteractiveView
      value={count}
      onAction={onIncrementHandler}
      actionText="Increment"
    ></InteractiveView>
  )
}

export default Counter
