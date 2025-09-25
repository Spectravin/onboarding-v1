import React from "react";
import ComponentB from "./ComponentB"; 
import ComponentC from "./ComponentC"
const ComponentA = () => {
  return (
    <>
        <div style={
        {
        "backgroundColor":"red", 
        "display":"fixed", 
        "border":"2px",
        "height":"300px",
        "width":"600px"
        }
        }>ComponentA
        <ComponentB/>
        <ComponentC/>
        </div>
    </>
   
  )
}
export default ComponentA;