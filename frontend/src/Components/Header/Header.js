import React from 'react'
import Logo from '../Images/Logo.png'
import "./Header.css"
const Header = () => {
  return (
    <div className='header' >
        <div><img src={Logo} alt="logo"/> </div>
    </div>
  )
}

export default Header