// useEffect: persistent state
// http://localhost:3000/isolated/exercise/02.js

import * as React from 'react'

function Greeting() {
  const [name, setName] = React.useState(() => {
    return localStorage.getItem('name') || ''
  })
  function handleNameChange(e) {
    setName(e.target.value)
  }
  React.useEffect(() => {
    localStorage.setItem('name', name)
  })
  return (
    <div>
      <form>
        <label htmlFor="name">Enter Name</label>
        <input
          id="name"
          type="text"
          value={name}
          onChange={handleNameChange}
        ></input>
      </form>
      {name ? (
        <div>
          Hi <span style={{color: 'red'}}>{name}</span>
        </div>
      ) : (
        ''
      )}
    </div>
  )
}

function App() {
  return <Greeting />
}

export default App
