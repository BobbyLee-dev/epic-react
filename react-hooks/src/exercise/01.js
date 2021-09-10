// useState: greeting
// http://localhost:3000/isolated/exercise/01.js

import * as React from 'react'

function Greeting({initialName = ''}) {
  const [name, setName] = React.useState(initialName)
  function handleChange(e) {
    setName(e.target.value)
  }

  return (
    <div>
      <form>
        <label for="name">Name:</label>
        <input id="name" onChange={handleChange} value={name}></input>
      </form>
      {name !== '' ? (
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
  return <Greeting initialName="Bobby" />
}

export default App
