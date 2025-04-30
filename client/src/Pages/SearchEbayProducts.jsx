import React, { useEffect, useState } from "react";
import { IoSearch, IoClose } from "react-icons/io5";
import { FaEbay } from "react-icons/fa";
import ProductCard from "../Components/ProductCard";
import Navbar from "../Components/Navbar";
import Skeleton from "react-loading-skeleton";
import "react-loading-skeleton/dist/skeleton.css";
import ReactPaginate from "react-paginate";
import axios from "axios";
import LoadingSkeleton from "../Components/Loaders/LoadingSkeleton";
import Filters from "../Components/Filter/Filter";

const ITEMS_PER_PAGE = 8;

const SearchEbayProducts = () => {
  const [searchQuery, setSearchQuery] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const [allProducts, setAllProducts] = useState([]);
  const [currentPage, setCurrentPage] = useState(0);
  const [totalResults, setTotalResults] = useState(0);
  const [error, setError] = useState(null);

  // Filter states
  const [priceRange, setPriceRange] = useState([0, 5000]);
  const [minRating, setMinRating] = useState(0);
  const [selectedStores, setSelectedStores] = useState([]);
  const [filteredProducts, setFilteredProducts] = useState([]);

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

  const extractRating = (ratingString) => {
    if (!ratingString) return 0;

    // Extract the first number in the string (like 4.5 from "4.5 out of 5 stars")
    const match = ratingString.match(/\d+(\.\d+)?/);
    return match ? parseFloat(match[0]) : 0;
  };

  const performSearch = async (query) => {
    if (!query.trim()) {
      setError("Please enter a search term");
      return;
    }

    setIsLoading(true);
    setError(null);

    try {
      const options = {
        method: "GET",
        url: `https://ebay-search-result.p.rapidapi.com/search/${encodeURIComponent(query)}`,
        headers: {
          "x-rapidapi-host": "ebay-search-result.p.rapidapi.com",
          "x-rapidapi-key": "f89050bb16mshb873acb6650d518p134c5ejsndb6c9a93744b",
        },
      };

      const response = await axios.request(options);
      console.log(response.data.results);

      const transformedProducts = response.data.results.map((product) => ({
        id: product.id,
        title: product.title,
        image: product.image,
        price: product.price,
        rating: extractRating(product.rating),
        url: product.url,
      }));

      setAllProducts(transformedProducts || []);
      setFilteredProducts(transformedProducts); // Initialize filtered products with all products

      setTotalResults(response.data.results.length || 0);
    } catch (err) {
      setError("Failed to fetch products. Please try again later.");
      console.error("Search error:", err);
      setAllProducts([]);
    } finally {
      setIsLoading(false);
    }
  };

  const handleSearch = () => {
    setCurrentPage(0);
    performSearch(searchQuery);
  };

  const handleKeyPress = (e) => {
    if (e.key === "Enter") {
      handleSearch();
    }
  };

  const handlePageClick = (data) => {
    setCurrentPage(data.selected);
  };

  const clearSearch = () => {
    setSearchQuery("");
  };

  // Calculate page count, ensuring it's a valid number
  const pageCount = Math.max(1, Math.ceil(totalResults / ITEMS_PER_PAGE));

  // Empty state component
  const EmptyState = () => (
    <div className="flex flex-col items-center justify-center py-12">
      <div className="w-16 h-16 mb-4 text-gray-400 animate-pulse">
        <IoSearch className="w-full h-full" />
      </div>
      <p className="text-gray-600 text-lg">{searchQuery ? "No products found matching your search." : "Your search results will appear here"}</p>
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
              <FaEbay className="w-8 h-8 text-[#E53238]" />
              <h2 className="text-3xl font-bold bg-gradient-to-r from-[#0064D2] to-[#E53238] bg-clip-text text-transparent">Search eBay Products</h2>
            </div>
            <p className="text-gray-600 text-lg">Find the best deals on eBay</p>
          </div>

          {/* Search Bar */}
          <div className="max-w-2xl mx-auto mb-12">
            <div className="relative">
              <input type="text" placeholder="Search for products..." value={searchQuery} onChange={(e) => setSearchQuery(e.target.value)} onKeyPress={handleKeyPress} className="w-full px-6 py-4 rounded-xl border border-gray-200 focus:outline-none focus:ring-2 focus:ring-[#0064D2] focus:border-transparent text-gray-700" />
              <div className="absolute right-4 top-1/2 transform -translate-y-1/2 flex items-center gap-2">
                {searchQuery && (
                  <button onClick={clearSearch} className="text-gray-400 hover:text-gray-600">
                    <IoClose className="w-6 h-6" />
                  </button>
                )}
                <button onClick={handleSearch} className="text-[#E53238] hover:text-[#E53238]/80" disabled={isLoading}>
                  {isLoading ? <div className="animate-spin rounded-full h-6 w-6 border-b-2 border-[#E53238]"></div> : <IoSearch className="w-6 h-6" />}
                </button>
              </div>
            </div>
          </div>
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
                <ReactPaginate previousLabel={<span className="text-gray-600 hover:text-gray-800 cursor-pointer">Previous</span>} nextLabel={<span className="text-gray-600 hover:text-gray-800 cursor-pointer">Next</span>} pageCount={pageCount} onPageChange={handlePageClick} containerClassName="flex justify-center gap-4" pageClassName="px-4 py-2 rounded-md cursor-pointer hover:bg-[#E53238] hover:text-white" activeClassName="bg-[#E53238] text-white" disabledClassName="opacity-50 cursor-not-allowed" />
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

export default SearchEbayProducts;
