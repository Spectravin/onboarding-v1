import React from "react";
import { Link, Outlet, useLocation } from "react-router-dom";
import { Box, Tabs, Tab, Typography } from "@mui/material";

const menuItems = [
  { path: "profile", label: "Profile" },
  { path: "todolist", label: "Todo List" },
  { path: "curleybraces", label: "Curley Braces" },
  { path: "parent", label: "Parent Component" },
  { path: "conditional", label: "Conditional Rendering" },
  { path: "list", label: "Rendering List" },
  { path: "pure", label: "Pure Component" },
  { path: "tree", label: "Component Tree" },
];

const Day2: React.FC = () => {
  const location = useLocation();

  const activeIndex = menuItems.findIndex((item) =>
    location.pathname.endsWith(item.path)
  );

  return (
    <Box>
      <Typography variant="h4" gutterBottom>
        Day2: Describing the UI
      </Typography>

      <Tabs
        value={activeIndex === -1 ? false : activeIndex}
        textColor="primary"
        indicatorColor="primary"
        variant="scrollable"
        scrollButtons="auto"
        sx={{ mb: 2 }}
      >
        {menuItems.map((item, index) => (
          <Tab
            key={item.path}
            label={item.label}
            component={Link}
            to={item.path}
            sx={{ textTransform: "none", fontWeight: activeIndex === index ? "bold" : "normal" }}
          />
        ))}
      </Tabs>

      <hr />
      <Outlet />
    </Box>
  );
};

export default Day2;
