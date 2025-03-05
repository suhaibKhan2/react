import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import "../styles.css"; // Ensure this is correctly imported

function Login({ setIsAuthenticated }) {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const navigate = useNavigate();

  const handleLogin = () => {
    if (!email || !password) {
      setError("Please enter both email and password");
      return;
    }

    if (email === "suhaibkhanzayn25@gmail.com" && password === "$uh@ibKh@n25") {
      setIsAuthenticated(true);
      navigate("/products");
    } else {
      setError("Invalid credentials");
    }
  };

  return (
    <div className="login-container">
      <h2>Login</h2>
      <input
        type="email"
        placeholder="Email"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
        className="input-field"
      />
      <input
        type="password"
        placeholder="Password"
        value={password}
        onChange={(e) => setPassword(e.target.value)}
        className="input-field"
        onKeyPress={(e) => e.key === "Enter" && handleLogin()}
      />
      <button onClick={handleLogin} className="login-btn">
        Login
      </button>
      {error && <p className="error-message">{error}</p>}
    </div>
  );
}

export default Login;
