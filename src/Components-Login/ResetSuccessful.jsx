import React from "react";
import { useNavigate } from "react-router-dom";
import "./ResetSuccessful.css";
import shieldIcon from "../assets/TrustedIcon.png";
import leftIllustration from "../assets/create-pwd.png";
import ResetLink from "../assets/ResetLink.png";
import ArrowRight from "../assets/SignInArrow.png";

const ResetSuccessful = () => {
  const navigate = useNavigate();

  return (
    <main className="reset-successful-page">
      {/* LEFT SECTION */}
      <section className="reset-left-section">
        {/* TOP BRANDING */}
        <div className="reset-brand">
          <div className="reset-brand-text">
            <h3>Placement &amp; Recruitment Platform</h3>
            <p>Connect · Discover · Succeed</p>
          </div>
        </div>

        <div className="reset-left-heading">
          <h4>NEW BEGINNING AWAIT</h4>

          <h1>
            Your Password Has
            <br />
            Been Reset Successfully!
          </h1>

          <p>
            You're all set. Your account is now secure.
            <br />
            Log in and continue your journey towards a brighter future.
          </p>
        </div>

        <img
          className="reset-success-illustration"
          src={leftIllustration}
          alt="Person completing password security setup"
        />

        <div className="reset-quote-card">
          <img src={shieldIcon} alt="" className="reset-quote-icon" />

          <div className="reset-quote-content">
            <p>
              "A unified platform that simplifies training, placements, and
              recruitment management."
            </p>

            <span>
              Dr. Elena Vance — Dean of Experiential Education, Northeastern
              Consortium
            </span>
          </div>
        </div>
      </section>

      {/* RIGHT SECTION */}
      <section className="reset-right-section">
        <div className="reset-confirmation">
          <img
            className="reset-confirmation-icon"
            src={ResetLink}
            alt="Password reset confirmation"
          />

          <h2>Password Reset Successfully!</h2>

          <p className="reset-confirmation-description">
            Your password has been reset. You can now log in with your new
            password and continue exploring all the opportunities on EduHire.
          </p>

          <button
            type="button"
            className="reset-login-button"
            onClick={() => navigate("/Loginpage")}
          >
            <span>Back to Login</span>
            <img src={ArrowRight} alt="" />
          </button>

          <div className="reset-support">
            <span></span>
            <p>Need help? Contact Support</p>
            <span></span>
          </div>
        </div>
      </section>
    </main>
  );
};

export default ResetSuccessful;
