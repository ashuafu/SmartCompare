import React from "react";
import { IoChevronForward, IoStar, IoStarHalf } from "react-icons/io5";
import { FaAmazon, FaShippingFast } from "react-icons/fa";
import { RiAmazonLine } from "react-icons/ri";
import watch from "/assets/watch.webp";
import headphone from "/assets/headphone.webp";
import tab from "/assets/Tab.webp";
import laptop from "/assets/laptops.webp";

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

  const renderRatingStars = (rating) => {
    const stars = [];
    const fullStars = Math.floor(rating);
    const hasHalfStar = rating % 1 !== 0;

    for (let i = 0; i < fullStars; i++) {
      stars.push(<IoStar key={`star-${i}`} className="w-4 h-4 text-yellow-400" />);
    }

    if (hasHalfStar) {
      stars.push(<IoStarHalf key="half-star" className="w-4 h-4 text-yellow-400" />);
    }

    const remainingStars = 5 - stars.length;
    for (let i = 0; i < remainingStars; i++) {
      stars.push(<IoStar key={`empty-star-${i}`} className="w-4 h-4 text-gray-200" />);
    }

    return stars;
  };

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
            <button className="flex items-center gap-2 px-6 py-2.5 bg-[#232F3E] text-white rounded-full hover:bg-[#FF9900] transition-all duration-300">
              <span className="font-medium">Shop Now</span>
              <IoChevronForward className="w-5 h-5" />
            </button>
            <div className="flex items-center gap-2 text-[#232F3E]">
              <FaShippingFast className="w-5 h-5" />
              <span className="font-medium">Free Prime Shipping</span>
            </div>
          </div>
        </div>

        {/* Product Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {products.map((product) => (
            <div key={product.id} className="group relative bg-white rounded-2xl border border-gray-100 overflow-hidden transition-all duration-300 hover:-translate-y-1 hover:shadow-2xl">
              {/* Discount Badge */}
              {product.discount && (
                <div className="absolute top-4 left-4 z-10">
                  <div className="bg-red-500 text-white text-sm font-bold px-3 py-1 rounded-full">-{product.discount}%</div>
                </div>
              )}

              {/* Product Image */}
              <div className="aspect-square bg-[#F8F9FC] p-6 flex items-center justify-center overflow-hidden relative group-hover:bg-[#F2F3F8] transition-colors duration-300">
                <div className="absolute inset-0 bg-gradient-to-b from-transparent to-black/5 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                <img src={product.image} alt={product.title} className="w-48 h-48 object-contain transform transition-transform duration-500 group-hover:scale-110" />
              </div>

              {/* Product Info */}
              <div className="p-6">
                {/* Title */}
                <h3 className="text-base font-medium text-gray-900 line-clamp-2 mb-2 min-h-[48px]">{product.title}</h3>

                {/* Rating & Prime */}
                <div className="flex items-center justify-between mb-3">
                  <div className="flex items-center gap-1">{renderRatingStars(product.rating)}</div>
                  {product.isPrime && (
                    <div className="flex items-center gap-1 text-[#FF9900]">
                      <FaAmazon className="w-4 h-4" />
                      <span className="text-xs font-medium">Prime</span>
                    </div>
                  )}
                </div>

                {/* Price */}
                <div className="flex items-baseline gap-2 mb-4">
                  <span className="text-2xl font-bold text-gray-900">${product.price}</span>
                  {product.originalPrice > product.price && <span className="text-sm text-gray-500 line-through">${product.originalPrice}</span>}
                </div>

                {/* Add to Cart Button */}
                <button className="w-full bg-[#FF9900] hover:bg-[#FF9900]/90 text-white py-3 rounded-xl font-medium text-sm transition-all duration-300 transform translate-y-4 opacity-0 group-hover:translate-y-0 group-hover:opacity-100">Shop Now</button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default AmazonProducts;
