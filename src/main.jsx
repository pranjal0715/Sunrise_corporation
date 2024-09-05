import React from 'react'
import ReactDOM from 'react-dom/client'
import { Route, Router, RouterProvider, createBrowserRouter, createRoutesFromElements } from 'react-router-dom'
import Home from './Components/Home'
import Layout from './Layout'
import About from './Components/About'
import Product from './Components/Product'
import Basic from './Components/Product/Basic'
import Textile from './Components/Product/Textile'
import Intermediate from './Components/Product/Intermediate'
import Dyes from './Components/Product/Dyes'
import Conc_Textile from './Components/Product/Conc_Textile'


import './index.css'
import Contact from './Components/Contact'

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path='/' element={<Layout />}>
      <Route path='/' element={<Home />} />
      <Route path='/about' element={<About />} />
      <Route path='/product' element={<Product />} />
      <Route path='/contact' element={<Contact />} />
      <Route path="/Product/Basic" element={<Basic />} />
      <Route path="/product/Textile" element={<Textile />} />
      <Route path="/product/Conc_Textile" element={<Conc_Textile />} />
      <Route path="/product/Intermediate" element={<Intermediate />} />
      <Route path="/product/Dyes" element={<Dyes />} />
    </Route >
  )
)
ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>,
)
