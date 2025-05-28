import React, { useState,useRef,useEffect} from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { useNavigate } from "react-router-dom";
import "./HomeContent.css";


const moreItems = [
  {
        id:"1",
    title: "IPhone-16",
    category: "Electronics",
    image: "https://img.freepik.com/free-photo/elegant-smartphone-composition_23-2149437106.jpg?uid=R110427777&ga=GA1.1.1168644310.1737257403&semt=ais_hybrid&w=740",
    description: "Latest Android smartphone with AMOLED display.",
      price:"100000",
      discount:"35%",
  },
  {
        id:"2",
    title: "Cooking Essentials",
    category: "Home",
    image: "https://img.freepik.com/premium-psd/community-kitchen-supplies-transparent-background_986960-117775.jpg?uid=R110427777&ga=GA1.1.1168644310.1737257403&semt=ais_hybrid&w=740",
    description: "Complete cooking utensil set for home kitchen.",
      price:"1350",
         discount:"35%",
  },
  {
        id:"3",
    title: "Sports Shoes",
    category: "Fashion",
    image: "https://img.freepik.com/free-photo/fashion-shoes-sneakers_1203-7529.jpg?uid=R110427777&ga=GA1.1.1168644310.1737257403&semt=ais_hybrid&w=740",
    description: "Comfortable and stylish running shoes.",
       discount:"45%",
  },
  {
        id:"4",
    title: "Bluetooth Speaker",
    category: "Electronics",
    image: "https://img.freepik.com/free-psd/urban-music-banner-3d-illustration_1419-2388.jpg?uid=R110427777&ga=GA1.1.1168644310.1737257403&semt=ais_hybrid&w=740",
    description: "High-quality sound wireless speaker.",
      price:"1150",
         discount:"55%",
  },
  {
        id:"5",
    title: "Notebook Set",
    category: "Books",
    image: "https://img.freepik.com/free-photo/flat-lay-notebook-with-headphones_23-2148415055.jpg?uid=R110427777&ga=GA1.1.1168644310.1737257403&semt=ais_hybrid&w=740",
    description: "Set of 5 ruled notebooks for daily use.",
      price:"350",
         discount:"30%",
  },
  {
        id:"6",
    title: "Women's Handbag",
    category: "Fashion",
    image: "https://img.freepik.com/free-photo/bag-hanging-from-furniture-item-indoors_23-2151073506.jpg?uid=R110427777&ga=GA1.1.1168644310.1737257403&semt=ais_hybrid&w=740",
    description: "Trendy and spacious handbag.",
    price:"450",
       discount:"25%",
  },
  {
        id:"7",
    title: "LED Table Lamp",
    category: "Home",
    image: "https://img.freepik.com/premium-photo/table-neon-lamp-table-neon-light-room_1205263-82968.jpg?uid=R110427777&ga=GA1.1.1168644310.1737257403&semt=ais_hybrid&w=740",
    description: "Adjustable LED lamp for study and work.",
      price:"670",
         discount:"65%",
  },
  {
        id:"8",
    title: "Fiction Book Set",
    category: "Books",
    image: "https://img.freepik.com/free-photo/book-cover-mockup_23-2148612936.jpg?w=740",
    description: "Collection of 3 bestselling fiction novels.",
      price:"370",
         discount:"30%",
  },
  {
        id:"9",
    title: "Smart Watch",
    category: "Electronics",
    image: "https://img.freepik.com/free-photo/rendering-smart-home-device_23-2151039316.jpg?uid=R110427777&ga=GA1.1.1168644310.1737257403&semt=ais_hybrid&w=740",
    description: "Fitness tracker with heart rate monitor.",
      price:"950",
         discount:"10%",
  },
  {
        id:"10",
        discount:"20%",
    title: "Curtain Set",
    category: "Home",
    image: "https://img.freepik.com/free-photo/luxury-curtains-living-room_1203-1673.jpg?w=740",
    description: "Elegant curtain set for living room.",
      price:"350",
        
  }
];

