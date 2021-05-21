import React, { useState } from 'react'

const Greeting = ({ initialName = '' }) => {
  const [name, setName] = useState(initialName)

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
