// Whats he difference between a controlled and uncontrolled component?

// *** Answer ***
// A controlled component is bound to your state where as an uncontrolled component is not bound by your state.
// In Controlled we set the value={state}
// In UnControlled we did not bind it to any state. But you can work around it using UseRef.

import React, { useState, useRef } from 'react'

function Controlled() {
  const [state, setState] = useState('')

  function alertValue() {
    console.log('controlled click')
    alert(state)
  }

  return (
    <div>
      <input
        type='text'
        value={state}
        onChange={(e) => setState(e.target.value)}
      />
      <button onClick={alertValue}>click me</button>
    </div>
  )
}

function UnControlled() {
  const inputRef = useRef()

  function alretValue() {
    console.log('uncontrolled click')
    alert(inputRef.current.value)
  }

  return (
    <div>
      <input type='text' ref={inputRef} />
      <button onClick={alretValue}>click me</button>
    </div>
  )
}

export { Controlled, UnControlled }
