import React, { useState, useEffect } from "react";
import { IoSearch, IoClose, IoFilter } from "react-icons/io5";
import { FaBalanceScale, FaAmazon, FaEbay } from "react-icons/fa";
import ProductCard from "../Components/ProductCard";
import Navbar from "../Components/Navbar";
import "react-loading-skeleton/dist/skeleton.css";
import ReactPaginate from "react-paginate";
import axios from "axios";
import LoadingSkeleton from "../Components/Loaders/LoadingSkeleton";
import Filters from "../Components/Filter/Filter";

const ITEMS_PER_PAGE = 8;

const CompareProductPrices = () => {
  const [searchQuery, setSearchQuery] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const [allProducts, setAllProducts] = useState([]);
  const [filteredProducts, setFilteredProducts] = useState([]);
  const [currentPage, setCurrentPage] = useState(0);
  const [totalResults, setTotalResults] = useState(0);
  const [error, setError] = useState(null);

  // Filter states
  const [priceRange, setPriceRange] = useState([0, 5000]);
  const [minRating, setMinRating] = useState(0);
  const [minReviews, setMinReviews] = useState(0);
  const [selectedStores, setSelectedStores] = useState([]);

  const currentProducts = filteredProducts.slice(currentPage * ITEMS_PER_PAGE, (currentPage + 1) * ITEMS_PER_PAGE);

  // Apply filters whenever filters or allProducts change
  useEffect(() => {
    applyFilters();
  }, [allProducts, priceRange, minRating, minReviews, selectedStores]);

  const extractRating = (ratingString) => {
    if (!ratingString) return 0;
    const match = ratingString.match(/\d+(\.\d+)?/);
    return match ? parseFloat(match[0]) : 0;
  };

  const extractReviewCount = (reviewString) => {
    if (!reviewString) return 0;
    // Extract numbers from strings like "(5,508)" or "5508 reviews"
    const match = reviewString.match(/(\d{1,3}(?:,\d{3})*)/);
    return match ? parseInt(match[0].replace(/,/g, "")) : 0;
  };

  const extractPrice = (priceString) => {
    if (!priceString) return 0;
    // Extract numeric value from price strings like "$1,920.06"
    const match = priceString.match(/\d{1,3}(?:,\d{3})*(?:\.\d{2})?/);
    return match ? parseFloat(match[0].replace(/,/g, "")) : 0;
  };

  const applyFilters = () => {
    let results = [...allProducts];

    // Price filter
    results = results.filter((product) => {
      const price = extractPrice(product.price);
      return price >= priceRange[0] && price <= priceRange[1];
    });

    // Rating filter
    if (minRating > 0) {
      results = results.filter((product) => product.rating >= minRating);
    }

    // Reviews filter
    if (minReviews > 0) {
      results = results.filter((product) => extractReviewCount(product.reviews) >= minReviews);
    }

    // Store filter
    if (selectedStores.length > 0) {
      results = results.filter((product) => selectedStores.some((store) => product.shop?.toLowerCase().includes(store.toLowerCase())));
    }

    setFilteredProducts(results);
    setTotalResults(results.length);
    setCurrentPage(0); // Reset to first page when filters change
  };

  const performSearch = async (query) => {
    if (!query.trim()) return;

    setIsLoading(true);
    setError(null);
    try {
      const response = await axios.get(`${import.meta.env.VITE_PRICE_COMPARISON_API_URL}?q=${encodeURIComponent(query)}`, {
        headers: {
          Authorization: `Bearer ${import.meta.env.VITE_PRICE_COMPARISON_API_KEY}`,
        },
      });

      const transformedProducts =
        response.data?.map((product) => ({
          id: Math.random().toString(36).substring(2, 9),
          title: product.title,
          image: product.img,
          price: product.price,
          rating: extractRating(product.rating),
          reviews: product.reviews,
          shop: product.shop,
          url: product.link,
          numericPrice: extractPrice(product.price),
          numericReviews: extractReviewCount(product.reviews),
        })) || [];

      setAllProducts(transformedProducts);
    } catch (err) {
      setError("Failed to fetch products. Please try again later.");
      console.error("Search error:", err);
    } finally {
      setIsLoading(false);
    }
  };

  const handleSearch = () => {
    setCurrentPage(0);
    performSearch(searchQuery);
  };

  const handlePageClick = (data) => {
    setCurrentPage(data.selected);
  };

  const clearSearch = () => {
    setSearchQuery("");
  };

  const resetFilters = () => {
    setPriceRange([0, 5000]);
    setMinRating(0);
    setMinReviews(0);
    setSelectedStores([]);
  };

  const pageCount = Math.max(1, Math.ceil(totalResults / ITEMS_PER_PAGE));

  const EmptyState = () => (
    <div className="flex flex-col items-center justify-center py-12">
      <div className="w-16 h-16 mb-4 text-gray-400 animate-pulse">
        <IoSearch className="w-full h-full" />
      </div>
      <p className="text-gray-600 text-lg">Your search results will appear here</p>
    </div>
  );

  const ErrorState = () => (
    <div className="flex flex-col items-center justify-center py-12">
      <p className="text-red-500 text-lg">{error}</p>
    </div>
  );

  return (
    <>
      <Navbar />
      <div className="w-full py-16">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          {/* Header */}
          <div className="flex flex-col items-center text-center mb-12">
            <div className="flex items-center gap-2 mb-3">
              <FaBalanceScale className="w-8 h-8 text-indigo-600" />
              <h2 className="text-3xl font-bold bg-gradient-to-r from-indigo-600 to-purple-600 bg-clip-text text-transparent">Compare Product Prices</h2>
            </div>
            <p className="text-gray-600 text-lg">Find the best prices across multiple stores</p>
          </div>
          {/* Search Bar */}
          <div className="max-w-2xl mx-auto mb-8">
            <div className="relative">
              <input type="text" placeholder="Search for products to compare..." value={searchQuery} onChange={(e) => setSearchQuery(e.target.value)} onKeyPress={(e) => e.key === "Enter" && handleSearch()} className="w-full px-6 py-4 rounded-xl border border-gray-200 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:border-transparent text-gray-700" />
              <div className="absolute right-4 top-1/2 transform -translate-y-1/2 flex items-center gap-2">
                {searchQuery && (
                  <button onClick={clearSearch} className="text-gray-400 hover:text-gray-600">
                    <IoClose className="w-6 h-6" />
                  </button>
                )}
                <button onClick={handleSearch} className="text-indigo-600 hover:text-indigo-800">
                  <IoSearch className="w-6 h-6" />
                </button>
              </div>
            </div>
          </div>

          {/* Filters Panel */}
          <Filters priceRange={priceRange} setPriceRange={setPriceRange} minRating={minRating} setMinRating={setMinRating} minReviews={minReviews} setMinReviews={setMinReviews} selectedStores={selectedStores} setSelectedStores={setSelectedStores} onResetFilters={resetFilters} />
          {/* Results Count */}
          {totalResults > 0 && (
            <div className="text-center mb-8">
              <p className="text-gray-600">
                Showing {currentPage * ITEMS_PER_PAGE + 1} - {Math.min((currentPage + 1) * ITEMS_PER_PAGE, totalResults)} of {totalResults} results
              </p>
            </div>
          )}
          {/* Content */}
          {error ? (
            <ErrorState />
          ) : isLoading ? (
            <LoadingSkeleton />
          ) : currentProducts.length > 0 ? (
            <>
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
                {currentProducts.map((product) => (
                  <ProductCard key={product.id} product={product} />
                ))}
              </div>
              {/* Pagination */}
              <div className="mt-12">
                <ReactPaginate
                  previousLabel={
                    <span className="flex items-center justify-center w-8 h-8">
                      <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
                      </svg>
                    </span>
                  }
                  nextLabel={
                    <span className="flex items-center justify-center w-8 h-8">
                      <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                      </svg>
                    </span>
                  }
                  breakLabel="..."
                  pageCount={pageCount}
                  marginPagesDisplayed={1}
                  pageRangeDisplayed={3}
                  onPageChange={handlePageClick}
                  forcePage={currentPage}
                  containerClassName="flex justify-center items-center space-x-1"
                  pageClassName="flex items-center justify-center cursor-pointer"
                  pageLinkClassName="w-8 h-8 flex items-center justify-center text-sm font-medium text-gray-600 hover:text-indigo-600 transition-colors"
                  activeClassName="bg-indigo-600 rounded-full"
                  activeLinkClassName="text-white hover:text-white"
                  previousClassName="flex items-center justify-center"
                  previousLinkClassName="w-8 cursor-pointer h-8 flex items-center justify-center text-gray-600 hover:text-indigo-600 transition-colors"
                  nextClassName="flex items-center justify-center"
                  nextLinkClassName="w-8 cursor-pointer h-8 flex items-center justify-center text-gray-600 hover:text-indigo-600 transition-colors"
                  disabledClassName="opacity-40 cursor-not-allowed"
                  breakClassName="flex items-center justify-center"
                  breakLinkClassName="w-8 cursor-pointer h-8 flex items-center justify-center text-gray-600"
                />
              </div>
            </>
          ) : (
            <EmptyState />
          )}
        </div>
      </div>
    </>
  );
};

export default CompareProductPrices;
