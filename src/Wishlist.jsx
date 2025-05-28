import React, { useEffect, useState } from "react";
import './Wishlist.css';
import { Header } from "./Header";
import { Footer } from "./footer";

export const Wishlist = () => {
  const [cartItems, setCartItems] = useState([]);
  const [userEmail, setUserEmail] = useState(null);

  useEffect(() => {
    const storedUser = JSON.parse(localStorage.getItem("user"));
    if (storedUser) {
      setUserEmail(storedUser);
      const savedCart = JSON.parse(localStorage.getItem(`cart-${storedUser}`)) || [];
      setCartItems(savedCart);
    }
  }, []);

  const handleRemove = (index) => {
    const updatedCart = [...cartItems];
    updatedCart.splice(index, 1);
    setCartItems(updatedCart);
    localStorage.setItem(`cart-${userEmail}`, JSON.stringify(updatedCart));
  };

  if (!userEmail) return <p>Please log in to view your wishlist.</p>;

  return (
    <div>
      <Header/>
    
    <div className="wishlist-container">
      <h2>My-Wishlist</h2>
      {cartItems.length === 0 ? (
        <p>No items in wishlist.</p>
      ) : (
        cartItems.map((item, index) => (
          <div key={index} className="wishlist-item">
            <img src={item.image} alt={item.title} className="wishlist-image" />
            <div>
              <h4>{item.title}</h4>
              <p>{item.description}</p>
              <p>Price: ₹{item.price}</p>
              <p>Quantity: {item.quantity}</p>
              <button className="remove-btn" onClick={() => handleRemove(index)}>Remove</button>
            </div>
          </div>
        ))
      )}
    </div>
    </div>
  );
};

