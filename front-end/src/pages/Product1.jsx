import React, { useEffect, useState } from "react";
import axios from "axios";
import { useLocation } from "react-router-dom";
import "./Product1.css";

const Product1 = () => {
  const [products, setProducts] = useState([]);
  const [userId, setUserId] = useState(localStorage.getItem('userId') || '');
  const { search } = useLocation();

  const query = new URLSearchParams(search);
  const category = query.get("category");

  const handleAddToCart = async (item) => {
    try {
      const res = await axios.post("http://localhost:3000/add-to-cart", {
        userId,
        itemId: item._id,
      });
      alert("Added to cart");
    } catch (err) {
      alert("Failed to add to cart");
    }
  };

  useEffect(() => {
    const fetchData = async () => {
      try {
        const res = await axios.get(`http://localhost:3000/getproduct/${category}`);
        setProducts(res.data.products);
      } catch (err) {
        console.error("Fetch error:", err);
      }
    };

    if (category) fetchData();
  }, [category]);

  return (
    <>
      <h1>Products: {category}</h1>
      <div className="Newshop-section">
        {products.length === 0 ? (
          <p>No items found.</p>
        ) : (
          products.map((item, i) => (
            <div className="newbox" key={item._id || i}>
              <div className="box-newcontent">
                <div className="box-newimg">
                  <img src={item.imgLink} alt={item.itemname} style={{ width: "100%", height: "200px" }} />
                </div>
                <p>{item.itemname}</p>
                <h2>Price: ₹{item.price}</h2>
                <div className="rate">Rating: {item.rating} ⭐</div>
                <button className="butt" onClick={handleAddToCart(item)}>Add To Cart</button>
              </div>
            </div>
          ))
        )}
      </div>
    </>
  );
};

export default Product1;
