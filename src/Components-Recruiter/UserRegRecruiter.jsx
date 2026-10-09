import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import "./UserRegRecruiter.css";

import illustrationImg from "../assets/rec-registration.png";
import lockIconImg from "../assets/rec-lock.png";
import dropdownIconImg from "../assets/dropdown-arrow.png";
import eyeOpenImg from "../assets/open-eye.png";
import eyeClosedImg from "../assets/close-eye.png";

const ROLES = ["Recruiter", "Candidate", "Admin"];

const FIELD_ROWS = [
  [
    {
      name: "fullName",
      label: "Full Name",
      type: "text",
      placeholder: "Enter your full name",
      required: true,
    },
    {
      name: "email",
      label: "Email Address",
      type: "email",
      placeholder: "Enter your email address",
      required: true,
    },
  ],
  [
    {
      name: "mobile",
      label: "Mobile Number",
      type: "tel",
      placeholder: "123567890",
      required: true,
    },
    {
      name: "designation",
      label: "Designations / Job Title",
      type: "text",
      placeholder: "UI/UX Designer",
      required: true,
    },
  ],
  [
    {
      name: "companyName",
      label: "Company Name",
      type: "text",
      placeholder: "Adhway Creation",
      required: true,
    },
    {
      name: "companyLocation",
      label: "Company Location",
      type: "text",
      placeholder: "Coimbatore",
      required: true,
    },
  ],
  [
    {
      name: "companyWebsite",
      label: "Company Website",
      type: "text",
      placeholder: "www.adhway.com",
    },
    {
      name: "industryType",
      label: "Industry Type",
      type: "text",
      placeholder: "Designer",
    },
  ],
  [
    {
      name: "password",
      label: "Password",
      type: "password",
      placeholder: "**********",
      required: true,
    },
    {
      name: "confirmPassword",
      label: "Confirm Password",
      type: "password",
      placeholder: "**********",
      required: true,
    },
  ],
];

