import React, { useState } from "react";
import loginLeft from "../assets/login-img.png";
import EmailIcon from "../assets/email-icon.png";
import PasswordIcon from "../assets/PasswordIcon.png";
import ShowPasswordIcon from "../assets/vector.png";
import HidePasswordIcon from "../assets/close-eye.png";
import GoogleIcon from "../assets/GoogleIcon.png";
import SignInArrow from "../assets/SignInArrow.png";
import "./LoginPage.css";
import { Link, useNavigate } from "react-router-dom";

const LoginPage = () => {
  const [formData, setFormData] = useState({
    email: "",
    password: "",
    rememberMe: false,
  });

  const [showPassword, setShowPassword] = useState(false);
  const [error, setError] = useState({});

  const navigate = useNavigate();

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: type === "checkbox" ? checked : value,
    }));
    if (error) setError("");
  };

  const validateForm = () => {
    const newErrors = {};
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

    if (!formData.email.trim()) {
      newErrors.email = "Email address is required";
    } else if (!emailRegex.test(formData.email)) {
      newErrors.email = "Please enter a valid email address";
    }

    if (!formData.password) {
      newErrors.password = "Password is required";
    } else if (formData.password.length < 6) {
      newErrors.password = "Password must be at least 6 characters";
    }

    setError(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSignIn = (e) => {
    e.preventDefault();

    if (validateForm()) {
      console.log("Logged in with formData:", formData);
      alert("Logged in Successfully");
    }
  };

  return (
    <div className="AIR-Login-Page-Container">
      {/* Left Section Updated to Match the Reference Image */}
      <div className="Air-Login-Page-Left-container">
        <div className="Air-Login-Page-Left">
          <div className="Air-Product-Header-Container">
            <div className="Air-Product-HeroSec-Container">
              <p className="Air-Product-Title">
                AI Resume Builder and Screening system
              </p>
              <h1 className="Air-Product-HeroSec-Text">
                Smarter Resumes. Smarter
              </h1>
              <p className="Air-Product-HeroSec-sub-heading">
                One intelligent platform for resume building and candidate
                screening.
              </p>
            </div>
          </div>

          <div className="Air-Login-Illustration-container">
            <img
              src={loginLeft}
              alt="AI Resume Builder"
              className="candidate-login-illustration Air-Login-Illustration-img"
            />
          </div>
        </div>

        <div className="candidate-login-quote-box Air-Product-Info-Container">
          <p className="Air-Product-Info-text">
            “You can have everything in life you will just help enough other
            people get what they want.” <br />
            <strong>— Zig Ziglar</strong>
          </p>
        </div>
      </div>

      {/* Right Section */}
      <div className="Air-Login-Page-Right">
        <form onSubmit={handleSignIn} className="Air-Login-Page-form">
          <div className="Air-Login-Page-Form-Header">
            <p className="Air-Login-Page-Form-Text">Welcome Back</p>
            <p className="Air-Login-Page-Message">Login to your account</p>
          </div>
          <div className="Air-Login-Input-Container">
            <label htmlFor="email">Email Address</label>
            <div className="Air-Login-Input-Wrapper">
              <img className="Air-Login-email-icon" src={EmailIcon} alt="" />
              <input
                onChange={handleChange}
                className="Air-Login-Input"
                id="email"
                name="email"
                value={formData.email}
                type="mail"
                placeholder="Enter Email address"
              />
            </div>
            {error.email && <span className="error-msg">{error.email}</span>}
          </div>
          <div className="Air-Login-Input-Container">
            <div className="Air-Login-forgot-Link-Wrappper">
              <label htmlFor="">Password</label>
              <p
                onClick={() => navigate("/forgot-password")}
                className="Air-Login-forgot-Text"
              >
                Forgot password ?
              </p>
            </div>
            <div className="Air-Login-Input-Wrapper">
              <img className="Air-Login-pwd-icon" src={PasswordIcon} alt="" />
              <input
                onChange={handleChange}
                className="Air-Login-Input"
                name="password"
                value={formData.password}
                type={showPassword ? "text" : "password"}
                placeholder="Enter your password"
              />
              <div className="Air-Login-Input-Icon-Wrapper">
                <img
                  onClick={() => setShowPassword(!showPassword)}
                  className="Air-Login-pwd-eye-icon"
                  src={showPassword ? HidePasswordIcon : ShowPasswordIcon}
                  alt="Showpasswords"
                />
              </div>
            </div>
            {error.password && (
              <span className="error-msg">{error.password}</span>
            )}
          </div>
          <div className="Air-Login-Checkbox-Container">
            <input
              name="rememberMe"
              onChange={handleChange}
              checked={formData.rememberMe}
              type="checkbox"
            />
            <p className="Air-Login-Checkbox-Text">Keep me signed in</p>
          </div>
          <button type="Submit" className="Air-Login-Button">
            <p>Sign in</p>
            <img className="Air-Login-Button-Icon" src={SignInArrow} alt="" />
          </button>
          <div className="Air-ResetLink-Container">
            <div className="Air-resetLink-Seperator"></div>
            <p className="Air-ResetLink-text">Or Continue with</p>
            <div className="Air-resetLink-Seperator"></div>
          </div>
          <div className="Air-Login-Social-Logins-Container">
            <div className="Air-Login-Google-Button">
              <img
                className="Air-Login-Google-icon"
                src={GoogleIcon}
                alt="Google"
              />
              <p>Google</p>
            </div>
            <p className="Air-Login-Account-Creation-Link">
              Don't have an account?{" "}
              <Link onClick={() => navigate("/candidate-registration")}>
                Create Account
              </Link>
            </p>
            <div className="Air-Login-NavLinks">
              <Link>Help</Link>
              <span className="Air-Seperator-Dot-Black"></span>
              <Link>Privacy</Link>
              <span className="Air-Seperator-Dot-Black"></span>
              <Link>Terms</Link>
            </div>
          </div>
        </form>
      </div>
    </div>
  );
};

export default LoginPage;
