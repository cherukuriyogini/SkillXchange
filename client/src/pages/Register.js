import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import "./Register.css";

import { Eye, EyeOff } from "lucide-react";

function Register() {
  const navigate = useNavigate();
  const [showPassword, setShowPassword] = useState(false);

  return (
    <div className="register-container">

      {/* CARD */}
      <div className="register-card">
        <h1 className="logo">🎓 SkillXchange</h1>
        <h2>Create your account</h2>
        <p className="subtitle">
          Start learning and teaching skills for free 🚀
        </p>

        <form>

          <div className="input-group">
            <label>Full Name</label>
            <input type="text" placeholder="John Doe" />
          </div>

          <div className="input-group">
            <label>Email</label>
            <input type="email" placeholder="you@example.com" />
          </div>

          <div className="input-group password-group">
            <label>Password</label>

            <div className="password-box">
              <input
                type={showPassword ? "text" : "password"}
                placeholder="Enter password"
              />

              <span
                className="eye-icon"
                onClick={() => setShowPassword(!showPassword)}
              >
                {showPassword ? <EyeOff size={18} /> : <Eye size={18} />}
              </span>
            </div>
          </div>

          <div className="input-group">
            <label>Skills You Can Teach</label>
            <input type="text" placeholder="e.g. Python, Design" />
          </div>

          <div className="input-group">
            <label>Skills You Want to Learn</label>
            <input type="text" placeholder="e.g. AI, Web Dev" />
          </div>

          <button className="submit-btn">
            Create Account
          </button>

        </form>

        <p className="login-text">
          Already have an account?{" "}
          <span onClick={() => navigate("/login")}>
            Login
          </span>
        </p>
      </div>

    </div>
  );
}

export default Register;