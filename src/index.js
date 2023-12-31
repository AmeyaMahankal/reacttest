import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './Components/App';
import Appl from './Components/Root';
import AboutMe from './Components/AboutMe';
import { RouterProvider, createHashRouter } from "react-router-dom"


const router = createHashRouter([
  {
    path: "/",
    element: <Appl />,
    children: [
      {
        path: "/",
        element: <App />,
      },
      {
        path: "/about",
        element: <AboutMe />,
      },
    ],
  },
])


const root = ReactDOM.createRoot(document.getElementById("root"))
root.render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
)

