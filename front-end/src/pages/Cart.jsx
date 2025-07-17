import React, { useEffect, useState } from 'react';
import './Cart.css';

export default function Cart() {
  const [cartItems, setCartItems] = useState([]);
  const [loading, setLoading] = useState(true);
  const [userId, setUserId] = useState(localStorage.getItem('userId') || '');

  useEffect(() => {
    const fetchCart = async () => {
      try {
        const res = await fetch(`http://localhost:3000/get-cart/${userId}`);
        const data = await res.json();
        if (data.success) {
          setCartItems(data.cart.items);
        }
      } catch (error) {
        console.error("Error fetching cart:", error);
      } finally {
        setLoading(false);
      }
    };

    fetchCart();
  }, []);

  const total = cartItems.reduce((sum, item) => sum + item.price * item.quantity, 0);

  return (
    <div className="cart-container">
      <h2>Your Shopping Cart</h2>
      {loading ? (
        <p>Loading...</p>
      ) : cartItems.length === 0 ? (
        <p>Your cart is empty.</p>
      ) : (
        <>
          <ul className="cart-list">
            {cartItems.map(item => (
              <li key={item.itemId} className="cart-item">
                <img src={item.image} alt={item.name} />
                <div className="item-details">
                  <h4>{item.name}</h4>
                  <p>₹{item.price}</p>
                  <p>Quantity: {item.quantity}</p>
                  {/* You can add quantity buttons here if needed */}
                </div>
              </li>
            ))}
          </ul>
          <div className="cart-summary">
            <h3>Total: ₹{total.toLocaleString()}</h3>
            <button className="checkout-btn">Proceed to Checkout</button>
          </div>
        </>
      )}
    </div>
  );
}
