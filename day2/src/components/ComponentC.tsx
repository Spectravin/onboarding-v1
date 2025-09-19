import React from "react";
import ComponentE from "./ComponentE";
const ComponentC = () => {
  return (
    <div style={
        {
        "backgroundColor":"green",
        "display":"fixed", 
        "border":"2px",
        "height":"100px",
        "width":"200px"
        }
    }>ComponentC
    <ComponentE/>
    </div>
  )
}
export default ComponentC;