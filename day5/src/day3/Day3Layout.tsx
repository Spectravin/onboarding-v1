
import {Outlet} from "react-router-dom";
import TopMenu from '../TopMenu'
const Day3Layout = () => (
  <div>
    <h2>Day 3</h2>
    <TopMenu
      items={[
        { label: "Fruit Form", path: "/day3/fruit-form" },
        { label: "Increase Number", path: "/day3/increase-number-component" },
        { label: "Name Component", path: "/day3/name-component" },
      ]}
    />
    <Outlet />
  </div>
);

export default Day3Layout;