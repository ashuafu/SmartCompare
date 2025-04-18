import React from "react";
import { IoChevronForward } from "react-icons/io5";
import { FaShippingFast } from "react-icons/fa";
import { RiAmazonLine } from "react-icons/ri";
import ProductCard from "./ProductCard";
import { Link } from "react-router-dom";

const AmazonProducts = () => {
  const products = [
    {
      id: 1,
      title: "Amazon Basics 27 inch Monitor, FHD 1080P, Max 100Hz, VESA Compatible, Built-in Speakers, Black",
      image: "https://m.media-amazon.com/images/I/710q+sSccwL._AC_SX679_.jpg",
      price: "$103.94",
      originalPrice: "$149.99",
      rating: 4.4,
      isPrime: true,
      discount: 15,
      category: "Monitors",
      url: "https://www.amazon.com/dp/B0CP7RZRMD",
    },
    {
      id: 2,
      title: "Sony WH-1000XM5 Wireless Industry Leading Noise Canceling Headphones",
      image: "https://m.media-amazon.com/images/I/71o8Q5XJS5L._AC_SX679_.jpg",
      price: "$398.0",
      originalPrice: "$399.99",
      rating: 4.7,
      isPrime: true,
      discount: 1,
      category: "Audio",
      url: "https://www.amazon.com/dp/B09XS7JWHH",
    },
    {
      id: 3,
      title: "Apple iPad Pro 12.9-inch (6th Generation): with M2 chip, Liquid Retina XDR Display, 128GB, Wi-Fi, Silver",
      image: "https://m.media-amazon.com/images/I/81c+9BOQNWL._AC_SX679_.jpg",
      price: "$1099.0",
      originalPrice: "$1099.0",
      rating: 4.8,
      isPrime: true,
      discount: 2,
      category: "Tablets",
      url: "https://www.amazon.com/dp/B0BJLD4SWD",
    },
    {
      id: 4,
      title: "Apple Watch SE (2nd Gen) (GPS, 40mm) - Starlight Aluminum Case with Starlight Sport Band, M/L (Renewed)",
      image: "https://m.media-amazon.com/images/I/71YdE55GwjL._AC_SL1500_.jpg",
      price: "$149.97",
      originalPrice: "$199.97",
      rating: 3.8,
      isPrime: false,
      discount: 5,
      category: "Wearables",
      url: "https://a.co/d/1p69B7I",
    },
    {
      id: 5,
      title: "SAMSUNG 24-Inch Odyssey G3 (G30D) Series FHD Gaming Monitor, 1ms, 180Hz, AMD FreeSync, Adjustable Stand, Black Equalizer, Virtual Aim Point, Eye Saver Mode, Flicker-Free, LS24DG302ENXZA, 2024",
      image: "https://m.media-amazon.com/images/I/81+37W3qr5L._AC_SL1500_.jpg",
      price: "$119.99",
      originalPrice: "$199.99",
      rating: 4.5,
      isPrime: true,
      discount: 40,
      category: "Tablets",
      url: "https://a.co/d/eLVj0CP",
    },
    {
      id: 6,
      title: "GTPLAYER Gaming Chair, Computer Chair with Footrest and Bluetooth Speakers, High Back Ergonomic Gaming Chairs, Reclining Gaming Chair with Linkage Armrests for Adults by GTRacing (Leather, Ivory)",
      image: "https://m.media-amazon.com/images/I/51tzEKACaiL._AC_SL1280_.jpg",
      price: "$138.0",
      originalPrice: "$138.0",
      rating: 4.4,
      isPrime: true,
      discount: 1,
      category: "Audio",
      url: "https://a.co/d/cy4a0vr",
    },
    {
      id: 7,
      title: "AILBTON Led Strip Lights,60ft Music Sync Color Changing, Built-in Mic,Bluetooth App Control LED Tape Lights with Remote,5050 RGB Rope Light Strips",
      image: "https://m.media-amazon.com/images/I/81ObSu20Y-L._AC_SL1500_.jpg",
      price: "$23",
      originalPrice: "$23",
      rating: 4.2,
      isPrime: false,
      discount: 1,
      category: "Wearables",
      url: "https://a.co/d/2Zou3u3",
    },
    {
      id: 8,
      title: "Apple iPhone 13 Pro Max, 256GB, Gold - Verizon (Renewed)",
      image: "https://m.media-amazon.com/images/I/51tFyA6q6eL._AC_SL1000_.jpg",
      price: "$551.99",
      originalPrice: "$599.99",
      rating: 4.7,
      isPrime: true,
      discount: 8,
      category: "Phones",
      url: "https://m.media-amazon.com/images/I/51tFyA6q6eL._AC_SL1000_.jpg",
    },
  ];

  return (
    <div className="w-full bg-gradient-to-br from-gray-50 to-white py-16">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="flex flex-col items-center text-center mb-12">
          <div className="flex items-center gap-2 mb-3">
            <RiAmazonLine className="w-8 h-8 text-[#FF9900]" />
            <h2 className="text-3xl font-bold bg-gradient-to-r from-[#232F3E] to-[#FF9900] bg-clip-text text-transparent">Amazon's Products</h2>
          </div>
          <p className="text-gray-600 text-lg">Top rated products with fast & free shipping</p>
          <div className="mt-6 flex items-center gap-4">
            <Link to="/search-amazon-product" className="flex items-center gap-2 px-6 py-2.5 bg-[#232F3E] text-white rounded-full hover:bg-[#FF9900] transition-all duration-300">
              <span className="font-medium">View more</span>
              <IoChevronForward className="w-5 h-5" />
            </Link>
            <div className="flex items-center gap-2 text-[#232F3E]">
              <FaShippingFast className="w-5 h-5" />
              <span className="font-medium">Free Prime Shipping</span>
            </div>
          </div>
        </div>

        {/* Product Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {products.map((product) => (
            <ProductCard key={product.id} product={product} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default AmazonProducts;