const items = [
  {
         id:"11",
        discount:"25%",
        price:"200",
    title: "Wireless Headphones",
    category: "Electronics",
    image: "https://img.freepik.com/premium-photo/brand-new-white-wireless-headphones-grey-background-listen-music-connect-everywhere_151013-44638.jpg?uid=R110427777&ga=GA1.1.1168644310.1737257403&semt=ais_hybrid&w=740",
    description: "Bluetooth noise-cancelling headphones.",
  },
  {
       
         id:"12",
        discount:"35%",
        price:"240",
    title: "Harry Potter Book",
    category: "Books",
    image: "https://img.freepik.com/premium-photo/magic-vintage-fantasy-book-dark-background-landscape-smoke-fog-neon-moonlight-dark-3d-illustration_129911-2774.jpg?uid=R110427777&ga=GA1.1.1168644310.1737257403&semt=ais_hybrid&w=740",
    description: "A famous fantasy novel.",
  },
  {
    
       id:"13",
      discount:"45%",
      price:"340",
    title: "Men's Jacket",
    category: "Fashion",
    image: "https://image.shutterstock.com/image-photo/two-blue-t-shirts-branding-260nw-2516076467.jpg",
    description: "Stylish winter jacket.",
  },
  {
         id:"14",
        discount:"35%",
        price:"380",
    title: "Sofa Set",
    category: "Home",
    image: "https://img.freepik.com/free-psd/view-sofa-interior-design-decor_23-2151772831.jpg?uid=R110427777&ga=GA1.1.1168644310.1737257403&semt=ais_hybrid&w=740",
    description: "Comfortable 3-seater sofa.",
  },
];
const toppicks = [
  {
    
         id:"15",
        discount:"45%",
        price:"500",
    title: "Smart Watch",
    category: "Electronics",
    image: "https://img.freepik.com/free-photo/rendering-smart-home-device_23-2151039302.jpg?uid=R110427777&ga=GA1.1.1168644310.1737257403&semt=ais_hybrid&w=740",
    description: "Fitness tracker with heart rate monitor.",
  },
  {
    
         id:"16",
        discount:"30%",
        price:"700",
    title: "Cookware Set",
    category: "Home",
    image: "https://img.freepik.com/free-vector/realistic-kitchen-utensil-collection_1284-37475.jpg?uid=R110427777&ga=GA1.1.1168644310.1737257403&semt=ais_hybrid&w=740",
    description: "Non-stick pots and pans set.",
  },
  {
    
         id:"17",
        discount:"32%",
        price:"180",
    title: "Romantic Novel",
    category: "Books",
    image: "https://img.freepik.com/free-photo/still-life-sant-jordi-day-books-roses_23-2151197521.jpg?uid=R110427777&ga=GA1.1.1168644310.1737257403&semt=ais_hybrid&w=740",
    description: "A heartwarming love story.",
  },
  {
    
         id:"18",
        discount:"75%",
        price:"230",
    title: "Women's Handbag",
    category: "Fashion",
    image: "https://img.freepik.com/free-photo/small-purse-studio-still-life_23-2151046476.jpg?uid=R110427777&ga=GA1.1.1168644310.1737257403&semt=ais_hybrid&w=740",
    description: "Leather shoulder bag.",
  },
  {
    
         id:"19",
        discount:"35%",
        price:"350",
    title: "Bluetooth Speaker",
    category: "Electronics",
    image: "https://img.freepik.com/free-vector/realistic-3d-black-speaker-background_23-2148162549.jpg?uid=R110427777&ga=GA1.1.1168644310.1737257403&semt=ais_hybrid&w=740",
    description: "Portable and waterproof speaker.",
  },
  {
    
         id:"20",
        discount:"50%",
        price:"190",
    title: "Children's Story Book",
    category: "Books",
    image: "https://img.freepik.com/free-photo/kids-books-with-colored-covers_23-2147841216.jpg",
    description: "Colorful illustrated bedtime stories.",
  },
  {
    
         id:"21",
        discount:"25%",
        price:"2000",
    title: "Dining Table Set",
    category: "Home",
    image: "https://img.freepik.com/free-photo/close-up-small-vase-with-dried-plants_23-2148238664.jpg?uid=R110427777&ga=GA1.1.1168644310.1737257403&semt=ais_hybrid&w=740",
    description: "4-seater wooden dining table.",
  },
  {
    
         id:"22",
        discount:"25%",
        price:"900",
    title: "Men's Running Shoes",
    category: "Fashion",
    image: "https://img.freepik.com/free-photo/pair-trainers_144627-3799.jpg",
    description: "Lightweight, comfortable sports shoes.",
  },
  {
         id:"23",
        discount:"25%",
        price:"30000",
    title: "LED TV 50-inch",
    category: "Electronics",
    image: "https://img.freepik.com/free-psd/modern-tv-screen-isolated_23-2151430324.jpg?uid=R110427777&ga=GA1.1.1168644310.1737257403&semt=ais_hybrid&w=740",
    description: "Ultra HD Smart LED television.",
  },
  {
    
         id:"24",
        discount:"65%",
        price:"150",
    title: "Classic Literature Book",
    category: "Books",
    image: "https://img.freepik.com/premium-photo/stack-books-coffee-mug-desk_260672-515.jpg?uid=R110427777&ga=GA1.1.1168644310.1737257403&semt=ais_hybrid&w=740",
    description: "A timeless literary masterpiece.",
  }
];
const Electronics = [
  {
    id: "25",
    discount: "45%",
    price: "500",
    title: "Smart Watch",
    category: "Electronics",
    image: "https://img.freepik.com/free-vector/realistic-fitness-trackers_23-2148530529.jpg?uid=R110427777&ga=GA1.1.1168644310.1737257403&semt=ais_hybrid&w=740"
  },
  {
    id: "26",
    discount: "30%",
    price: "1200",
    title: "Bluetooth Headphones",
    category: "Audio",
    image: "https://img.freepik.com/free-photo/earphones-with-case-surrounded-by-nature-scene_23-2150165594.jpg?uid=R110427777&ga=GA1.1.1168644310.1737257403&semt=ais_hybrid&w=740",
    description: "Over-ear wireless headphones with deep bass.",
  },
  {
    id: "27",
    discount: "25%",
    price: "899",
    title: "Portable Speaker",
    category: "Audio",
    image: "https://img.freepik.com/premium-photo/speaker-wooden-table_1048944-15729413.jpg?uid=R110427777&ga=GA1.1.1168644310.1737257403&semt=ais_hybrid&w=740",
    description: "Compact Bluetooth speaker with powerful sound.",
  },
  {
    id: "28",
    discount: "40%",
    price: "1499",
    title: "Fitness Band",
    category: "Wearables",
    image: "https://img.freepik.com/free-vector/realistic-design-fitness-trackers_23-2148509775.jpg?uid=R110427777&ga=GA1.1.1168644310.1737257403&semt=ais_hybrid&w=740",
    description: "Tracks steps, sleep, and heart rate.",
  },
  {
    id: "29",
    discount: "35%",
    price: "299",
    title: "USB Charging Station",
    category: "Accessories",
    image: "https://img.freepik.com/free-psd/wifi-extender-icon-isolated-3d-render-illustration_47987-8712.jpg?uid=R110427777&ga=GA1.1.1168644310.1737257403&semt=ais_hybrid&w=740",
    description: "Charge multiple devices at once.",
  },
  {
    id: "30",
    discount: "20%",
    price: "750",
    title: "Gaming Mouse",
    category: "Gaming",
    image: "https://img.freepik.com/premium-photo/white-mouse-with-black-button-sits-keyboard_1283413-12.jpg?uid=R110427777&ga=GA1.1.1168644310.1737257403&semt=ais_hybrid&w=740",
    description: "High-precision gaming mouse with RGB lighting.",
  },
  {
    id: "31",
    discount: "50%",
    price: "250",
    title: "Phone Holder",
    category: "Accessories",
    image: "https://img.freepik.com/free-photo/woman-using-smartphone-with-pop-socket_52683-107793.jpg?uid=R110427777&ga=GA1.1.1168644310.1737257403&semt=ais_hybrid&w=740",
    description: "Adjustable phone stand for desk use.",
  },
  {
    id: "32",
    discount: "15%",
    price: "1800",
    title: "Wireless Earbuds",
    category: "Audio",
    image: "https://img.freepik.com/free-photo/still-life-wireless-cyberpunk-headphones_23-2151072231.jpg?uid=R110427777&ga=GA1.1.1168644310.1737257403&semt=ais_hybrid&w=740",
    description: "True wireless earbuds with charging case.",
  },
  {
    id: "33",
    discount: "60%",
    price: "999",
    title: "Smart Home Plug",
    category: "Smart Home",
    image: "https://img.freepik.com/free-photo/digital-tablet-screen-with-smart-home-controller-wooden-table_53876-98547.jpg?uid=R110427777&ga=GA1.1.1168644310.1737257403&semt=ais_hybrid&w=740",
    description: "Control appliances remotely via app.",
  },
  {
    id: "34",
    discount: "28%",
    price: "349",
    title: "LED Ring Light",
    category: "Photography",
    image: "https://img.freepik.com/free-photo/makeup-artist-vlogging-her-tutorials_23-2149080294.jpg?uid=R110427777&ga=GA1.1.1168644310.1737257403&semt=ais_hybrid&w=740",
    description: "Perfect lighting for selfies and video calls.",
  }
];

