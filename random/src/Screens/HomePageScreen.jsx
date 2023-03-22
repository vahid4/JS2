import React from "react";
import Navigation from "../Templates/Navigation/Navigation";
import Slider from "../Templates/Slider/Slider";
import ProductsHomePage from "../Templates/ProductHomePage/ProductHomePage";

const HomePageScreen = () => {
  return (
    <>
      <Navigation />
      <Slider />
      <ProductsHomePage />
    </>
  );
};

export default HomePageScreen;
