import React, { useState, useEffect } from "react";
import { IoFilter } from "react-icons/io5";
import { useLocation } from "react-router-dom"; // Import useLocation if using React Router

const StoreIcons = {
  Amazon: () => (
    <svg viewBox="0 0 24 24" className="w-5 h-5 text-[#FF9900]">
      <path fill="currentColor" d="M10.842 6.987L12 2.062l1.158 4.925c.14.596.806.864 1.31.567.505-.297.62-.983.257-1.526L12 .062 8.275 6.028c-.363.543-.248 1.23.257 1.526.504.297 1.17.03 1.31-.567zM12 14.562v-2.5c0-.276-.224-.5-.5-.5H6.5c-.276 0-.5.224-.5.5v7c0 .276.224.5.5.5h5c.276 0 .5-.224.5-.5v-2.5c0-.276-.224-.5-.5-.5H8v-1h3.5c.276 0 .5-.224.5-.5zm-1.5 3.5H8v1h2.5v-1zm6.5-4.5v5c0 .276-.224.5-.5.5h-2v-6h2c.276 0 .5.224.5.5zm-1 1.5h-1v1h1v-1zm0 2h-1v1h1v-1z" />
    </svg>
  ),
  eBay: () => (
    <svg viewBox="0 0 24 24" className="w-5 h-5 text-[#E53238]">
      <path fill="currentColor" d="M5.31 6.56h3.16v10.28H5.31zm12.22 0h3.16v10.28h-3.16zm-6.11 0h3.16v10.28h-3.16zm-6.11 3.03h3.16v4.22H5.31zm12.22 0h3.16v4.22h-3.16zm-6.11 0h3.16v4.22h-3.16z" />
    </svg>
  ),
  Walmart: () => (
    <svg viewBox="0 0 24 24" className="w-5 h-5 text-[#0071CE]">
      <path fill="currentColor" d="M7.76 7.2h8.48v9.6H7.76zm-1.92-3.84h12.32v1.92H5.84zm0 15.36h12.32v1.92H5.84z" />
    </svg>
  ),
  BestBuy: () => (
    <svg viewBox="0 0 24 24" className="w-5 h-5 text-[#003B64]">
      <path fill="currentColor" d="M12 2.5L9.5 7.5h-7v9h7l2.5 5 2.5-5h7v-9h-7zm0 12.5a3.5 3.5 0 110-7 3.5 3.5 0 010 7z" />
    </svg>
  ),
  Target: () => (
    <svg viewBox="0 0 24 24" className="w-5 h-5 text-[#CC0000]">
      <path fill="currentColor" d="M12 2a10 10 0 100 20 10 10 0 000-20zm0 18a8 8 0 110-16 8 8 0 010 16zm0-4a4 4 0 100-8 4 4 0 000 8zm0-6a2 2 0 110 4 2 2 0 010-4z" />
    </svg>
  ),
  Google: () => (
    <svg viewBox="0 0 24 24" className="w-5 h-5">
      <path fill="#4285F4" d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z" />
      <path fill="#34A853" d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z" />
      <path fill="#FBBC05" d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l2.85-2.22.81-.62z" />
      <path fill="#EA4335" d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z" />
    </svg>
  ),
};

const stores = [
  { name: "Amazon", icon: <StoreIcons.Amazon /> },
  { name: "eBay", icon: <StoreIcons.eBay /> },
  { name: "Walmart", icon: <StoreIcons.Walmart /> },
  { name: "Best Buy", icon: <StoreIcons.BestBuy /> },
  { name: "Target", icon: <StoreIcons.Target /> },
  { name: "Google Shopping", icon: <StoreIcons.Google /> },
];

