import { createRoot } from 'react-dom/client';
import React from 'react';

 const App = () => {
  return <h1>Hello, World!</h1>;
};

const root = createRoot(document.getElementById('root') as HTMLElement);
root.render(<App />);