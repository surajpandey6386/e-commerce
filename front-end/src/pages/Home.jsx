import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import "./home.css";

const categories = [
  {
    label: "Shoes for Men",
    key: "shoes",
    image:
      "https://images.unsplash.com/photo-1542291026-7eec264c27ff?auto=format&fit=crop&w=800&q=80",
  },
  {
    label: "Wireless Headphones",
    key: "headphones",
    image:
      "https://images.unsplash.com/photo-1505740420928-5e560c06d30e?auto=format&fit=crop&w=800&q=80",
  },
  {
    label: "Smart Phones",
    key: "phones",
    image:
      "https://images.unsplash.com/photo-1511707171634-5f897ff02aa9?auto=format&fit=crop&w=800&q=80",
  },
  {
    label: "Smart Watch",
    key: "watches",
    image:
      "https://images.unsplash.com/photo-1523275335684-37898b6baf30?auto=format&fit=crop&w=800&q=80",
  },
  {
    label: "Ear Phones",
    key: "earphones",
    image:
      "https://images.unsplash.com/photo-1606220945770-b5b6c2c55bf1?auto=format&fit=crop&w=800&q=80",
  },
  {
    label: "Health Cares",
    key: "health",
    image:
      "https://images.unsplash.com/photo-1505751172876-fa1923c5c528?auto=format&fit=crop&w=800&q=80",
  },
  {
    label: "Laptops",
    key: "laptops",
    image:
      "https://images.unsplash.com/photo-1496181133206-80ce9b88a853?auto=format&fit=crop&w=800&q=80",
  },
  {
    label: "Tablets",
    key: "tablets",
    image:
      "https://images.unsplash.com/photo-1544244015-0df4b3ffc6b0?auto=format&fit=crop&w=800&q=80",
  },
  {
    label: "Books",
    key: "books",
    image:
      "https://images.unsplash.com/photo-1495446815901-a7297e633e8d?auto=format&fit=crop&w=800&q=80",
  },
  {
    label: "Slippers for Men",
    key: "slippers",
    image:
      "https://images.unsplash.com/photo-1562273138-f46be4ebdf33?auto=format&fit=crop&w=800&q=80",
  },
  {
    label: "Wireless Speakers",
    key: "speakers",
    image:
      "https://images.unsplash.com/photo-1608043152269-423dbba4e7e1?auto=format&fit=crop&w=800&q=80",
  },
  {
    label: "Cricket Kit for Boys",
    key: "cricket",
    image:
      "https://images.unsplash.com/photo-1531415074968-036ba1b575da?auto=format&fit=crop&w=800&q=80",
  },
  {
    label: "Notebooks",
    key: "notebooks",
    image:
      "https://images.unsplash.com/photo-1531346878377-a5be20888e57?auto=format&fit=crop&w=800&q=80",
  },
  {
    label: "Mobile Covers",
    key: "covers",
    image:
      "https://images.unsplash.com/photo-1601593346740-925612772716?auto=format&fit=crop&w=800&q=80",
  },
  {
    label: "Keyboard & Mouse",
    key: "keyboardmouse",
    image:
      "https://images.unsplash.com/photo-1587829741301-dc798b83add3?auto=format&fit=crop&w=800&q=80",
  },
  {
    label: "Grocery Items",
    key: "grocery",
    image:
      "https://images.unsplash.com/photo-1542838132-92c53300491e?auto=format&fit=crop&w=800&q=80",
  },
];

const heroSlides = [
  {
    image:
      "https://images.unsplash.com/photo-1441986300917-64674bd600d8?auto=format&fit=crop&w=1800&q=85",
    title: "Welcome to DealHut!",
    subtitle:
      "Discover amazing deals on electronics, fashion, accessories and everyday essentials.",
    button: "Shop Now",
  },
  {
    image:
      "https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?auto=format&fit=crop&w=1800&q=85",
    title: "Great Deals Are Waiting",
    subtitle: "Shop your favourite products at amazing prices.",
    button: "Explore Deals",
  },
  {
    image:
      "https://images.unsplash.com/photo-1556740749-887f6717d7e4?auto=format&fit=crop&w=1800&q=85",
    title: "Everything You Need",
    subtitle: "Find quality products at prices you'll love.",
    button: "View Products",
  },
  {
    image:
      "https://images.unsplash.com/photo-1556740758-90de374c12ad?auto=format&fit=crop&w=1800&q=85",
    title: "Smart Shopping Starts Here",
    subtitle: "Explore categories and discover something new today.",
    button: "Start Shopping",
  },
];

