// What does it mean to lift state up?

// *** Answer ***
// If multiple components are trying to access the same data, you can make them siblings
// under the same component. And by default they will be insync since they are both under the same parent.

import React, { useState } from 'react'

const List = (props) => (
  <div>
    {props.items.map((item, index) => (
      <h1 key={index}>{item}</h1>
    ))}
  </div>
)

const ItemCount = (props) => {
  return <h1>{props.count}</h1>
}

function LiftingState() {
  const [items, setItems] = useState(['foo', 'bar', 'baz'])

  return (
    <div>
      <List items={items} />
      <ItemCount count={items.length} />
    </div>
  )
}

export default LiftingState
