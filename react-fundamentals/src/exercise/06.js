// Basic Forms
// http://localhost:3000/isolated/exercise/06.js

import * as React from 'react'

function UsernameForm({onSubmitUsername}) {
  // 🐨 add a submit event handler here (`handleSubmit`).
  // 💰 Make sure to accept the `event` as an argument and call
  // `event.preventDefault()` to prevent the default behavior of form submit
  // events (which refreshes the page).
  //
  // 🐨 get the value from the username input (using whichever method
  // you prefer from the options mentioned in the instructions)
  // 💰 For example: event.target.elements[0].value
  // 🐨 Call `onSubmitUsername` with the value of the input

  // 🐨 add the onSubmit handler to the <form> below

  // 🐨 make sure to associate the label to the input.
  // to do so, set the value of 'htmlFor' prop of the label to the id of input
  const inputEl = React.useRef(null)
  const [errorState, setErrorState] = React.useState(null)

  // const handleSubmit = event => {
  //   event.preventDefault()
  //   console.log(inputEl.current.value)
  //   // onSubmitUsername(inputEl.current.value)
  // }

  const handleChange = event => {
    // console.log(event.target.value)
    const inputValue = event.target.value
    console.log(inputValue)
    // if (inputValue !== inputValue.toLowerCase()) {
    //   setErrorState = 'Username must be lower case'
    //   // disable submit button
    //   // display error in an element
    // } else {
    //   setErrorState = null
    // }
  }

  return (
    <form>
      <div>
        <label htmlFor="userInput">Username:</label>
        <input
          onChange={handleChange}
          ref={inputEl}
          id="userInput"
          type="text"
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
