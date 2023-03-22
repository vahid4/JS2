import React from "react";
import Navigation from "../Templates/Navigation/Navigation";
import Slider from "../Templates/Slider/Slider";
import ProductsHomePage from "../Templates/ProductHomePage/ProductHomePage";
import Footer from "../Templates/Footer/Footer";

const HomePageScreen = () => {
  return (
    <>
      <Navigation />
      <Slider />
      <ProductsHomePage />
      <Footer />
    </>
  );
};

export default HomePageScreen;
