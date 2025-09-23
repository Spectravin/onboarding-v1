import { createRoot } from 'react-dom/client';
import React from 'react';
import Firstcomponent from './FIrstcomponent';
import Profile from './components/Profile';
import TodoList from './components/TodoList';
 const App = () => {
  return <div>
  <Firstcomponent />
  
  
  </div>;
};

const root = createRoot(document.getElementById('root') as HTMLElement);
root.render(<App />);