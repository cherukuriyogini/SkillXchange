import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import Navbar from "./components/Navbar";

import Home from "./pages/Home";
import Login from "./pages/Login";
import Register from "./pages/Register"; // ✅ ADD THIS

import LearnerDashboard from "./pages/LearnerDashboard";
import MentorDashboard from "./pages/MentorDashboard";
import ModeratorDashboard from "./pages/ModeratorDashboard";
import AdminDashboard from "./pages/AdminDashboard";

import "./App.css";

function App() {
  return (
    <Router>

      <Navbar />

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/login" element={<Login />} />

        {/* ✅ ADD THIS ROUTE */}
        <Route path="/register" element={<Register />} />

        <Route path="/learner" element={<LearnerDashboard />} />
        <Route path="/mentor" element={<MentorDashboard />} />
        <Route path="/moderator" element={<ModeratorDashboard />} />
        <Route path="/admin" element={<AdminDashboard />} />
      </Routes>

    </Router>
  );
}

export default App;