import React, { useReducer } from 'react'

const countReducer = (count, step) => count + step

const Counter = ({ step = 1, initinalCount = 0 }) => {
  const [count, changeCount] = useReducer(countReducer, initinalCount)

  const increment = () => {
    changeCount(step)
  }

  return <button onClick={increment}>{count}</button>
}

const App = () => {
  return <Counter />
}

export default App
