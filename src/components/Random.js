import React, { useState } from 'react'
import InteractiveView from './Interactive'

const Random = () => {
  const [randomNumber, setRandomNumber] = useState(0)

  const onHandlerRandom = () => {
    setRandomNumber(Math.floor(Math.random() * 100))
  }

  return (
    <InteractiveView
      value={randomNumber}
      onAction={onHandlerRandom}
      actionText="Random Button"
    ></InteractiveView>
  )
}

export default Random
