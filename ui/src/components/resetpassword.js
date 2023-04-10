import React, { useState } from "react";
import './resetpassword.css'
import { useNavigate } from "react-router-dom";

function ResetPassword() {
  const navigate = useNavigate()
  const [passwords, setPasswords] = useState({ newPassword: "", confirmPassword: "" });

  const handleSubmit = (event) => {
    event.preventDefault();
    // Validate the user's new password and confirm password
    if (passwords.newPassword !== passwords.confirmPassword) {
      // Display an error message
      return;
    }else{
      navigate("/")
    }
    // Make a request to your server to reset the user's password using the user's new password
    // Display a success message or an error message
  };

  return (
    <div className="reset-main-container">
      <div className="reset-blur-container">
        <h1 className="reset-title">Reset Password</h1>
        <form onSubmit={handleSubmit}  >
          <div className="reset-subheading">
            <label className="rs-lable">New Password</label>
            <div>
              <input
                type="password"
                className="rsp-input"
                placeholder="Password"
                value={passwords.newPassword}
                onChange={(e) => setPasswords({ ...passwords, newPassword: e.target.value })}
                style={{ display: "block" }}
              />
            </div>
          </div>
          <div className="reset-subheading">
            <label className="rs-lable">Confirm Password</label>
            <div>
              <input
                type="password"
                className="rsp-input"
                placeholder="Confirm"
                value={passwords.confirmPassword}
                onChange={(e) => setPasswords({ ...passwords, confirmPassword: e.target.value })}
                style={{ display: "block" }}
              />
            </div>
          </div>
          <button type="submit" className="reset-btn">Submit</button>
        </form>
      </div>
    </div>
  );
}

export default ResetPassword;
