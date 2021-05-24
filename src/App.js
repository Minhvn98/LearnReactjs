import React, { useState } from 'react'

const Name = ({ name, onNameChange }) => {
  return (
    <div>
      <label htmlFor="name">Name: </label>
      <input name="name" id="name" onChange={onNameChange} value={name} />
    </div>
  )
}

const FavoriteAnimal = ({ animal, onAnimalChange }) => {
  // const [animal, setAnimal] = useState('')
  // const onAnimalChange = e => console.log(e.target.value)
  return (
    <div>
      <label htmlFor="animal">Favorite Animal</label>
      <input
        id="animal"
        name="animal"
        onChange={onAnimalChange}
        value={animal}
      />
    </div>
  )
}

const Display = ({ name, animal }) => {
  return (
    <h1>
      Hello {name}, your favorite animal is : {animal}
    </h1>
  )
}

const App = () => {
  const [name, setName] = useState('')
  const [animal, setAnimal] = useState('')
  return (
    <form>
      <Name name={name} onNameChange={event => setName(event.target.value)} />
      <FavoriteAnimal
        animal={animal}
        onAnimalChange={event => setAnimal(event.target.value)}
      />
      <Display name={name} animal={animal} />
    </form>
  )
}

export default App
