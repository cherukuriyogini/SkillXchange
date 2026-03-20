import React, { useState } from "react";
import "../App.css";
import axios from "axios";

function Login() {

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleLogin = async () => {

    if (!email.includes("@")) {
      alert("Enter valid email");
      return;
    }

    try {

      const res = await axios.post("http://localhost:5000/login", {
        email,
        password
      });

      alert(res.data.message);

      localStorage.setItem("token", res.data.token);

    } catch (err) {
      alert("Login Failed");
    }

  };

  return (
    <div className="container">

      <div className="card">
        <h2>Login to SkillXchange</h2>

        <br/>

        <input
          type="email"
          placeholder="Enter email"
          onChange={(e)=>setEmail(e.target.value)}
        />

        <br/><br/>

        <input
          type="password"
          placeholder="Enter password"
          onChange={(e)=>setPassword(e.target.value)}
        />

        <br/><br/>

        <button className="button" onClick={handleLogin}>
          Login
        </button>

      </div>

    </div>
  );
}

export default Login;