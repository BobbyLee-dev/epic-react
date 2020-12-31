// Basic Forms
// http://localhost:3000/isolated/exercise/06.js

import * as React from 'react'

function UsernameForm({onSubmitUsername}) {
  const inputEl = React.useRef(null)
  // const [inputValue, setInputValue] = React.useState('')
  const [error, setError] = React.useState(null)

  function handleSubmit(event) {
    event.preventDefault()
    console.log()
    onSubmitUsername(inputEl.current.value)
  }

  const handleChange = event => {
    const {value} = event.target
    const isLowerCase = value === value.toLowerCase()
    setError(
      isLowerCase
        ? null
        : `Username must be lowercase, ${value} contains uppercase characters.`,
    )
  }

  return (
    <form onSubmit={handleSubmit}>
      <div>
        <label htmlFor="userInput">Username:</label>
        <input
          onChange={handleChange}
          ref={inputEl}
          id="userInput"
          name="userInput"
          type="text"
        />
        {error && <div style={{color: 'red'}}>{error}</div>}
      </div>
      <button disabled={Boolean(error)} type="submit">
        Submit
      </button>
    </form>
  )
}

function App() {
  const onSubmitUsername = username => alert(`You entered: ${username}`)
  return <UsernameForm onSubmitUsername={onSubmitUsername} />
}

export default App
