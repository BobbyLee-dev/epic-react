// useEffect: persistent state
// http://localhost:3000/isolated/exercise/02.js

import * as React from 'react'

function Greeting({initialName = '', initialTestName = ''}) {
  const inputEl = React.useRef(null)
  const testInputEl = React.useRef(null)
  const [name, setName] = React.useState(
    () => window.localStorage.getItem('name') || initialName,
  )

  const [testname, setTestName] = React.useState(
    () => window.localStorage.getItem('testname') || initialTestName,
  )

  React.useEffect(() => {
    window.localStorage.setItem('name', name)
    window.localStorage.setItem('testname', testname)
  })

  function handleChange(event) {
    console.log(inputEl)
    setName(inputEl.current.value)
    setTestName(event.target.value)
  }
  return (
    <div>
      <form>
        <label htmlFor="name">Name: </label>
        <input ref={inputEl} value={name} onChange={handleChange} id="name" />
        <label htmlFor="testname">tesetName: </label>
        <input
          ref={testInputEl}
          value={testname}
          onChange={handleChange}
          id="testname"
          value={testname}
        />
      </form>
      {name ? <strong>Hello {name}</strong> : 'Please type your name'}
    </div>
  )
}

function App() {
  return <Greeting />
}

export default App
