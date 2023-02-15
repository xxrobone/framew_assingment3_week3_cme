import React from 'react'
import ReactDOM from 'react-dom/client'
/* import { createBrowserRouter, RouterProvider } from 'react-router-dom' */
import { BrowserRouter } from 'react-router-dom'
import App from './App'
import './index.scss'

/* const router = createBrowserRouter([
  {
    path: '/',
    element: <App />

  }
]) */

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <BrowserRouter>
      <App />
    </BrowserRouter>
    {/*  <RouterProvider router={router} /> */}
  </React.StrictMode>,
)