const Filters = ({ priceRange, setPriceRange, minRating, setMinRating, minReviews, setMinReviews, selectedStores, setSelectedStores, onResetFilters }) => {
  const [showFilters, setShowFilters] = useState(false);
  const location = useLocation(); // Get current location (URL path)

  // Determine which stores to display based on the URL path
  let filteredStores = stores;
  if (location.pathname === "/search-amazon-product") {
    filteredStores = stores.filter((store) => store.name === "Amazon");
  } else if (location.pathname === "/search-ebay-product") {
    filteredStores = stores.filter((store) => store.name === "eBay");
  }

  const toggleStoreFilter = (store) => {
    setSelectedStores((prev) => (prev.includes(store) ? prev.filter((s) => s !== store) : [...prev, store]));
  };

  return (
    <>
      {/* Filter Toggle */}
      <div className="flex justify-center mb-8">
        <button onClick={() => setShowFilters(!showFilters)} className="flex items-center gap-2 px-4 py-2 bg-indigo-100 text-indigo-700 rounded-lg hover:bg-indigo-200 transition-colors">
          <IoFilter />
          {showFilters ? "Hide Filters" : "Show Filters"}
        </button>
      </div>

      {/* Filters Panel */}
      {showFilters && (
        <div className="bg-white p-6 rounded-xl shadow-md mb-8 border border-gray-100">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {/* Price Range Filter */}
            <div>
              <h3 className="font-medium text-gray-700 mb-2">Price Range</h3>
              <div className="flex items-center gap-2">
                <span>${priceRange[0]}</span>
                <input type="range" min="0" max="5000" step="50" value={priceRange[0]} onChange={(e) => setPriceRange([parseInt(e.target.value), priceRange[1]])} className="w-full" />
                <span>${priceRange[1]}</span>
              </div>
              <input type="range" min="0" max="5000" step="50" value={priceRange[1]} onChange={(e) => setPriceRange([priceRange[0], parseInt(e.target.value)])} className="w-full mt-2" />
            </div>

            {/* Minimum Rating */}
            <div>
              <h3 className="font-medium text-gray-700 mb-2">Minimum Rating</h3>
              <div className="flex items-center gap-2">
                {[0, 1, 2, 3, 4, 5].map((rating) => (
                  <button key={rating} onClick={() => setMinRating(rating)} className={`w-10 h-10 rounded-full flex items-center justify-center ${minRating === rating ? "bg-indigo-600 text-white" : "bg-gray-100 text-gray-700 hover:bg-gray-200"}`}>
                    {rating || "All"}
                  </button>
                ))}
              </div>
            </div>

            {/* Minimum Reviews */}
            {location.pathname === "/compare-product-prices" && (
              <div>
                <h3 className="font-medium text-gray-700 mb-2">Minimum Reviews</h3>
                <select value={minReviews} onChange={(e) => setMinReviews(parseInt(e.target.value))} className="w-full p-2 border border-gray-300 rounded-lg">
                  <option value="0">Any</option>
                  <option value="10">10+</option>
                  <option value="50">50+</option>
                  <option value="100">100+</option>
                  <option value="500">500+</option>
                  <option value="1000">1000+</option>
                </select>
              </div>
            )}

            {/* Store Filter */}
            <div>
              <h3 className="font-medium text-gray-700 mb-2">Stores</h3>
              <div className="flex flex-wrap gap-2">
                {filteredStores.map((store) => (
                  <button key={store.name} onClick={() => toggleStoreFilter(store.name)} className={`flex items-center gap-1 px-3 py-1 rounded-full text-sm ${selectedStores.includes(store.name) ? "bg-indigo-600 text-white" : "bg-gray-100 text-gray-700 hover:bg-gray-200"}`}>
                    <span className="text-xs">{store.icon}</span>
                    {store.name}
                  </button>
                ))}
              </div>
            </div>
          </div>

          {/* Reset Filters */}
          <div className="mt-4 flex justify-end">
            <button onClick={onResetFilters} className="text-indigo-600 hover:text-indigo-800 text-sm font-medium">
              Reset All Filters
            </button>
          </div>
        </div>
      )}
    </>
  );
};

export default Filters;
