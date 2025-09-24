import { useState } from 'react';
import {createRoot} from 'react-dom/client'
import { AuthProvider } from './AuthProvider';
import {SnackbarProvider} from "notistack";
import Navigation from './Navigation';
import SnackBar from './SnackBar';
const App = () => {

      const [pos, setPos] = useState();
   return (
    <div>
      
      <AuthProvider>
        <SnackbarProvider>
         <Navigation/>
        </SnackbarProvider>
      </AuthProvider>

    </div>
  );
}


const root = createRoot(document.getElementById('root') as HTMLElement);
root.render(<App />);