import react from 'react'
import ChildComponent from './ChildComponent'

function ParentComponent() {
    let name:string = "";
    function handleChange(event: React.ChangeEvent<HTMLInputElement>){
        name=event.target.value;
    }
    function clickButton(event: React.MouseEvent<HTMLButtonElement>){
        alert("Hi "+name);
    }
    return (
        <div>
            <input onChange={handleChange} placeholder='enter your name'/>
            <ChildComponent setclickButton={clickButton}></ChildComponent>

        </div>

    );

}
export default ParentComponent;