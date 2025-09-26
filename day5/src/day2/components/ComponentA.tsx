import React from "react";
import { Box, Typography } from "@mui/material";
import ComponentB from "./ComponentB";
import ComponentC from "./ComponentC";

const ComponentA = () => {
  return (
    <Box
      sx={{
        backgroundColor: "red",
        height: 300,
        width: 600,
        border: "2px solid black",
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "center",
        color: "white",
        p: 2,
        borderRadius: 2,
      }}
    >
      <Typography variant="h6" gutterBottom>
        ComponentA
      </Typography>
      <ComponentB />
      <ComponentC />
    </Box>
  );
};

export default ComponentA;
