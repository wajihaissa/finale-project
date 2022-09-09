import React from 'react';
import img1 from '../images/trix-logos_white.png'
export const Navbar = () => {
  return (
    <div className='NavBar'>
        
        <img  src={img1} width="229px"  />
          
        
        <ul>
          <li>Home</li>
          <li>Store</li>
          <li><button id='joinusbtn'>Join us</button></li>
        </ul>
    </div>
  )
}