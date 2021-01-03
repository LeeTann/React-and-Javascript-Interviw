// What does unidrectional data flow mean in react?

// *** Answer ***
// It means that data only flows in one direction
// In order to change to view, you have to actually change your state. Changing your view will not change your state.

import React, { useState } from 'react'

function Unidirectional() {
  const [state, setState] = useState('')

  const handleChange = (e) => {
    console.log('working')
    setState(e.target.value)
  }
  return (
    <div>
      <input type='text' value={state} onChange={handleChange} />
    </div>
  )
}

export default Unidirectional
