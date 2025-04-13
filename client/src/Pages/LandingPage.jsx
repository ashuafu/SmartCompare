import React from "react";
import Navbar from "../Components/Navbar";
import Hero from "../Components/Hero";
import CategorySection from "../Components/CategorySection";
import AmazonProducts from "../Components/AmazonProducts";
import EbayProducts from "../Components/EbayProducts";
const LandingPage = () => {
  return (
    <>
      <Navbar />
      <Hero />
      <CategorySection />
      <AmazonProducts />
      <EbayProducts />
    </>
  );
};

export default LandingPage;
