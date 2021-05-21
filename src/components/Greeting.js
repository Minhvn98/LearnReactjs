/* eslint-disable react-hooks/rules-of-hooks */
import React, { useState, useEffect } from 'react'

const syncLocalStorageWithStage = (key, defaultValue = '') => {
  const [state, setState] = useState(
    window.localStorage.getItem(key) || defaultValue,
  )

  useEffect(() => {
    window.localStorage.setItem(key, state)
  }, [key, state])

  return [state, setState]
}

const Greeting = ({ initialName = '' }) => {
  console.log('render')

  const [name, setName] = syncLocalStorageWithStage('name', initialName)

  const handleChange = e => {
    setName(e.target.value)
  }

  return (
    <div>
      <form>
        <label htmlFor="name">Name:</label>
        <input id="name" name="name" onChange={handleChange} value={name} />
      </form>
      {name ? <strong>Hello {name} </strong> : 'Please type your name'}
    </div>
  )
}

export default Greeting
