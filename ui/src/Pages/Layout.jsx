import React from 'react'
import Header from '../Components/Header/Header'
import Footer from '../Components/Footer/Footer'
import Home from '../Components/Home/Home'

const Layout = () => {
  return (
   <>
   <Header/>
   <div className='pt-80'>  <Home /></div>
   <Footer/>
   </>
  )
}

export default Layout