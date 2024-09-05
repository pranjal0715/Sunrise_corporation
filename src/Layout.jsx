import React from 'react'
import Navbar from './Components/Navbar'
import { Outlet } from 'react-router-dom'
import Footer from './Components/Footer'

const Route = () => {
  return (
   <>
    <Navbar/>
    <Outlet />
    <Footer />
   </>
  )
}

export default Route

