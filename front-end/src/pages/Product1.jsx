import React, { useEffect, useState } from "react";
import axios from "axios";
import { useLocation } from "react-router-dom";
import "./Product1.css";

const Product1 = () => {
  const [products, setProducts] = useState([]);
  const [userId] = useState(localStorage.getItem("userId") || "");
  const [error, setError] = useState(null);

  const { search } = useLocation();

  const query = new URLSearchParams(search);

  const category = query.get("category");
  const searchQuery = query.get("search");

  useEffect(() => {
    const fetchData = async () => {
      try {
        setError(null);

        let apiUrl = "http://localhost:3000/getproduct";

        const params = new URLSearchParams();

        if (category) {
          params.append("category", category);
        }

        if (searchQuery) {
          params.append("search", searchQuery);
        }

        const queryString = params.toString();

        if (queryString) {
          apiUrl += `?${queryString}`;
        }

        console.log("Fetching:", apiUrl);

        const res = await axios.get(apiUrl);

        setProducts(res.data.products || []);

      } catch (err) {
        console.error("Fetch error:", err);
        setError(
          "Failed to load products. Please try again later."
        );
      }
    };

    // IMPORTANT:
    // Fetch products even when there is no category/search.
    fetchData();

  }, [category, searchQuery]);

  const handleAddToCart = async (item) => {

    if (!userId) {
      alert("Please sign in to add items to your cart.");
      return;
    }

    try {

      await axios.post(
        "http://localhost:3000/add-to-cart",
        {
          userId,
          itemId: item._id,
        }
      );

      alert("Added to cart successfully!");

    } catch (err) {

      console.error("Add to cart error:", err);

      alert(
        "Failed to add to cart. Please try again."
      );

    }
  };

  return (
    <div className="products-page">

      <div className="products-header">

        <h1>
          {searchQuery
            ? `Search Results for "${searchQuery}"`
            : category
            ? `Products: ${category}`
            : "All Products"}
        </h1>

        <p>
          Explore our latest products and deals
        </p>

      </div>

      {error && (
        <p className="error">
          {error}
        </p>
      )}

      <div className="Newshop-section">

        {products.length === 0 ? (

          <div className="no-items">
            <h2>No products found</h2>

            <p>
              Try searching for another product or category.
            </p>
          </div>

        ) : (

          products.map((item) => (

            <div
              className="newbox"
              key={item._id}
            >

              <div className="box-newcontent">

                <div className="box-newimg">

                  <img
                    src={item.imgLink}
                    alt={item.itemname}
                  />

                </div>

                <div className="product-info">

                  <h3>
                    {item.itemname}
                  </h3>

                  <h2>
                    ₹{item.price}
                  </h2>

                  <p className="rate">
                    ⭐ {item.rating}
                  </p>

                </div>

                <button
                  className="butt"
                  onClick={() => handleAddToCart(item)}
                >
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