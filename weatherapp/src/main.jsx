import React from 'react'
import ReactDOM from 'react-dom/client'
import './assets/styles/global.css'
import './index.css'
import Home from './components/views/home/HomeView'
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";


const router = createBrowserRouter([
  {
    path: "/",
    element: <Home/>,
  },
]);

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router}/>
  </React.StrictMode>,
)
