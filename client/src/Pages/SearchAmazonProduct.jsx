import React, { useState } from "react";
import { IoSearch, IoClose } from "react-icons/io5";
import { RiAmazonLine } from "react-icons/ri";
import ProductCard from "../Components/ProductCard";
import Navbar from "../Components/Navbar";
import Skeleton from "react-loading-skeleton";
import "react-loading-skeleton/dist/skeleton.css";
import ReactPaginate from "react-paginate";
import axios from "axios";
import LoadingSkeleton from "../Components/Loaders/LoadingSkeleton";

const ITEMS_PER_PAGE = 8;

const SearchAmazonProduct = () => {
  const [searchQuery, setSearchQuery] = useState("");
  const [isLoading, setIsLoading] = useState(false); // Set to true initially for testing
  const [products, setProducts] = useState([]);
  const [currentPage, setCurrentPage] = useState(0);
  const [totalResults, setTotalResults] = useState(0);
  const [error, setError] = useState(null);

  const performSearch = async (query) => {
    if (!query.trim()) return;

    setIsLoading(true);
    setError(null);
    try {
      const options = {
        method: "GET",
        url: import.meta.env.VITE_RAPIDAPI_URL,
        params: {
          query: query,
          page: (currentPage + 1).toString(),
          country: "US",
          sort_by: "RELEVANCE",
          product_condition: "ALL",
          is_prime: "false",
          deals_and_discounts: "NONE",
        },
        headers: {
          "x-rapidapi-key": import.meta.env.VITE_RAPIDAPI_KEY,
          "x-rapidapi-host": import.meta.env.VITE_RAPIDAPI_HOST,
        },
      };

      const response = await axios.request(options);

      // Transform the API response to match our product structure
      const transformedProducts = response.data.data.products.map((product) => ({
        id: product.asin,
        title: product.product_title,
        image: product.product_photo,
        price: product.product_price,
        originalPrice: product.product_original_price,
        rating: product.product_star_rating,
        isPrime: product.is_prime,
        discount: product.product_discount,
        url: product.product_url,
      }));

      setProducts(transformedProducts);
      const total = parseInt(response.data.data.total) || 0;
      setTotalResults(total);
    } catch (err) {
      setError("Failed to fetch products. Please try again later.");
      console.error("Search error:", err);
    } finally {
      setIsLoading(false);
    }
  };

  console.log(totalResults);

  const handleSearch = () => {
    setCurrentPage(0);
    performSearch(searchQuery);
  };

  const handlePageClick = (data) => {
    setCurrentPage(data.selected);
    if (searchQuery.trim()) {
      performSearch(searchQuery);
    }
  };

  const clearSearch = () => {
    setSearchQuery("");
    setTotalResults(0);
    setCurrentPage(0);
  };

  // Calculate page count, ensuring it's a valid number
  const pageCount = Math.max(1, Math.ceil(totalResults / ITEMS_PER_PAGE));

  // Empty state component
  const EmptyState = () => (
    <div className="flex flex-col items-center justify-center py-12">
      <div className="w-16 h-16 mb-4 text-gray-400 animate-pulse">
        <IoSearch className="w-full h-full" />
      </div>
      <p className="text-gray-600 text-lg">Your search results will appear here</p>
    </div>
  );

  // Error state component
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
              <RiAmazonLine className="w-8 h-8 text-[#FF9900]" />
              <h2 className="text-3xl font-bold bg-gradient-to-r from-[#232F3E] to-[#FF9900] bg-clip-text text-transparent">Search Amazon Products</h2>
            </div>
            <p className="text-gray-600 text-lg">Find the best deals on Amazon</p>
          </div>

          {/* Search Bar */}
          <div className="max-w-2xl mx-auto mb-12">
            <div className="relative">
              <input type="text" placeholder="Search for products..." value={searchQuery} onChange={(e) => setSearchQuery(e.target.value)} onKeyPress={(e) => e.key === "Enter" && handleSearch()} className="w-full px-6 py-4 rounded-xl border border-gray-200 focus:outline-none focus:ring-2 focus:ring-[#FF9900] focus:border-transparent text-gray-700" />
              <div className="absolute right-4 top-1/2 transform -translate-y-1/2 flex items-center gap-2">
                {searchQuery && (
                  <button onClick={clearSearch} className="text-gray-400 hover:text-gray-600">
                    <IoClose className="w-6 h-6" />
                  </button>
                )}
                <button onClick={handleSearch} className="text-[#FF9900] hover:text-[#FF9900]/80">
                  <IoSearch className="w-6 h-6" />
                </button>
              </div>
            </div>
          </div>

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
          ) : products.length > 0 ? (
            <>
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
                {products.map((product) => (
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
                  containerClassName="flex justify-center items-center space-x-1"
                  pageClassName="flex items-center justify-center"
                  pageLinkClassName="w-8 h-8 flex items-center justify-center text-sm font-medium text-gray-600 hover:text-[#FF9900] transition-colors"
                  activeClassName="bg-[#FF9900] rounded-full"
                  activeLinkClassName="text-white"
                  previousClassName="flex items-center justify-center"
                  previousLinkClassName="w-8 h-8 flex items-center justify-center text-gray-600 hover:text-[#FF9900] transition-colors"
                  nextClassName="flex items-center justify-center"
                  nextLinkClassName="w-8 h-8 flex items-center justify-center text-gray-600 hover:text-[#FF9900] transition-colors"
                  disabledClassName="opacity-40 cursor-not-allowed"
                  breakClassName="flex items-center justify-center"
                  breakLinkClassName="w-8 h-8 flex items-center justify-center text-gray-600"
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

export default SearchAmazonProduct;
