import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import "../studies.css";

function Login({ setIsAuthenticated }) {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const navigate = useNavigate();

  const handleLogin = () => {
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
      <input type="email" placeholder="Email" value={email} onChange={(e) => setEmail(e.target.value)} />
      <input type="password" placeholder="Password" value={password} onChange={(e) => setPassword(e.target.value)} />
      <button onClick={handleLogin}>Login</button>
      {error && <p className="error">{error}</p>}
    </div>
  );
}

export default Login;
