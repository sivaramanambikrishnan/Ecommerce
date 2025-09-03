import React, { useState } from "react";
import axios from "axios";
import { useNavigate, Link } from "react-router-dom";
import './login.css';
import { GoogleOAuthProvider, GoogleLogin } from '@react-oauth/google';


export const Login = () => {
  const [handledata, setHandledata] = useState({
    email: "",
    password: "",
  });
  const [message, setMessage] = useState("");
  const navigate = useNavigate();

  const handlechange = (e) => {
    setHandledata({ ...handledata, [e.target.name]: e.target.value });
  };

  const apisubmit = async (e) => {
    e.preventDefault();

    if (!handledata.email.endsWith("@gmail.com")) {
      setMessage("Only @gmail.com emails are allowed");
      return;
    }

    try {
      const response = await axios.post("http://localhost:8080/api/login", handledata);

        const token = response.data.token; 
         const email = handledata.email;


  localStorage.setItem("token", token);
  localStorage.setItem("user", JSON.stringify(email));

      setMessage("Login successful!");
      setTimeout(() => {
        navigate("/dashboard");
      }, 1500);
    } catch (err) {
      setMessage(err.response?.data || "Login failed");
    }
  };

  return (
    <div className="Login-page">
    <div className="Login-container">
      <div className="Login-body">
        <form method="POST" onSubmit={apisubmit}>
          <h2>Login</h2>
          <label>Email</label>
          <input
            type="text"
            name="email"
            id="email"
            placeholder="Email"
            onChange={handlechange}
            required
          />
          <label>Password</label>
          <input
            type="password"
            name="password"
            id="password"
            placeholder="Password"
            onChange={handlechange}
            required
            autocomplete="current-password"
          />
          <button type="submit">Login</button>
          <p className="signin-link">
            Don't have an account? <Link to="/">Sign-up</Link>
          </p>
          {message && <p>{message}</p>}
        </form>
       <GoogleOAuthProvider clientId="226790088769-93ca7em392q5s90jnr7skdvits98gjjd.apps.googleusercontent.com">
  <GoogleLogin
    onSuccess={credentialResponse => {
      const idToken = credentialResponse.credential;
   axios.post('http://localhost:8080/oauth2/authorization/google', { token: idToken })
  .then(res => {
    const email = res.data.email; 
    localStorage.setItem("user", JSON.stringify(email)); 
    console.log("User saved:", email);
  })
  .catch(err => console.error("Backend error:", err));

      setMessage("Login successful!");
      setTimeout(() => {
        navigate("/dashboard");
      }, 1500);
    }}
    onError={() => {
      console.log('Login Failed');
    }}
  />
</GoogleOAuthProvider>

      </div>
    </div></div>
  );
};
