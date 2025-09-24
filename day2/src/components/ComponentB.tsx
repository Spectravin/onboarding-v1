import React from "react";
import ComponentD from "./CompanentD";

const ComponentB = () => {
  return (
    <>
        <div style={
        {
        "backgroundColor":"yellow",
        "display":"fixed", 
        "border":"2px",
        "height":"100px",
        "width":"200px"
        }
        }>ComponentB <ComponentD/></div>
        
    </>
   
  )
}
export default ComponentB;