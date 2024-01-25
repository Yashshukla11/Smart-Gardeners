import React, {Suspense} from "react";
import App from "./App.jsx";
import "./index.css";
import { ToastContainer, Bounce } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import ReactDOM from 'react-dom/client'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import { Landing } from "./Pages/Landing/Landing";
import { About } from "./Pages/About/About";
import { Contact } from "./Pages/Contact/Contact";
import { WeGrow } from "./Pages/WeGrow/WeGrow";
import { Kit } from "./Pages/Kit/Kit";
import Login from "./Pages/Login/Login";
import Signup from "./Pages/Signup/Signup";

const router = createBrowserRouter([
  {
    path: '/',
    element: <Suspense><App /></Suspense>,
    children: [
      {
        path: '/',
        element: <Landing />
      },
      {
        path: '/about',
        element: <About />
      },
      {
        path: '/contact',
        element: <Contact />
      },
      {
        path: '/kit',
        element: <Kit />
      },
      {
        path: '/signin',
        element: <Login />
      },
      {
        path: '/signup',
        element: <Signup />
      },
      {
        path: '/wegrow',
        element: <WeGrow />
      }
    ]
  }
])

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
  <ToastContainer
      position="top-center"
      autoClose={5000}
      hideProgressBar={false}
      newestOnTop={false}
      closeOnClick={false}
      rtl={false}
      pauseOnFocusLoss={false}
      draggable={false}
      pauseOnHover={false}
      theme="light"
      transition={Bounce}
    />
    <RouterProvider router={router} />

  </React.StrictMode>
)