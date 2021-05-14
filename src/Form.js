import React, { useState } from 'react'

const initinalState = {
  firstName: '',
  lastName: '',
  biography: '',
  transport: '',
}

const Form = () => {
  const [formSate, setFormSate] = useState(initinalState)

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

  const onCickHandler = () => {
    setFormSate(initinalState)
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
      <br />

      <label htmlFor="biography">Biography</label>
      <textarea
        id="biography"
        name="biography"
        rows="5"
        onChange={onChangeHandler}
        value={formSate.biography}
      ></textarea>
      <br />
      <label htmlFor="transport">Transport</label>
      <select
        id="transport"
        name="transport"
        onChange={onChangeHandler}
        value={formSate.transport}
      >
        <option>None selected</option>
        <option value="cars">Cars</option>
        <option value="bikes">Bikes</option>
        <option value="trains">Trains</option>
        <option value="boats">Boats</option>
      </select>
      <br />
      <button type="submit">Save</button>
      <button onClick={onCickHandler} type="button">
        Clear
      </button>
    </form>
  )
}

export default Form
