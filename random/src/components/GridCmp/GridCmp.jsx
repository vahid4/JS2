import React from "react";
import CustomDiv from "../CustomDiv/CustomDiv";
import Grid from "@mui/material/Grid";
import { dividerClasses } from "@mui/material";
import "./GridCmp.css";

function GridCmp() {
  return (
    <div>
      <Grid container spacing={2}>
        <Grid
          container
          direction="row"
          justifyContent="space-evenly"
          alignItems="center"
          spacing={2}
        >
          <CustomDiv width="30%">xs=8</CustomDiv>
          <CustomDiv width="30%">xs=8</CustomDiv>
          <CustomDiv width="30%">xs=8</CustomDiv>
        </Grid>
        <Grid item xs={8}>
          <CustomDiv width="100%">xs=8</CustomDiv>
        </Grid>
        <Grid item xs={4}>
          <CustomDiv width="100%">xs=4</CustomDiv>
        </Grid>
        <Grid item xs={6}>
          <CustomDiv width="100%">xs=6</CustomDiv>
        </Grid>
        <Grid item xs={6}>
          <CustomDiv width="100%">xs=6</CustomDiv>
        </Grid>
      </Grid>
    </div>
  );
}

export default GridCmp;
