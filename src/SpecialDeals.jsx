import React, { useEffect, useState } from 'react';
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import { Navigation, Pagination, Autoplay } from "swiper/modules";
import './SpecialDeals.css';
import { useNavigate } from 'react-router-dom';
import { Header } from './Header';
import { Footer } from './footer';

export const SpecialDeals=()=>{
const imageArray = [
  'https://img.freepik.com/free-psd/online-shopping-square-flyer-style_23-2148537551.jpg?uid=R110427777&ga=GA1.1.1168644310.1737257403&semt=ais_hybrid&w=740',
  'https://img.freepik.com/premium-photo/collage-with-arabic-couple-buyers-embracing-near-big-large-phone_116547-95997.jpg?uid=R110427777&ga=GA1.1.1168644310.1737257403&semt=ais_hybrid&w=740',
  'https://img.freepik.com/free-psd/black-friday-super-sale-social-media-banner-template_106176-1471.jpg?uid=R110427777&ga=GA1.1.1168644310.1737257403&semt=ais_items_boosted&w=740',
  'https://img.freepik.com/premium-psd/psd-sales-discount-social-media-story-banner-template_735731-682.jpg?uid=R110427777&ga=GA1.1.1168644310.1737257403&semt=ais_hybrid&w=740',
  'https://img.freepik.com/premium-psd/black-friday-creative-concept-3d-neon-light-discount-podium-product-display-social-media-instagram-post-template_70055-1915.jpg?uid=R110427777&ga=GA1.1.1168644310.1737257403&semt=ais_hybrid&w=740',
  'https://img.freepik.com/free-photo/discount-jacket-podium_23-2150165434.jpg?uid=R110427777&ga=GA1.1.1168644310.1737257403&semt=ais_hybrid&w=740',
  'https://img.freepik.com/free-vector/happy-dhanteras-sale-background_1017-21164.jpg?uid=R110427777&ga=GA1.1.1168644310.1737257403&semt=ais_hybrid&w=740',
  'https://img.freepik.com/free-photo/discount-purse-podium_23-2150165496.jpg?uid=R110427777&ga=GA1.1.1168644310.1737257403&semt=ais_hybrid&w=740',
];
const Discount = [
  'https://img.freepik.com/free-psd/black-friday-super-sale-social-media-banner-instagram-post-template_120329-5150.jpg?uid=R110427777&ga=GA1.1.1168644310.1737257403&semt=ais_items_boosted&w=740',
  'https://img.freepik.com/premium-photo/collage-with-arabic-couple-buyers-embracing-near-big-large-phone_116547-95997.jpg?uid=R110427777&ga=GA1.1.1168644310.1737257403&semt=ais_hybrid&w=740',
  'https://img.freepik.com/free-photo/discount-purse-podium_23-2150165455.jpg?uid=R110427777&ga=GA1.1.1168644310.1737257403&semt=ais_items_boosted&w=740',
  'https://img.freepik.com/premium-psd/black-friday-super-sale-social-media-banner-instagram-post-template_120329-5135.jpg?uid=R110427777&ga=GA1.1.1168644310.1737257403&semt=ais_items_boosted&w=740',
  'https://img.freepik.com/free-psd/summer-special-fashion-sale-instagram-post-template_120329-1504.jpg?uid=R110427777&ga=GA1.1.1168644310.1737257403&semt=ais_items_boosted&w=740',
  'https://img.freepik.com/premium-psd/special-sale-social-media-promotion-banner-template_65983-2350.jpg?uid=R110427777&ga=GA1.1.1168644310.1737257403&semt=ais_items_boosted&w=740',
  'https://img.freepik.com/free-psd/black-friday-super-sale-social-media-banner-instagram-post-template_106176-4509.jpg?uid=R110427777&ga=GA1.1.1168644310.1737257403&semt=ais_items_boosted&w=740',
  'https://img.freepik.com/premium-vector/new-product-social-media-promotion-banner-template_515050-65.jpg?uid=R110427777&ga=GA1.1.1168644310.1737257403&semt=ais_items_boosted&w=740',
];
   const [images, setImages] = useState([]);
   const [image,setImage]=useState([]);
const videoList = [
  "https://cdn.pixabay.com/video/2020/11/23/57119-483011616_tiny.mp4",
  "https://videos.pexels.com/video-files/5644236/5644236-sd_960_506_25fps.mp4",
  "https://videos.pexels.com/video-files/8626759/8626759-sd_640_360_25fps.mp4",
  "https://videos.pexels.com/video-files/7567992/7567992-sd_640_360_25fps.mp4",
  
];
  useEffect(() => {
    const shuffleImages = () => {
      const shuffled = [...imageArray].sort(() => 0.5 - Math.random()).slice(0, 4);
      setImages(shuffled);
    };

    shuffleImages(); 
    const interval = setInterval(shuffleImages, 5000); 

    return () => clearInterval(interval);
  }, []);
   useEffect(() => {
    const shuffledImages = () => {
      const shuffleds = [...Discount].sort(() => 0.5 - Math.random()).slice(0, 4);
      setImage(shuffleds);
    };

    shuffledImages(); 
    const interval = setInterval(shuffledImages, 5000); 

    return () => clearInterval(interval);
  }, []);
const [data,setData]=useState(null);
const MoreElectronics = [
  {
    id: "35",
    discount: "38%",
    price: "650",
    title: "Mini Projector",
    category: "Home Entertainment",
    image: "https://img.freepik.com/premium-photo/projector-presentation_90839-85.jpg?uid=R110427777&ga=GA1.1.1168644310.1737257403&semt=ais_hybrid&w=740",
    description: "Portable projector for home movie nights.",
  },
  {
    id: "36",
    discount: "22%",
    price: "1350",
    title: "Digital Alarm Clock",
    category: "Accessories",
    image: "https://img.freepik.com/free-photo/modern-digital-clock-blue-light_53876-96822.jpg",
    description: "LED display with temperature and calendar.",
  },
  {
    id: "37",
    discount: "48%",
    price: "580",
    title: "Wireless Charger Pad",
    category: "Mobile Accessories",
    image: "https://img.freepik.com/free-photo/flatlay-smartphone-accessories_53876-33530.jpg?uid=R110427777&ga=GA1.1.1168644310.1737257403&semt=ais_hybrid&w=740",
    description: "Fast charging pad for Qi-enabled devices.",
  },
  {
    id: "38",
    discount: "30%",
    price: "450",
    title: "Laptop Cooling Pad",
    category: "Computers",
    image: "https://img.freepik.com/free-photo/black-power-bank-digital-device_53876-96820.jpg?uid=R110427777&ga=GA1.1.1168644310.1737257403&semt=ais_hybrid&w=740",
    description: "Reduces overheating during extended use.",
  },
  {
    id: "39",
    discount: "55%",
    price: "1099",
    title: "Smart Bulb",
    category: "Smart Home",
    image: "https://img.freepik.com/free-vector/smart-led-lightbulb_1284-14399.jpg?uid=R110427777&ga=GA1.1.1168644310.1737257403&semt=ais_hybrid&w=740",
    description: "Color-changing WiFi-enabled smart bulb.",
  },
  {
    id: "40",
    discount: "18%",
    price: "780",
    title: "Webcam HD",
    category: "Computers",
    image: "https://img.freepik.com/free-photo/rendering-smart-home-device_23-2151039342.jpg?uid=R110427777&ga=GA1.1.1168644310.1737257403&semt=ais_hybrid&w=740",
    description: "HD webcam with built-in mic for video calls.",
  },
  {
    id: "41",
    discount: "42%",
    price: "349",
    title: "Stylus Pen",
    category: "Accessories",
    image: "https://img.freepik.com/free-photo/close-up-red-pen_23-2150835548.jpg?uid=R110427777&ga=GA1.1.1168644310.1737257403&semt=ais_hybrid&w=740",
    description: "Universal stylus compatible with all screens.",
  },
  {
    id: "42",
    discount: "50%",
    price: "1599",
    title: "VR Headset",
    category: "Gaming",
    image: "https://img.freepik.com/premium-photo/standalone-virtual-reality-headset-controllers-laying-bed-home-vr-headset_683898-105.jpg?uid=R110427777&ga=GA1.1.1168644310.1737257403&semt=ais_hybrid&w=740",
    description: "Immersive virtual reality gaming headset.",
  },
  {
    id: "43",
    discount: "33%",
    price: "299",
    title: "Bluetooth Tracker",
    category: "Smart Devices",
    image: "https://img.freepik.com/premium-photo/black-fitness-tracker-red-smartphone-white-background_132254-1639.jpg?uid=R110427777&ga=GA1.1.1168644310.1737257403&semt=ais_hybrid&w=740",
    description: "Track keys, bags or wallets via app.",
  },
  {
    id: "44",
    discount: "40%",
    price: "499",
    title: "USB LED Strip Light",
    category: "Decor",
    image: "https://img.freepik.com/premium-photo/3d-charger-cable-ad-template-3d-realistic-charging-wire-with-type-c-adapter-curved_1199132-150993.jpg?uid=R110427777&ga=GA1.1.1168644310.1737257403&semt=ais_hybrid&w=740",
    description: "Mood lighting for TV, desk, or walls.",
  }
];
const EvenMoreElectronics = [
  {
    id: "45",
    discount: "27%",
    price: "620",
    title: "Wireless Keyboard",
    category: "Computers",
    image: "https://img.freepik.com/free-photo/top-view-smartphone-with-keyboard-charger_23-2149404178.jpg?uid=R110427777&ga=GA1.1.1168644310.1737257403&semt=ais_hybrid&w=740",
    description: "Sleek keyboard with quiet keys and Bluetooth support.",
  },
  {
    id: "46",
    discount: "33%",
    price: "1299",
    title: "Smart Thermostat",
    category: "Smart Home",
    image: "https://img.freepik.com/premium-photo/person-is-currently-holding-smart-phone-right-front-thermostat_561602-1427.jpg?uid=R110427777&ga=GA1.1.1168644310.1737257403&semt=ais_hybrid&w=740",
    description: "Energy-saving thermostat with mobile app control.",
  },
  {
    id: "47",
    discount: "36%",
    price: "880",
    title: "Noise Cancelling Earphones",
    category: "Audio",
    image: "https://img.freepik.com/free-photo/still-life-wireless-cyberpunk-headphones_23-2151072230.jpg?uid=R110427777&ga=GA1.1.1168644310.1737257403&semt=ais_hybrid&w=740",
    description: "In-ear noise cancelling earphones for immersive sound.",
  },
  {
    id: "48",
    discount: "29%",
    price: "1450",
    title: "Tablet Stand",
    category: "Accessories",
    image: "https://img.freepik.com/premium-photo/tablet-wooden-table-modern-office-tablet-is-black-has-blank-screen_14117-110169.jpg?uid=R110427777&ga=GA1.1.1168644310.1737257403&semt=ais_hybrid&w=740",
    description: "Adjustable metal stand compatible with all tablets.",
  },
  {
    id: "49",
    discount: "60%",
    price: "349",
    title: "LED Desk Lamp",
    category: "Home Office",
    image: "https://img.freepik.com/free-photo/cute-workplace-with-laptop-phone-notebook_23-2147833272.jpg?uid=R110427777&ga=GA1.1.1168644310.1737257403&semt=ais_hybrid&w=740",
    description: "Dimmable lamp with USB port and touch control.",
  },
  {
    id: "50",
    discount: "35%",
    price: "2200",
    title: "Portable Power Bank",
    category: "Accessories",
    image: "https://img.freepik.com/premium-photo/powerbank-charges-smartphone-isolated-black-background_93200-5722.jpg?uid=R110427777&ga=GA1.1.1168644310.1737257403&semt=ais_hybrid&w=740",
    description: "10000mAh fast charging power bank.",
  }
];

const navigate=useNavigate();
const call=(product)=>{
   setData(product);
   if (data) { 
          navigate("/ProductsShow", { state: data });
        }
}

  return (
    <div>
    <Header/>
    <div className="video-carousel">
      <Swiper
        navigation
        pagination={{ clickable: true }}
        autoplay={{ delay: 8000 }}
        loop
        modules={[Navigation, Pagination, Autoplay]}
      >
        {videoList.map((src, index) => (
          <SwiperSlide key={index}>
            <div className="video-wrapper">
              <video
                className="carousel-video"
                autoPlay
                muted
                loop
                playsInline
              >
                <source src={src} type="video/mp4" />
                Your browser does not support the video tag.
              </video>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
    <div className="row">
    <h1 className="ms-2 ms-lg-4">Discount Deals</h1>
    <div className="neon-container col-lg-5  ms-4 ms-lg-5 col-5">
      {images.map((src, idx) => (
        <div key={idx} className="neon-box">
          <img src={src} alt={`Neon ${idx}`} className="neon-image" />
        </div>
      ))}
    </div>
     <div className="neon-container  col-lg-5  ms-lg-5  ms-3 col-5">
      {image.map((src, idx) => (
        <div key={idx} className="neon-box">
          <img src={src} alt={`Neon ${idx}`} className="neon-image" />
        </div>
      ))}
    </div>
    </div>

     <div className="card-swipe-container">
     <h1 className="ms-2 ms-lg-4">Brand sales</h1>
      <Swiper
  spaceBetween={15}
  slidesPerView={2}
  grabCursor={true}
  breakpoints={{
    480: { slidesPerView: 2 },
    640: { slidesPerView: 2.5 },
    768: { slidesPerView: 3 },
    1024: { slidesPerView: 4 },
  }}
>
        {MoreElectronics.map((product) => (
          <SwiperSlide key={product.id} >
            <div className="product-card" onClick={()=>call(product)}>
              <img src={product.image} alt={product.title} />
              <h4>{product.title}</h4>
               <p className="card-d">{product.description}</p>
            <p className="card-category">{product.category}</p>
              <p className="price mb-5"><span>price:</span> $ {product.price}</p>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </div>

     <div className="card-swipe-container">
     <h1 className="ms-2 ms-lg-4">Top sales</h1>
      <Swiper
  spaceBetween={15}
  slidesPerView={2}
  grabCursor={true}
  breakpoints={{
    480: { slidesPerView: 2 },
    640: { slidesPerView: 2.5 },
    768: { slidesPerView: 3 },
    1024: { slidesPerView: 4 },
  }}
>
        {EvenMoreElectronics.map((product) => (
          <SwiperSlide key={product.id} >
            <div className="product-card" onClick={()=>call(product)}>
              <img src={product.image} alt={product.title} />
              <h4>{product.title}</h4>
               <p className="card-d">{product.description}</p>
            <p className="card-category">{product.category}</p>
              <p className="price mb-5"><span>price:</span> $ {product.price}</p>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </div>

    <Footer/>
    </div>
  );
};

