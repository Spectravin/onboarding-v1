// import React from 'react'
// import ChatBox from './components/PreservingAndResettingState/ChatBox';
// import ReactingToUserInput from './components/ReactingToUserInput';
// import CounterReducer from './components/CounterReducer';
// import SharingStateParent from './components/PanelSelection/SharingStateParent';

// const Menu = () => {

//   type availableMenus = "ReactingToUserInput" | "PreservingAndResettingState" | "CounterReducer" | "PanelSelection";
//   const [activeItem, setActiveItem] = React.useState<availableMenus>("PanelSelection");
//   return (
//     <div>
//         <button onClick={()=>setActiveItem("PanelSelection")}>Panel Selection</button>
//         <button onClick={()=>setActiveItem("ReactingToUserInput")}>Reacting to User input</button>
//         <button onClick={()=>setActiveItem("CounterReducer")}>Counter</button>
//         <button onClick={()=>setActiveItem("PreservingAndResettingState")}>Messenger</button>
//         <>
//             {showContent(activeItem)}
//         </>
//     </div>
//   )
//   function showContent(activeItem:availableMenus){
//     switch(activeItem){
//         case "PreservingAndResettingState":
//             return <ChatBox/>;
//         case "CounterReducer":
//             return <CounterReducer/>;
//         case "PanelSelection":
//             return <SharingStateParent/>;
//         case "ReactingToUserInput":
//             return <ReactingToUserInput/>
//     }
//   }
// }

// export default Menu