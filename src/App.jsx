import React from "react";
import { Signin } from "./signin";
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { Dashboard } from "./dashboard";
import { Login } from "./Login";
import ProtectedRoute from "./ProtectedRoute";
import { ProductsShow } from "./ProductsShow";
import { Wishlist } from "./Wishlist";
import { OrderPage } from "./OrderPage";
import { Contact } from "./Contact";
import { SpecialDeals } from "./SpecialDeals";
import { HashRouter as Router } from "react-router-dom";


function App(){
  return(
    <div>
     
      
      <Routes>
      <Route path="/" element={<Signin />} />
      <Route path="/Login" element={<Login/>}/>
        <Route
  path="/dashboard"
  element={
    <ProtectedRoute>
      <Dashboard />
    </ProtectedRoute>
  }
/>

<Route path="/ProductsShow" element={<ProductsShow />} />
<Route path="/Wishlist" element={<Wishlist />} />
<Route path="/Orderpage" element={<OrderPage />} />
<Route path="/Contact" element={<Contact />} />
<Route path="/SpecialDeals" element={<SpecialDeals />} />
      </Routes>
  
    </div>
  );
}
export default App;