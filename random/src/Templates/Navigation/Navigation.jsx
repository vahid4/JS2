import React from "react";
import { Grid } from "@mui/material";
import TopRow from "./TopRow";
import MainBar from "./MainBar";

const Navigation = () => {
  return (
    <Grid container direction="row">
      <TopRow />
      <MainBar />
    </Grid>
  );
};

export default Navigation;
