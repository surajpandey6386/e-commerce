import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import {
  FaUser,
  FaEnvelope,
  FaPhone,
  FaMapMarkerAlt,
  FaSignOutAlt,
  FaShoppingBag,
} from "react-icons/fa";
import "./Profile.css";

const Profile = () => {
  const [userData, setUserData] = useState({});
  const [loading, setLoading] = useState(true);

  const navigate = useNavigate();
  const userId = localStorage.getItem("userId");

  useEffect(() => {
    if (!userId) {
      navigate("/login");
      return;
    }

    const getUser = async () => {
      try {
        const res = await axios.get(
  `${import.meta.env.VITE_API_URL}/userdetails/${userId}`
);

        setUserData(res.data.user);
      } catch (err) {
        console.error("Error fetching user:", err);
      } finally {
        setLoading(false);
      }
    };

    getUser();
  }, [userId, navigate]);

  const handleLogout = () => {
    localStorage.removeItem("userId");
    localStorage.removeItem("role");

    navigate("/login");
  };

  if (loading) {
    return (
      <div className="profile-loading">
        <div className="loading-spinner"></div>
        <p>Loading profile...</p>
      </div>
    );
  }

  return (
    <main className="profile-container">

      <div className="profile-wrapper">

        {/* TOP HEADING */}

        <div className="profile-heading">
          <h1>My Profile</h1>
          <p>Manage your DealHut account</p>
        </div>

        {/* PROFILE CARD */}

        <div className="profile-card">

          {/* COVER */}

          <div className="profile-cover"></div>

          {/* AVATAR */}

          <div className="profile-avatar-wrapper">

            <img
              src={
                userData.image ||
                "https://img.lovepik.com/png/20231125/man-avatar-image-for-profile-child-diverse-guy_693690_wh860.png"
              }
              alt="User Avatar"
              className="avatar"
            />

          </div>

          {/* NAME */}

          <div className="profile-name">

            <h2>
              {userData.name || "User"}
            </h2>

            <span>
              DealHut Customer
            </span>

          </div>

          {/* INFORMATION */}

          <div className="profile-info">

            <div className="info-item">

              <div className="info-icon">
                <FaUser />
              </div>

              <div>
                <small>Full Name</small>
                <strong>
                  {userData.name || "Not available"}
                </strong>
              </div>

            </div>

            <div className="info-item">

              <div className="info-icon">
                <FaEnvelope />
              </div>

              <div>
                <small>Email Address</small>
                <strong>
                  {userData.email || "Not available"}
                </strong>
              </div>

            </div>

            <div className="info-item">

              <div className="info-icon">
                <FaPhone />
              </div>

              <div>
                <small>Phone Number</small>
                <strong>
                  {userData.phone || "Not available"}
                </strong>
              </div>

            </div>

            <div className="info-item">

              <div className="info-icon">
                <FaMapMarkerAlt />
              </div>

              <div>
                <small>Address</small>
                <strong>
                  {userData.address || "Not available"}
                </strong>
              </div>

            </div>

          </div>

          {/* ACTIONS */}

          <div className="profile-actions">

            <button
              className="orders-button"
              onClick={() => navigate("/orders")}
            >
              <FaShoppingBag />
              My Orders
            </button>

            <button
              className="profile-logout-button"
              onClick={handleLogout}
            >
              <FaSignOutAlt />
              Logout
            </button>

          </div>

        </div>

      </div>

    </main>
  );
};

export default Profile;