import React, { useEffect, useState } from "react";
import axios from "axios";
import { useLocation } from "react-router-dom";
import "./Product1.css";

const Product1 = () => {
  const [products, setProducts] = useState([]);
  const [userId, setUserId] = useState(localStorage.getItem('userId') || '');
  const [error, setError] = useState(null);
  const { search } = useLocation();
  const query = new URLSearchParams(search);
  const category = query.get("category");
  const searchQuery = query.get("search");

  useEffect(() => {
    const fetchData = async () => {
      try {
        setError(null);
        const apiUrl = `http://localhost:3000/getproduct${category || searchQuery ? '?' : ''}${category ? `category=${encodeURIComponent(category)}` : ''}${category && searchQuery ? '&' : ''}${searchQuery ? `search=${encodeURIComponent(searchQuery)}` : ''}`;
        const res = await axios.get(apiUrl);
        console.log(apiUrl);
        setProducts(res.data.products || []);
      } catch (err) {
        console.error("Fetch error:", err);
        setError("Failed to load products. Please try again later.");
      }
    };

    if (category || searchQuery) {
      fetchData();
    } else {
      setProducts([]);
    }
  }, [category, searchQuery]);

  const handleAddToCart = async (item) => {
    if (!userId) {
      alert("Please sign in to add items to your cart.");
      return;
    }
    try {
      const res = await axios.post("http://localhost:3000/add-to-cart", {
        userId,
        itemId: item._id,
      });
      alert("Added to cart successfully!");
    } catch (err) {
      console.error("Add to cart error:", err);
      alert("Failed to add to cart. Please try again.");
    }
  };

  return (
    <div>
      <h1>
        {searchQuery ? `Search Results for "${searchQuery}"` : `Products: ${category || 'All'}`}
      </h1>
      {error && <p className="error">{error}</p>}
      <div className="Newshop-section">
        {products.length === 0 ? (
          <p className="no-items">
            No items found. Try adjusting your search or browsing another category.
          </p>
        ) : (
          products.map((item) => (
            <div className="newbox" key={item._id || item.itemname + Math.random()}>
              <div className="box-newcontent">
                <div className="box-newimg">
                  <img
                    src={item.imgLink}
                    alt={item.itemname}
                    style={{ width: "100%", height: "200px" }}
                  />
                </div>
                <p>{item.itemname}</p>
                <h2>Price: ₹{item.price}</h2>
                <p className="rate">Rating: {item.rating} ⭐</p>
                <button className="butt" onClick={() => handleAddToCart(item)}>
                  Add to Cart
                </button>
              </div>
            </div>
          ))
        )}
      </div>
    </div>
  );
};

export default Product1;