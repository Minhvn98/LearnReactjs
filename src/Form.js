import React, { useState } from 'react'

const Form = () => {
  const [firstName, setFirstName] = useState('')

  const onChangeHandler = (e) => {
    console.log(e.target.value)
    setFirstName(e.target.value)
  }

  return (
    <form>
      <p>First name : {firstName}</p>
      <label htmlFor="firstName">First name</label>
      <input id="firstName" onChange={onChangeHandler}></input>
    </form>
  )
}

export default Form
