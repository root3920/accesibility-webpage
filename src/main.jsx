import React from 'react'
import ReactDOM from 'react-dom/client'
import { Home } from './pages/Home.jsx'
import { CambioColor } from '../src/pages/CambioColor.jsx'
import './index.css'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'

const router = createBrowserRouter([
  {
    path: '/',
    element: <Home />,
    errorElement: <h1>Error</h1>
  },
  {
    path: '/color-editor',
    element: <CambioColor />,
    errorElement: <h1>Error</h1>
  }
])


ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router} />

  </React.StrictMode>,
)
