import React from "react";
import CustomDiv from "../../components/CustomDiv/CustomDiv";
import { Grid } from "@mui/material";

const ProductHomePage = () => {
  return (
    <CustomDiv
      bgColor="white"
      display="flex"
      width="100%"
      height="auto"
      padding="0px 10px"
      border="1px solid black"
    >
      <Grid container direction="row">
        <Grid item sm={3} md={3} lg={3}>
          <CustomDiv
            bgColor="white"
            display="flex"
            width="100%"
            height="500px"
            padding="0px 10px"
            border="1px solid black"
          >
            Category
          </CustomDiv>
        </Grid>

        <Grid item sm={9} md={9} lg={9}>
          <CustomDiv
            bgColor="white"
            display="flex"
            width="100%"
            height="500px"
            padding="0px 10px"
            border="1px solid black"
          >
            Products
          </CustomDiv>
        </Grid>
      </Grid>
    </CustomDiv>
  );
};

export default ProductHomePage;
