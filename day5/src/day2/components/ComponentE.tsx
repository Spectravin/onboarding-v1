import React from "react";
import { Box, Typography } from "@mui/material";

const ComponentE = () => {
  return (
    <Box
      sx={{
        backgroundColor: "fuchsia",
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
        ComponentE
      </Typography>
    </Box>
  );
};

export default ComponentE;
