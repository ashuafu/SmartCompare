import React from "react";
import Hero from "./Hero";
import CategorySection from "./CategorySection";
import AmazonProducts from "./AmazonProducts";
const Home = () => {
  return (
    <div className="w-full">
      <Hero />
      <CategorySection />
      <AmazonProducts />
    </div>
  );
};

export default Home;
