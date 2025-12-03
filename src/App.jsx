import {RouterProvider} from 'react-router-dom'
import {router} from './router/AppRoutes.jsx'
import {Provider} from 'react-redux'
import './App.css'
import { store } from './store/store.js';
import {Toaster} from 'sonner'

function App() {
 

    return (
            <Provider store={store}>
           
                <RouterProvider router={router}/>

            <Toaster richColors/>
        </Provider>     
    );
}

export default App
