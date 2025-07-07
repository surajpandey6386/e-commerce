import React from 'react'
import { Link } from "react-router-dom";
import logo from '../assets/logo.jpg';
const Navbar = () => {
  return (
    <>
   <header className="navbar">
    <div className="logo"><img  src={logo}/> <p>DealHut</p> </div>
    <nav>
      <ul>
        <li><Link to="/">Home🏠</Link></li>
        <li><a href='#'>Products</a></li>
        <li><Link to ='/cart'>cart🛒</Link> </li>
        <li><Link to="/profile">Profile👤</Link></li>
        <li><Link to='/login'>Sign In</Link></li>
      </ul>
    </nav>
  </header>
  </>
  )
}

export default Navbar;
