import react from 'react';
import Profile from './components/Profile';
import TodoList from './components/TodoList';
import Curleybraces from './components/Curleybraces';
import ParentComponent from './components/ParentComponent';
import ConditionalRendering from './components/ConditionalRendering'
import RenderingList from './components/RenderingList'
import ComponentPure from './components/ComponentPure';
import ComponentA from './components/ComponentA';

const Firstcomponent = () => {
    return (<>
      <h2>Describing the UI</h2>
      <ul>
        <li>I'm Inside the First Component</li>     
        <li><h1>Importing and Exporting Components</h1></li>
        <Profile/>
        <li><h1>Writing Markup with JSX</h1></li>
        <TodoList />
        <li><h1>JavaScript in JSX with Curly Braces</h1></li>
        <Curleybraces/>
        <li><h1>Passing Props to a Component</h1></li>
        <ParentComponent/>
        <li><h1>ConditionalRendering</h1></li>
        <ConditionalRendering/>
        <li><h1>Rendering List</h1></li>
        <RenderingList/>
        <li><h1>Keeping Components Pure</h1></li>
        <ComponentPure/>
        <li><h1>Understanding Your UI as a Tree</h1></li>
        <ComponentA/>
      </ul>
       </>
      );
   
  
}
export default Firstcomponent;