import React from "react";
import { useNavigate } from "react-router-dom";
import "./Home.css";

/* HEROICONS */
import {
  MagnifyingGlassIcon,
  UserGroupIcon,
  AcademicCapIcon,
} from "@heroicons/react/24/outline";

/* LUCIDE ICONS */
import {
  Users,
  Brain,
  Bot,
  BadgeCheck,
  Video,
  PlayCircle,
  Users2,
  Sparkles,
} from "lucide-react";

function Home() {
  const navigate = useNavigate();

  return (
    <div className="home">

      {/* HERO SECTION */}
      <section className="hero">
        <h1>Teach what you know. Learn what you don't.</h1>

        <p className="tagline">
          A free peer-to-peer learning platform powered by students and AI.
        </p>

        <p className="description">
          Learn new skills, teach others, and grow together in a collaborative
          learning environment.
        </p>

        <button
          className="primary-btn"
          onClick={() => navigate("/register")}
        >
          Get Started Free →
        </button>
      </section>

      {/* HOW IT WORKS */}
      <section className="how-it-works">
        <h2>How It Works</h2>

        <div className="cards">

          <div className="card">
            <div className="icon-box">
              <MagnifyingGlassIcon className="icon" />
            </div>
            <h3>Choose a Skill</h3>
            <p>
              Browse skills you want to learn and get matched with mentors
            </p>
          </div>

          <div className="card">
            <div className="icon-box">
              <UserGroupIcon className="icon" />
            </div>
            <h3>Learn Together</h3>
            <p>
              Join live sessions or learn with AI when mentors are busy
            </p>
          </div>

          <div className="card">
            <div className="icon-box">
              <AcademicCapIcon className="icon" />
            </div>
            <h3>Share Knowledge</h3>
            <p>
              Teach skills, earn badges, and build your reputation
            </p>
          </div>

        </div>
      </section>

      {/* FEATURES */}
      <section className="features">
        <h2>Platform Features</h2>

        <div className="grid">

          <div className="feature">
            <Users className="feature-icon" />
            <h3>Learn from Peers</h3>
            <p>Connect with fellow students who excel in the skills you want to master</p>
          </div>

          <div className="feature">
            <Brain className="feature-icon" />
            <h3>AI-Assisted Learning</h3>
            <p>Get personalized guidance and instant answers powered by AI</p>
          </div>

          <div className="feature">
            <Bot className="feature-icon" />
            <h3>AI Backup Tutor</h3>
            <p>Continue learning seamlessly even when mentors are unavailable</p>
          </div>

          <div className="feature">
            <BadgeCheck className="feature-icon" />
            <h3>Verified Mentors</h3>
            <p>Learn from trusted mentors with verified skills and ratings</p>
          </div>

          <div className="feature">
            <Video className="feature-icon" />
            <h3>Live Sessions</h3>
            <p>Attend real-time interactive sessions with mentors</p>
          </div>

          <div className="feature">
            <PlayCircle className="feature-icon" />
            <h3>Recorded Content</h3>
            <p>Access past sessions anytime and learn at your own pace</p>
          </div>

          <div className="feature">
            <Users2 className="feature-icon" />
            <h3>Peer Groups</h3>
            <p>Collaborate and grow together in learning communities</p>
          </div>

          <div className="feature">
            <Sparkles className="feature-icon" />
            <h3>100% Free</h3>
            <p>Enjoy unlimited access to learning resources at no cost</p>
          </div>

        </div>
      </section>

      {/* TRUST */}
      <section className="trust">
        <h2>Built on Trust</h2>
        <p>
          Our platform ensures quality through ratings, reviews, verified badges,
          and active moderation.
        </p>

        <div className="stats">
          <div className="stat">
            <h3>4.8 ⭐</h3>
            <p>Average Rating</p>
          </div>

          <div className="stat">
            <h3>10K+</h3>
            <p>Sessions Completed</p>
          </div>

          <div className="stat">
            <h3>5K+</h3>
            <p>Active Learners</p>
          </div>

          <div className="stat">
            <h3>2K+</h3>
            <p>Verified Mentors</p>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="cta">
        <h2>Ready to Start Learning?</h2>
        <p>Join thousands of students learning together</p>

        <div className="cta-buttons">
          <button
            className="primary-btn"
            onClick={() => navigate("/register")}
          >
            Get Started Free
          </button>

          <button
            className="secondary-btn"
            onClick={() => navigate("/login")}
          >
            Login
          </button>
        </div>
      </section>

      {/* FOOTER */}
      <footer className="footer">
        <h3>🎓 SkillXchange</h3>
        <p>© 2026 SkillXchange. All rights reserved.</p>
      </footer>

    </div>
  );
}

export default Home;