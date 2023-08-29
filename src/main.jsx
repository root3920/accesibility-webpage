import React from 'react'
import ReactDOM from 'react-dom/client'
import { Home } from './pages/Home.jsx'
import { ColorEditor } from '../src/pages/ColorEditor.jsx'
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
    element: <ColorEditor />,
    errorElement: <h1>Error</h1>
  }
])


ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router} />

  </React.StrictMode>,
)
