import * as React from 'react'

function UsernameForm({onSubmitUsername}) {
  const inputEl = React.useRef(null)
  const [inputValue, setInputValue] = React.useState('')

  function handleSubmit(event) {
    event.preventDefault()
    onSubmitUsername(inputValue)
  }

  const handleChange = event => {
    // const {value} = inputEl.current
    const {value, type} = inputEl.current
    console.log(value, type)
    setInputValue(value.toLowerCase())
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
          value={inputValue}
        />
      </div>
      <button type="submit">Submit</button>
    </form>
  )
}

function App() {
  const onSubmitUsername = username => alert(`You entered: ${username}`)
  return <UsernameForm onSubmitUsername={onSubmitUsername} />
}

export default App
