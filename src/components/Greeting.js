import React, { useState, useEffect } from 'react'

const Greeting = ({ initialName = '' }) => {
  console.log('render')

  const getInitialName = initialName => {
    console.log('Initinal')
    return window.localStorage.getItem('name') || initialName
  }

  const [name, setName] = useState(getInitialName)
  useEffect(() => {
    window.localStorage.setItem('name', name)
  }, [name])

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
