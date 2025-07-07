import React from 'react'
import { Link } from "react-router-dom";
import './Profile.css'
const Profile = () => {
  return (
    <>
   <main className="profile-container">
    <h1>My Profile</h1>
    <div className="profile-card">
      <img src="https://img.lovepik.com/png/20231125/man-avatar-image-for-profile-child-diverse-guy_693690_wh860.png" alt="User Avatar" className="avatar"/>
      <h2>Suraj Pandey</h2>
      <p>Email: surajpandey638652@gmail.com</p>
      <p>Phone: ‪+91 6386528176‬</p>
      <p>Address: 123 Gauri Bazar, Lucknow, India</p>
      <button>Edit Profile</button>
      <button>Logout</button>
    </div>
  </main>
</>
  )
}

export default Profile
