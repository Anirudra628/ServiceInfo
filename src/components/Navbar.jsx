import React from "react";
import "./Navbar.css";
import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <nav className="navContainer">
      <Link to="/" className="navItem">Home</Link>
      <Link to="/services" className="navItem">Services</Link>
      <Link to="/cart" className="navItem">Cart</Link>
      <Link to="/about" className="navItem">About Us</Link>
      <Link to="/contact" className="navItem">Contact Us</Link>
    </nav>
  );
}

export default Navbar;
