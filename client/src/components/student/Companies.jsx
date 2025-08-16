import React from 'react'
import { assets } from '../../assets/assets'
import './Companies.css'
const Companies = () => {
  return (
    <div className='pt-16' >
  <p className='text-base text-gray-500'>Trusted by learners from</p>
  <div className='img'>
    <img src={assets.microsoft_logo} alt="microsoft" className=' micro w-20 md:w-28'/>
     <img src={assets.walmart_logo} alt="Walmart" className=' wal w-20 md:w-28'/> 
     <img src={assets.accenture_logo} alt="Accenture" className='acc w-20 md:w-28'/> 
     <img src={assets.adobe_logo} alt="Adobe" className='adobe w-20 md:w-28'/>
      <img src={assets.paypal_logo} alt="Paypal" className='pay w-20 md:w-28'/>
  </div>
    </div>
  )
}

export default Companies
