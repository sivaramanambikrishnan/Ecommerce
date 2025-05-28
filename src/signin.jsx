import React from "react";
import { useState } from "react";
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
import './signin.css';
import { Link } from "react-router-dom";

export const Signin=()=>{
    const [formData, setFormData] = useState({
    username: "",
    email: "",
    password: "",
  });

  const [message, setMessage] = useState("");
    const navigate=useNavigate();
  const handleChange = (e) => {
    setFormData({...formData, [e.target.name]: e.target.value});
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
       if (!formData.email.endsWith("@gmail.com")) {
    setMessage("the email should end with @gmail.com ");
    return;
  }
      const res= await axios.post("http://localhost:8080/users/signup", formData);
      console.log(res);
      setMessage("Signup successful!");
      setTimeout(() => {
                    navigate('/Login'); 
                }, 1500);
    } catch (err) {
      setMessage(err.response?.data || "Signup failed.");
    }
  };
    return(
        <div className="signin-page">
            <div className="signin-form">
            <form onSubmit={handleSubmit}>
      <h2>Signup</h2>
      <input type="text" name="username" id="username" placeholder="Username"  onChange={handleChange} required />
      <input type="email" name="email" id="email" placeholder="Email" onChange={handleChange}   required />
      <input type="password" name="password" id="password" placeholder="Password" onChange={handleChange} required />
      <button type="submit">Sign Up</button>
      <p className="signin-link">
  Already have an account? <Link to="/Login">Sign in</Link>
</p>
      {message && <p>{message}</p>}
    </form>

            </div>
        </div>
    );
}