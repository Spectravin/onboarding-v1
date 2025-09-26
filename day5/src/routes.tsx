
import {
  createBrowserRouter,
  type RouteObject,
} from "react-router-dom";
import Layout from './Layout'
import Day1 from './day1/Day1';
import Day2 from './day2/Day2';
import Day3Layout from './day3/Day3Layout';
import ReactingToUserInput from './day4/components/ReactingToUserInput';
import ChatBox from'./day4/components/PreservingAndResettingState/ChatBox';
import CounterReducer from './day4/components/CounterReducer';
import FruitAddingForm from './day3/components/FruitAddingForm';
import IncreaseNumberComponent from './day3/components/IncreaseNumberComponent';
import NameComponent from './day3/components/NameComponent';
import Day4Layout from './day4/Day4Layout'
import SharingStateParent from './day4/components/PanelSelection/SharingStateParent'
import ComponentA from './day2/components/ComponentA'
import Profile from './day2/components/Profile';
import ConditionalRendering from './day2/components/ConditionalRendering';
import RenderingList from './day2/components/RenderingList';
import ParentComponent from './day2/components/ParentComponent';
import TodoList from './day2/components/TodoList';
import ComponentPure from './day2/components/ComponentPure';
import Curleybraces from './day2/components/Curleybraces';


const myRoutes: RouteObject[] = [
  {
    path: "/",
    element: <Layout />,
    children: [
      { path: "/", element: <Day1 /> },
      { path: "day2", element: <Day2 />,
        children:[ { path: "profile", element: <Profile /> },
          { path: "todolist", element: <TodoList /> },
          { path: "curleybraces", element: <Curleybraces /> },
          { path: "parent", element: <ParentComponent /> },
          { path: "conditional", element: <ConditionalRendering /> },
          { path: "list", element: <RenderingList /> },
          { path: "pure", element: <ComponentPure /> },
          { path: "tree", element: <ComponentA /> },
          { index: true, element: <Profile /> },
    ]},
      {
        path: "day3",
        element: <Day3Layout />,
        children: [
          { path: "fruit-form", element: <FruitAddingForm /> },
          { path: "increase-number-component", element: <IncreaseNumberComponent /> },
          { path: "name-component", element: <NameComponent /> }
        ]
      },
      {
        path: "day4",
        element: <Day4Layout />,
        children: [
          { path: "panel-selection", element: <SharingStateParent/>  },
          { path: "reacting-to-userinput", element:<ReactingToUserInput/>},
          { path: "couter-reducer", element: <CounterReducer /> },
          { path: "perserving-resetting", element: <ChatBox /> }
        ]
      }
    ]
  }
];

 
const router = createBrowserRouter(myRoutes);
export default router;