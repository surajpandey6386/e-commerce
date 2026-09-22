import React, { useEffect, useState } from "react";
import "./Cart.css";

export default function Cart() {
  const [cartItems, setCartItems] = useState([]);
  const [loading, setLoading] = useState(true);
  const userId = localStorage.getItem("userId");

  useEffect(() => {
    fetchCart();
  }, []);

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

  const removeItem = async (itemId) => {
    try {
      const res = await fetch(
        `http://localhost:3000/remove-from-cart/${userId}/${itemId}`,
        { method: "DELETE" }
      );

      const data = await res.json();

      if (data.success) {
        // Update UI instantly
        setCartItems(cartItems.filter((item) => item.itemId !== itemId));
      }
    } catch (error) {
      console.error("Error removing item:", error);
    }
  };

  const total = cartItems.reduce(
    (sum, item) => sum + item.price * item.quantity,
    0
  );

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
            {cartItems.map((item) => (
              <li key={item.itemId} className="cart-item">
                <img src={item.image} alt={item.name} />

                <div className="item-details">
                  <h4>{item.name}</h4>
                  <p>₹{item.price}</p>
                  <p>Quantity: {item.quantity}</p>

                  <button
                    className="remove-btn"
                    onClick={() => removeItem(item.itemId)}
                  >
                    Remove
                  </button>
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
