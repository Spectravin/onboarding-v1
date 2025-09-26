import React from "react";
import { Outlet } from "react-router-dom";
import NavigationBar from "./NavigationBar";
import { Box, Toolbar } from "@mui/material";

const drawerWidth = 220;

const Layout = () => (
  <Box sx={{ display: "flex" }}>
    {/* Sidebar + AppBar */}
    <NavigationBar />

    {/* Main Content */}
    <Box
      component="main"
      sx={{
        flexGrow: 1,
        p: 3,
        marginLeft: { sm: 0 }, // will adjust dynamically from NavBar
        transition: "margin 0.3s ease",
      }}
    >
      {/* Push content below AppBar */}
      <Toolbar />
      <Outlet />
    </Box>
  </Box>
);

export default Layout;
