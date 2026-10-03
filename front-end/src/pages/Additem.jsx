import React, { useState } from "react";
import "./Additem.css";
import axios from "axios";
import {
  FaImage,
  FaAlignLeft,
  FaRupeeSign,
  FaStar,
  FaTag,
  FaPlus,
} from "react-icons/fa";

const AddItem = () => {

  const [formData, setFormData] = useState({
    imgLink: "",
    description: "",
    price: "",
    rating: "",
    itemname: "",
    category: "",
  });

  const [loading, setLoading] = useState(false);

  const handleChange = (e) => {

    const { name, value } = e.target;

    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSubmit = async (e) => {

    e.preventDefault();

    if (
      !formData.imgLink ||
      !formData.itemname ||
      !formData.price ||
      !formData.category
    ) {
      alert("Please fill all required fields.");
      return;
    }

    try {

      setLoading(true);

      await axios.post(
  `${import.meta.env.VITE_API_URL}/addItem`,
        formData,
        {
          headers: {
            userId: localStorage.getItem("userId"),
          },
        }
      );

      alert("Item added successfully!");

      setFormData({
        imgLink: "",
        description: "",
        price: "",
        rating: "",
        itemname: "",
        category: "",
      });

    } catch (err) {

      console.error(err);

      alert("Admin access only");

    } finally {

      setLoading(false);

    }
  };

  return (
    <main className="additem-page">

      <div className="additem-wrapper">

        {/* HEADER */}

        <div className="additem-heading">

          <div className="admin-icon">
            <FaPlus />
          </div>

          <div>
            <h1>Add New Product</h1>

            <p>
              Add a new product to the DealHut store
            </p>
          </div>

        </div>

        {/* FORM CARD */}

        <form
          className="additem-card"
          onSubmit={handleSubmit}
        >

          {/* PRODUCT IMAGE */}

          <div className="form-group">

            <label>
              <FaImage />
              Product Image URL
              <span>*</span>
            </label>

            <input
              name="imgLink"
              type="url"
              value={formData.imgLink}
              onChange={handleChange}
              placeholder="https://example.com/product.jpg"
              required
            />

          </div>

          {/* ITEM NAME */}

          <div className="form-group">

            <label>
              <FaTag />
              Product Name
              <span>*</span>
            </label>

            <input
              name="itemname"
              type="text"
              value={formData.itemname}
              onChange={handleChange}
              placeholder="Enter product name"
              required
            />

          </div>

          {/* DESCRIPTION */}

          <div className="form-group">

            <label>
              <FaAlignLeft />
              Description
            </label>

            <textarea
              name="description"
              value={formData.description}
              onChange={handleChange}
              placeholder="Enter product description"
              rows="4"
            />

          </div>

          {/* PRICE + RATING */}

          <div className="form-row">

            <div className="form-group">

              <label>
                <FaRupeeSign />
                Price
                <span>*</span>
              </label>

              <input
                name="price"
                type="number"
                min="0"
                value={formData.price}
                onChange={handleChange}
                placeholder="Price in ₹"
                required
              />

            </div>

            <div className="form-group">

              <label>
                <FaStar />
                Rating
              </label>

              <input
                name="rating"
                type="number"
                step="0.1"
                min="0"
                max="5"
                value={formData.rating}
                onChange={handleChange}
                placeholder="0 - 5"
              />

            </div>

          </div>

          {/* CATEGORY */}

          <div className="form-group">

            <label>
              <FaTag />
              Category
              <span>*</span>
            </label>

            <select
              name="category"
              value={formData.category}
              onChange={handleChange}
              required
            >

              <option value="">
                Select product category
              </option>

              <option value="shoes">
                Shoes for Men
              </option>

              <option value="headphones">
                Wireless Headphones
              </option>

              <option value="phones">
                Smart Phones
              </option>

              <option value="watches">
                Smart Watch
              </option>

              <option value="health">
                Health Cares
              </option>

              <option value="laptops">
                Laptops
              </option>

              <option value="tablets">
                Tablets
              </option>

              <option value="books">
                Books
              </option>

              <option value="slippers">
                Slippers for Men
              </option>

              <option value="speakers">
                Wireless Speakers
              </option>

              <option value="cricket">
                Cricket Kit for Boys
              </option>

              <option value="notebooks">
                Notebooks
              </option>

              <option value="covers">
                Mobile Covers
              </option>

              <option value="keyboardmouse">
                Keyboard & Mouse
              </option>

              <option value="grocery">
                Grocery Items
              </option>

            </select>

          </div>

          {/* SUBMIT */}

          <button
            type="submit"
            className="Additem-button"
            disabled={loading}
          >

            <FaPlus />

            {loading
              ? "Adding Product..."
              : "Add Product"}

          </button>

        </form>

      </div>

    </main>
  );
};

export default AddItem;