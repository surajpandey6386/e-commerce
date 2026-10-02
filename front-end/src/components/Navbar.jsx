import React, { useEffect, useState } from "react";
import { Link, useNavigate, useLocation } from "react-router-dom";
import logo from "../assets/logo.jpg";
import {
  FaSearch,
  FaHome,
  FaShoppingCart,
  FaBoxOpen,
  FaUser,
  FaSignOutAlt,
  FaPlus,
  FaBars,
  FaTimes,
} from "react-icons/fa";

import "./Navbar.css";

const Navbar = () => {
  const [searchQuery, setSearchQuery] = useState("");
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  const navigate = useNavigate();
  const location = useLocation();

  const role = localStorage.getItem("role");

  useEffect(() => {
    const userId = localStorage.getItem("userId");
    setIsLoggedIn(!!userId);
    setMenuOpen(false);
  }, [location.pathname]);

  const handleLogout = () => {
    localStorage.removeItem("userId");
    localStorage.removeItem("role");

    setIsLoggedIn(false);
    setMenuOpen(false);

    navigate("/login");
  };

  const handleSearch = (e) => {
    e.preventDefault();

    const search = searchQuery.trim();

    if (search) {
      navigate(`/product?search=${encodeURIComponent(search)}`);
      setMenuOpen(false);
    }
  };

  return (
    <header className="navbar">
      {/* Logo */}
      <Link to="/" className="navbar-logo">
        <img src={logo} alt="DealHut Logo" />
        <span>DealHut</span>
      </Link>

      {/* Search */}
      <form className="navbar-search" onSubmit={handleSearch}>
        <input
          type="text"
          placeholder="Search products, brands and more"
          value={searchQuery}
          onChange={(e) => setSearchQuery(e.target.value)}
        />

        <button type="submit" aria-label="Search">
          <FaSearch />
        </button>
      </form>

      {/* Mobile menu button */}
      <button
        className="mobile-menu-button"
        onClick={() => setMenuOpen(!menuOpen)}
        aria-label="Toggle menu"
      >
        {menuOpen ? <FaTimes /> : <FaBars />}
      </button>

      {/* Navigation */}
      <nav className={`navbar-nav ${menuOpen ? "nav-open" : ""}`}>
        <Link to="/" className="nav-link">
          <FaHome />
          <span>Home</span>
        </Link>

        <Link to="/cart" className="nav-link">
          <FaShoppingCart />
          <span>Cart</span>
        </Link>

        {isLoggedIn && (
          <>
            <Link to="/orders" className="nav-link">
              <FaBoxOpen />
              <span>My Orders</span>
            </Link>

            <Link to="/profile" className="nav-link">
              <FaUser />
              <span>Profile</span>
            </Link>

            <button className="logout-button" onClick={handleLogout}>
              <FaSignOutAlt />
              <span>Logout</span>
            </button>
          </>
        )}

        {!isLoggedIn && (
          <Link to="/login" className="signin-button">
            Sign In
          </Link>
        )}

        {role === "admin" && (
          <Link to="/additem" className="add-item-link">
            <FaPlus />
            <span>Add Items</span>
          </Link>
        )}
      </nav>
    </header>
  );
};

export default Navbar;