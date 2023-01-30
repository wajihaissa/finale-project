import React from 'react'
import img1 from '../images/Capture_d_écran_2022-09-04_102534-removebg-preview.png'
import brand1 from '../images/visa-logo-11530966316amvzjrobsf-removebg-preview.png'
import brand2 from '../images/Capture_d_écran_2022-09-03_233355-removebg-preview.png'
import brand3 from '../images/téléchargé-removebg-preview.png'
import brand4 from '../images/office-nationale-des-postes-removebg-preview.png'


import { Link } from 'react-router-dom';


export const Herosection = () => {
  return (
    <div className='herosection'>
       <div className='fisrtpart'>
        <div className='promises'>
            <h1> Level Up Everywhere.</h1>
            <p> Are you gamer a nd want to buy points for ur favorite game ,or just some good music ,in TRIX we got you covered
All your favorite services, accessible in TND 
</p>

  <Link to="/signup"><button id="joinusbtn" className='JOInu1' >Join us </button></Link>
  <Link to="/login"><button id="signinbtn">Login</button></Link>
  

</div>
        <img id="herosectionphoto" src={img1}/>
        </div>
        
        <div className='featured'>
          <p>Pay in Tunisian dinars. As you want, When you want.</p>
          <div className='brands'>
          <img src={brand1} width="150px" />
          <img src={brand2} width="150px"/>
          <img src={brand3} width="150px"/>
          <img src={brand4} width="150px"/> 
          </div>
        </div>
       <footer>
       
       </footer>
          
        </div>

  )
}
