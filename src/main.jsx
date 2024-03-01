import React, { useState } from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'

import DestinationBg from './assets/img/destination/background-destination-desktop.jpg'

import Layout from './components/Layout';
import Nav from './components/Nav';

import Home from './components/Home';

import Destination from './components/Destination';
import Crew from './components/Crew';
import Technology from './components/Technology';

import Planet from './components/Planet'
import Member from './components/Member'
import Material from './components/Material'

//! Router imports
import {
  createBrowserRouter,
  Outlet,
  RouterProvider,
} from "react-router-dom";

//!-----------------------



const router = createBrowserRouter([
  {
      path: "/Home",
      element: <Layout><Home/></Layout>,
      children: [
        { path: "/Home", element: <Home/> },
        { 
          path: "/Home/Destination/", 
          element: <Destination DestinationBg={DestinationBg}></Destination>, 
          children: [
           { path: "/Home/Destination/Planet/:id", element:<Planet/>},
          ]
        },
        { 
          path: "/Home/Crew", 
          element: <Crew/> ,
          children: [
            { path: "/Home/Crew/Member/:id", element:<Member/>},
          ]
        },
        { 
          path: "/Home/Technology",
          element: <Technology/> ,
          children: [
            { path: "/Home/Technology/Material/:id", element:<Material/>},
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