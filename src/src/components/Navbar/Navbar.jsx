import React from 'react'
import { Link } from 'react-router-dom'
import logo from '../../assets/react.svg'
import './Navbar.css';
function Navbar() {
  return (
    <>
    <div className='navbar-items'>
        <div >
            <img src={logo}></img>
        </div>
        <div className='items-list'>
            <ul className="list">
                <li><Link to="home">Home</Link></li>
                <li><Link to="about">About</Link></li>
                <li><Link to="Services">Services</Link></li>
                <li><Link to="contact">Contact us</Link></li>
                <li><Link to="/">Logout</Link></li>
            </ul>
        </div>
    </div>
    </>
  )
}

export default Navbar
