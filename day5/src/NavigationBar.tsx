import React, { useState } from "react";
import { useNavigate, useLocation, type NavigateFunction } from "react-router-dom";
import {
  Drawer,
  List,
  ListItem,
  ListItemButton,
  ListItemText,
  IconButton,
  AppBar,
  Toolbar,
  Typography,
  Box,
  CssBaseline,
} from "@mui/material";
import MenuIcon from "@mui/icons-material/Menu";

const drawerWidth = 220;

const Navigation = () => {
  const [open, setOpen] = useState(false);
  const navigate: NavigateFunction = useNavigate();
  const location = useLocation();

  const navItems = [
    { label: "Day 1", path: "/" },
    { label: "Day 2", path: "/day2" },
    { label: "Day 3", path: "/day3" },
    { label: "Day 4", path: "/day4" },
  ];

  return (
    <Box sx={{ display: "flex" }}>
      <CssBaseline />

      <AppBar
        position="fixed"
        sx={{
          background: "#20232a",
          zIndex: (theme) => theme.zIndex.drawer + 1,
        }}
      >
        <Toolbar>
          <IconButton
            edge="start"
            color="inherit"
            aria-label="menu"
            onClick={() => setOpen(true)}
            sx={{ mr: 2 }}
          >
            <MenuIcon />
          </IconButton>
          <Typography variant="h6" noWrap>
            My Navigation
          </Typography>
        </Toolbar>
      </AppBar>

      <Drawer
        variant="temporary"  
        anchor="left"
        open={open}
        onClose={() => setOpen(false)}  
        sx={{
          "& .MuiDrawer-paper": {
            width: drawerWidth,
            boxSizing: "border-box",
            backgroundColor: "#20232a",
            color: "white",
          },
        }}
      >
        <Toolbar />
        <List>
          {navItems.map((item) => (
            <ListItem key={item.path} disablePadding>
              <ListItemButton
                selected={location.pathname === item.path}
                onClick={() => {
                  navigate(item.path);
                  setOpen(false); 
                }}
              >
                <ListItemText primary={item.label} />
              </ListItemButton>
            </ListItem>
          ))}
        </List>
      </Drawer>
    </Box>
  );
};

export default Navigation;
