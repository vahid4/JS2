import React from "react";
import CustomDiv from "../../components/CustomDiv/CustomDiv";
import Grid from "@mui/material/Grid";
import { colors, fontSize } from "../../util/theme";
import { getScreenWidth } from "../../util/helpers";
import logo2 from "../../assets/images/logopravi.png";

const MainBar = () => {
  return (
    <CustomDiv
      bgColor="white"
      display="flex"
      width="100%"
      height="30px"
      padding="20px 5%"
      border="0px"
    >
      <Grid container direction="row">
        <Grid item md={6} lg={6}>
          <img src={logo2} alt="Logo" width="120" height="auto" />
        </Grid>
        <Grid item md={6} lg={6}></Grid>
      </Grid>
    </CustomDiv>
  );
};

export default MainBar;
