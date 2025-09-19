import react from 'react';
import ChildComponent from './ChildComponent';

const ParentComponent = () => {
    const userName:string ="David";
    const userAge:number = 25;

  return (
    <div>  
        <ChildComponent name={userName} age={userAge}>
        
        
        </ChildComponent>
    </div>
  );
}
export default ParentComponent;