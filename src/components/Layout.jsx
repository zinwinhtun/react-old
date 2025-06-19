import React from 'react'
import Header from './Header'
import Footer from './Footer'
import { Outlet } from 'react-router'
import { Toaster } from 'react-hot-toast'

const Layout = () => {
  return (
    <>  
      <Header />
      <Outlet />
      <Footer />
      <Toaster toastOptions={{ duration: 1000 }}  />
    </>
  )
}

export default Layout
