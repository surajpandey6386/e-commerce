import React, { useState } from 'react';
import { Link, useNavigate } from "react-router-dom";
import logo from '../assets/logo.jpg';
import { FaSearch } from 'react-icons/fa';

const Navbar = () => {
  const [searchQuery, setSearchQuery] = useState('');
  const navigate = useNavigate();

  const handleSearch = (e) => {
    e.preventDefault();
    if (searchQuery.trim()) {
      navigate(`/product?search=${encodeURIComponent(searchQuery)}`);
    }
  };

  return (
    <>
      <header className="navbar">
        <div className="logo">
          <img src={logo} alt="Logo" /> 
          <p>DealHut</p>
        </div>

        <form onSubmit={handleSearch} className="searchbar">
          <input
            type="text"
            placeholder="Search for Products, Brands and more"
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
          />
          <button type="submit"><FaSearch /></button>
        </form>

        <nav>
          <ul>
            <li><Link to="/">Home🏠</Link></li>
            <li><Link to="/product">Products</Link></li>
            <li><Link to="/cart">Cart🛒</Link></li>
            <li><Link to="/profile">Profile👤</Link></li>
            <li><Link to="/login">Sign In</Link></li>
            <li><Link to="/additem">Add Items</Link></li>
          </ul>
        </nav>
      </header>
    </>
  );
};

export default Navbar;
