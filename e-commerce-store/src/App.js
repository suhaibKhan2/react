import React, { useState } from "react";
import { Routes, Route, Navigate } from "react-router-dom";
import Navbar from "./components/Navbar";
import Login from "./components/Login";
import Products from "./components/Products";
import Cart from "./components/Cart";
import Payment from "./components/Payment";

function App() {
  const [cart, setCart] = useState([]);
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  return (
    <>
      <Navbar isLoggedIn={isLoggedIn} setIsLoggedIn={setIsLoggedIn} />
      <Routes>
        <Route
          path="/"
          element={isLoggedIn ? <Navigate to="/products" /> : <Login setIsLoggedIn={setIsLoggedIn} />}
        />
        <Route path="/products" element={isLoggedIn ? <Products cart={cart} setCart={setCart} /> : <Navigate to="/" />} />
        <Route path="/cart" element={isLoggedIn ? <Cart cart={cart} setCart={setCart} /> : <Navigate to="/" />} />
        <Route path="/payment" element={isLoggedIn ? <Payment /> : <Navigate to="/" />} />
      </Routes>
    </>
  );
}

export default App;
