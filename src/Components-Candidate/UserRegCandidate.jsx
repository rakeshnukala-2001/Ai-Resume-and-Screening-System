import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import "./UserRegCandidate.css";
import regImg from "../assets/reg.png";
import openEye from "../assets/open-eye.png";
import closeEye from "../assets/close-eye.png";

const initialForm = {
  role: "Candidate",
  fullName: "",
  email: "",
  mobile: "",
  degree: "",
  gender: "",
  dob: "",
  password: "",
  confirmPassword: "",
  agree: false,
};

const Register = () => {
  const navigate = useNavigate();
  const [form, setForm] = useState(initialForm);
  const [error, setError] = useState("");
  const [showPassword, setShowPassword] = useState(false);
  const [showConfirm, setShowConfirm] = useState(false);

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;

    if (name === "role") {
      if (value === "Employer") {
        navigate("/recruiter-registration");
        return;
      } else if (value === "Admin") {
        navigate("/admin-register");
        return;
      }
    }

    setForm((prev) => ({
      ...prev,
      [name]: type === "checkbox" ? checked : value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (form.password !== form.confirmPassword) {
      setError("Password and confirm password must match.");
      return;
    }
    if (!form.agree) {
      setError("Please accept the terms of service and privacy policy.");
      return;
    }
    setError("");
    console.log("Register data:", form);
  };

  return (
    <div className="Air-ur-candidate-page">
      {/* LEFT SIDE */}
      <section className="Air-ur-candidate-left">
        <p className="Air-ur-candidate-platform">
          AI Education &amp; Workforce Development Platform
        </p>

        <h1 className="Air-ur-candidate-heading">
          Build Your Future with.
          <br />
          The Right Opportunities.
        </h1>

        <p className="Air-ur-candidate-sub">
          Join here and take the next step in your career journey.
          <br />
          Get discovered by top recruiters and unlock new possibilities.
        </p>

        <h2 className="Air-ur-candidate-tagline">
          Discover Opportunities. Build Your Career.
        </h2>

        <img
          src={regImg}
          alt="Career illustration"
          className="Air-ur-candidate-illustration"
        />

        <div className="Air-ur-candidate-quote">
          <svg
            className="Air-ur-candidate-quote-icon"
            width="18"
            height="18"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
            aria-hidden="true"
          >
            <path d="M21 12a9 9 0 0 0-15.5-6.2L3 8" />
            <path d="M3 3v5h5" />
            <path d="M3 12a9 9 0 0 0 15.5 6.2L21 16" />
            <path d="M16 16h5v5" />
          </svg>
          <p>
            Better training today,
            <br />
            Brighter opportunities tomorrow.
          </p>
        </div>
      </section>

      {/* RIGHT SIDE */}
      <section className="Air-ur-candidate-right">
        <form
          className="Air-ur-candidate-form"
          onSubmit={handleSubmit}
          noValidate
        >
          <h2 className="Air-ur-candidate-title">Your Journey Starts Here</h2>
          <p className="Air-ur-candidate-title-sub">
            Join our ecosystem of professional employers.
          </p>

          <div className="Air-ur-candidate-field full">
            <label htmlFor="role">Select your role</label>
            <div className="Air-ur-candidate-select-wrap">
              <select
                id="role"
                name="role"
                value={form.role}
                onChange={handleChange}
              >
                <option value="Candidate">Candidate</option>
                <option value="Employer">Recruiter</option>
                <option value="Admin">Admin</option>
              </select>
            </div>
          </div>

          <div className="Air-ur-candidate-row">
            <div className="Air-ur-candidate-field">
              <label htmlFor="fullName">Full Name</label>
              <input
                id="fullName"
                name="fullName"
                type="text"
                placeholder="Enter your full name"
                value={form.fullName}
                onChange={handleChange}
              />
            </div>
            <div className="Air-ur-candidate-field">
              <label htmlFor="email">Email Address</label>
              <input
                id="email"
                name="email"
                type="email"
                placeholder="Enter your email address"
                value={form.email}
                onChange={handleChange}
              />
            </div>
          </div>

          <div className="Air-ur-candidate-row">
            <div className="Air-ur-candidate-field">
              <label htmlFor="mobile">Mobile Number</label>
              <input
                id="mobile"
                name="mobile"
                type="tel"
                placeholder="123567890"
                value={form.mobile}
                onChange={handleChange}
              />
            </div>
            <div className="Air-ur-candidate-field">
              <label htmlFor="degree">Degree</label>
              <input
                id="degree"
                name="degree"
                type="text"
                placeholder="B.Tech Computer Science"
                value={form.degree}
                onChange={handleChange}
              />
            </div>
          </div>

          <div className="Air-ur-candidate-row">
            <div className="Air-ur-candidate-field">
              <label htmlFor="gender">Gender</label>
              <div className="Air-ur-candidate-select-wrap">
                <select
                  id="gender"
                  name="gender"
                  value={form.gender}
                  onChange={handleChange}
                >
                  <option value="" disabled>
                    Select gender
                  </option>
                  <option value="Female">Female</option>
                  <option value="Male">Male</option>
                  <option value="Other">Other</option>
                </select>
              </div>
            </div>
            <div className="Air-ur-candidate-field">
              <label htmlFor="dob">Date of Birth</label>
              <input
                id="dob"
                name="dob"
                type="date"
                className="Air-ur-candidate-date-input"
                value={form.dob}
                onChange={handleChange}
                onClick={(e) => e.target.showPicker && e.target.showPicker()}
              />
            </div>
          </div>

          <div className="Air-ur-candidate-row">
            <div className="Air-ur-candidate-field">
              <label htmlFor="password">Password</label>
              <div className="Air-ur-candidate-pw-wrap">
                <input
                  id="password"
                  name="password"
                  type={showPassword ? "text" : "password"}
                  placeholder="Enter your password"
                  value={form.password}
                  onChange={handleChange}
                />
                <button
                  type="button"
                  className="Air-ur-candidate-eye-btn"
                  onClick={() => setShowPassword((v) => !v)}
                  aria-label={showPassword ? "Hide password" : "Show password"}
                >
                  <img src={showPassword ? openEye : closeEye} alt="" />
                </button>
              </div>
            </div>
            <div className="Air-ur-candidate-field">
              <label htmlFor="confirmPassword">Confirm Password</label>
              <div className="Air-ur-candidate-pw-wrap">
                <input
                  id="confirmPassword"
                  name="confirmPassword"
                  type={showConfirm ? "text" : "password"}
                  placeholder="Confirm your password"
                  value={form.confirmPassword}
                  onChange={handleChange}
                />
                <button
                  type="button"
                  className="Air-ur-candidate-eye-btn"
                  onClick={() => setShowConfirm((v) => !v)}
                  aria-label={showConfirm ? "Hide password" : "Show password"}
                >
                  <img src={showConfirm ? openEye : closeEye} alt="" />
                </button>
              </div>
            </div>
          </div>

          <label className="Air-ur-candidate-agree">
            <input
              type="checkbox"
              name="agree"
              checked={form.agree}
              onChange={handleChange}
            />
            <span>
              I agree to the <a href="/terms">Terms of service</a> and{" "}
              <a href="/privacy">privacy policy</a> regarding my administrative
              access.
            </span>
          </label>

          {error && <p className="Air-ur-candidate-error">{error}</p>}

          <button type="submit" className="Air-ur-candidate-submit">
            Complete Registration
          </button>

          <p className="Air-ur-candidate-login">
            Already have an account? <a href="/login">Login</a>
          </p>
        </form>
      </section>
    </div>
  );
};

export default Register;
