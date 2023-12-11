import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'

import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import Root from './Components/Root/Root';
import Home from './Components/Home/Home';
import About from './Components/Home/About';
import Contact from './Components/Home/Contact';
import Skills from './Components/Home/Skills';
import Projects from './Components/Home/Projects';
import Experience from './Components/Home/Experience';

const router = createBrowserRouter([
  {
    path: "/",
    element: <Root></Root>,
    children:[
      {
        path:"/",
        element:<Home></Home>,
        children:[
          {
            path:'/',
            element:<About></About>
          },
          {
            path:'/skills',
            element:<Skills></Skills>
          },
          {
            path:'/exp',
            element:<Experience></Experience>
          },
          {
            path:'/projects',
            element:<Projects></Projects>
          },
          {
            path:'/contact',
            element:<Contact></Contact>
          }
        ]
      },
      
    ]
  }
]);

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
   <RouterProvider router={router} />
  </React.StrictMode>,
)
