import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import {
  
  RouterProvider
} from "react-router-dom";


import router from './assets/Provider/Router/Router';
import AuthProvoder from './assets/Provider/AuthProvider';





createRoot(document.getElementById('root')).render(
  <StrictMode>
    <AuthProvoder>
    <RouterProvider router={router} />
    </AuthProvoder>

    
  </StrictMode>,
)
