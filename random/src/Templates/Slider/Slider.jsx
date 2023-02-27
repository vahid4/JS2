import React from "react";
import Carousel from "../../components/Carousel/Carousel";
import girl1 from "../../assets/images/home/girl1.jpg";
import girl2 from "../../assets/images/home/girl2.jpg";
import girl3 from "../../assets/images/home/girl3.jpg";
import SimplifiedDiv from "../../components/SimplifiedDiv/SimplifiedDiv";
import { Grid } from "@mui/material";

const styles = {
  sliderContainer: {
    height: "200px",
    margin: "0px 10%",
  },
};

const Slider = () => {
  const sliders = [
    {
      imgSrc: girl1,
      imgText: "Zaova",
    },
    {
      imgSrc: girl2,
      imgText: "Svekrva",
    },
    {
      imgSrc: girl3,
      imgText: "Snaha",
    },
  ];

  return (
    <Grid>
      <Grid>
        <SimplifiedDiv style={styles.sliderContainer}>
          <Carousel data={sliders} />
        </SimplifiedDiv>
      </Grid>
    </Grid>
  );
};

export default Slider;
