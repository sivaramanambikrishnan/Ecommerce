import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min.js';
import { Carousel } from "./carousel";
import { Link } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Header } from "./Header";



export const Dashboard = () => {
  
  return (
    <div>
     <Header/>
     <Carousel/>

    </div>
  );
};
