import React, { Fragment, useState } from 'react'

const Counter = () => {
  let [count, setCount] = useState(0)

  const onClickHandler = () => {
    setCount(count + 1)
  }

  return (
    <Fragment>
      <p>{count}</p>
      <button onClick={onClickHandler}>Click now</button>
    </Fragment>
  )
}

export default Counter
