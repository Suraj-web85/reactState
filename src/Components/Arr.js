import React, { useState } from 'react'


function Arr() {
  const [thing, setThing] = useState(["Thing 1", "Thing 2"])
  function addItems(){

    setThing(thing => [...thing, `Thing ${thing.length + 1}`])
  }

  const things = thing.map(thing => <p key={thing}>{thing}</p>)
  return (
    <div>
      <button type="button" onClick={addItems}>Add Item</button>
      {things}
    </div>
  )
}

export default Arr