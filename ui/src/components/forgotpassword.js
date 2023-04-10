import React, { useState } from "react";
import './forgotpassword.css'
import { useNavigate } from "react-router-dom";

function ForgotPassword() {
  const navigate = useNavigate();
  const [email, setEmail] = useState("");

  const handleSubmit = (event) => {
    event.preventDefault();
    
    // Make a request to your server to reset the user's password using the user's email address
    // Display a success message or an error message

    navigate("/resetpassword")
  };

  return (
    <div className="forgotpassword-main-container">
        <div className= "forgotpassword-blur-container">
      <h1 className="main-title">Forgot Password</h1>
      <form onSubmit={handleSubmit}>
        <div className="forgotpassword-subheading">
        <label className="fg-lable" >Email</label>
          <input
          className="input-box"
            type="email"
            placeholder="Email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
          </div>
        <button type="submit" className='submit-btn'>Submit</button>
      </form>
      </div>
    </div>
  );
}

export default ForgotPassword;
