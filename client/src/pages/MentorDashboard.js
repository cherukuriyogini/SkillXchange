import React from "react";
import "../App.css";

function MentorDashboard() {
  return (
    <div className="container">

      <h1 className="dashboard-title">Mentor Dashboard</h1>

      <div className="card-grid">

        <div className="card">
          <h3>My Skills</h3>
          <p>Manage the skills you teach on SkillXchange.</p>
          <button className="button">Update Skills</button>
        </div>

        <div className="card">
          <h3>Session Requests</h3>
          <p>View and accept learning session requests from students.</p>
          <button className="button">View Requests</button>
        </div>

        <div className="card">
          <h3>Upcoming Sessions</h3>
          <p>Track your scheduled teaching sessions.</p>
          <button className="button">View Sessions</button>
        </div>

        <div className="card">
          <h3>Ratings & Reputation</h3>
          <p>See feedback and ratings from learners.</p>
          <button className="button">View Ratings</button>
        </div>

      </div>

    </div>
  );
}

export default MentorDashboard;