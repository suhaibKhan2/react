import React from "react";
import { Link } from "react-router-dom";
import "../studies.css";  
import "../studies.css";

function Navbar({ isAuthenticated }) {
  return (
    <nav className="navbar">
      <h1>ShopEase</h1>
      <div>
        <Link to="/">Login</Link>
        {isAuthenticated && <Link to="/products">Products</Link>}
      </div>
    </nav>
  );
}

export default Navbar;
