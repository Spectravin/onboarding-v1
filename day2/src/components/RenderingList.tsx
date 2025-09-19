import React from 'react'


const RenderingList = () => {
 const fruits: string[] = ['Apple','Avacado', 'Banana', 'Cherry', 'PineApple', 'WaterMelon'];
//    let letters:string[]=[];
// const  start=(fruit: string)=>{
//     if(fruits.filter(fruit)=>{fruit.startsWith('A')) letters.push(fruit)};
// } 
  return (
    <div>
    <ul>
      
      {fruits.map((fruit, index) => (
        <li key={index}>{fruit}</li>
      ))}
    </ul>
   
   
    <ul>
    {fruits.filter((fruit)=>fruit.startsWith("A")).map((fruit)=>(<li>{fruit}</li>))}
    </ul>


    </div>
  )
}
export default RenderingList