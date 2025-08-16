import React from 'react'
import { assets } from '../../assets/assets'

const Footer = () => {
  return (
  <Footer>
    <div>
      <img src={assets.logo} alt="logo" />
      <div></div>
      <p>copyright 2024 @GreatStack. All Right Reserved.
      </p>
    </div>
    <div>
      <a href="#"><img src={assets.facebook_icon} alt="facebook_icon" /></a>
      <a href="#"><img src={assets.twitter_icon} alt="twitter_icon" /></a>
      <a href="#"><img src={assets.instagram_icon} alt="instagram_icon" /></a>
    </div>
  </Footer>
  )
}

export default Footer
