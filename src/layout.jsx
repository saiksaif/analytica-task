import React from 'react'
import Navbar from './components/Navbar'
import Footer from './components/Footer'

function Layout({children}) {
  return (
    <div className='min-h-[100dvh] flex flex-col'>
        <Navbar />
        <div className='grow'>
            {children}
        </div>
        <Footer />
    </div>
  )
}

export default Layout