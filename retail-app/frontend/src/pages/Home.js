import { Link } from "react-router-dom";
import "../styles/Home.css";

function Home() {
    return (
        <div className="home-container">
            <h1>Welcome to the Retail App</h1>
            <p>Your one-stop solution for shopping online!</p>
            <div className="buttons">
                <Link to="/login" className="btn login-btn">Login</Link>
                <Link to="/register" className="btn register-btn">Register</Link>
            </div>
        </div>
    );
}

export default Home;
