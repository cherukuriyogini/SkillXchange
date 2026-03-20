import React from "react";
import { Link } from "react-router-dom";
import "./Navbar.css";

function Navbar() {
  return (
    <nav className="navbar">
      
      {/* LOGO */}
      <div className="logo">
        🎓 SkillXchange
      </div>

      {/* RIGHT SIDE BUTTONS */}
      <div className="nav-actions">
        <Link to="/login" className="login-btn">Login</Link>
        <Link to="/login" className="signup-btn">Sign Up</Link>
      </div>

    </nav>
  );
}

export default Navbar;