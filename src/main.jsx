import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'
import { RouterProvider } from 'react-router-dom'
import Router from './Routes/Router'
import { HelmetProvider } from 'react-helmet-async';
import AuthProvider from './providers/AuthProvider'
import { Toaster } from 'react-hot-toast'
ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <HelmetProvider>
      <Toaster />
      <AuthProvider>
        <div className="container mx-auto">
          <RouterProvider router={Router}></RouterProvider>
        </div>
      </AuthProvider>
    </HelmetProvider>
  </React.StrictMode>,
)
