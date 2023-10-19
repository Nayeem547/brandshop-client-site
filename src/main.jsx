import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import { RouterProvider, createBrowserRouter } from 'react-router-dom'
import Coffie from './component/coffie.jsx'
import AddCart from './component/AddCart/AddCart.jsx'
import Home from './component/Home/Home.jsx'
import MainLayout from './component/MainLayout/MainLayout.jsx'
import BrandDetails from './component/BrandPages/BrandDetails.jsx'

const router = createBrowserRouter([
  {
    path: "/",
    element: <MainLayout></MainLayout>,
    children:[
      {
        path : "/",
        element : <Home></Home>,
        loader : ()=> fetch('/brand.json')
        
    },
      {
        path: "/AddCart",
        element: <AddCart></AddCart>
      },
      {
        path : "/branddetails/:id",
        element : <BrandDetails></BrandDetails> ,
        loader : ()=> fetch('/brand.json'),
        
    }
    ]
  },
 
])

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>,
)
