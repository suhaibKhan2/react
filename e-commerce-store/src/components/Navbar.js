import React from "react";
import { Link, useNavigate } from "react-router-dom";

function Navbar({ isLoggedIn, setIsLoggedIn }) {
  const navigate = useNavigate();

  const handleLogout = () => {
    setIsLoggedIn(false);
    navigate("/");
  };

  return (
    <nav className="navbar">
      <Link to="/">Login</Link>
      {isLoggedIn && (
        <>
          <Link to="/products">Products</Link>
          <Link to="/cart">Cart</Link>
          <Link to="/payment">Payment</Link>
          <button onClick={handleLogout} className="logout-btn">Logout</button>
        </>
      )}
    </nav>
  );
}

export default Navbar;
