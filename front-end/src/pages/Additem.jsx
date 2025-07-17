import React, { useState } from 'react';
import './additem.css';
import axios from 'axios';

const AddItem = () => {
  const [formData, setFormData] = useState({
    imgLink: '',
    description: '',
    price: '',
    rating: '',
    itemname: '',
    category: '' // changed from 'select' to 'category'
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const res = await axios.post('http://localhost:3000/addItem', formData);
      console.log(res.data);
      alert('Item added successfully!');
      setFormData({
        imgLink: '',
        description: '',
        price: '',
        rating: '',
        itemname: '',
        category: ''
      });
    } catch (err) {
      console.error(err);
      alert('Failed to add item');
    }
  };

  return (
    <div className="super">
      <div className="maincomponent">
        <form className="detail" onSubmit={handleSubmit}>
          <h1>Add Item</h1>
          <input
            onChange={handleChange}
            name="imgLink"
            type="text"
            value={formData.imgLink}
            placeholder="Enter image link"
            className="inn"
          />
          <input
            onChange={handleChange}
            name="description"
            type="text"
            value={formData.description}
            placeholder="Enter item description"
            className="inn"
          />
          <input
            onChange={handleChange}
            name="price"
            type="number"
            value={formData.price}
            placeholder="Enter price in Rupees"
            className="inn"
          />
          <input
            onChange={handleChange}
            name="rating"
            type="number"
            step="0.1"
            max="5"
            min="0"
            value={formData.rating}
            placeholder="Rating out of 5"
            className="inn"
          />
          <input
            onChange={handleChange}
            name="itemname"
            type="text"
            value={formData.itemname}
            placeholder="Enter item name"
            className="inn"
          />
          <select
            onChange={handleChange}
            name="category" // backend expects "category"
            value={formData.category}
            className="inn"
          >
            <option value="">Select category</option>
            <option value="shoes">Shoes for Men</option>
            <option value="headphones">Wireless Headphones</option>
            <option value="phones">Smart Phones</option>
            <option value="watches">Smart Watch</option>
            <option value="health">Health Cares</option>
            <option value="laptops">Laptops</option>
            <option value="tablets">Tablets</option>
            <option value="books">Books</option>
            <option value="slippers">Slippers for Men</option>
            <option value="speakers">Wireless Speakers</option>
            <option value="cricket">Cricket Kit for Boys</option>
            <option value="notebooks">Notebooks</option>
            <option value="covers">Mobile Covers</option>
            <option value="keyboardmouse">Keyboard & Mouse</option>
            <option value="grocery">Grocery Items</option>
          </select>
          <button className="Additem-button" type="submit">
            Add Item
          </button>
        </form>
      </div>
    </div>
  );
};

export default AddItem;
