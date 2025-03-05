import React, { useState } from "react";
import { BrowserRouter as Router, Routes, Route, Navigate } from "react-router-dom";
import Login from "./components/Login";
import Products from "./components/Products";
import Navbar from "./components/Navbar";
import "./styles.css";

function App() {
  const [isAuthenticated, setIsAuthenticated] = useState(false);

  return (
    <Router>
      <Navbar />
      <Routes>
        <Route path="/" element={<Login setIsAuthenticated={setIsAuthenticated} />} />
        <Route path="/products" element={isAuthenticated ? <Products /> : <Navigate to="/" />} />
      </Routes>
    </Router>
  );
}

export default App;
