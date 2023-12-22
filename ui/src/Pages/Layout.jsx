import React from 'react'
import Header from '../Components/Header/Header'
import Footer from '../Components/Footer/Footer'
import Home from '../Components/Home/Home'
import AccountCreate from '../Components/Home/AccountCreate'
import BillPaySetups from '../Components/Home/BillPaySetups'
import Cards from '../Components/Home/Cards'

const Layout = () => {
  return (
   <>
   <div className=''>

   <Header className/>
   <Home   />
   <AccountCreate/>
   <BillPaySetups/>
   <Cards/>
  

  <Footer/>
   </div>

   </>
  )
}

export default Layout