import React, { useState } from "react";
import { FaPhone, FaUser, FaShoppingCart, FaBars, FaTimes, FaHeart, FaHistory, FaBalanceScale, FaUserCircle } from "react-icons/fa";
import { BsChevronDown } from "react-icons/bs";
import { Link, useNavigate } from "react-router-dom";
import { FaAmazon, FaEbay } from "react-icons/fa";
import { RiAmazonLine } from "react-icons/ri";
import { FiLogOut } from "react-icons/fi";
import { useDispatch } from "react-redux";
import { userLoggedOut } from "../Redux/UserReducer";
import { showAlert } from "../Utils/Utils";
const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const authData = JSON.parse(localStorage.getItem("authToken"));
  const now = new Date();
  const isAuthenticated = authData && authData.token && authData.expiry > now.getTime();

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <header className="w-full bg-white shadow-md transition-all ease-in-out duration-300">
      <div className="max-w-[1170px] mx-auto px-4 sm:px-7.5 xl:px-0">
        <div className="flex flex-col lg:flex-row gap-5 items-end lg:items-center xl:justify-between ease-out duration-200 py-4 sm:py-6">
          <div className="xl:w-auto flex-col sm:flex-row w-full flex sm:justify-between sm:items-center gap-5 sm:gap-10">
            <Link to="/" className="shrink-0 flex items-center gap-2">
              <FaBalanceScale className="text-blue-500 text-2xl hover:scale-110 transition-transform duration-300" />
              <h1 className="text-2xl font-bold bg-gradient-to-r from-blue-500 via-blue-600 to-blue-700 bg-clip-text text-transparent hover:from-blue-600 hover:via-blue-700 hover:to-blue-800 transition-all duration-300">SmartCompare</h1>
            </Link>
          </div>
          <div className="flex w-full lg:w-auto items-center gap-7.5">
            <div className="hidden xl:flex items-center gap-3.5">
              <FaPhone className="text-blue-500 text-lg hover:scale-110 transition-transform duration-300" />
              <div>
                <span className="block text-xs text-gray-500 uppercase tracking-wider">24/7 SUPPORT</span>
                <p className="font-semibold text-sm text-gray-800">(+965) 7492-3477</p>
              </div>
            </div>
            <span className="hidden xl:block w-px h-7.5 bg-gray-300"></span>
            <div className="flex w-full lg:w-auto justify-between items-center gap-5">
              <div className="flex items-center gap-5">
                {isAuthenticated ? (
                  <button
                    onClick={() => {
                      if (window.confirm("Are you sure you want to log out?")) {
                        localStorage.removeItem("authToken");
                        showAlert("success", "Logged out successfully", "You have been logged out successfully");
                        dispatch(userLoggedOut());
                        navigate("/signin");
                      }
                    }}
                    className="flex cursor-pointer items-center gap-2.5 hover:text-red-500 transition-colors group"
                  >
                    <FiLogOut className="text-lg text-red-500 group-hover:scale-110 transition-transform duration-300" />
                    <div className="group">
                      <span className="block text-xs text-gray-500 uppercase tracking-wider">account</span>
                      <p className="font-semibold text-sm text-gray-800 hover:text-red-500">Logout</p>
                    </div>
                  </button>
                ) : (
                  <Link className="flex items-center gap-2.5 hover:text-blue-500 transition-colors group" to="/signin">
                    <FaUser className="text-lg text-blue-500 group-hover:scale-110 transition-transform duration-300" />
                    <div className="group">
                      <span className="block text-xs text-gray-500 uppercase tracking-wider">account</span>
                      <p className="font-semibold text-sm text-gray-800 hover:text-blue-500">Sign In</p>
                    </div>
                  </Link>
                )}

                <span className="w-px h-7.5 bg-gray-300"></span>
                <Link to="/user-profile" className="flex cursor-pointer items-center gap-2.5 hover:text-blue-500 transition-colors group">
                  <FaUserCircle className="text-lg text-blue-500 group-hover:scale-110 transition-transform duration-300" />
                  <div>
                    <span className="block text-xs text-gray-500 uppercase tracking-wider">Profile</span>
                  </div>
                </Link>
              </div>
              <button id="Toggle" aria-label="Toggler" className="lg:hidden block hover:scale-110 transition-transform duration-300" onClick={toggleMenu}>
                {isMenuOpen ? <FaTimes className="text-xl text-blue-500" /> : <FaBars className="text-xl" />}
              </button>
            </div>
          </div>
        </div>
      </div>
      <div className="border-t border-gray-300">
        <div className="max-w-[1170px] mx-auto px-4 sm:px-7.5 xl:px-0">
          <div className="flex items-center justify-between">
            <div className="w-[288px] absolute right-4 top-full hidden lg:block lg:static lg:w-auto lg:h-auto lg:flex items-center justify-between">
              <nav>
                <ul className="flex lg:items-center flex-col lg:flex-row gap-5 lg:gap-6">
                  <li className="group">
                    <Link to="/" className="nav-link hover:text-blue-500 text-sm font-semibold text-gray-800 flex lg:py-6">
                      Home
                    </Link>
                  </li>
                  <li className="group">
                    <Link to="/search-amazon-product" className="nav-link hover:text-[#FF9900] text-sm font-semibold text-gray-800 flex lg:py-6 items-center gap-2">
                      <RiAmazonLine className="w-5 h-5" />
                      Amazon
                    </Link>
                  </li>
                  <li className="group">
                    <Link to="/search-ebay-product" className="nav-link hover:text-[#E53238] text-sm font-semibold text-gray-800 flex lg:py-6 items-center gap-2">
                      <FaEbay className="w-5 h-5" />
                      eBay
                    </Link>
                  </li>
                  <li className="group">
                    <Link to="/compare-product-prices" className="nav-link hover:text-blue-500 text-sm font-semibold text-gray-800 flex lg:py-6">
                      Compare prices
                    </Link>
                  </li>
                </ul>
              </nav>
            </div>
            {/* <div className="hidden lg:block">
              <ul className="flex items-center gap-5.5">
                <li className="py-4">
                  <a className="flex items-center gap-1.5 font-semibold text-sm text-gray-800 hover:text-blue-500 transition-colors group" href="#">
                    <FaHistory className="text-blue-500 text-base group-hover:scale-110 transition-transform duration-300" />
                    Recently Viewed
                  </a>
                </li>
                <li className="py-4">
                  <a className="flex items-center gap-1.5 font-semibold text-sm text-gray-800 hover:text-blue-500 transition-colors group" href="wishlist.html">
                    <FaHeart className="text-blue-500 text-base group-hover:scale-110 transition-transform duration-300" />
                    Wishlist
                  </a>
                </li>
              </ul>
            </div> */}
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      <div className={`mobile-menu fixed top-0 right-0 w-72 h-full bg-white shadow-lg z-50 p-6 lg:hidden ${isMenuOpen ? "open" : "closed"}`}>
        <div className="flex flex-col gap-6 pb-6">
          <div className="flex items-center gap-3.5">
            <FaPhone className="text-blue-500 text-lg" />
            <div>
              <span className="block text-xs text-gray-500 uppercase tracking-wider">24/7 SUPPORT</span>
              <p className="font-semibold text-sm text-gray-800">(+965) 7492-3477</p>
            </div>
          </div>
          <nav>
            <ul className="flex flex-col gap-4">
              <li>
                <Link to="/" className="hover:text-blue-500 text-sm font-semibold text-gray-800 flex py-3" onClick={toggleMenu}>
                  Home
                </Link>
              </li>
              <li>
                <Link to="/search-amazon-product" className="hover:text-[#FF9900] text-sm font-semibold text-gray-800 flex py-3 items-center gap-2" onClick={toggleMenu}>
                  <RiAmazonLine className="w-5 h-5" />
                  Amazon
                </Link>
              </li>
              <li>
                <Link to="/search-ebay-product" className="hover:text-[#E53238] text-sm font-semibold text-gray-800 flex py-3 items-center gap-2" onClick={toggleMenu}>
                  <FaEbay className="w-5 h-5" />
                  eBay
                </Link>
              </li>
              <li>
                <Link to="/compare-product-prices" className="hover:text-blue-500 text-sm font-semibold text-gray-800 flex py-3" onClick={toggleMenu}>
                  Compare prices
                </Link>
              </li>
            </ul>
          </nav>
          {/* <div className="border-t border-gray-200 pt-4">
            <ul className="flex flex-col gap-4">
              <li>
                <a className="flex items-center gap-1.5 font-semibold text-sm text-gray-800 hover:text-blue-500 transition-colors py-3" href="#">
                  <FaHistory className="text-blue-500 text-base" />
                  Recently Viewed
                </a>
              </li>
              <li>
                <a className="flex items-center gap-1.5 font-semibold text-sm text-gray-800 hover:text-blue-500 transition-colors py-3" href="wishlist.html">
                  <FaHeart className="text-blue-500 text-base" />
                  Wishlist
                </a>
              </li>
            </ul>
          </div> */}
        </div>
      </div>

      {/* Overlay */}
      {isMenuOpen && <div className="fixed inset-0 bg-black bg-opacity-50 z-40 lg:hidden" onClick={toggleMenu} />}
    </header>
  );
};

export default Navbar;
