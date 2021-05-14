import React, { useState, Fragment } from 'react'

const initinalState = {
  firstName: '',
  lastName: '',
  biography: '',
  transport: '',
  agree: false,
  breakfast: false,
  lunch: false,
  dinner: false,
  shirtSize: '',
}

const loadedData = {
  firstName: 'Minh',
  lastName: 'Vũ',
  biography: 'Minh gioi vl',
  transport: 'bikes',
  agree: true,
  breakfast: true,
  dinner: false,
  lunch: true,
  shirtSize: 'm',
}

const FormContainer = () => {
  return <Form></Form>
}

const Form = () => {
  const [formSate, setFormSate] = useState(initinalState)

  const onChangeHandler = (e) => {
    const value =
      e.target.type === 'checkbox' ? e.target.checked : e.target.value

    setFormSate({
      ...formSate,
      [e.target.name]: value,
    })
  }

  const onSubmitHandler = (e) => {
    e.preventDefault()
    console.log(formSate)
  }

  const onCickHandler = () => {
    setFormSate(loadedData)
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

      <fieldset>
        <legend>Eat</legend>

        <input
          id="breakfast"
          name="breakfast"
          type="checkbox"
          onChange={onChangeHandler}
          checked={formSate.breakfast}
        />
        <label htmlFor="breakfast">Breakfast</label>

        <input
          id="lunch"
          name="lunch"
          type="checkbox"
          onChange={onChangeHandler}
          checked={formSate.lunch}
        />
        <label htmlFor="lunch">Lunch</label>

        <input
          id="dinner"
          name="dinner"
          type="checkbox"
          onChange={onChangeHandler}
          checked={formSate.dinner}
        />
        <label htmlFor="dinner">Dinner</label>
      </fieldset>

      <fieldset>
        <legend>T-shrit Size</legend>
        <label htmlFor="sizeS">Small</label>
        <input
          id="sizeS"
          name="shirtSize"
          type="radio"
          onChange={onChangeHandler}
          value="s"
          checked={formSate.shirtSize === 's'}
        />

        <label htmlFor="sizeM">Medium</label>
        <input
          id="sizeM"
          name="shirtSize"
          type="radio"
          onChange={onChangeHandler}
          value="m"
          checked={formSate.shirtSize === 'm'}
        />

        <label htmlFor="sizeL">Large</label>
        <input
          id="sizeL"
          name="shirtSize"
          type="radio"
          onChange={onChangeHandler}
          value="l"
          checked={formSate.shirtSize === 'l'}
        />
      </fieldset>

      <br />
      <label htmlFor="agree">Checkbox</label>
      <input
        type="checkbox"
        id="agree"
        name="agree"
        onChange={onChangeHandler}
        checked={formSate.agree}
      ></input>

      <br />
      <br />
      <button type="submit">Save</button>
      <button onClick={onCickHandler} type="button">
        Load Data
      </button>
    </form>
  )
}

export default FormContainer
