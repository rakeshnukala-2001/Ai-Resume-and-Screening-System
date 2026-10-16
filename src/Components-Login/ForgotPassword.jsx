import { useState } from "react";
import "./ForgotPassword.css";
import MainIllustration from "../assets/forgot-pswd.png";
import EmailIcon from "../assets/email-icon.png";
import GoogleIcon from "../assets/GoogleIcon.png";
import ArrowRight from "../assets/SignInArrow.png";
import { Link, useNavigate } from "react-router-dom";
const EMAIL_REGEX = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
const ForgotPassword = () => {
  const navigate = useNavigate();
  const [email, setEmail] = useState("");
  const [error, setError] = useState("");
  const [success, setSuccess] = useState(false);
  const handleChange = (e) => {
    setEmail(e.target.value);
    setError("");
    setSuccess(false);
  };
  const handleSubmit = (e) => {
    e.preventDefault();
    const value = email.trim();
    if (!value) {
      setError("Please enter your email address.");
      return;
    }
    if (!EMAIL_REGEX.test(value)) {
      setError("Please enter a valid email address.");
      return;
    }
    setError("");
    setSuccess(true);
    navigate("/ResetPasswordLinkSent");
  };
  return (
    <div className="air-forgot-container">
      {/* LEFT SECTION */}
      <div className="air-forgot-left-container">
        <div className="air-forgot-left">
          {/* PRODUCT HEADER */}
          <div className="air-forgot-product-header">
            <div>
              <p className="air-forgot-product-title">
                AI Resume Builder and Screening system
              </p>
            </div>
          </div>
          {/* HERO SECTION */}
          <div className="air-forgot-hero">
            <h2 className="air-forgot-hero-heading">
              AI-driven resume building and intelligent candidate screening
            </h2>
          </div>
          {/* ILLUSTRATION */}
          <div className="air-forgot-illustration-container">
            <img
              className="air-forgot-illustration-img"
              src={MainIllustration}
              alt="Forgot password illustration"
            />
          </div>
        </div>
        {/* QUOTE SECTION */}
        <div className="air-forgot-info-box">
          <p className="air-forgot-info-text">
            “My best successes came on the heels of failures.” — Barbara
            Corcoran
          </p>
        </div>
      </div>
      {/* RIGHT SECTION */}
      <div className="air-forgot-right">
        <form className="air-forgot-form" onSubmit={handleSubmit}>
          {/* FORM HEADER */}
          <div className="air-forgot-form-header">
            <h2 className="air-forgot-form-title">Forgot Password?</h2>
            <p className="air-forgot-form-message">
              Enter your registered ID or email to receive a password reset
              link.
            </p>
          </div>
          {/* EMAIL INPUT */}
          <div className="air-forgot-input-container">
            <label htmlFor="email">Email Address</label>
            <div className="air-forgot-input-wrapper">
              <span className="air-forgot-input-icon-wrapper">
                <img src={EmailIcon} className="air-forgot-email-icon" alt="" />
              </span>
              <input
                id="email"
                type="email"
                className="air-forgot-input"
                placeholder="Enter Email address"
                value={email}
                onChange={handleChange}
              />
            </div>
            {/* ERROR MESSAGE */}
            {error && (
              <p className="air-error-msg" role="alert">
                {error}
              </p>
            )}
            {/* SUCCESS MESSAGE */}
            {success && (
              <p className="air-forgot-success-msg" role="status">
                Reset link sent! Please check your email.
              </p>
            )}
          </div>
          {/* SEND RESET LINK BUTTON */}
          <button type="submit" className="air-forgot-submit-button">
            Send Reset Link
            <img src={ArrowRight} className="air-forgot-button-icon" alt="" />
          </button>
          {/* BACK TO LOGIN SEPARATOR */}
          <div className="air-forgot-resetlink-container">
            <span className="air-forgot-resetlink-separator" />
            <Link to="/LoginPage" className="air-forgot-resetlink-text">
              Back to Login
            </Link>
            <span className="air-forgot-resetlink-separator" />
          </div>
          {/* GOOGLE, ACCOUNT LINK, NAV LINKS */}
          <div className="air-forgot-social-container">
            <button
              type="button"
              className="air-forgot-google-button"
              onClick={() => alert("Google login clicked")}
            >
              <img
                src={GoogleIcon}
                className="air-forgot-google-icon"
                alt="Google"
              />
              Google
            </button>
            <p className="air-forgot-account-link">
              Don't have an account?{" "}
              <Link to="/candidate-registration">Create Account</Link>
            </p>
            <div className="air-forgot-navlinks">
              <Link to="/help">Help</Link>
              <span className="air-forgot-dot"></span>
              <Link to="/privacy">Privacy</Link>
              <span className="air-forgot-dot"></span>
              <Link to="/terms">Terms</Link>
            </div>
          </div>
        </form>
      </div>
    </div>
  );
};
export default ForgotPassword;
