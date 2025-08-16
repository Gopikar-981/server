import React from 'react';
import { assets } from '../../assets/assets';
import './Footer.css'
const Footer = () => {
  return (
    <footer className='footer'>
      <div className='con'>
        <div className='col'>
          <img src={assets.logo_dark} alt="logo" className="w-20 mb-2" />
          <p className="text-sm text-gray-300 max-w-md">
            Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text.
          </p>
        </div>
        <div className='col'>
          <h2>Company</h2>
          <ul>
            <li>
              <a href="#">Home</a>
            </li>
             <li>
              <a href="#">About us</a>
            </li>
             <li>
              <a href="#">Contact us</a>
            </li>
             <li>
              <a href="#">Privacy policy</a>
            </li>
          </ul>
        </div>
        <div className='col'>
          <h2>Suscribe to our newsletter</h2>
          <p>
            The latest news, articles and resources, sent to your inbox weekly.
          </p>
         <div>
          <input type='email' placeholder='Enter your email'/>
          <button className='sub'>subscribe</button>
         </div>
        </div>
      </div>
      <p className="text-xs text-gray-400 mt-4">© 2025 LMS. All rights reserved.</p>
    </footer>
  );
};

export default Footer;
