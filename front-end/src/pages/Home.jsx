import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import "./home.css";

const categories = [
  { label: "Shoes for Men", key: "shoes", imageClass: "box-img" },
  { label: "Wireless Headphones", key: "headphones", imageClass: "box-img1" },
  { label: "Smart Phones", key: "phones", imageClass: "box-img2" },
  { label: "Smart Watch", key: "watches", imageClass: "box-img3" },
  { label: "Ear Phones", key: "earphones", imageClass: "box-img4" },
  { label: "Health Cares", key: "health", imageClass: "box-img5" },
  { label: "Laptops", key: "laptops", imageClass: "box-img6" },
  { label: "Tablets", key: "tablets", imageClass: "box-img7" },
  { label: "Books", key: "books", imageClass: "box-img8" },
  { label: "Slippers for Men", key: "slippers", imageClass: "box-img9" },
  { label: "Wireless Speakers", key: "speakers", imageClass: "box-img10" },
  { label: "Cricket Kit for Boys", key: "cricket", imageClass: "box-img11" },
  { label: "Notebooks", key: "notebooks", imageClass: "box-img12" },
  { label: "Mobile Covers", key: "covers", imageClass: "box-img13" },
  { label: "Keyboard & Mouse", key: "keyboardmouse", imageClass: "box-img14" },
  { label: "Grocery Items", key: "grocery", imageClass: "box-img15" },
];

const Home = () => {
  const navigate = useNavigate();

  const handleClick = (categoryKey) => {
    navigate(`/product?category=${categoryKey}`);
  };

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
            millions of products with fast local delivery.
          </p>
        </div>
      </div>

      <div className="shop-section">
        {categories.map((cat, index) => (
          <div key={index} onClick={() => handleClick(cat.key)} className={`box${index + 1} box`}>
            <div className="box-content">
              <h2>{cat.label}</h2>
              <div className={cat.imageClass}></div>
              <p>See more</p>
            </div>
          </div>
        ))}
      </div>

      <footer>
        <div className="foot-panel1">Back To Top</div>
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
            <a href="#">Your ads privacy choices</a>
          </div>
          <div className="copyright">
            © 1996-2025, DealHut.com, Inc. or its affiliates
          </div>
        </div>
      </footer>
    </>
  );
};

export default Home;
