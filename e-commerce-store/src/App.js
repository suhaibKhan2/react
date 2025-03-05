import React, { useState } from "react";
import { Routes, Route } from "react-router-dom";
import Login from "./components/Login";
import Products from "./components/Products";
import Navbar from "./components/Navbar";
import "./studies.css";

function App() {
  const [isAuthenticated, setIsAuthenticated] = useState(false);

  return (
    <div>
      <Navbar isAuthenticated={isAuthenticated} />
      <Routes>
        <Route path="/" element={<Login setIsAuthenticated={setIsAuthenticated} />} />
        <Route path="/products" element={isAuthenticated ? <Products /> : <Login setIsAuthenticated={setIsAuthenticated} />} />
      </Routes>
    </div>
  );
}

export default App;
