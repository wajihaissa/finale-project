import React from 'react';
import img1 from '../images/trix-logos_white.png'
import { Link } from 'react-router-dom';
export const Navbar = () => {
  return (
    <div className='NavBar'>
        
        <Link to="/"> <img  src={img1} width="229px"  /></Link>
          
        
        <ul>
          <Link to='/'><li>Home</li></Link>
          <Link to='/store'><li>Store</li></Link>
          <Link to="/signup"><li><button id='joinusbtn' className='JOInu2'>Join us</button></li></Link>
        </ul>
    </div>
  )
}