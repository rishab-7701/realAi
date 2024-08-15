import React from 'react'
import './Navbar.css'
// import logo from '../../assets/real_Ai logo.svg'
const Navbar = () => {
  return (
    <div className='navbar'>
       {/* <img src={logo} alt="" /> */}
       <div className='main-head'> real Ai</div>
        {/* <div className='title'>re@l Ai</div> */}
        <ul className="nav-menu">
           <li className='list-1'>Home</li> 
           <li className='list-new'> About us</li>
           <li className='list-2'>Contact</li> 
           <li className='list-upcoming'> Upcoming</li>
        </ul>
        <div className="nav-connect"> Connect with Us</div>
    </div>
  )
}

export default Navbar
