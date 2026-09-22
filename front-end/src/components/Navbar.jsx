import React, { useEffect, useState } from "react";
import { Link, useNavigate, useLocation } from "react-router-dom";
import logo from "../assets/logo.jpg";
import { FaSearch } from "react-icons/fa";

const Navbar = () => {
  const [searchQuery, setSearchQuery] = useState("");
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  const navigate = useNavigate();
  const location = useLocation();
  const role = localStorage.getItem("role");

  useEffect(() => {
    const userId = localStorage.getItem("userId");
    setIsLoggedIn(!!userId);
  }, [location.pathname]);

  const handleLogout = () => {
    localStorage.removeItem("userId");
    localStorage.removeItem("role");
    setIsLoggedIn(false);
    navigate("/login");
  };

  const handleSearch = (e) => {
    e.preventDefault();
    if (searchQuery.trim()) {
      navigate(`/product?search=${encodeURIComponent(searchQuery)}`);
    }
  };

  return (
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
        <button className="searchbutt" type="submit">
          <FaSearch />
        </button>
      </form>

      <nav>
        <ul>
          <li>
            <Link to="/">Home🏠</Link>
          </li>
          <li>
            <Link to="/cart">Cart🛒</Link>
          </li>

          {isLoggedIn ? (
            <>
              <li>
                <Link to="/profile">Profile👤</Link>
              </li>
              <li>
                <button onClick={handleLogout} style={{ cursor: "pointer" }}>
                  Logout
                </button>
              </li>
            </>
          ) : (
            <li>
              <Link to="/login">Sign In</Link>
            </li>
          )}

          {role === "admin" && (
            <li>
              <Link to="/additem">Add Items</Link>
            </li>
          )}
        </ul>
      </nav>
    </header>
  );
};

export default Navbar;
