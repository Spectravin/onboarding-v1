import react from 'react'


import {Outlet} from "react-router-dom";
import NavigationBar from './NavigationBar'

const Layout = () => (
  <div style={{ display: "flex", height: "100vh" }}>
    <NavigationBar /> 
    <main style={{ flex: 1, padding: "2rem", background: "#f9f9f9" }}>
      <Outlet />
    </main>
  </div>
);
export default Layout;