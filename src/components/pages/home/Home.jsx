import React from "react";
import HeroSection from "../../common/sections/HeroSection";
import HeroSectionSlider from "../../common/sliders/HeroSectionSlider";
import DiamondSlider from "../../common/sliders/DiamondSlider";
import ProductSection from "../../common/sections/productSection/ProductSection";

const Home = () => {
  return (
    <div>
      <HeroSection />
      <HeroSectionSlider />
      <DiamondSlider />
      <ProductSection />
    </div>
  );
};

export default Home;
