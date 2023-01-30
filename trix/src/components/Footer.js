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
            <img src={brand6}/>
            <img src={brand7} />
            <img src={brand8} />
          </div>
    </div>
  )
}
