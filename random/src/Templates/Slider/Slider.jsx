import React from "react";
import Carousel from "../../components/Carousel/Carousel";
import girl1 from "../../assets/images/home/girl1.jpg";
import girl2 from "../../assets/images/home/girl2.jpg";
import girl3 from "../../assets/images/home/girl3.jpg";
import SimplifiedDiv from "../../components/SimplifiedDiv/SimplifiedDiv";
import { Grid } from "@mui/material";
import { getScreenWidth } from "../../util/helpers";

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

const Slider = () => {
  const deviceWidth = getScreenWidth();

  const setSliderMargin =
    deviceWidth === "SM"
      ? "0px"
      : deviceWidth === "MD"
      ? "0px 10px"
      : "0px 10%";

  const setPaddingTop =
    deviceWidth === "SM"
      ? "10px"
      : deviceWidth === "MD"
      ? "0px 20px"
      : "0px 30px";

  const sliderWidthSM = deviceWidth !== "LG" ? "100%" : "80%";

  const styles = {
    sliderContainer: {
      width: sliderWidthSM,
      height: "auto",
      margin: setSliderMargin,
      paddingTop: setPaddingTop,
    },
  };

  return (
    <Grid container direction="row">
      <Grid item sx={12} sm={12} md={12} lg={12}>
        <SimplifiedDiv style={styles.sliderContainer}>
          <Carousel data={sliders} />
        </SimplifiedDiv>
      </Grid>
    </Grid>
  );
};

export default Slider;