const Home = () => {
  const navigate = useNavigate();

  const [currentSlide, setCurrentSlide] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % heroSlides.length);
    }, 4500);

    return () => clearInterval(interval);
  }, []);

  const handleClick = (categoryKey) => {
    navigate(`/product?category=${categoryKey}`);
  };

  const handleShopNow = () => {
    navigate("/product");
  };

  const currentHero = heroSlides[currentSlide];

  return (
    <main className="home-page">
      {/* ================= HERO ================= */}

      <section
        className="hero-slider"
        style={{
          backgroundImage: `url("${currentHero.image}")`,
        }}
      >
        <div className="hero-overlay"></div>

        <div className="hero-content">
          <span className="hero-small-text">DEALHUT • BEST OFFERS</span>

          <h1>{currentHero.title}</h1>

          <p>{currentHero.subtitle}</p>

          <button onClick={handleShopNow} className="hero-button">
            {currentHero.button} →
          </button>
        </div>

        <div className="hero-dots">
          {heroSlides.map((_, index) => (
            <button
              key={index}
              className={index === currentSlide ? "active" : ""}
              onClick={() => setCurrentSlide(index)}
              aria-label={`Go to slide ${index + 1}`}
            ></button>
          ))}
        </div>
      </section>

      {/* ================= INTRO ================= */}

      <section className="home-intro">
        <h2>Shop by Category</h2>

        <p>
          Explore our popular categories and discover products made for
          everyday shopping.
        </p>
      </section>

      {/* ================= CATEGORY GRID ================= */}

      <section className="shop-section">
        {categories.map((cat) => (
          <article
            key={cat.key}
            className="category-card"
            onClick={() => handleClick(cat.key)}
          >
            <div className="category-image-wrapper">
              <img src={cat.image} alt={cat.label} />
            </div>

            <div className="category-content">
              <h2>{cat.label}</h2>

              <button
                className="explore-button"
                onClick={(e) => {
                  e.stopPropagation();
                  handleClick(cat.key);
                }}
              >
                Explore Products →
              </button>
            </div>
          </article>
        ))}
      </section>

      {/* ================= FOOTER ================= */}

      <footer className="site-footer">
        <button
          className="back-to-top"
          onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
        >
          Back To Top ↑
        </button>

        <div className="footer-content">
          <div>
            <h3>Get to know us</h3>
            <a href="#">About DealHut</a>
            <a href="#">Careers</a>
            <a href="#">Press Releases</a>
          </div>

          <div>
            <h3>Connect with Us</h3>
            <a href="#">Facebook</a>
            <a href="#">Instagram</a>
            <a href="#">Twitter</a>
          </div>

          <div>
            <h3>Make Money with Us</h3>
            <a href="#">Sell on DealHut</a>
            <a href="#">Become an Affiliate</a>
            <a href="#">Partner with Us</a>
          </div>

          <div>
            <h3>Let Us Help You</h3>
            <a href="#">Your Account</a>
            <a href="#">Returns</a>
            <a href="#">Help Center</a>
          </div>
        </div>

        <div className="footer-brand">
          <h2>DealHut</h2>
          <p>Smart shopping. Better deals.</p>
        </div>

        <div className="footer-bottom">
          <div>
            <a href="#">Conditions of Use</a>
            <a href="#">Privacy Notice</a>
            <a href="#">Your Privacy Choices</a>
          </div>

          <p>© 2026 DealHut.com. All rights reserved.</p>
        </div>
      </footer>
    </main>
  );
};

export default Home;