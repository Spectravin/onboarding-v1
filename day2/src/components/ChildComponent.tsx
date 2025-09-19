import React from "react";  

interface ChildComponentProps {
  name: string;
  age: number;
}

function ChildComponent({name, age}: ChildComponentProps) {
  return (
    <div>ChildComponent
        
        <p>{name}</p>
        <p>{age}</p>
        
    </div>
  )
}

export default ChildComponent