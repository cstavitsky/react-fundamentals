// Basic Forms
// http://localhost:3000/isolated/exercise/06.js

import * as React from 'react'

function UsernameForm({onSubmitUsername}) {
  const inputRef = React.useRef(null)
  const [username, setUsername] = React.useState(null)

  function handleSubmit(e) {
    e.preventDefault()
    const value = inputRef.current.value
    onSubmitUsername(value)
  }

  function handleChange(e) {
    const value = inputRef.current.value
    setUsername(value.toLowerCase())
  }

  return (
    <form onSubmit={handleSubmit}>
      <div>
        <label htmlFor="usernameInput">Username:</label>
        <input
          ref={inputRef}
          onChange={handleChange}
          id="usernameInput"
          type="text"
          value={username}
        />
      </div>
      <button id="submit" type="submit">
        Submit
      </button>
    </form>
  )
}

function App() {
  const submitCallback = username => alert(`You entered: ${username}`)
  return <UsernameForm onSubmitUsername={submitCallback} />
}

export default App
