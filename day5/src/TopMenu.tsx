import React from "react";
import { Tabs, Tab, Box } from "@mui/material";
import { useNavigate, useLocation } from "react-router-dom";

interface TopMenuProps {
  items: { label: string; path: string }[];
}

const TopMenu: React.FC<TopMenuProps> = ({ items }) => {
  const navigate = useNavigate();
  const location = useLocation();

  const currentTab = items.findIndex((item) => location.pathname === item.path);

  const handleChange = (_: React.SyntheticEvent, newValue: number) => {
    const selected = items[newValue];
    if (selected) {
      navigate(selected.path); 
    }
  };

  return (
    <Box sx={{ borderBottom: 1, borderColor: "divider", mb: 2 }}>
      <Tabs
        value={currentTab !== -1 ? currentTab : false}
        onChange={handleChange}
        textColor="inherit"
        indicatorColor="primary"
      >
        {items.map((item) => (
          <Tab key={item.path} label={item.label} />
        ))}
      </Tabs>
    </Box>
  );
};

export default TopMenu;