const settings = {
  dots: false,
  infinite: false,
  speed: 100,
  slidesToShow: 4,
  slidesToScroll: 1,
  arrows: false,
  swipeToSlide: true,
   autoplay: true,
  autoplaySpeed: 3000,
  pauseOnHover: false,
  responsive: [
    {
      breakpoint: 1024,
      settings: { slidesToShow: 3 },
    },
    {
      breakpoint: 768,
      settings: { slidesToShow: 2 },
    },
    {
      breakpoint: 480,
      settings: { slidesToShow: 2 },
    },
  ],
};

export const HomeContent = () => {
    const navigate = useNavigate();
  const [data,setData]=useState(null);
  const sliderRef = useRef(null);
  const [searchTerm, setSearchTerm] = useState("");
  const [selectedCategory, setSelectedCategory] = useState("All");
useEffect(() => {
  const interval = setInterval(() => {
    if (sliderRef.current) {
      sliderRef.current.slickPause();
      sliderRef.current.slickPlay(); 
    }
  }, 10000); 

  return () => clearInterval(interval);
}, []);

  const filteredItems = [
  ...items.filter((item) => {
    const matchesCategory =
      selectedCategory === "All" || item.category === selectedCategory;
    const matchesSearch = item.title
      .toLowerCase()
      .includes(searchTerm.toLowerCase());
    return matchesCategory && matchesSearch;
  }),
];
   const TopFilters = [
  ...toppicks.filter((item) => {
    const matchesCategory =
      selectedCategory === "All" || item.category === selectedCategory;
    const matchesSearch = item.title
      .toLowerCase()
      .includes(searchTerm.toLowerCase());
    return matchesCategory && matchesSearch;
  }),
];
const DealFilters = [
  ...moreItems.filter((item) => {
    const matchesCategory =
      selectedCategory === "All" || item.category === selectedCategory;
    const matchesSearch = item.title
      .toLowerCase()
      .includes(searchTerm.toLowerCase());
    return matchesCategory && matchesSearch;
  }),
];
const TopElectronics = [
  ...Electronics.filter((item) => {
    const matchesCategory =
      selectedCategory === "All" || item.category === selectedCategory;
    const matchesSearch = item.title
      .toLowerCase()
      .includes(searchTerm.toLowerCase());
    return matchesCategory && matchesSearch;
  }),
];
const call=(item)=>{
    setData(item);
    console.log("data:",data);
}
useEffect(()=>{
   if (data) {
        
          navigate("/ProductsShow", { state: data });
        }
},[data,navigate]);
 
    
      // const call = (item) => {
      //   console.log("I",item);
      //   setMovie(item); 
      //   console.log("Movies",movie);
      // };
      // useEffect(() => {
      //   if (movie) {
      //     navigate("/Theatre", { state: movie });
      //   }
      // }, [movie, navigate]);


  return (
    <div>
      <div className="amazon-search-bar">
        <select
          className="search-category"
          value={selectedCategory}
          onChange={(e) => setSelectedCategory(e.target.value)}
        >
          <option>All</option>
          <option>Electronics</option>
          <option>Books</option>
          <option>Fashion</option>
          <option>Home</option>
        </select>
        <input
          type="text"
          placeholder="Search Amazon"
          className="search-input"
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
        />
        <button className="search-button">🔍</button>
      </div>

    
      <div className="card-container">
        {filteredItems.map((item, idx) => (
          <div className="card"  onClick={()=>call(item)} key={idx}>
            <img src={item.image} alt={item.title} className="card-image-pro" />
            <h3 className="card-title">{item.title}</h3>
            <p className="card-description">{item.description}</p>
            <p className="card-category">{item.category}</p>
          </div>
        ))}
        {filteredItems.length === 0 && (
          <p className="no-result">No matching results found.</p>
        )}
      </div>
       <h1 className="ms-4">Top-Picks</h1>
      <div style={{ margin: "20px", padding: "5px" }}>
          <Slider  ref={sliderRef} {...settings}>
        {TopFilters.map((item, idx) => (
          <div key={idx} className="slider-card">
            <div className="card-content" onClick={()=>call(item)}>
              <img src={item.image} alt={item.title} className="card-image" />
              <h3 className="card-title">{item.title}</h3>
              <p className="card-description">{item.description}</p>
              <p className="card-category">{item.category}</p>
            </div>
          </div>
        ))}
        {TopFilters.length === 0 && (
          <p className="no-result">No matching results found.</p>
        )}
      </Slider>
    </div>
     <h1 className="ms-4">Deals-of-the-Day</h1>
      <div style={{ margin: "20px", padding: "5px" }}>
          <Slider {...settings}>
        {DealFilters.map((item, idx) => (
          <div key={idx} className="slider-card">
            <div className="card-content" onClick={()=>call(item)}>
              <img src={item.image} alt={item.title} className="card-image" />
              <h3 className="card-title">{item.title}</h3>
              <p className="card-description">{item.description}</p>
              <p className="card-category">{item.category}</p>
            </div>
          </div>
        ))}
        {TopFilters.length === 0 && (
          <p className="no-result">No matching results found.</p>
        )}
      </Slider>
      
    </div>
       <h1 className="ms-4">Top Electronics</h1>
      <div style={{ margin: "20px", padding: "5px" }}>
          <Slider {...settings}>
        {TopElectronics.map((item, idx) => (
          <div key={idx} className="slider-card">
            <div className="card-content" onClick={()=>call(item)}>
              <img src={item.image} alt={item.title} className="card-image" />
              <h3 className="card-title t">{item.title}</h3>
              <p className="card-description z">{item.description}</p>
              <p className="card-category">{item.category}</p>
            </div>
          </div>
        ))}
        {TopElectronics.length === 0 && (
          <p className="no-result">No matching results found.</p>
        )}
      </Slider>
  
    </div>
    
    </div>
  );
};

