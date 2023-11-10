import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'
import { RouterProvider } from 'react-router-dom'
import Router from './Routes/Router'
import {HelmetProvider } from 'react-helmet-async';
ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <HelmetProvider>
      <div className="container mx-auto">
        <RouterProvider router={Router}></RouterProvider>
      </div>
    </HelmetProvider>
  </React.StrictMode>,
)
