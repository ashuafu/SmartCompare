import React, { useState } from "react";
import { IoSearch } from "react-icons/io5";
import { FaEbay } from "react-icons/fa";
import ProductCard from "../Components/ProductCard";
import Navbar from "../Components/Navbar";

const SearchEbayProducts = () => {
  const [searchQuery, setSearchQuery] = useState("");
  const products = [
    {
      id: 1,
      title: "Apple MacBook Pro M2 - Space Gray (2023)",
      image: "https://m.media-amazon.com/images/I/61vFO3R5UNL._AC_SL1500_.jpg",
      price: 1299.99,
      originalPrice: 1499.99,
      rating: 4.5,
      isPrime: true,
      discount: 15,
      category: "Laptops",
      bids: 12,
      timeLeft: "2d 4h",
    },
    {
      id: 2,
      title: "Sony WH-1000XM5 Wireless Noise Cancelling Headphones",
      image: "https://m.media-amazon.com/images/I/51JbsHSktkL._AC_SL1500_.jpg",
      price: 349.99,
      originalPrice: 399.99,
      rating: 5,
      isPrime: true,
      discount: 20,
      category: "Audio",
      bids: 8,
      timeLeft: "1d 8h",
    },
    {
      id: 3,
      title: "iPad Pro 12.9-inch M2 (2023) - Silver",
      image: "https://m.media-amazon.com/images/I/81Whr5PZxLL._AC_SL1500_.jpg",
      price: 999.99,
      originalPrice: 1099.99,
      rating: 4.5,
      isPrime: true,
      discount: 10,
      category: "Tablets",
      bids: 15,
      timeLeft: "3d 6h",
    },
    {
      id: 4,
      title: "Apple Watch Series 8 - Midnight",
      image: "https://m.media-amazon.com/images/I/71YlH-4MUQL._AC_SL1500_.jpg",
      price: 399.99,
      originalPrice: 429.99,
      rating: 4,
      isPrime: true,
      discount: 25,
      category: "Wearables",
      bids: 23,
      timeLeft: "6h 45m",
    },
  ];

  const filteredProducts = products.filter((product) => product.title.toLowerCase().includes(searchQuery.toLowerCase()));

  return (
    <>
      <Navbar />
      <div className="w-full py-16">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          {/* Header */}
          <div className="flex flex-col items-center text-center mb-12">
            <div className="flex items-center gap-2 mb-3">
              <FaEbay className="w-8 h-8 text-[#E53238]" />
              <h2 className="text-3xl font-bold bg-gradient-to-r from-[#0064D2] to-[#E53238] bg-clip-text text-transparent">Search eBay Products</h2>
            </div>
            <p className="text-gray-600 text-lg">Find the best deals on eBay</p>
          </div>

          {/* Search Bar */}
          <div className="max-w-2xl mx-auto mb-12">
            <div className="relative">
              <input type="text" placeholder="Search for products..." value={searchQuery} onChange={(e) => setSearchQuery(e.target.value)} className="w-full px-6 py-4 rounded-xl border border-gray-200 focus:outline-none focus:ring-2 focus:ring-[#0064D2] focus:border-transparent text-gray-700" />
              <IoSearch className="absolute right-4 top-1/2 transform -translate-y-1/2 w-6 h-6 text-gray-400" />
            </div>
          </div>

          {/* Product Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {filteredProducts.map((product) => (
              <ProductCard key={product.id} product={product} />
            ))}
          </div>

          {/* No Results Message */}
          {filteredProducts.length === 0 && (
            <div className="text-center py-12">
              <p className="text-gray-600 text-lg">No products found matching your search.</p>
            </div>
          )}
        </div>
      </div>
    </>
  );
};

export default SearchEbayProducts;
