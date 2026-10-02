import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import "./login.css";
import axios from "axios";
import {
  FaEye,
  FaEyeSlash,
  FaShoppingBag,
  FaArrowRight,
  FaLock,
  FaUser,
  FaEnvelope,
  FaPhone,
  FaMapMarkerAlt,
} from "react-icons/fa";

const Register = () => {
  const navigate = useNavigate();

  const [errors, setErrors] = useState({});
  const [showPassword, setShowPassword] = useState(false);
  const [showConfirmPassword, setShowConfirmPassword] =
    useState(false);
  const [loading, setLoading] = useState(false);

  const [formData, setFormData] = useState({
    name: "",
    email: "",
    password: "",
    confirmpassword: "",
    phone: "",
    address: "",
  });

  const Formchange = (e) => {
    const { name, value } = e.target;

    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));

    if (errors[name]) {
      setErrors((prev) => ({
        ...prev,
        [name]: "",
      }));
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    const newErrors = {};

    if (formData.name.trim().length < 2) {
      newErrors.name = "Please enter your full name.";
    }

    if (formData.phone.length < 10) {
      newErrors.phone =
        "Please enter a valid phone number.";
    }

    if (formData.password.length < 6) {
      newErrors.password =
        "Password must contain at least 6 characters.";
    }

    if (
      formData.password !==
      formData.confirmpassword
    ) {
      newErrors.confirmpassword =
        "Passwords do not match.";
    }

    if (Object.keys(newErrors).length > 0) {
      setErrors(newErrors);
      return;
    }

    try {
      setLoading(true);

      const res = await axios.post(
        "http://localhost:3000/register",
        formData
      );

      if (
        res.status === 200 ||
        res.status === 201
      ) {
        alert("Account created successfully!");

        navigate("/login");
      }
    } catch (error) {
      console.error(
        "Registration error:",
        error
      );

      alert(
        error.response?.data?.message ||
          "Registration failed. Please try again."
      );
    } finally {
      setLoading(false);
    }
  };

  return (
    <main className="auth-page register-page">

      {/* BACKGROUND */}
      <div className="auth-background">

        <div className="auth-circle circle-one"></div>

        <div className="auth-circle circle-two"></div>

        <div className="auth-circle circle-three"></div>

      </div>

      <div className="auth-layout">

        {/* LEFT BRAND */}
        <section className="auth-brand">

          <div className="brand-icon">
            <FaShoppingBag />
          </div>

          <h1>
            Deal<span>Hut</span>
          </h1>

          <p className="brand-tagline">
            Join the DealHut community
          </p>

          <div className="brand-description">

            <p>
              Create your account and discover
              thousands of products and exciting deals.
            </p>

          </div>

          <div className="brand-features">

            <div>
              <span>✓</span>
              Simple Shopping
            </div>

            <div>
              <span>✓</span>
              Amazing Products
            </div>

            <div>
              <span>✓</span>
              Great Deals
            </div>

          </div>

        </section>

        {/* REGISTER CARD */}
        <section className="auth-card register-card">

          <div className="auth-header">

            <div className="mobile-brand-icon">
              <FaShoppingBag />
            </div>

            <h2>Create Account</h2>

            <p>
              Join DealHut and start shopping today.
            </p>

          </div>

          <form
            className="auth-form"
            onSubmit={handleSubmit}
          >

            {/* NAME */}
            <div className="auth-field">

              <label htmlFor="reg-fullname">
                Full Name
              </label>

              <div className="input-with-icon">

                <FaUser />

                <input
                  type="text"
                  id="reg-fullname"
                  name="name"
                  placeholder="Enter your full name"
                  value={formData.name}
                  onChange={Formchange}
                  autoComplete="name"
                  required
                />

              </div>

              {errors.name && (
                <small className="field-error">
                  {errors.name}
                </small>
              )}

            </div>

            {/* EMAIL */}
            <div className="auth-field">

              <label htmlFor="reg-email">
                Email Address
              </label>

              <div className="input-with-icon">

                <FaEnvelope />

                <input
                  type="email"
                  id="reg-email"
                  name="email"
                  placeholder="Enter your email"
                  value={formData.email}
                  onChange={Formchange}
                  autoComplete="email"
                  required
                />

              </div>

            </div>

            {/* PHONE */}
            <div className="auth-field">

              <label htmlFor="reg-phone">
                Phone Number
              </label>

              <div className="input-with-icon">

                <FaPhone />

                <input
                  type="tel"
                  id="reg-phone"
                  name="phone"
                  placeholder="Enter your phone number"
                  value={formData.phone}
                  onChange={Formchange}
                  autoComplete="tel"
                  maxLength="10"
                  required
                />

              </div>

              {errors.phone && (
                <small className="field-error">
                  {errors.phone}
                </small>
              )}

            </div>

            {/* PASSWORD */}
            <div className="auth-field">

              <label htmlFor="reg-password">
                Password
              </label>

              <div className="password-field">

                <input
                  type={
                    showPassword
                      ? "text"
                      : "password"
                  }
                  id="reg-password"
                  name="password"
                  placeholder="Create a password"
                  value={formData.password}
                  onChange={Formchange}
                  autoComplete="new-password"
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
                >
                  {showPassword ? (
                    <FaEyeSlash />
                  ) : (
                    <FaEye />
                  )}
                </button>

              </div>

              {errors.password && (
                <small className="field-error">
                  {errors.password}
                </small>
              )}

            </div>

            {/* CONFIRM PASSWORD */}
            <div className="auth-field">

              <label htmlFor="reg-confirm-password">
                Confirm Password
              </label>

              <div className="password-field">

                <input
                  type={
                    showConfirmPassword
                      ? "text"
                      : "password"
                  }
                  id="reg-confirm-password"
                  name="confirmpassword"
                  placeholder="Confirm your password"
                  value={
                    formData.confirmpassword
                  }
                  onChange={Formchange}
                  autoComplete="new-password"
                  required
                />

                <button
                  type="button"
                  className="password-toggle"
                  onClick={() =>
                    setShowConfirmPassword(
                      (prev) => !prev
                    )
                  }
                >
                  {showConfirmPassword ? (
                    <FaEyeSlash />
                  ) : (
                    <FaEye />
                  )}
                </button>

              </div>

              {errors.confirmpassword && (
                <small className="field-error">
                  {errors.confirmpassword}
                </small>
              )}

            </div>

            {/* ADDRESS */}
            <div className="auth-field">

              <label htmlFor="reg-address">
                Address
              </label>

              <div className="input-with-icon">

                <FaMapMarkerAlt />

                <input
                  type="text"
                  id="reg-address"
                  name="address"
                  placeholder="Enter your address"
                  value={formData.address}
                  onChange={Formchange}
                  autoComplete="street-address"
                  required
                />

              </div>

            </div>

            {/* TERMS */}
            <label className="terms-option">

              <input
                type="checkbox"
                id="terms"
                required
              />

              <span>
                I agree to the{" "}
                <a href="#terms">
                  Terms & Conditions
                </a>
              </span>

            </label>

            {/* SUBMIT */}
            <button
              type="submit"
              className="auth-submit"
              disabled={loading}
            >

              {loading ? (
                <>
                  <span className="button-spinner"></span>
                  Creating Account...
                </>
              ) : (
                <>
                  Create Account
                  <FaArrowRight />
                </>
              )}

            </button>

          </form>

          {/* LOGIN */}
          <div className="auth-switch">

            <span>
              Already have an account?
            </span>

            <Link to="/login">
              Sign In
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

export default Register;