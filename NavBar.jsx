import React from "react";
import "./NavBar.css";
import { FaSearch } from "react-icons/fa";
import { Link } from "react-router-dom";
import { useCart } from "./CartContext";

const Navbar = ({ user, setSearchQuery }) => {
  const { cartItems } = useCart();

  return (
    <nav className="navbar">
      <div className="navbar-left">
        <img
          src="https://blinkit.com/images/faviconChange.ico"
          alt="Blinkit Logo"
          className="logo"
        />
      </div>

      <div className="navbar-center">
        <Link to="/" className="home-link">Home</Link>
        <div className="search-container">
          <FaSearch className="search-icon" />
          <input
            type="text"
            placeholder="Search for products..."
            className="search-input"
            onChange={(e) => setSearchQuery(e.target.value)}
          />
        </div>
      </div>

      <div className="navbar-right">
        {user ? (
          <span className="user-name">Hi, {user.name}</span>
        ) : (
          <>
            <Link to="/User/Login">
              <button className="login-btn">Login</button>
            </Link>
            <Link to="/User/Register">
              <button className="register-btn">Register</button>
            </Link>
          </>
        )}

        <Link to="/CardPage">
          <button className="cart-btn">
            Cart <span className="cart-badge">{cartItems.length}</span>
          </button>
        </Link>
      </div>
    </nav>
  );
};

export default Navbar;
