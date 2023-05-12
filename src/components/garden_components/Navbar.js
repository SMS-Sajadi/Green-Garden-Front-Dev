import React from 'react'
import "./Navbar.css"
import logo from "../assets/logo.png"
import saveIcon from "../assets/saveIcon.png"
import profile from "../assets/profile.png"



const Navbar = () => {
  return (
    <div className='navContainer'>
  <img src={logo} alt="image1" className='navLogo' />
  <div className='navItems'>
        <ul  >
            <li>صفحه اصلی</li>
            <li>پیشنهاد گیاه</li>
            <li>درباره ما</li>
        </ul>
        </div>
        <div  className='iconContainer'>
        <img src={saveIcon} alt="image1"  />
        <img src={profile} alt="image1"  />
        </div>
    </div>
  )
}

export default Navbar