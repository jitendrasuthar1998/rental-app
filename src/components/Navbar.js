import React from 'react'
import { RiMailOpenFill } from 'react-icons/ri';
import { BiChevronDown } from 'react-icons/bi'
import { Link } from 'react-router-dom';

export default function Navbar() {
  return (
    <nav>
        <div className='logo'>
         <Link to="/"><span><RiMailOpenFill color='#7065f0' size={25} /></span></Link>
         <Link to="/"> <h1>Estray</h1></Link>
        </div>
        <ul className="nav-options">
          <li>Rent</li>
          <li>Buy</li>
          <li>Sell</li>
          <li>Manage Property <span className='down-icon'><BiChevronDown /></span></li>
          <li>Resources <span className='down-icon'><BiChevronDown /></span></li>
        </ul>
        <div className='btn-container'>
        <button className='button login-btn'><Link to="/favorites">Favorites</Link></button>
          <button className='button login-btn'>Login</button>
          <button className='button signup-btn' >Sign Up</button>
        </div>
      </nav>
  )
}
