import React, { useEffect, useState } from "react";
import "./OrderPage.css"; // you can style as needed
import { FaCheckCircle, FaTimesCircle } from "react-icons/fa";
import { Header } from "./Header";

export const OrderPage = () => {
  const userId = JSON.parse(localStorage.getItem("user")); // assumes email
  const [orders, setOrders] = useState([]);

  useEffect(() => {
    const userOrders = JSON.parse(localStorage.getItem(`orders-${userId}`)) || [];
    setOrders(userOrders);
  }, [userId]);

  const handleCancelOrder = (indexToRemove) => {
    const updatedOrders = orders.filter((_, index) => index !== indexToRemove);
    setOrders(updatedOrders);
    localStorage.setItem(`orders-${userId}`, JSON.stringify(updatedOrders));
  };

  const isDelivered = (orderDate) => {
    const twoDaysLater = new Date(orderDate);
    twoDaysLater.setDate(twoDaysLater.getDate() + 2);
    return new Date() >= twoDaysLater;
  };

  return (
    <div>
    <Header/>
    <div className="order-page">
      <h2>My Orders</h2>
      {orders.length === 0 ? (
        <p>No orders found.</p>
      ) : (
        orders.map((order, index) => (
          <div className="order-card" key={index}>
            <img src={order.image} alt={order.title} />
            <div className="order-info">
              <h4>{order.title}</h4>
              <p>Quantity: {order.quantity}</p>
              <p>Price per item: ₹{order.price}</p>
              <p>Total: ₹{order.quantity * order.price}</p>
              <p>
                Ordered on:{" "}
                {order.date ? new Date(order.date).toLocaleString() : "N/A"}
              </p>
              <div className="status-section">
                {isDelivered(order.date) ? (
                  <span className="delivered">
                    <FaCheckCircle color="green" /> Delivered
                  </span>
                ) : (
                  <span className="pending">
                    <FaTimesCircle color="orange" /> In Progress
                  </span>
                )}
              </div>
              <button className="cancel-btn" onClick={() => handleCancelOrder(index)}>
                Cancel Order
              </button>
            </div>
          </div>
        ))
      )}
      </div>
    </div>
  );
};


