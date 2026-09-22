import React, { useEffect, useState } from 'react';
import { useNavigate } from "react-router-dom";
import axios from 'axios';
import './Profile.css';

const Profile = () => {
  const [userData, setUserData] = useState({});
  const navigate = useNavigate();
  const userId = localStorage.getItem('userId');

  useEffect(() => {
    if (!userId) {
      navigate("/login");
      return;
    }

    const getUser = async () => {
      try {
        const res = await axios.get(`http://localhost:3000/userdetails/${userId}`);
        setUserData(res.data.user);
      } catch (err) {
        console.error(err);
      }
    };

    getUser();
  }, [userId, navigate]);

  const handleLogout = () => {
    localStorage.removeItem('userId');
    navigate("/login");
  };

  return (
    <main className="profile-container">
      <h1>My Profile</h1>
      <div className="profile-card">
        <img src="https://img.lovepik.com/png/20231125/man-avatar-image-for-profile-child-diverse-guy_693690_wh860.png" alt="User Avatar" className="avatar"/>
        <h2>{userData.name}</h2>
        <p><b>Email:</b> {userData.email}</p>
        <p><b>Phone:</b> {userData.phone}</p>
        <p><b>Address:</b> {userData.address}</p>
        <button onClick={handleLogout}>Logout</button>
      </div>
    </main>
  );
};

export default Profile;



// import React, { useEffect, useState } from "react";
// import axios from "axios";

// const Profile = () => {
//   const [user, setUser] = useState(null);

//   useEffect(() => {
//     const fetchUser = async () => {
//       try {
//         const storedUser = JSON.parse(localStorage.getItem("user"));
//         if (!storedUser) return;

//         const res = await axios.get(
//           `http://localhost:5000/api/users/${storedUser.id}`
//         );
//         setUser(res.data.user);
//       } catch (err) {
//         console.error("Error fetching profile", err);
//       }
//     };

//     fetchUser();
//   }, []);

//   if (!user) return <h2>Loading...</h2>;

//   return (
//     <div>
//       <h2>Profile</h2>
//       <p><strong>Name:</strong> {user.name}</p>
//       <p><strong>Email:</strong> {user.email}</p>
//       <p><strong>Phone:</strong> {user.phone}</p>
//       <p><strong>Address:</strong> {user.address}</p>
//       <p><strong>Role:</strong> {user.role}</p>
//     </div>
//   );
// };

// export default Profile;