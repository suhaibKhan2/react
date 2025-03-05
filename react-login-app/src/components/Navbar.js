import React from "react";
import { Link } from "react-router-dom";

function Navbar() {
  return (
    <nav className="navbar">
      <Link to="/">Login</Link>
      <Link to="/products">Products</Link>
    </nav>
  );
}

export default Navbar;
