import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation } from "swiper/modules";
import { IoChevronBackOutline, IoChevronForwardOutline } from "react-icons/io5";
import "swiper/css";
import "swiper/css/navigation";
import laptop from "/assets/laptops.webp";
import games from "/assets/games.webp";
import homeApplicances from "/assets/home-applicances.webp";
import mobileTablets from "/assets/mobile-tabs.webp";
import sports from "/assets/sports.webp";
import watches from "/assets/watches.webp";

const CategorySection = () => {
  const categories = [
    {
      id: 1,
      name: "Laptop & PC",
      image: laptop,
    },
    {
      id: 2,
      name: "Watches",
      image: watches,
    },
    {
      id: 3,
      name: "Mobile & Tablets",
      image: mobileTablets,
    },
    {
      id: 4,
      name: "Health & Sports",
      image: sports,
    },
    {
      id: 5,
      name: "Home Appliances",
      image: homeApplicances,
    },
    {
      id: 6,
      name: "Watches",
      image: watches,
    },
    {
      id: 7,
      name: "Games & Videos",
      image: games,
    },
    {
      id: 8,
      name: "Watches",
      image: watches,
    },
  ];

  return (
    <div className="w-full bg-white py-12">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="flex items-center justify-between mb-8">
          <div className="flex items-center gap-3">
            <div className="p-2 bg-gradient-to-r from-[#1E2A53] to-[#3B82F6] rounded-lg text-white">
              <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M4 6a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2H6a2 2 0 01-2-2V6zM14 6a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2h-2a2 2 0 01-2-2V6zM4 16a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2H6a2 2 0 01-2-2v-2zM14 16a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2h-2a2 2 0 01-2-2v-2z" />
              </svg>
            </div>
            <div>
              <h2 className="text-2xl font-bold text-[#1E2A53]">Categories</h2>
              <p className="text-sm text-gray-500">Browse by Category</p>
            </div>
          </div>
          <div className="flex items-center gap-3">
            <button className="category-prev w-10 h-10 flex items-center justify-center rounded-lg bg-gradient-to-r from-[#1E2A53] to-[#3B82F6] text-white hover:opacity-90 transition-all duration-300 shadow-md hover:shadow-lg">
              <IoChevronBackOutline className="w-6 h-6" />
            </button>
            <button className="category-next w-10 h-10 flex items-center justify-center rounded-lg bg-gradient-to-r from-[#1E2A53] to-[#3B82F6] text-white hover:opacity-90 transition-all duration-300 shadow-md hover:shadow-lg">
              <IoChevronForwardOutline className="w-6 h-6" />
            </button>
          </div>
        </div>

        {/* Category Carousel */}
        <div className="relative px-4">
          <Swiper
            modules={[Navigation]}
            spaceBetween={24}
            slidesPerView={2}
            navigation={{
              prevEl: ".category-prev",
              nextEl: ".category-next",
              disabledClass: "opacity-50 cursor-not-allowed",
            }}
            breakpoints={{
              640: {
                slidesPerView: 3,
                spaceBetween: 24,
              },
              768: {
                slidesPerView: 4,
                spaceBetween: 24,
              },
              1024: {
                slidesPerView: 6,
                spaceBetween: 30,
              },
            }}
            className="category-swiper"
          >
            {categories.map((category) => (
              <SwiperSlide key={category.id}>
                <div className="flex flex-col items-center group cursor-pointer">
                  <div className="relative w-[140px] h-[140px] bg-[#F2F3F8] rounded-full mb-4 flex items-center justify-center overflow-hidden">
                    <div className="absolute inset-0 bg-gradient-to-b from-transparent to-gray-100 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                    <img src={category.image} alt={category.name} className="w-24 h-24 object-contain transform transition-all duration-300 group-hover:scale-110 group-hover:rotate-3" />
                  </div>
                  <h3 className="text-base font-medium text-gray-900 text-center relative">
                    {category.name}
                    <div className="absolute -bottom-2 left-1/2 transform -translate-x-1/2 w-0 h-0.5 bg-gradient-to-r from-[#1E2A53]/50 to-[#3B82F6]/50 group-hover:w-full transition-all duration-300 blur-[2px]"></div>
                    <div className="absolute -bottom-2 left-1/2 transform -translate-x-1/2 w-0 h-0.5 bg-gradient-to-r from-[#1E2A53] to-[#3B82F6] group-hover:w-4/5 transition-all duration-300"></div>
                  </h3>
                </div>
              </SwiperSlide>
            ))}
          </Swiper>
        </div>
      </div>
    </div>
  );
};

export default CategorySection;
