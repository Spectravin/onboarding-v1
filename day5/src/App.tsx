
import { createRoot } from 'react-dom/client';
import { AuthProvider } from './AuthProvider';

import {
  RouterProvider,
} from "react-router-dom";

import router from './routes'
import { ThemeProvider, CssBaseline } from "@mui/material";
import theme from "./Theme";
const App = () => (
  <AuthProvider>
     <ThemeProvider theme={theme}>
          <RouterProvider router={router} />
          </ThemeProvider>
  </AuthProvider>
);

const root = createRoot(document.getElementById('root') as HTMLElement);
root.render(<App />);
