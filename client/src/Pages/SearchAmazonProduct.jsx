import React, { useEffect, useState } from "react";
import { IoSearch, IoClose } from "react-icons/io5";
import { RiAmazonLine } from "react-icons/ri";
import ProductCard from "../Components/ProductCard";
import Navbar from "../Components/Navbar";
import Skeleton from "react-loading-skeleton";
import "react-loading-skeleton/dist/skeleton.css";
import ReactPaginate from "react-paginate";
import axios from "axios";
import LoadingSkeleton from "../Components/Loaders/LoadingSkeleton";
import Filters from "../Components/Filter/Filter"; // Import the Filters component

const ITEMS_PER_PAGE = 8;

const SearchAmazonProduct = () => {
  const [searchQuery, setSearchQuery] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const [allProducts, setAllProducts] = useState([]); // Store all products
  const [filteredProducts, setFilteredProducts] = useState([]); // Filtered products
  const [currentPage, setCurrentPage] = useState(0);
  const [totalResults, setTotalResults] = useState(0);
  const [error, setError] = useState(null);

  // Filter states
  const [priceRange, setPriceRange] = useState([0, 5000]);
  const [minRating, setMinRating] = useState(0);
  const [selectedStores, setSelectedStores] = useState([]);

  // Apply filters whenever filters or allProducts change
  useEffect(() => {
    applyFilters();
  }, [allProducts, priceRange, minRating]);

  // Filter the products based on filters
  const applyFilters = () => {
    let results = [...allProducts];

    // Price filter
    results = results.filter((product) => {
      const price = parseFloat(product.price.replace(/[^0-9.-]+/g, ""));
      return price >= priceRange[0] && price <= priceRange[1];
    });

    // Rating filter
    if (minRating > 0) {
      results = results.filter((product) => product.rating >= minRating);
    }

    // Store filter
    if (selectedStores.length > 0) {
      results = results.filter((product) => selectedStores.some((store) => product.shop?.toLowerCase().includes(store.toLowerCase())));
    }

    setFilteredProducts(results);
    setTotalResults(results.length);
    setCurrentPage(0); // Reset to first page when filters change
  };

  // Perform search
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
        rating: product.product_star_rating,
        reviews: product.product_reviews,
        shop: "Amazon", // Store name is Amazon in this case
        url: product.product_url,
      }));

      setAllProducts(transformedProducts);
      setFilteredProducts(transformedProducts); // Initialize filtered products with all products
      setTotalResults(transformedProducts.length);
    } catch (err) {
      setError("Failed to fetch products. Please try again later.");
      console.error("Search error:", err);
    } finally {
      setIsLoading(false);
    }
  };

  // Handle search trigger
  const handleSearch = () => {
    setCurrentPage(0);
    performSearch(searchQuery);
  };

  // Handle page change
  const handlePageClick = (data) => {
    setCurrentPage(data.selected);
  };

  const clearSearch = () => {
    setSearchQuery("");
  };

  // Calculate page count
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
                <button onClick={handleSearch} className="text-[#FF9900] hover:text-[#FF6600]">
                  <IoSearch className="w-6 h-6" />
                </button>
              </div>
            </div>
          </div>

          {/* Filters Panel */}
          <Filters
            priceRange={priceRange}
            setPriceRange={setPriceRange}
            minRating={minRating}
            setMinRating={setMinRating}
            selectedStores={selectedStores}
            setSelectedStores={setSelectedStores}
            onResetFilters={() => {
              setPriceRange([0, 5000]);
              setMinRating(0);
              setSelectedStores([]);
            }}
          />

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
          ) : filteredProducts.length > 0 ? (
            <>
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
                {filteredProducts.slice(currentPage * ITEMS_PER_PAGE, (currentPage + 1) * ITEMS_PER_PAGE).map((product) => (
                  <ProductCard key={product.id} product={product} />
                ))}
              </div>

              {/* Pagination */}
              <div className="mt-12">
                <ReactPaginate previousLabel={<span className="text-gray-600 hover:text-gray-800 cursor-pointer">Previous</span>} nextLabel={<span className="text-gray-600 hover:text-gray-800 cursor-pointer">Next</span>} pageCount={pageCount} onPageChange={handlePageClick} containerClassName="flex justify-center gap-4" pageClassName="px-4 py-2 rounded-md cursor-pointer hover:bg-[#FF9900] hover:text-white" activeClassName="bg-[#FF9900] text-white" disabledClassName="opacity-50 cursor-not-allowed" />
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
