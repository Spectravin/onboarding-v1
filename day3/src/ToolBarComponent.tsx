import React, { useState } from 'react';
import FruitAddingForm from './components/FruitAddingForm';
import IncreaseNumberComponent from './components/IncreaseNumberComponent';
import ParentComponent from './components/ParentComponent';
const ToolBarComponent = () => {

    type Menu = 'home' | 'fruits form'| 'increase number' | 'say hi';
    const [activeItem, setActiveItem] = useState<Menu>('home');
    
function renderContent(){
    switch(activeItem){
        case "fruits form":
            return <FruitAddingForm/>
        case "increase number":
          return <IncreaseNumberComponent/>
        case "say hi":
          return <ParentComponent/>
    }
}
  return (
    <div style={{display:"flex"}}>
      <div style={{width:"20%"}}>
          <div onClick={()=>setActiveItem('fruits form')} style={menuitemCss}>Fruits Form</div>
          <div onClick={()=>setActiveItem('increase number')} style={menuitemCss}>Increasing the Number</div>
          <div onClick={()=>setActiveItem('say hi')} style={menuitemCss}>Say Hi</div>
      </div>
      <div>
        {renderContent()}  
      </div>
    </div>
  )
}
let menuitemCss= {
  color:"blue",
  width:"100%",
  padding: "2px"
}
export default ToolBarComponent