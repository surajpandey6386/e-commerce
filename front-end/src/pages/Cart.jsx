import React, { useEffect, useState } from "react";
import "./Cart.css";

export default function Cart() {
  const [cartItems, setCartItems] = useState([]);
  const [loading, setLoading] = useState(true);
  const [paymentLoading, setPaymentLoading] = useState(false);

  const userId = localStorage.getItem("userId");

  useEffect(() => {
    fetchCart();
  }, []);

  const fetchCart = async () => {
    try {
      const res = await fetch(
        `${import.meta.env.VITE_API_URL}/get-cart/${userId}`
      );

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
       `${import.meta.env.VITE_API_URL}/remove-from-cart/${userId}/${itemId}`,
        {
          method: "DELETE",
        }
      );

      const data = await res.json();

      if (data.success) {
        setCartItems(
          cartItems.filter(
            (item) => item.itemId !== itemId
          )
        );
      }
    } catch (error) {
      console.error("Error removing item:", error);
    }
  };

  const total = cartItems.reduce(
    (sum, item) => sum + item.price * item.quantity,
    0
  );

  // Load Razorpay script
  const loadRazorpayScript = () => {
    return new Promise((resolve) => {
      const script = document.createElement("script");

      script.src =
        "https://checkout.razorpay.com/v1/checkout.js";

      script.onload = () => {
        resolve(true);
      };

      script.onerror = () => {
        resolve(false);
      };

      document.body.appendChild(script);
    });
  };

  const handlePayment = async () => {
    try {
      setPaymentLoading(true);

      if (!userId) {
        alert("Please login first.");
        return;
      }

      if (cartItems.length === 0) {
        alert("Your cart is empty.");
        return;
      }

      // Load Razorpay
      const isLoaded = await loadRazorpayScript();

      if (!isLoaded) {
        alert("Razorpay SDK failed to load.");
        return;
      }

      // Create order on backend
      const response = await fetch(
        `${import.meta.env.VITE_API_URL}/payment/create-order`,
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({
            userId,
          }),
        }
      );

      const data = await response.json();

      if (!data.success) {
        alert(data.message);
        return;
      }

      const options = {
        key: data.key,

        amount: data.order.amount,

        currency: data.order.currency,

        name: "DealHut",

        description: "DealHut Shopping Payment",

        order_id: data.order.id,

        handler: async function (response) {
          try {
            // Verify payment on backend
            const verifyResponse = await fetch(
              `${import.meta.env.VITE_API_URL}/payment/verify`,
              {
                method: "POST",
                headers: {
                  "Content-Type": "application/json",
                },
                body: JSON.stringify({
                  razorpay_order_id:
                    response.razorpay_order_id,

                  razorpay_payment_id:
                    response.razorpay_payment_id,

                  razorpay_signature:
                    response.razorpay_signature,

                  userId,
                }),
              }
            );

            const verifyData =
              await verifyResponse.json();

            if (verifyData.success) {
              alert(
                "Payment successful! Thank you for shopping with DealHut."
              );

              // Clear cart in frontend
              setCartItems([]);
            } else {
              alert("Payment verification failed.");
            }
          } catch (error) {
            console.error(
              "Payment verification error:",
              error
            );

            alert(
              "Something went wrong while verifying payment."
            );
          }
        },

        prefill: {
          name: localStorage.getItem("name") || "",
          email: localStorage.getItem("email") || "",
        },

        theme: {
          color: "#3399cc",
        },
      };

      const paymentObject =
        new window.Razorpay(options);

      paymentObject.on(
        "payment.failed",
        function (response) {
          console.error(
            "Payment failed:",
            response.error
          );

          alert("Payment failed. Please try again.");
        }
      );

      paymentObject.open();
    } catch (error) {
      console.error("Payment error:", error);

      alert("Unable to start payment.");
    } finally {
      setPaymentLoading(false);
    }
  };

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
              <li
                key={item.itemId}
                className="cart-item"
              >
                <img
                  src={item.image}
                  alt={item.name}
                />

                <div className="item-details">
                  <h4>{item.name}</h4>

                  <p>₹{item.price}</p>

                  <p>
                    Quantity: {item.quantity}
                  </p>

                  <button
                    className="remove-btn"
                    onClick={() =>
                      removeItem(item.itemId)
                    }
                  >
                    Remove
                  </button>
                </div>
              </li>
            ))}
          </ul>

          <div className="cart-summary">
            <h3>
              Total: ₹{total.toLocaleString()}
            </h3>

            <button
              className="checkout-btn"
              onClick={handlePayment}
              disabled={paymentLoading}
            >
              {paymentLoading
                ? "Processing..."
                : "Proceed to Checkout"}
            </button>
          </div>
        </>
      )}
    </div>
  );
}