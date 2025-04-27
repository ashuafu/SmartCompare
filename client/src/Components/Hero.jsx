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
      </div>
    </div>
  );
};

export default Hero;
