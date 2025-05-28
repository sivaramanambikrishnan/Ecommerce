import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay } from "swiper/modules";
import "swiper/css";
import "./Carousel.css";
import { HomeContent } from "./HomeContent";
import { Footer } from "./footer";

const images = [
   "https://img.freepik.com/premium-vector/black-friday-sale-banner_537146-65.jpg?uid=R110427777&ga=GA1.1.1168644310.1737257403&semt=ais_hybrid&w=740",
  "https://img.freepik.com/free-vector/happy-diwali-purple-shiny-sale-banner_1017-21635.jpg?uid=R110427777&ga=GA1.1.1168644310.1737257403&semt=ais_hybrid&w=740",
  "https://img.freepik.com/free-vector/horizontal-banner-template-black-friday-sales_23-2150867247.jpg?uid=R110427777&ga=GA1.1.1168644310.1737257403&semt=ais_hybrid&w=740",
  "https://img.freepik.com/free-psd/black-friday-big-sale-social-media-post-design-template_47987-25239.jpg?uid=R110427777&ga=GA1.1.1168644310.1737257403&semt=ais_hybrid&w=740",
  "https://img.freepik.com/free-psd/black-friday-sale-social-media-cover-design-template_47987-25244.jpg?uid=R110427777&ga=GA1.1.1168644310.1737257403&semt=ais_hybrid&w=740",
  "https://img.freepik.com/premium-psd/fashion-sale-facebook-cover-post-template_502601-446.jpg?uid=R110427777&ga=GA1.1.1168644310.1737257403&semt=ais_hybrid&w=740",
 
];

export const Carousel= () => {

  return (
    <div className="carousel-content">
    <div className="banner-carousel-container mt-1">
      <Swiper
        modules={[Autoplay]}
        slidesPerView={1}
        loop={true}
        autoplay={{ delay: 3000, disableOnInteraction: false }}
        className="banner-swiper"
      >
        {images.map((src, index) => (
          <SwiperSlide key={index}>
            <img src={src} alt={`Banner ${index + 1}`} className="banner-image"  />
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
<HomeContent />
<Footer/>
    </div>
  );
};

