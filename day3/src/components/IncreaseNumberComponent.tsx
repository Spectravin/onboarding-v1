import React, { useState } from 'react'

const IncreaseNumberComponent = () => {
  const [number, setNumber] = useState<number>(1);
  function increaseTheNumber(){
    setNumber(number+1);
    setNumber(a=>a+2);
  }
  return (
    <div>
        <h2>Number is {number}</h2>
        <button onClick={increaseTheNumber}>+3</button>
    </div>
  )
}

export default IncreaseNumberComponent