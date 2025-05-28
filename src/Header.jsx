import React, { useState, useEffect } from "react";
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min.js';
import { Link, Navigate } from 'react-router-dom';
import './Header.css';

export const Header = () => {
  const [redirect, setRedirect] = useState(false);
  const [email, setEmail] = useState(null);

  useEffect(() => {
    const token = localStorage.getItem("token");
    const userEmail = localStorage.getItem("user");

    if (token || userEmail) {
      setEmail(JSON.parse(userEmail));
    } else {
      setRedirect(true);
    }

    const offCanvasEl = document.getElementById('mobileMenu');
    if (offCanvasEl) {
      offCanvasEl.addEventListener('hidden.bs.offcanvas', () => {
        document.body.classList.remove('offcanvas-open');
      });
      offCanvasEl.addEventListener('shown.bs.offcanvas', () => {
        document.body.classList.add('offcanvas-open');
      });
    }
  }, []);

  const handleLogout = async () => {
    const token = localStorage.getItem("token");

    try {
      await fetch("http://localhost:8080/custom-logout", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${token}`,
        },
        body: JSON.stringify({ email }),
      });
    } catch (err) {
      console.error("Logout failed:", err);
    }

    localStorage.removeItem("token");
    localStorage.removeItem("user");
    setRedirect(true);
  };

  if (redirect) {
    return <Navigate to="/" replace />;
  }

  return (
    <div className="dashboard-container container-fixed">
      <nav className="navbar navbar-expand-lg bg-dark navbar-dark">
        <div className="container-fluid">
          <a className="navbar-brand" href="#">MyStore</a>
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="offcanvas"
            data-bs-target="#mobileMenu"
            aria-controls="mobileMenu"
          >
            <span className="navbar-toggler-icon"></span>
          </button>

          <div className="collapse navbar-collapse d-none d-lg-block">
            <ul className="navbar-nav ms-auto mb-2 mb-lg-0">
              <li className="nav-item"><Link className="nav-link" to="/dashboard">Home</Link></li>
              <li className="nav-item"><Link className="nav-link" to="/SpecialDeals">Special Deals</Link></li>
              <li className="nav-item"><Link className="nav-link" to="/wishlist">Wishlist-Cart</Link></li>
              <li className="nav-item"><Link className="nav-link" to="/orderPage">Orders</Link></li>
              <li className="nav-item"><Link className="nav-link me-4" to="/Contact">Contact</Link></li>
            </ul>
            <button className="logout-but ms-5" onClick={handleLogout}>Log-out</button>
          </div>
        </div>
      </nav>

      <div
        className="offcanvas offcanvas-start custom-offcanvas"
        tabIndex="-1"
        id="mobileMenu"
        aria-labelledby="mobileMenuLabel"
      >
        <div className="offcanvas-header">
          <h5 className="offcanvas-title" id="mobileMenuLabel">Menu</h5>
          <button type="button" className="btn-close" data-bs-dismiss="offcanvas" aria-label="Close"></button>
        </div>
        <div className="offcanvas-body">
          <ul className="navbar-nav">
            <li className="nav-item"><Link className="nav-link" to="/dashboard">Home</Link></li>
            <li className="nav-item"><Link className="nav-link" to="/SpecialDeals">Special Deals</Link></li>
            <li className="nav-item"><Link className="nav-link" to="/Wishlist">Wishlist-Cart</Link></li>
            <li className="nav-item"><Link className="nav-link" to="/OrderPage">Orders</Link></li>
            <li className="nav-item"><Link className="nav-link" to="/Contact">Contact</Link></li>
          </ul>
          <button className="logout-but ms-0 mt-3" onClick={handleLogout}>Log-out</button>
        </div>
      </div>
    </div>
  );
};
