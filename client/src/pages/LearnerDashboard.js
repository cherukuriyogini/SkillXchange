import React from "react";
import "../App.css";

function LearnerDashboard() {
  return (
    <div className="container">

      <h1>Learner Dashboard</h1>

      <div className="card">
        <h3>Recommended Mentors</h3>
        <p>AI suggests mentors based on your skills.</p>
      </div>

      <div className="card">
        <h3>Upcoming Sessions</h3>
        <p>Your scheduled learning sessions will appear here.</p>
      </div>

      <div className="card">
        <h3>Learning Progress</h3>
        <p>Track your learning journey.</p>
      </div>

    </div>
  );
}

export default LearnerDashboard;