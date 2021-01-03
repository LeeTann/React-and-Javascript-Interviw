// What's the difference between state vs props?

// *** Answer ***
// State is when you assign data locally to the actual component.
// Props is when you pass the same data down to another component.
// In order to change props, you have to change the state.

import React, { useState } from 'react'

function Child(props) {
  return <GrandChild value={props.value} />
}

function GrandChild(props) {
  return <h1>{props.value}</h1>
}

function PropsVsState() {
  const [state, setState] = useState(1)
  return (
    <div>
      <Child value={state} />
    </div>
  )
}

export default PropsVsState
