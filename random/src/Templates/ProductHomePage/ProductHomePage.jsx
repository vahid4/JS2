import React from "react";
import CustomDiv from "../../components/CustomDiv/CustomDiv";
import { Grid } from "@mui/material";

const ProductHomePage = () => {
  return (
    <CustomDiv
      bgColor="white"
      display="flex"
      width="100%"
      height="100px"
      padding="0px 10px"
      border="1px solid black"
    >
      <Grid container direction="row">
        <Grid></Grid>
        <Grid></Grid>
      </Grid>
    </CustomDiv>
  );
};

export default ProductHomePage;
