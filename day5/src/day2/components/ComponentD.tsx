import React from "react";
import { Box, Typography } from "@mui/material";

const ComponentD = () => {
  return (
    <Box
      sx={{
        backgroundColor: "blue",
        height: 50,
        width: 100,
        border: "2px solid black", 
        display: "flex",           
        alignItems: "center",
        justifyContent: "center",
        borderRadius: 1,
        color: "white",
      }}
    >
      <Typography variant="body2" sx={{ fontWeight: "bold" }}>
        ComponentD
      </Typography>
    </Box>
  );
};

export default ComponentD;
