import React, { useState, useEffect } from "react";
import axios from "axios";
import { useLocation } from "react-router-dom";
import { Footer } from "./footer";
import { FaCheckCircle } from 'react-icons/fa';
import { useMemo } from "react";

import "./ProductsShow.css";
import { Header } from "./Header";
import { useNavigate } from "react-router-dom";

export const ProductsShow = () => {
  const location = useLocation();
  const data = location.state;
 const navigate = useNavigate();
 const [quantity, setQuantity] = useState(1);
  const [showSuccess, setShowSuccess] = useState(false);
  const [showCart, setShowCart] = useState(false);
  const [userEmail, setUserEmail] = useState(null);

 const [orderQuantity, setOrderQuantity] = useState(1);
  const [orderSuccess, setOrderSuccess] = useState(false);
  const [showOrderPopup, setShowOrderPopup] = useState(false);
  const [currentUserEmail, setCurrentUserEmail] = useState("");

  const [comment, setComment] = useState("");
  const [rating, setRating] = useState(5);
  const [feedbacks, setFeedbacks] = useState([]);

  const useremail = localStorage.getItem("user");

  const productId = data?.id; 
 const feedback= [
    { email: "jeeva@gmail.com", rating: 5, comment: "Good one",image:"https://img.freepik.com/premium-photo/user-icon_1029473-584580.jpg?uid=R110427777&ga=GA1.1.1168644310.1737257403&semt=ais_hybrid&w=740" },
    { email: "anitha@gmail.com", rating: 4, comment: "Nice product, fast delivery",image:"https://img.freepik.com/premium-photo/womens-with-laptop_1197721-59256.jpg?uid=R110427777&ga=GA1.1.1168644310.1737257403&semt=ais_hybrid&w=740" },
    { email: "raj@outlook.com", rating: 3, comment: "Average, can be improved",image:"https://img.freepik.com/premium-psd/smiling-3d-cartoon-man_975163-772.jpg?uid=R110427777&ga=GA1.1.1168644310.1737257403&semt=ais_hybrid&w=740" },
    { email: "Rakesh@gmail.com", rating: 5, comment: "Absolutely loved it!",image:"https://img.freepik.com/free-photo/front-view-man-posing-outdoors_23-2151038654.jpg?uid=R110427777&ga=GA1.1.1168644310.1737257403&semt=ais_hybrid&w=740" },
  ];

  // Randomize using useMemo so it only happens on initial render
  const shuffledFeedbacks = useMemo(() => {
    return [...feedback].sort(() => Math.random() - 0.5);
  }, []);

  const handleSubmit = async () => {
    try {
      await axios.post("http://localhost:8080/feedback", {
        email: useremail,
        comment,
        rating,
        productId, 
      });
      setComment("");
      alert("Feedback submitted!");
      fetchFeedbacks(); 
    } catch (error) {
      console.error("Error submitting feedback:", error);
    }
  };
  

  const fetchFeedbacks = async () => {
    try {
      const res = await axios.get(`http://localhost:8080/feedback/${productId}`);
      if (Array.isArray(res.data)) {
        setFeedbacks(res.data);
      } else {
        console.error("Expected array, got:", res.data);
        setFeedbacks([]);
      }
    } catch (err) {
      console.error("Failed to load feedbacks:", err);
      setFeedbacks([]);
    }
  };

  useEffect(() => {
    if (productId) {
      fetchFeedbacks();
    }
  }, [productId]);
 useEffect(() => {
    const storedUser = JSON.parse(localStorage.getItem("user"));
    if (storedUser) setUserEmail(storedUser);
  }, []);

  const total = data.price * quantity;

  const handleAddToCart = () => {
    const cartItem = { ...data, quantity };

    const existingCart = JSON.parse(localStorage.getItem(`cart-${userEmail}`)) || [];

    const updatedCart = [...existingCart, cartItem];
    localStorage.setItem(`cart-${userEmail}`, JSON.stringify(updatedCart));

    setShowSuccess(true);
    setTimeout(() => {
      setShowSuccess(false);
      setShowCart(false);
      setQuantity(1);
    }, 2000);
  };

    useEffect(() => {
    const user = JSON.parse(localStorage.getItem("user"));
    if (user) setCurrentUserEmail(user);
  }, []);
  if (!data) return <p>No product data found.</p>;

   const totalamt = data.price * orderQuantity;

  const handleOrderNow = () => {
    const order = {
      ...data,
      quantity: orderQuantity,
      totalamt,
      date: new Date().toISOString(),
      delivered: false,
    };
    const existingOrders = JSON.parse(localStorage.getItem(`orders-${currentUserEmail}`)) || [];
    existingOrders.push(order);
    localStorage.setItem(`orders-${currentUserEmail}`, JSON.stringify(existingOrders));

    setOrderSuccess(true);
    setTimeout(() => {
      setOrderSuccess(false);
      setShowOrderPopup(false);
      setOrderQuantity(1);
    }, 2000);
  };

  return (
    <div className="container-fixed">
      <Header />
      <div className="co">
      <h1 className="head  ps-3 pt-2">{data?.title}</h1></div>
      <div className="row">
        <img src={data?.image} className="col-lg-5 col-md-10 image p-4" alt={data?.title} />
        <div className="col-lg-7 col-md-12 ps-3">
          <h1 className="pt-4">About</h1>
          <div className="content">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed euismod, urna eu tincidunt
            consectetur, nisi nisl aliquet lorem, vitae posuere lectus eros sit amet nulla. Cras placerat,
            sem a porta dictum, risus lorem convallis ligula, at blandit lacus justo nec sapien. Praesent
            sollicitudin ex vel magna facilisis, in bibendum nulla malesuada.
          </div>
         <div>
  <p className="para">
    Price: <span className="trice">$ {data?.price}</span>
  </p>
</div>
          <div className="discount-banner">
  <span>🔥 Limited Time Offer: {data?.discount} OFF!</span>
</div>
     <center>
      <div>
      <button className="add-button" onClick={() => setShowCart(true)}>Add-to Cart</button>

      {showCart && (
        <div className="cart-overlay">
          <div className="cart-popup">
            <button className="close-btn" onClick={() => setShowCart(false)}>×</button>
            <img src={data.image} alt={data.title} className="popup-image" />
            <h3>{data.title}</h3>
            <p>{data.description}</p>
            <p><strong>Price:</strong> ₹{data.price}</p>

            <div className="quantity-control">
              <button onClick={() => setQuantity(q => Math.max(1, q - 1))}>-</button>
              <span>{quantity}</span>
              <button onClick={() => setQuantity(q => q + 1)}>+</button>
            </div>

            <p className="total">Total: ₹{total}</p>
            <button className="add-button" onClick={handleAddToCart}>Add to Cart</button>

            {showSuccess && (
              <div className="success-message">
                <FaCheckCircle size={20} color="green" /> Added Successfully!
              </div>
            )}
          </div>
        </div>
      )}

       <button className="add-button ms-2" onClick={() => setShowOrderPopup(true)}>
        Order Now
      </button>

      {showOrderPopup && (
        <div className="popup-overlay">
          <div className="popup-box">
            <button className="close-btn" onClick={() => setShowOrderPopup(false)}>×</button>
            <img src={data.image} alt={data.title} className="popup-image" />
            <h3>{data.title}</h3>
            <p>{data.description}</p>
            <p><strong>Price:</strong> ₹{data.price}</p>

            <div className="quantity-control">
              <button onClick={() => setOrderQuantity(q => Math.max(1, q - 1))}>-</button>
              <span>{orderQuantity}</span>
              <button onClick={() => setOrderQuantity(q => q + 1)}>+</button>
            </div>

            <p><strong>Total:</strong> ₹{totalamt}</p>

            <button className="add-button" onClick={handleOrderNow}>
              Confirm Order
            </button>

            {orderSuccess && (
              <div className="success-message">
                <FaCheckCircle color="green" /> Order Placed Successfully!
              </div>
            )}
          </div>
        </div>
      )}
      
    </div>
    </center>
          <div className="pt-4">
            <h3>Customer Feedback</h3>
            <div className="feedback-container">
            {shuffledFeedbacks.map((fb, index) => (
        <div key={index} className="feedback-card">
         <img src={fb.image} alt="User" className="profile-pic" />
          <p><strong>{fb.email}</strong>: {"⭐".repeat(fb.rating)}</p>
          <p>{fb.comment}</p>
        </div>
      ))}
      </div>
      <div className="feedback-container">
            {feedbacks.length > 0 ? (
              feedbacks.map((fb) => (
                <div key={fb.id} className="feedback-card mb-2">
                <img src="https://img.freepik.com/premium-vector/man-with-shirt-that-says-he-is-character_1148251-226.jpg?uid=R110427777&ga=GA1.1.1168644310.1737257403&semt=ais_hybrid&w=740" alt="User" className="profile-pic" />
                  <strong>{fb.email}</strong>: ⭐{fb.rating}
                  <p>{fb.comment}</p><br/>
                </div>
              ))
            ) : (
              <p>No feedback yet.</p>
            )}
            </div>
          </div>
        </div>
      </div>

     <div className="feedback-container">
  <h3>Leave a Feedback</h3>
  <textarea
    value={comment}
    onChange={(e) => setComment(e.target.value)}
    placeholder="Write your feedback"
  />
  <input
    type="number"
    max="5"
    min="1"
    value={rating}
    onChange={(e) => setRating(Number(e.target.value))}
  />
  <button onClick={handleSubmit}>Submit</button>
</div>

      <Footer />
    </div>
  );
};