import React from "react";
import Grid from "@mui/material";
import CustomDiv from "../../components/CustomDiv/CustomDiv";

const TopRow = () => {
  return (
    <Grid container direction="row">
      <CustomDiv bgColor={color}></CustomDiv>
    </Grid>
  );
};

export default TopRow;
