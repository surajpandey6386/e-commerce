import React, { useEffect, useState } from "react";

export default function Orders() {
  const [orders, setOrders] = useState([]);
  const [loading, setLoading] = useState(true);

  const userId = localStorage.getItem("userId");

  useEffect(() => {
    fetchOrders();
  }, []);

  const fetchOrders = async () => {
    try {
      const res = await fetch(
        `${import.meta.env.VITE_API_URL}/orders/${userId}`
      );

      const data = await res.json();

      if (data.success) {
        setOrders(data.orders);
      }
    } catch (error) {
      console.error("Error fetching orders:", error);
    } finally {
      setLoading(false);
    }
  };

  if (loading) {
    return <h2>Loading orders...</h2>;
  }

  return (
    <div style={{ padding: "30px" }}>
      <h2>My Orders</h2>

      {orders.length === 0 ? (
        <p>You have no orders yet.</p>
      ) : (
        orders.map((order) => (
          <div
            key={order._id}
            style={{
              border: "1px solid #ddd",
              padding: "20px",
              marginBottom: "20px",
              borderRadius: "10px",
            }}
          >
            <h3>
              Order ID: {order._id}
            </h3>

            <p>
              <strong>Date:</strong>{" "}
              {new Date(order.createdAt).toLocaleString()}
            </p>

            <p>
              <strong>Payment:</strong>{" "}
              {order.paymentStatus}
            </p>

            <p>
              <strong>Total:</strong> ₹{order.amount}
            </p>

            <p>
              <strong>Razorpay Payment ID:</strong>{" "}
              {order.razorpayPaymentId}
            </p>

            <h4>Items</h4>

            {order.items.map((item) => (
              <div
                key={item.itemId}
                style={{
                  display: "flex",
                  gap: "15px",
                  marginBottom: "10px",
                }}
              >
                <img
                  src={item.image}
                  alt={item.name}
                  width="70"
                  height="70"
                  style={{
                    objectFit: "cover",
                  }}
                />

                <div>
                  <p>{item.name}</p>
                  <p>
                    ₹{item.price} × {item.quantity}
                  </p>
                </div>
              </div>
            ))}
          </div>
        ))
      )}
    </div>
  );
}