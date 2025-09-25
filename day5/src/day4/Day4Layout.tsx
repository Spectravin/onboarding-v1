
import { Outlet} from "react-router-dom";
import TopMenu from '../TopMenu'


const Day4Layout = () => (
  <div>
    <h2>Day 4</h2>
    <TopMenu
      items={[
        { label: "Panel Selection", path: "/day4/panel-selection" },
        { label: "Reacting to User Input", path: "/day4/reacting-to-userinput" },
        { label: "Counter Reducer", path: "/day4/couter-reducer" },
        { label: "ChatBox", path: "/day4/perserving-resetting" },
      ]}
    />
    <Outlet />
  </div>
);

export default Day4Layout;