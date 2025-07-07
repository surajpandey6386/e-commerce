import React from "react";
import "./login.css";
import { Link } from "react-router-dom";
const Login = () => {
  return (
    <>
      <div className="maincontainer">
        <div className="logincontainer logincontainer-card">
          <h1>Login</h1>
          <form action="/user-dashboard" method="POST">
            <input
              type="email"
              placeholder="Email"
              name="email"
              className="logincontainer logincontainer-input"
              required
            />
            <br />
            <input
              type="password"
              placeholder="Password"
              name="password"
              className="logincontainer logincontainer-input"
              required
            />
            <br />
            <select
              name="role"
              className="logincontainer logincontainer-select"
              required
            >
              <option value="" disabled selected>
                Select Login Role
              </option>
              <option value="UserLogin">UserLogin</option>
              <option value="SellerLogin">SellerLogin</option>
            </select>
            <br />
            <Link className="fpass">Forgot Passwor?</Link>
            <br />
            <br />
            <div className="butt">
              <button
                type="submit"
                className="logincontainer logincontainer-button"
              >
                Login
              </button>
            </div>
          </form>
          <p>
            if not have an account?
            <Link to="/register" className="reg">
              Register
            </Link>{" "}
          </p>
        </div>
      </div>
    </>
  );
};

export default Login;
