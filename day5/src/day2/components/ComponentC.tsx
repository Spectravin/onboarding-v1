import React from "react";
import { Box, Typography } from "@mui/material";
import ComponentE from "./ComponentE";

const ComponentC = () => {
  return (
    <Box
      sx={{
        backgroundColor: "green",
        height: 100,
        width: 200,
        border: "2px solid black", 
        display: "flex",           
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "center",
        borderRadius: 1,
        p: 1,
        color: "white",
      }}
    >
      <Typography variant="body1" sx={{ fontWeight: "bold" }}>
        ComponentC
      </Typography>
      <ComponentE />
    </Box>
  );
};

export default ComponentC;
