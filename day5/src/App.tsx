
import { createRoot } from 'react-dom/client';
import { AuthProvider } from './AuthProvider';

import {
  RouterProvider,
} from "react-router-dom";

import router from './routes'

const App = () => (
  <AuthProvider>
    <RouterProvider router={router} />
  </AuthProvider>
);

const root = createRoot(document.getElementById('root') as HTMLElement);
root.render(<App />);
