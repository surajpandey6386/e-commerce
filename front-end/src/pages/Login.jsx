import React, { useState } from "react";
import "./login.css";
import { useNavigate, Link } from "react-router-dom";
import axios from "axios";
import {
  FaEye,
  FaEyeSlash,
  FaShoppingBag,
  FaArrowRight,
  FaLock,
} from "react-icons/fa";

const Login = () => {
  const navigate = useNavigate();

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [showPassword, setShowPassword] = useState(false);
  const [loading, setLoading] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!email || !password) {
      alert("Please enter your email and password.");
      return;
    }

    try {
      setLoading(true);

      const res = await axios.post(
        "http://localhost:3000/login",
        {
          email,
          password,
        }
      );

      if (res.status === 200) {
        localStorage.setItem("userId", res.data.userId);
        localStorage.setItem("role", res.data.role);

        alert("Login successful!");

        navigate("/");
      }
    } catch (error) {
      console.error("Login error:", error);

      alert(
        error.response?.data?.message ||
          "Invalid email or password."
      );
    } finally {
      setLoading(false);
    }
  };

  return (
    <main className="auth-page">

      {/* Decorative Background */}
      <div className="auth-background">
        <div className="auth-circle circle-one"></div>
        <div className="auth-circle circle-two"></div>
        <div className="auth-circle circle-three"></div>
      </div>

      <div className="auth-layout">

        {/* LEFT SIDE */}
        <section className="auth-brand">

          <div className="brand-icon">
            <FaShoppingBag />
          </div>

          <h1>
            Deal<span>Hut</span>
          </h1>

          <p className="brand-tagline">
            Your everyday shopping destination
          </p>

          <div className="brand-description">
            <p>
              Discover amazing products, great deals,
              and a simple shopping experience.
            </p>
          </div>

          <div className="brand-features">
            <div>
              <span>✓</span>
              Quality Products
            </div>

            <div>
              <span>✓</span>
              Great Deals
            </div>

            <div>
              <span>✓</span>
              Easy Shopping
            </div>
          </div>

        </section>

        {/* LOGIN CARD */}
        <section className="auth-card">

          <div className="auth-header">

            <div className="mobile-brand-icon">
              <FaShoppingBag />
            </div>

            <h2>Welcome Back!</h2>

            <p>
              Sign in to continue shopping with DealHut.
            </p>

          </div>

          <form
            className="auth-form"
            onSubmit={handleSubmit}
          >

            {/* EMAIL */}
            <div className="auth-field">

              <label htmlFor="login-email">
                Email Address
              </label>

              <input
                type="email"
                id="login-email"
                placeholder="Enter your email"
                value={email}
                onChange={(e) =>
                  setEmail(e.target.value)
                }
                autoComplete="email"
                required
              />

            </div>

            {/* PASSWORD */}
            <div className="auth-field">

              <label htmlFor="login-password">
                Password
              </label>

              <div className="password-field">

                <input
                  type={
                    showPassword
                      ? "text"
                      : "password"
                  }
                  id="login-password"
                  placeholder="Enter your password"
                  value={password}
                  onChange={(e) =>
                    setPassword(e.target.value)
                  }
                  autoComplete="current-password"
                  required
                />

                <button
                  type="button"
                  className="password-toggle"
                  onClick={() =>
                    setShowPassword(
                      (prev) => !prev
                    )
                  }
                  aria-label={
                    showPassword
                      ? "Hide password"
                      : "Show password"
                  }
                >
                  {showPassword ? (
                    <FaEyeSlash />
                  ) : (
                    <FaEye />
                  )}
                </button>

              </div>

            </div>

            {/* OPTIONS */}
            <div className="auth-options">

              <label className="remember-option">

                <input
                  type="checkbox"
                  id="remember"
                />

                <span>
                  Remember me
                </span>

              </label>

              <button
                type="button"
                className="forgot-link"
                onClick={() =>
                  alert(
                    "Password reset functionality can be added here."
                  )
                }
              >
                Forgot password?
              </button>

            </div>

            {/* LOGIN BUTTON */}
            <button
              type="submit"
              className="auth-submit"
              disabled={loading}
            >

              {loading ? (
                <>
                  <span className="button-spinner"></span>
                  Signing in...
                </>
              ) : (
                <>
                  Sign In
                  <FaArrowRight />
                </>
              )}

            </button>

          </form>

          {/* REGISTER */}
          <div className="auth-switch">

            <span>
              Don't have an account?
            </span>

            <Link to="/register">
              Create an account
            </Link>

          </div>

          <div className="secure-login">

            <FaLock />

            <span>
              Your information is securely protected
            </span>

          </div>

        </section>

      </div>

    </main>
  );
};

export default Login;