export default function UserRegRecruiter() {
  const navigate = useNavigate();
  const [formData, setFormData] = useState({
    role: "Recruiter",
    fullName: "",
    email: "",
    mobile: "",
    designation: "",
    companyName: "",
    companyLocation: "",
    companyWebsite: "",
    industryType: "",
    password: "",
    confirmPassword: "",
    agreeTerms: false,
  });
  const [error, setError] = useState("");

  const [showPassword, setShowPassword] = useState(false);
  const [showConfirmPassword, setShowConfirmPassword] = useState(false);

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;

    if (name === "role") {
      if (value === "Candidate") {
        navigate("/candidate-registration");
        return;
      } else if (value === "Admin") {
        navigate("/admin-registration");
        return;
      }
    }

    setFormData((prev) => ({
      ...prev,
      [name]: type === "checkbox" ? checked : value,
    }));
    if (error) setError("");
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    if (formData.password !== formData.confirmPassword) {
      setError("Passwords do not match.");
      return;
    }

    setError("");
    console.log("Form Submitted:", formData);
  };

  return (
    <div className="Air-ur-recruiter-page">
      {/* LEFT SECTION */}
      <div className="Air-ur-recruiter-left">
        <div className="Air-ur-recruiter-brand-header">
          <p className="Air-ur-recruiter-brand-tag">
            AI Education &amp; Workforce Development Platform
          </p>
          <h1 className="Air-ur-recruiter-brand-heading">
            Manage Placements.
            <br />
            Create Opportunities.
          </h1>
          <p className="Air-ur-recruiter-brand-subtext">
            Streamline training, placement activities and recruitment
            coordination - all in one platform.
          </p>
        </div>

        <div className="Air-ur-recruiter-illustration-wrap">
          <img src={illustrationImg} alt="Recruitment Illustration" />
        </div>

        <div className="Air-ur-recruiter-quote-box">
          <img
            src={lockIconImg}
            alt=""
            className="Air-ur-recruiter-quote-lock-icon"
          />
          <div className="Air-ur-recruiter-quote-content-wrap">
            <p>Your trust, our priority</p>
            <span>Secure, reliable and built for your institution.</span>
          </div>
        </div>
      </div>

      {/* RIGHT SECTION */}
      <div className="Air-ur-recruiter-right">
        <div className="Air-ur-recruiter-content">
          <div className="Air-ur-recruiter-form-header">
            <h2>Your Journey Starts Here</h2>
            <p>Join our ecosystem of professional employers.</p>
          </div>

          <form onSubmit={handleSubmit} className="Air-ur-recruiter-form">
            {/* Role dropdown (full width) */}
            <div className="Air-ur-recruiter-field-group full-width Air-ur-recruiter-role-group">
              <label htmlFor="role">Select your role</label>
              <div className="Air-ur-recruiter-select-wrapper">
                <select
                  id="role"
                  name="role"
                  value={formData.role}
                  onChange={handleChange}
                  data-empty={formData.role === ""}
                  required
                >
                  <option value="Recruiter">Recruiter</option>
                  <option value="Candidate">Candidate</option>
                  <option value="Admin">Admin</option>
                </select>
                <img
                  src={dropdownIconImg}
                  alt=""
                  className="Air-ur-recruiter-select-arrow-img"
                />
              </div>
            </div>

            {/* Two column rows */}
            {FIELD_ROWS.map((row, index) => (
              <div className="Air-ur-recruiter-row" key={index}>
                {row.map((field) => {
                  const isPassword = field.name === "password";
                  const isConfirmPassword = field.name === "confirmPassword";
                  const hasEyeIcon = isPassword || isConfirmPassword;

                  let inputType = field.type;
                  if (isPassword)
                    inputType = showPassword ? "text" : "password";
                  if (isConfirmPassword)
                    inputType = showConfirmPassword ? "text" : "password";

                  return (
                    <div
                      className="Air-ur-recruiter-field-group"
                      key={field.name}
                    >
                      <label htmlFor={field.name}>{field.label}</label>
                      <div
                        className={
                          hasEyeIcon ? "Air-ur-recruiter-password-wrapper" : ""
                        }
                      >
                        <input
                          id={field.name}
                          type={inputType}
                          name={field.name}
                          placeholder={field.placeholder}
                          value={formData[field.name]}
                          onChange={handleChange}
                          required={field.required}
                          className={
                            hasEyeIcon ? "Air-ur-recruiter-password-input" : ""
                          }
                        />
                        {isPassword && (
                          <img
                            src={showPassword ? eyeOpenImg : eyeClosedImg}
                            alt="Toggle Password"
                            className="Air-ur-recruiter-eye-icon"
                            onClick={() => setShowPassword((prev) => !prev)}
                          />
                        )}
                        {isConfirmPassword && (
                          <img
                            src={
                              showConfirmPassword ? eyeOpenImg : eyeClosedImg
                            }
                            alt="Toggle Confirm Password"
                            className="Air-ur-recruiter-eye-icon"
                            onClick={() =>
                              setShowConfirmPassword((prev) => !prev)
                            }
                          />
                        )}
                      </div>
                    </div>
                  );
                })}
              </div>
            ))}

            <div className="Air-ur-recruiter-terms">
              <label>
                <input
                  type="checkbox"
                  name="agreeTerms"
                  checked={formData.agreeTerms}
                  onChange={handleChange}
                  required
                />
                <p>
                  I agree to the <span>Terms of service</span> and{" "}
                  <span>privacy policy</span> regarding my administrative
                  access.
                </p>
              </label>
            </div>

            {error && (
              <p
                className="Air-ur-recruiter-error"
                role="alert"
                style={{ color: "red", fontSize: "12px", margin: "0" }}
              >
                {error}
              </p>
            )}

            <button type="submit" className="Air-ur-recruiter-submit-btn">
              Complete Registration
            </button>
          </form>

          <div className="Air-ur-recruiter-login-redirect">
            <span>Already have an account?</span>
            <a href="#login">Login</a>
          </div>
        </div>
      </div>
    </div>
  );
}
