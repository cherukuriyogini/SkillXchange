import React from "react";
import "../App.css";

function AdminDashboard() {
  return (
    <div className="container">

      <h1 className="dashboard-title">Admin Dashboard</h1>

      <div className="card-grid">

        <div className="card">
          <h3>User Management</h3>
          <p>View, manage, and control platform users.</p>
          <button className="button">Manage Users</button>
        </div>

        <div className="card">
          <h3>Reports & Moderation</h3>
          <p>Review reported sessions and platform issues.</p>
          <button className="button">View Reports</button>
        </div>

        <div className="card">
          <h3>Platform Analytics</h3>
          <p>Monitor platform usage and growth statistics.</p>
          <button className="button">View Analytics</button>
        </div>

        <div className="card">
          <h3>AI System Monitoring</h3>
          <p>Track AI tutor usage and performance.</p>
          <button className="button">View AI Logs</button>
        </div>

      </div>

    </div>
  );
}

export default AdminDashboard;