import React, {useState} from "react";
import { Link, useNavigate } from "react-router-dom";
import "./login.css";
import axios from 'axios';
const Register = () => {
  const navigate = useNavigate();
  const [errors, setErrors]=useState({});
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    password: "",
    confirmpassword: "",
    phone:"",
    address:""
  });
  const Formchange = (e) => {
    const { name, value, type } = e.target;
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
    console.log(formData);
  };
  const  handleSubmit = async(e)=>{
    e.preventDefault();
    if (formData.password !== formData.confirmpassword) {
    setErrors({ confirmpassword: "Passwords do not match" });
    return;
  }

    try{

    const res = await axios.post('http://localhost:3000/register', formData)
          console.log(res);
          if(res.status === 200 || res.status === 201){
              alert("Account created");
              navigate("/login");
              console.log("userdata",data);
          }
          else{
            alert("signup failed"+data)
            console.log("error",data);
            
          }
    }
    
    catch(error){
       console.error("servererror",error);  
       
    }
  }
  return (
    <>
      <div className="main-container">
        <div className="floating-shapes">
          <div className="shape"></div>
          <div className="shape"></div>
          <div className="shape"></div>
        </div>
        <div className="login-container">
          <div className="form-container" id="registerForm">
            <div className="newlogo">
              <h1>DealHut</h1>
              <p>Join our community</p>
            </div>

            <form onSubmit = {handleSubmit}>
              <div className="form-group">
                <label htmlFor="reg-fullname">Full Name</label>
                <input
                  type="text"
                  id="reg-fullname"
                  placeholder="Enter your full name"
                  name="name"
                  value={formData.name}
                  onChange={Formchange}
                  required
                />
              </div>

              <div className="form-group">
                <label htmlFor="reg-email">Email</label>
                <input
                  type="email"
                  id="reg-email"
                  placeholder="Enter your email"
                  name="email"
                  value={formData.email}
                  onChange={Formchange}
                  required
                />
              </div>
              <div className="form-group">
                <label htmlFor="reg-phone">Phone No.</label>
                <input
                  type="text"
                  id="reg-phone"
                  placeholder="Enter your mobile No."
                  name="phone"
                  value={formData.phone}
                  onChange={Formchange}
                  required
                />
              </div>

              <div className="form-group">
                <label htmlFor="reg-password">Password</label>
                <input
                  type="password"
                  id="reg-password"
                  placeholder="Create a password"
                  name="password"
                  value={formData.password}
                  onChange={Formchange}
                  required
                />
              </div>

              <div className="form-group">
                <label htmlFor="reg-confirm-password">Confirm Password</label>
                <input
                  type="password"
                  id="reg-confirm-password"
                  placeholder="Confirm your password"
                  name="confirmpassword"
                  value={formData.confirmpassword}
                  onChange={Formchange}
                  required
                />
              </div>
              
              <div className="form-group">
                <label htmlFor="reg-address">Address</label>
                <input
                  type="text"
                  id="reg-address"
                  placeholder="Enter your phone address"
                  name="address"
                  value={formData.address}
                  onChange={Formchange}
                  required
                />
              </div>

              <div className="terms-conditions">
                <label className="remember-me">
                  <input type="checkbox" id="terms" required />I agree to the
                  <a href="#" className="terms-link">
                    Terms & Conditions
                  </a>
                </label>
              </div>
              <button type="submit" className="login-btn">
                Create Account
              </button>
            </form>

            <p id="one">
              {" "}
              Already have an account? <Link to="/login">Login</Link>
            </p>
          </div>
        </div>
      </div>
    </>
  );
};

export default Register;
