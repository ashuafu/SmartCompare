import React from "react";
import Navbar from "../Components/Navbar";
import Hero from "../Components/Hero";
import CategorySection from "../Components/CategorySection";
import AmazonProducts from "../Components/AmazonProducts";
import EbayProducts from "../Components/EbayProducts";
import Footer from "../Components/Footer";
import SearchAmazonProduct from "../Pages/SearchAmazonProduct";
const LandingPage = () => {
  return (
    <>
      <Navbar />
      <Hero />
      <CategorySection />
      <AmazonProducts />
      <EbayProducts />
      <Footer />
    </>
  );
};

export default LandingPage;
