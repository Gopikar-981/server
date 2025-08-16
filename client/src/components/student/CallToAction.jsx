import React from 'react'
import { assets } from '../../assets/assets'
import './CallToAction.css'
const CallToAction = () => {
  return (
    <div className='flex flex-col itrms-center gap-4 pt-10 pb-24 px-8 md:px-0'>
    
      <h1>Learn anything, anytime,anywhere</h1>
      <p>Incididunt sint fugiat pariatur cupidatat concensectetur sit cillum anim id <br />veniam aliqua proident excepteur commodo doea.</p>
      <center>
      <div className='cta flex item-center font-medium gap-6 mt-4'>
        <button className='get px-10 py-3 rounded-md text-white bg-blue-600'>Get started</button>
        <button>Learn more <img src={assets.arrow_icon} alt="arrow_icon" /></button>
      </div>
      </center>
    </div>
  )
}

export default CallToAction
