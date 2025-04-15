import React from "react";
import { IoChevronForward } from "react-icons/io5";
import { FaShippingFast } from "react-icons/fa";
import { RiAmazonLine } from "react-icons/ri";
import watch from "/assets/watch.webp";
import headphone from "/assets/headphone.webp";
import tab from "/assets/Tab.webp";
import laptop from "/assets/laptops.webp";
import ProductCard from "./ProductCard";
import { Link } from "react-router-dom";

const AmazonProducts = () => {
  const products = [
    {
      id: 1,
      title: "Apple MacBook Pro M2 - Space Gray (2023)",
      image: laptop,
      price: 1299.99,
      originalPrice: 1499.99,
      rating: 4.5,
      isPrime: true,
      discount: 15,
      category: "Laptops",
    },
    {
      id: 2,
      title: "Sony WH-1000XM5 Wireless Noise Cancelling Headphones",
      image: headphone,
      price: 349.99,
      originalPrice: 399.99,
      rating: 5,
      isPrime: true,
      discount: 20,
      category: "Audio",
    },
    {
      id: 3,
      title: "iPad Pro 12.9-inch M2 (2023) - Silver",
      image: tab,
      price: 999.99,
      originalPrice: 1099.99,
      rating: 4.5,
      isPrime: true,
      discount: 10,
      category: "Tablets",
    },
    {
      id: 4,
      title: "Apple Watch Series 8 - Midnight",
      image: watch,
      price: 399.99,
      originalPrice: 429.99,
      rating: 4,
      isPrime: true,
      discount: 25,
      category: "Wearables",
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
