import React from 'react'
import Logo from '../Images/Logo2.png';
import Insta from '../Images/Instagram.png';
import Face from '../Images/Facebook.png';
import Twit from '../Images/Twitter.png';
import Yout from '../Images/Youtube.png';
import './Footer.css'
const Footer = () => { 
  return (
    <div className='footer'>
        <div><img src={Logo} alt='logo' /></div>
        <div className='cp-text'><p>© Copyright Election Commission of India <br /> Current version of website updated on 24.02.2020</p></div>
        <div className='socials'>
                <a><img src={Yout} alt="Yout" /></a>
                <a><img src={Face} alt="Face" /></a>
                <a><img src={Twit} alt="Twit" /></a>
                <a><img src={Insta} alt="insta" /></a>
        </div>
    </div>
  )
}

export default Footer