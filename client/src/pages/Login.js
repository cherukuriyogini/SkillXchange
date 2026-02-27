import React from "react";
import "../App.css";

function Login() {
  return (
    <div className="container">

      <div className="card">
        <h2>Login to SkillXchange</h2>

        <br/>

        <input type="email" placeholder="Enter email" />

        <br/><br/>

        <input type="password" placeholder="Enter password" />

        <br/><br/>

        <button className="button">Login</button>

      </div>

    </div>
  );
}

export default Login;