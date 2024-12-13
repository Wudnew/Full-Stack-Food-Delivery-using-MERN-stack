import React from 'react'
import './Footer.css'
import { assets } from '../../assets/assets'
function Footer() {
  return (
    <div className='footer' id='footer'>
    <div className='footer-content'>
    <div className='footer-content-left'>
    <h1>Ethio Food.</h1>
    <p>Enjoy fast, fresh, and convenient food delivery right to your doorstep, anytime, anywhere.</p>
    <div className='footer-social-icons'>
    <img src={assets.facebook_icon} alt=''/>
    <img src={assets.twitter_icon} alt=''/>
    <img src={assets.linkedin_icon} alt=''/>
    
    </div>
    </div>
    <div className='footer-content-center'>
    <h2>Company</h2>
    <ul>
        <li>Home</li>
        <li>About Us</li>
        <li>Delivery</li>
        <li>Privacy policy</li>
    </ul>
    </div>
    <div className='footer-content-right'>
    <h2>Get In Touch</h2>
    <ul>
        <li>+251942282146</li>
        <li>wuditlema@gmail.com</li>
    </ul>
    </div>
    </div>
    <hr />
    <p className='footer-copyright'>Copyright 2024 © ethio-food.com All right reserved</p>
    </div>
  )
}

export default Footer