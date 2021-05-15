import React, { useState } from 'react'
import Input from './Input'

const initinalEntryState = {
  recordName: '',
  artistName: '',
  description: '',
}

const Form = ({ onSubmit }) => {
  const [entry, setEntry] = useState(initinalEntryState)

  const onChangeHandler = (e) => {
    setEntry({
      ...entry,
      [e.target.name]: e.target.value,
    })
  }

  const onSubmitHandler = (e) => {
    e.preventDefault()

    if (!entry.recordName || !entry.artistName) {
      return
    }

    onSubmit({ ...entry })
    setEntry(initinalEntryState)
  }

  return (
    <form onSubmit={onSubmitHandler}>
      <Input
        labelText="Record name"
        name="recordName"
        onChange={onChangeHandler}
        value={entry.recordName}
      ></Input>

      <Input
        labelText="Artist Name"
        name="artistName"
        onChange={onChangeHandler}
        value={entry.artistName}
      />

      <Input
        labelText="Description"
        type="textarea"
        name="description"
        onChange={onChangeHandler}
        value={entry.description}
      />

      <button type="submit">Add</button>
    </form>
  )
}

export default Form
