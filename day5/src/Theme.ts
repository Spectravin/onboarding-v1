// theme.ts
import { createTheme } from "@mui/material/styles";

const theme = createTheme({
  components: {
    MuiButton: {
      styleOverrides: {
        root: {
          borderRadius: 8
        },
        containedPrimary: {
          padding: "10px 18px",
          borderRadius: "8px",
          fontSize: "12px",
          fontWeight: "bold",
          textTransform: "none",
          transition: "0.3s ease",
          "&:hover": {
            backgroundColor: "#1976d2",
          },
          "&:active": {
            transform: "scale(0.95)",
          },
        },containedError:{
            textTransform:"none"
        },
      },
    },
  },
});

export default theme;
