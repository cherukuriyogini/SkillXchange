import React from "react";
import "../App.css";

function Home() {
  return (
    <div className="container">

      <div className="card">
        <h1>Welcome to SkillXchange</h1>
        <p>Teach what you know. Learn what you don't.</p>
      </div>

      <div className="card">
        <h3>Peer-to-Peer Learning</h3>
        <p>Students teach and learn from each other.</p>
      </div>

      <div className="card">
        <h3>AI Substitute Teaching</h3>
        <p>If mentors miss a session, AI continues the learning.</p>
      </div>

    </div>
  );
}

export default Home;