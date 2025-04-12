import React from "react";
import { FaSearch, FaPhone, FaUser, FaShoppingCart, FaBars, FaTimes, FaHeart, FaHistory } from "react-icons/fa";
import { IoMdClose } from "react-icons/io";
import { BsChevronDown } from "react-icons/bs";

const LandingPage = () => {
  //    <style>
  //    #nprogress {
  //      pointer-events: none;
  //    }
  //    #nprogress .bar {
  //      background: #3c50e0;
  //      position: fixed;
  //      z-index: 1600;
  //      top: 0;
  //      left: 0;
  //      width: 100%;
  //      height: 3px;
  //    }
  //    #nprogress .peg {
  //      display: block;
  //      position: absolute;
  //      right: 0;
  //      width: 100px;
  //      height: 100%;
  //      box-shadow: none;
  //      opacity: 1;
  //      -webkit-transform: rotate(3deg) translate(0px, -4px);
  //      -ms-transform: rotate(3deg) translate(0px, -4px);
  //      transform: rotate(3deg) translate(0px, -4px);
  //    }
  //    #nprogress .spinner {
  //      display: block;
  //      position: fixed;
  //      z-index: 1600;
  //      top: 15px;
  //      right: 15px;
  //    }
  //    #nprogress .spinner-icon {
  //      width: 18px;
  //      height: 18px;
  //      box-sizing: border-box;
  //      border: 2px solid transparent;
  //      border-top-color: #3c50e0;
  //      border-left-color: #3c50e0;
  //      border-radius: 50%;
  //      -webkit-animation: nprogress-spinner 400ms linear infinite;
  //      animation: nprogress-spinner 400ms linear infinite;
  //    }
  //    .nprogress-custom-parent {
  //      overflow: hidden;
  //      position: relative;
  //    }
  //    .nprogress-custom-parent #nprogress .bar,
  //    .nprogress-custom-parent #nprogress .spinner {
  //      position: absolute;
  //    }
  //    @-webkit-keyframes nprogress-spinner {
  //      0% {
  //        -webkit-transform: rotate(0deg);
  //      }
  //      100% {
  //        -webkit-transform: rotate(360deg);
  //      }
  //    }
  //    @keyframes nprogress-spinner {
  //      0% {
  //        transform: rotate(0deg);
  //      }
  //      100% {
  //        transform: rotate(360deg);
  //      }
  //    }
  //  </style>
  return (
    <>
      {/* <div className="fixed left-0 top-0 z-999999 flex h-screen w-screen items-center justify-center bg-white">
        <div className="h-16 w-16 animate-spin rounded-full border-4 border-solid border-blue border-t-transparent"></div>
      </div> */}

      {/* Header */}
      <header className="fixed left-0 top-0 w-full z-999 bg-white shadow-md transition-all ease-in-out duration-300">
        <div className="max-w-[1170px] mx-auto px-4 sm:px-7.5 xl:px-0">
          <div className="flex lg:flex-row gap-5 items-end lg:items-center xl:justify-between ease-out duration-200 py-6">
            <div className="xl:w-auto  w-full flex sm:justify-between sm:items-center gap-5 sm:gap-10">
              <img alt="Logo" loading="lazy" width="219" height="36" decoding="async" data-nimg="1" style={{ color: "transparent" }} src="images/logo/logo.svg" />
            </div>
            <div className="flex w-full lg:w-auto items-center gap-7.5">
              <div className="hidden xl:flex items-center gap-3.5">
                <FaPhone className="text-blue text-lg" />
                <div>
                  <span className="block text-xs text-gray-500 uppercase tracking-wider">24/7 SUPPORT</span>
                  <p className="font-semibold text-sm text-gray-800">(+965) 7492-3477</p>
                </div>
              </div>
              <span className="hidden xl:block w-px h-7.5 bg-gray-4"></span>
              <div className="flex w-full lg:w-auto justify-between items-center gap-5">
                <div className="flex items-center gap-5">
                  <a className="flex items-center gap-2.5 hover:text-blue transition-colors" href="signin.html">
                    <FaUser className="text-lg text-blue" />
                    <div className="group">
                      <span className="block text-xs text-gray-500 uppercase tracking-wider">account</span>
                      <p className="font-semibold text-sm text-gray-800 hover:text-blue">Sign In</p>
                    </div>
                  </a>
                  <button className="flex items-center gap-2.5 hover:text-blue transition-colors">
                    <span className="inline-block relative">
                      <FaShoppingCart className="text-lg text-blue" />
                      <span className="flex items-center justify-center font-semibold text-xs absolute -right-2 -top-2.5 bg-blue w-4.5 h-4.5 rounded-full text-white">0</span>
                    </span>
                    <div>
                      <span className="block text-xs text-gray-500 uppercase tracking-wider">cart</span>
                      <p className="font-semibold text-sm text-gray-800">$0</p>
                    </div>
                  </button>
                </div>
                <button id="Toggle" aria-label="Toggler" className="xl:hidden block">
                  <FaBars className="text-xl" />
                </button>
              </div>
            </div>
          </div>
        </div>
        <div className="border-t border-gray-3">
          <div className="max-w-[1170px] mx-auto px-4 sm:px-7.5 xl:px-0">
            <div className="flex items-center justify-between">
              <div className="w-[288px] absolute right-4 top-full xl:static xl:w-auto h-0 xl:h-auto invisible xl:visible xl:flex items-center justify-between">
                <nav>
                  <ul className="flex xl:items-center flex-col xl:flex-row gap-5 xl:gap-6">
                    <li className="group relative before:w-0 before:h-[3px] before:bg-blue before:absolute before:left-0 before:top-0 before:rounded-b-[3px] before:ease-out before:duration-200 hover:before:w-full">
                      <a className="hover:text-blue text-sm font-semibold text-gray-800 flex xl:py-6" href="popularfd57.html?sort=popular">
                        Popular
                      </a>
                    </li>
                    <li className="group relative before:w-0 before:h-[3px] before:bg-blue before:absolute before:left-0 before:top-0 before:rounded-b-[3px] before:ease-out before:duration-200 hover:before:w-full">
                      <a className="hover:text-blue text-sm font-semibold text-gray-800 flex xl:py-6" href="shop-with-sidebar.html">
                        Shop
                      </a>
                    </li>
                    <li className="group relative before:w-0 before:h-[3px] before:bg-blue before:absolute before:left-0 before:top-0 before:rounded-b-[3px] before:ease-out before:duration-200 hover:before:w-full">
                      <a className="hover:text-blue text-sm font-semibold text-gray-800 flex xl:py-6" href="contact.html">
                        Contact
                      </a>
                    </li>
                    <li className="group relative before:w-0 before:h-[3px] before:bg-blue before:absolute before:left-0 before:top-0 before:rounded-b-[3px] before:ease-out before:duration-200 hover:before:w-full">
                      <a className="hover:text-blue text-sm font-semibold text-gray-800 flex items-center gap-1.5 capitalize xl:py-6" href="#">
                        blogs
                        <BsChevronDown className="text-xs group-hover:rotate-180 transition-transform duration-200" />
                      </a>
                    </li>
                  </ul>
                </nav>
              </div>
              <div className="hidden xl:block">
                <ul className="flex items-center gap-5.5">
                  <li className="py-4">
                    <a className="flex items-center gap-1.5 font-semibold text-sm text-gray-800 hover:text-blue transition-colors" href="#">
                      <FaHistory className="text-blue text-base" />
                      Recently Viewed
                    </a>
                  </li>
                  <li className="py-4">
                    <a className="flex items-center gap-1.5 font-semibold text-sm text-gray-800 hover:text-blue transition-colors" href="wishlist.html">
                      <FaHeart className="text-blue text-base" />
                      Wishlist
                    </a>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </header>
    </>
  );
};

export default LandingPage;
