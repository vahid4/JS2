import React from "react";
import Carousel from "../../components/Carousel/Carousel";
import girl1 from "../../assets/images/home/girl1.jpg";
import girl2 from "../../assets/images/home/girl2.jpg";
import girl3 from "../../assets/images/home/girl3.jpg";
import SimplifiedDiv from "../../components/SimplifiedDiv/SimplifiedDiv";

const styles = {
  sliderContainer: {
    height: "200px",
    width: "100%",
  },
};

const Slider = () => {
  const sliders = [
    {
      imgSrc: girl1,
      imgText: "Image 1",
    },
    {
      imgSrc: girl2,
      imgText: "Image 2",
    },
    {
      imgSrc: girl3,
      imgText: "Image 3",
    },
  ];

  return (
    <SimplifiedDiv style={styles.sliderContainer}>
      <Carousel data={sliders} />
    </SimplifiedDiv>
  );
};

export default Slider;
