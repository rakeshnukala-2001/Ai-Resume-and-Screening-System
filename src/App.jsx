import { BrowserRouter, Routes, Route } from "react-router-dom";

import UserRegRecruiter from "./Components-Recruiter/UserRegRecruiter";
import UserRegCandidate from "./Components-Candidate/UserRegCandidate";
import LoginPage from "./Components-Login/LoginPage";
import ForgotPassword from "./Components-Login/ForgotPassword";
import ResetPasswordLinkSent from "./Components-Login/ResetSuccessful";
import AdminLogin from "./Components-Admin/AdminLogin";
import LandingPage from "./Components-landingPage/LandingPage";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        {/* Landing Page */}
        <Route path="/" element={<LandingPage />} />

        {/* Login Page */}
        <Route path="/Loginpage" element={<LoginPage />} />

        {/* Forgot Password Page */}
        <Route path="/forgot-password" element={<ForgotPassword />} />

        {/* Reset Password Link Sent Page */}
        <Route path="/reset-successful" element={<ResetPasswordLinkSent />} />

        {/* Recruiter Registration Page */}
        <Route path="/recruiter-registration" element={<UserRegRecruiter />} />

        {/* Candidate Registration Page */}
        <Route path="/candidate-registration" element={<UserRegCandidate />} />

        {/* Admin Login Page */}
        <Route path="/admin-login" element={<AdminLogin />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
