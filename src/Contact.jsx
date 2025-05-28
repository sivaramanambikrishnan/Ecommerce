import React from "react";
import Swal from 'sweetalert2'
import "./contact.css";
 import { Footer } from "./footer";
import { Header } from "./Header";
export const Contact=()=> {
    const [result, setResult] = React.useState("");
  
    const onSubmit = async (event) => {
      event.preventDefault();
      setResult("Sending....");
      const formData = new FormData(event.target);
  
      formData.append("access_key", "8c47f09a-bd60-4ce9-bc1f-9d5f6122cdf1");
  
      const response = await fetch("https://api.web3forms.com/submit", {
        method: "POST",
        body: formData
      });
  
      const data = await response.json();
  
      if (data.success) {
        Swal.fire({
            title: "Successfully Mail Send !",
            icon: "success",
            draggable: true
          });
        event.target.reset();
      } else {
        console.log("Error", data);
        setResult(data.message);
      }
    };
  
    return (
    <div>
    <Header/>
          <div className="container mt-5 mb-5">
      <h2 className="text-center">Contact Us</h2>
      <form onSubmit={onSubmit} className="contact-form p-4 shadow rounded bg-light contact" >
        <div className="mb-3">
          <label className="form-label">Name</label>
          <input type="text" className="form-control" name="name"  required />
        </div>
        <div className="mb-3">
          <label className="form-label">Email</label>
          <input type="email" className="form-control" name="email"  required />
        </div>
        <div className="mb-3">
          <label className="form-label">Message</label>
          <textarea className="form-control" name="message" rows="4" placeholder="Enter the issue you are currently facing!" required></textarea>
        </div>
        <button type="submit" className="btn-custom btn w-100">Send</button>
  
      </form>
      
    </div>
    <Footer/>
    </div>
    );
  };