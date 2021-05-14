import React, { useState } from 'react'

const Form = () => {
  const [formSate, setFormSate] = useState({
    firstName: '',
    lastName: '',
  })

  const onChangeHandler = (e) => {
    setFormSate({
      ...formSate,
      [e.target.name]: e.target.value,
    })
  }

  const onSubmitHandler = (e) => {
    e.preventDefault()
    console.log(formSate)
  }

  return (
    <form onSubmit={onSubmitHandler}>
      <p>{`Your name : ${formSate.firstName} ${formSate.lastName}`}</p>
      <label htmlFor="firstName">First name</label>
      <input
        id="firstName"
        name="firstName"
        onChange={onChangeHandler}
        value={formSate.firstName}
      ></input>

      <br />
      <label htmlFor="lastName">Last name</label>
      <input
        id="lastName"
        name="lastName"
        onChange={onChangeHandler}
        value={formSate.lastName}
      ></input>
      <button type="submit">Submit</button>
    </form>
  )
}

export default Form
