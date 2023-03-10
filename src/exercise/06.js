// Basic Forms
// http://localhost:3000/isolated/exercise/06.js

import * as React from 'react'

function UsernameForm({onSubmitUsername}) {
  const inputRef = React.useRef(null)
  const [error, setError] = React.useState(null)

  function handleSubmit(e) {
    e.preventDefault()
    const value = inputRef.current.value
    onSubmitUsername(value)
  }

  function handleChange(e) {
    const inputVal = e.target.value
    const isValid = inputVal === inputVal.toLowerCase()
    setError(isValid ? null : `Username must be lowercase`)
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
        />
      </div>
      <button id="submit" type="submit" disabled={Boolean(error)}>
        Submit
      </button>
      <div style={{color: 'red'}}>{error}</div>
    </form>
  )
}

function App() {
  const submitCallback = username => alert(`You entered: ${username}`)
  return <UsernameForm onSubmitUsername={submitCallback} />
}

export default App
