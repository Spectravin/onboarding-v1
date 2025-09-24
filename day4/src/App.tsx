import { useState } from 'react';
import {createRoot} from 'react-dom/client'
import ReactingToUseInput from './ReactingToUserInput';
import { AuthProvider } from './AuthProvider';
import {SnackbarProvider} from "notistack"
const App = () => {

      const [pos, setPos] = useState();
   return (
    <div>
      
      <AuthProvider>
        <SnackbarProvider>
          Hello day4
         <ReactingToUseInput/>
        </SnackbarProvider>
      </AuthProvider>

    </div>
  );
}


const root = createRoot(document.getElementById('root') as HTMLElement);
root.render(<App />);