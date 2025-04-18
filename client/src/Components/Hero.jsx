import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Pagination } from "swiper/modules";
import "swiper/css";
import "swiper/css/pagination";
import watch from "/assets/watch.webp";
import headphone from "/assets/headphone.webp";
import tab from "/assets/Tab.webp";

const Hero = () => {
  const mainSlides = [
    {
      id: 1,
      title: "Amazon Basics 27 inch Monitor",
      description: "27-inch Full HD monitor with 100Hz refresh rate, built-in speakers, and VESA mount compatibility for a seamless workspace setup.",
      discount: "30%",
      image: "https://m.media-amazon.com/images/I/710q+sSccwL._AC_SX679_.jpg",
      url: "https://www.amazon.com/dp/B0CP7RZRMD",
    },

    {
      id: 2,
      title: "Apple iPad Pro 12.9-inch",
      description: "Apple's powerful 12.9-inch Liquid Retina XDR display with the M2 chip, delivering top-tier performance and stunning visuals.",
      discount: "2%",
      image: "https://m.media-amazon.com/images/I/81c+9BOQNWL._AC_SX679_.jpg",
    },

    {
      id: 3,
      title: "Apple Watch SE (2nd Gen)",
      description: "Essential features to help you stay connected, active, healthy, and safe — now with enhanced performance and crash detection.",
      discount: "10%",
      image: "https://m.media-amazon.com/images/I/71YdE55GwjL._AC_SL1500_.jpg",
    },
  ];

  const sideCards = [
    {
      id: 1,
      title: "Macbook Pro - 512/16GB",
      price: "$450",
      oldPrice: "$500",
      label: "limited time offer",
      image: watch,
    },
    {
      id: 2,
      title: "iPhone 16 Pro - 8/128GB",
      price: "$600",
      oldPrice: "$899",
      label: "limited time offer",
      image: headphone,
    },
  ];

  return (
    <div className="w-full bg-gradient-to-br from-blue-50 to-indigo-50 pt-8 pb-12 relative overflow-hidden">
      {/* Subtle background pattern */}
      <div className="absolute inset-0 opacity-[0.03] bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNjAiIGhlaWdodD0iNjAiIHZpZXdCb3g9IjAgMCA2MCA2MCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48ZyBmaWxsPSJub25lIiBmaWxsLXJ1bGU9ImV2ZW5vZGQiPjxwYXRoIGQ9Ik0zNiA4YzAgMi4yMS0xLjc5IDQtNCA0cy00LTEuNzktNC00IDEuNzktNCA0LTQgNCAxLjc5IDQgNHoiIGZpbGw9IiMwMDAiLz48L2c+PC9zdmc+')]"></div>

      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative">
        <div className="flex flex-col lg:flex-row gap-6">
          {/* Main Slider */}
          <div className="lg:w-2/3 bg-white/90 backdrop-blur-sm rounded-3xl p-6 shadow-premium hover:shadow-premium-hover transition-all duration-300 min-h-[500px] border border-white/10">
            <Swiper
              modules={[Autoplay, Pagination]}
              spaceBetween={0}
              slidesPerView={1}
              autoplay={{
                delay: 3000,
                disableOnInteraction: false,
              }}
              pagination={{
                clickable: true,
                el: ".main-swiper-pagination",
                bulletClass: "inline-block w-2 h-2 mx-1 rounded-full bg-gray-200 cursor-pointer transition-all duration-300",
                bulletActiveClass: "w-6 bg-gradient-to-r from-[#1E2A53] to-[#3B82F6]",
              }}
              loop={true}
              className="h-full"
            >
              {mainSlides.map((slide) => (
                <SwiperSlide key={slide.id}>
                  <div className="flex flex-col lg:flex-row items-center justify-center h-full">
                    <div className="lg:w-1/2 space-y-4 p-4">
                      <div className="flex items-center gap-2">
                        <span className="text-4xl sm:text-5xl lg:text-6xl font-extrabold bg-gradient-to-r from-[#1E2A53] to-[#3B82F6] bg-clip-text text-transparent tracking-tight">{slide.discount}</span>
                        <div className="text-lg sm:text-xl">
                          <div className="font-semibold text-[#1E2A53]">Sale</div>
                          <div className="text-gray-500">Off</div>
                        </div>
                      </div>

                      <h1 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-[#1E2A53] tracking-tight leading-tight">{slide.title}</h1>
                      <p className="text-sm sm:text-base text-gray-600 leading-relaxed max-w-md">{slide.description}</p>

                      <button onClick={() => window.open(slide.url, "_blank")} className="bg-gradient-to-r from-[#1E2A53] to-[#3B82F6] text-white px-6 sm:px-8 py-3 sm:py-4 rounded-xl font-semibold hover:from-[#2A3A6A] hover:to-[#4B8DFF] transition-all duration-300 shadow-md hover:shadow-lg transform hover:-translate-y-0.5">
                        Shop Now
                      </button>
                    </div>

                    <div className="lg:w-1/2 h-[250px] sm:h-[300px] lg:h-[350px] overflow-hidden rounded-xl p-4">
                      <img src={slide.image} alt={slide.title} className="w-full h-full object-contain transform hover:scale-110 transition-transform duration-500" />
                    </div>
                  </div>
                </SwiperSlide>
              ))}
            </Swiper>
            <div className="main-swiper-pagination text-center mt-4" />
          </div>

          {/* Side Cards */}
          <div className="lg:w-1/3 space-y-6">
            {sideCards.map((card) => (
              <div key={card.id} className="bg-white/90 backdrop-blur-sm rounded-3xl p-6 shadow-premium hover:shadow-premium-hover transition-all duration-300 min-h-[240px] flex items-center border border-white/10 transform hover:-translate-y-1">
                <div className="flex justify-between items-center w-full gap-4">
                  <div className="space-y-3">
                    <span className="inline-block px-3 py-1 text-xs font-semibold text-white bg-gradient-to-r from-[#1E2A53] to-[#3B82F6] rounded-full">{card.label}</span>
                    <h3 className="text-lg sm:text-xl font-semibold text-[#1E2A53] tracking-tight">{card.title}</h3>
                    <div className="flex items-center gap-2">
                      <span className="text-xl sm:text-2xl font-extrabold bg-gradient-to-r from-[#1E2A53] to-[#3B82F6] bg-clip-text text-transparent">{card.price}</span>
                      <span className="text-sm text-gray-400 line-through">{card.oldPrice}</span>
                    </div>
                  </div>
                  <div className="w-28 h-28 overflow-hidden rounded-xl">
                    <img src={card.image} alt={card.title} className="w-full h-full object-contain transform hover:scale-110 transition-transform duration-500" />
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Features Section */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mt-12">
          <div className="group flex items-center gap-4 bg-white/90 backdrop-blur-sm rounded-2xl p-6 shadow-premium hover:shadow-premium-hover transition-all duration-300 border border-white/10 transform hover:-translate-y-1">
            <div className="p-3 bg-gradient-to-r from-[#1E2A53] to-[#3B82F6] rounded-full text-white group-hover:rotate-12 transition-transform duration-300">
              <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M5 13l4 4L19 7" />
              </svg>
            </div>
            <div>
              <h4 className="text-lg font-semibold text-[#1E2A53] tracking-tight">Free Shipping</h4>
              <p className="text-sm text-gray-600 leading-relaxed">For all orders $200</p>
            </div>
          </div>

          <div className="group flex items-center gap-4 bg-white/90 backdrop-blur-sm rounded-2xl p-6 shadow-feature hover:shadow-feature-hover transition-all duration-300 border border-white/10 transform hover:-translate-y-1">
            <div className="p-3 bg-gradient-to-r from-[#1E2A53] to-[#3B82F6] rounded-full text-white group-hover:rotate-12 transition-transform duration-300">
              <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M4 4v5h.582m15.356 2A8.001 8.001 0 004.582 9m0 0H9m11 11v-5h-.581m0 0a8.003 8.003 0 01-15.357-2m15.357 2H15" />
              </svg>
            </div>
            <div>
              <h4 className="text-lg font-semibold text-[#1E2A53] tracking-tight">1 & 1 Returns</h4>
              <p className="text-sm text-gray-600 leading-relaxed">Cancellation after 1 day</p>
            </div>
          </div>

          <div className="group flex items-center gap-4 bg-white/90 backdrop-blur-sm rounded-2xl p-6 shadow-feature hover:shadow-feature-hover transition-all duration-300 border border-white/10 transform hover:-translate-y-1">
            <div className="p-3 bg-gradient-to-r from-[#1E2A53] to-[#3B82F6] rounded-full text-white group-hover:rotate-12 transition-transform duration-300">
              <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
              </svg>
            </div>
            <div>
              <h4 className="text-lg font-semibold text-[#1E2A53] tracking-tight">100% Secure</h4>
              <p className="text-sm text-gray-600 leading-relaxed">Secure payments</p>
            </div>
          </div>

          <div className="group flex items-center gap-4 bg-white/90 backdrop-blur-sm rounded-2xl p-6 shadow-feature hover:shadow-feature-hover transition-all duration-300 border border-white/10 transform hover:-translate-y-1">
            <div className="p-3 bg-gradient-to-r from-[#1E2A53] to-[#3B82F6] rounded-full text-white group-hover:rotate-12 transition-transform duration-300">
              <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M17 8h2a2 2 0 012 2v6a2 2 0 01-2 2h-2v4l-4-4H9a1.994 1.994 0 01-1.414-.586m0 0L11 14h4a2 2 0 002-2V6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2v4l.586-.586z" />
              </svg>
            </div>
            <div>
              <h4 className="text-lg font-semibold text-[#1E2A53] tracking-tight">24/7 Support</h4>
              <p className="text-sm text-gray-600 leading-relaxed">Anywhere & anytime</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;
