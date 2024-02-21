import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import About from './About.jsx'
import Education from './Education.jsx'

import './index.css'
import {
  createBrowserRouter,
  RouterProvider,
} from 'react-router-dom';
import Contact from './Contact.jsx'
import Projects from './Projects.jsx'

const router = createBrowserRouter([
  {
    path:'/',
    element:<App />,
  },
  {
    path:'/about',
    element:<About />,
  },
  {
    path:'/contact',
    element:<Contact />,
  },
  {
    path:'/projects',
    element:<Projects />,
  },
])

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router}/>
  </React.StrictMode>,
)
