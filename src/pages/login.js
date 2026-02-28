import { useState } from "react";
import { useNavigate } from "react-router-dom";
import "./login.css";

import moe from "../images/moe.png";
import aicte from "../images/aicte.png";
import mic from "../images/mic.png";
import sih from "../images/sih.png";

function Login() {
  const navigate = useNavigate();
  const [role, setRole] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();

    if (role !== "Team Leader") {
      alert("Only Team Leader can apply");

      return;
    }

    navigate("/apply");
  };

  return (
    <div className="main-bg">
      {/* TOP LOGOS */}

      <div className="topbar">
        <div className="logos">
          <img src={moe} alt="MoE" />

          <img src={aicte} alt="AICTE" />

          <img src={mic} alt="MIC" />

          <img src={sih} alt="SIH" />
        </div>

        <div>
          <button className="login-btn">MIC Alumni</button>

          <button className="login-btn">SIH Login</button>
        </div>
      </div>

      {/* NAVBAR */}

      <div className="navbar">
        <div>HOME</div>

        <div>ABOUT SIH</div>

        <div>GUIDELINES</div>

        <div>PROBLEM STATEMENTS</div>

        <div>KNOW YOUR SPOC</div>

        <div>PROJECT IMPLEMENTATION</div>

        <div>FAQS</div>

        <div>CONTACT US</div>
      </div>

      {/* LOGIN FORM */}

      <div className="login-container">
        <h1>SPOC REGISTRATIONS OPEN</h1>

        <div className="login-box">
          <form onSubmit={handleSubmit}>
            <input type="email" placeholder="Email" />

            <input type="password" placeholder="Password" />

            <select onChange={(e) => setRole(e.target.value)}>
              <option>Please Select User Role</option>

              <option>Super Admin</option>

              <option>Review Committee Personnel</option>

              <option>Problem Statement Creators/Challengers</option>

              <option>College/Institute Spoc</option>

              <option>Team Leader</option>

              <option>Evaluator</option>
            </select>

            <p className="forgot">Forgot Your Password?</p>

            <button className="submit-btn">Submit</button>
          </form>
        </div>
      </div>

      {/* FOOTER */}

      <div className="footer">
        <div>
          <h3>FOLLOW US</h3>
        </div>

        <div>
          <h3>CONTACT US</h3>
        </div>
      </div>
    </div>
  );
}

export default Login;
