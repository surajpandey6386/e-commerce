import React from "react";
import { useNavigate } from "react-router-dom";
import "./home.css";
const Home = () => {
  const navigate = useNavigate();
  const handleClick = ()=>{
    navigate('/product');
  }
  return (
    <>
      <section className="hero">
        <h1>Welcome to DealHut!</h1>
        <p>Discover the best deals on your favorite products</p>
      </section>
      <div className="hero-section2">
        <div className="hero-msg">
          <p>
            You are on DealHut.com. You can also shop on DealHut India for
            millions of products with fast local delivery.{" "}
          </p>
        </div>
      </div>

      <div className="shop-section">
        <div onClick={handleClick} className="box1 box">
          <div className="box-content">
            <h2>shoes for Men</h2>
            <div className="box-img"></div>
            <p>See more</p>
          </div>
        </div>
        <div className="box2 box">
          <div className="box-content">
            <h2>Wireless Headphones</h2>
            <div className="box-img1"></div>
            <p>See more</p>
          </div>
        </div>
        <div className="box3 box">
          <div className="box-content">
            <h2>Smart Phones </h2>
            <div className="box-img2"></div>
            <p>See more</p>
          </div>
        </div>
        <div className="box4 box">
          <div className="box-content">
            <h2>Smart Watch </h2>
            <div className="box-img3"></div>
            <p>See more</p>
          </div>
        </div>
        <div className="box5 box">
          <div className="box-content">
            <h2>Ear Phones </h2>
            <div className="box-img4"></div>
            <p>See more</p>
          </div>
        </div>
        <div className="box6 box">
          <div className="box-content">
            <h2>Health Cares </h2>
            <div className="box-img5"></div>
            <p>See more</p>
          </div>
        </div>
        <div className="box7 box">
          <div className="box-content">
            <h2>Laptops </h2>
            <div className="box-img6"></div>
            <p>See more</p>
          </div>
        </div>
        <div className="box8 box">
          <div className="box-content">
            <h2>Tablets </h2>
            <div className="box-img7"></div>
            <p>See more</p>
          </div>
        </div>
        <div className="box9 box">
           <div className="box-content">
            <h2>Books</h2>
            <div className="box-img8"></div>
            <p>See more</p>
          </div>
        </div>
        <div className="box10 box">
           <div className="box-content">
            <h2>Slippers for Men</h2>
            <div className="box-img9"></div>
            <p>See more</p>
          </div>
        </div>
        <div className="box11 box">
           <div className="box-content">
            <h2>Wireless Speakers</h2>
            <div className="box-img10"></div>
            <p>See more</p>
          </div>
        </div>
        <div className="box12 box">
           <div className="box-content">
            <h2>Cricket KIt for Boys</h2>
            <div className="box-img11"></div>
            <p>See more</p>
          </div>
        </div>
        <div className="box13 box">
          <div className="box-content">
            <h2>Notebooks</h2>
            <div className="box-img12"></div>
            <p>See more</p>
          </div>
        </div>
        <div className="box14 box">
          <div className="box-content">
            <h2>Mobile Covers</h2>
            <div className="box-img13"></div>
            <p>See more</p>
          </div>
        </div>
        <div className="box15 box">
          <div className="box-content">
            <h2>Keyboard & Mouse </h2>
            <div className="box-img14"></div>
            <p>See more</p>
          </div>
        </div>
        <div className="box16 box">
          <div className="box-content">
            <h2>Grocery Items</h2>
            <div className="box-img15"></div>
            <p>See more</p>
          </div>
        </div>
      </div>
      <footer>
        <div className="foot-panel1">
          Back To Top
        </div>
        <div className="foot-panel2">
          <ul>
            <p>Get to know us</p>
               <a href="#">About DealHut</a>
               <a href="#">Careers</a>
               <a href="#">Press Releases</a>
               <a href="#">Amazon Science</a>
          </ul>
          <ul>
          <p>Connect with Us</p>
           <a href="#">Facebook</a>
            <a href="#">Twitter</a>
           <a href="#">Instagram</a>
          </ul>
          <ul>
            <p>Make Money with Us</p>
            <a href="#">Sell on Amazon</a>
            <a href="#">Sell under Amazon Accelerator</a>
            <a href="#">Protect and Build Your Brand</a>
            <a href="#">Amazon Global Selling</a>
            <a href="#">Supply to Amazon</a>
            <a href="#">Become an Affiliate</a>
          </ul>
          <ul>
           <p> Let Us Help You</p>
           <a href="#">Your Account</a>
           <a href="#">Returns Centre</a>
           <a href="#">Recalls and Product Safety Alerts</a>
           <a href="#">100% Purchase Protection</a>
           <a href="#">Amazon App Download</a>
           <a href="#">Help</a>
          </ul>
        </div>
        <div className="foot-panel3">
          <h1>DealHut</h1>
        </div>
        <div className="foot-panel4">
          <div className="pages">
            <a href="#">Conditions of use</a>
            <a href="#">Privacy Notice</a>
            <a href="#">your ads privacy choices</a>
          </div>
          <div className="copyright">
            © 1996-2025, Amazon.com, Inc. or its affiliates
          </div>
        </div>
      </footer>
    </>
  );
};

export default Home;
