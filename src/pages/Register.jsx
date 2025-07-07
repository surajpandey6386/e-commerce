import React from "react";
import { Link } from "react-router-dom";
import "./login.css";
const Register = () => {
  return (
    <div className="maincontainer">
      <div className="logincontainer logincontainer-card">
        <h2>Create an Account</h2>
        <form action="/register" method="POST">
          <input
            type="text"
            name="fullname"
            placeholder="Full Name"
            className="logincontainer-input"
            required
          />
          <br />
          <input
            type="email"
            name="email"
            placeholder="Email Address"
            className="logincontainer` logincontainer-input"
            required
          />
          <br />
          <input
            type="text"
            name="username"
            placeholder="Username"
            className="logincontainer-input"
            required
          />
          <br />
          <input
            type="password"
            name="password"
            placeholder="Password"
            className="logincontainer-input"
            required
          />
          <br />
          <input
            type="password"
            name="confirm_password"
            placeholder="Confirm Password"
            className="logincontainer-input"
            required
          />
          <br />

          <select name="role" className="logincontainer-select" required>
            <option value="" disabled selected>
              Select Role
            </option>
            <option value="user">User</option>
            <option value="seller">Seller</option>
          </select>
          <br />

          <div className="butt">
            <button type="submit" className="logincontainer-button">
              Register
            </button>
          </div>
          <br />
        </form>
        <p>
          Already have an account? <Link to="/login">Login</Link>
        </p>
      </div>
    </div>
  );
};

export default Register;
