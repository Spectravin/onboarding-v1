import { createRoot } from 'react-dom/client';
import React from 'react';
import ParentComponent from "./components/ParentComponent";
import ToolBarComponent from "./ToolBarComponent";
import Header from "./Header";
import { useState } from 'react';

 const App = () => {
  
  return <div>
    <Header/>
    <ToolBarComponent/>
  
  </div>;
};

const root = createRoot(document.getElementById('root') as HTMLElement);
root.render(<App />);