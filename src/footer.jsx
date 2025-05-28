// Footer.js
import React from "react";
import "./Footer.css";

export const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-container">

        <div className="footer-section brand">
          <h2>Mystore</h2>
          <p>Your favorite online store for everything!</p>
        </div>

        <div className="footer-columns">
          <div className="footer-section links">
            <h3>Quick Links</h3>
            <ul>
              <li><a href="/">Home</a></li>
              <li><a href="/shop">Shop</a></li>
              <li><a href="/about">About</a></li>
              <li><a href="/contact">Contact</a></li>
            </ul>
          </div>

          <div className="footer-section help">
            <h3>Help</h3>
            <ul>
              <li><a href="/faq">FAQs</a></li>
              <li><a href="/returns">Returns</a></li>
              <li><a href="/privacy">Privacy Policy</a></li>
              <li><a href="/terms">Terms & Conditions</a></li>
            </ul>
          </div>
        </div>

        <div className="footer-section newsletter">
          <h3>Subscribe</h3>
          <p>Get exclusive deals and updates in your inbox.</p>
          <input type="email" placeholder="Your Email" />
          <button>Subscribe</button>
        </div>

      </div>

      <div className="footer-bottom">
        <p>© {new Date().getFullYear()} Mystore. All rights reserved.</p>
        <div className="social-icons">
          <a href="#"><i className="fab fa-facebook-f"></i></a>
          <a href="#"><i className="fab fa-twitter"></i></a>
          <a href="#"><i className="fab fa-instagram"></i></a>
          <a href="#"><i className="fab fa-youtube"></i></a>
        </div>
      </div>
    </footer>
  );
};
