import React, { useEffect, useState } from 'react'
import { Link } from "react-router-dom";
import axios from 'axios';
import './Profile.css'
const Profile = () => {
  const [userdata, setuserdata] = useState([]);
  const [name, setName] = useState();
  const [Email, setEmail] = useState();
  const [Phone, setPhone] = useState();
  const [Address, setAddress] = useState();
  const [userId, setUserId] = useState(localStorage.getItem('userId'));
  useEffect(()=>{
    const getUser = async () => {
      const res = await axios.get(`http://localhost:3000/userdetails/${userId}`);
      // console.log(res.data.user.name);
      setName(res.data.user.name)
      setEmail(res.data.user.email)
      setPhone(res.data.user.phone)
      setAddress(res.data.user.address)
      
      // console.log(userdata);
    }

    getUser();
  }, [])
  return (
    <>
   <main className="profile-container">
    <h1>My Profile</h1>
    <div className="profile-card">
      <img src="https://img.lovepik.com/png/20231125/man-avatar-image-for-profile-child-diverse-guy_693690_wh860.png" alt="User Avatar" className="avatar"/>
      <h2>{name}</h2>
      <p>{Email}</p>
      <p>{Phone}</p>
      <p>{Address}</p>
      {/* <button>Edit Profile</button> */}
      <button>Logout</button>
    </div>
  </main>
</>
  )
}

export default Profile
