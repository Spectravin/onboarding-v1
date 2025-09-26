import React from "react";
import { Box, Typography } from "@mui/material";
import ComponentD from "./ComponentD";

const ComponentB = () => {
  return (
    <Box
      sx={{
        backgroundColor: "yellow",
        height: 100,
        width: 200,
        border: "2px solid black", 
        display: "flex",          
        alignItems: "center",
        justifyContent: "center",
        borderRadius: 1,
        p: 1,
      }}
    >
      <Typography variant="body1" sx={{ fontWeight: "bold" }}>
        ComponentB
      </Typography>
      <ComponentD />
    </Box>
  );
};

export default ComponentB;
