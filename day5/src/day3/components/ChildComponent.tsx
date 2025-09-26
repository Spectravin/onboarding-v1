import React from "react";
import { Button } from "@mui/material";
import {type MouseEventHandler} from 'react'

interface ChildComponentProps {
  setclickButton:(event: React.MouseEvent<HTMLButtonElement>)=>void
}

const ChildComponent: React.FC<ChildComponentProps> = ({ setclickButton }) => {
  return (
    <Button
      variant="contained"
      color="primary"
      onClick={setclickButton}
      sx={{
        padding: "10px 18px",
        borderRadius: "8px",
        fontSize: "16px",
        fontWeight: "bold",
        textTransform: "none",
        transition: "0.3s ease",
        "&:hover": {
          backgroundColor: "#1976d2",
        },
        "&:active": {
          transform: "scale(0.95)",
        },
      }}
    >
      Enter
    </Button>
  );
};

export default ChildComponent;
