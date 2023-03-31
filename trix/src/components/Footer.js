import React from 'react'
import brand5 from '../images/trix-logos_black.png'
import brand6 from '../images/facebook.png'
import brand7 from '../images/github.png'
import brand8 from '../images/instagram.png'

export const Footer = () => {
  return (
    <div className='footer'>
        <img src={brand5} width="229px"  />
          <div className='socialmedia'>
            <a href='https://www.facebook.com/waj.ih.581525'><img src={brand6}/></a>
            <a href='https://github.com/wajihaissa'><img  src={brand7} /></a>
            <a href='https://www.instagram.com/dracnot_here/'><img src={brand8} /></a>
          </div>
    </div>
  )
}
