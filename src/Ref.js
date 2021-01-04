// What are refs in React and why would you use it?

// In react we normally develop in the virtual dom. But sometimes, you may want to actually
// access the dom itself, that's where refs come it. It lets you access the dom element.
// An example would be if you want to set focus to an input when the screen loads.

import React, { useEffect, useRef } from 'react'

function Ref() {
  const inputRef = useRef()

  useEffect(() => {
    inputRef.current.focus()
  }, [])

  return (
    <div>
      <input type='text' ref={inputRef} />
    </div>
  )
}

export default Ref
