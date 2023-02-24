import React from "react";
import CustomDiv from "../../components/CustomDiv/CustomDiv";
import { Grid } from "@mui/material";
import Text from "../../components/Text/Text";
import SearchAppBar from "../../components/SearchBar/SearchBar";
import FreeSolo from "../../components/SearchBar/SearchBar";

const styles = {
  navBar: {
    display: "flex",
    gap: "30px",
    alignItems: "center",
  },
};

const LeftMenu = () => (
  <CustomDiv
    display="flex"
    alignItems="center"
    justifyContent="flex-start"
    height="100%"
    border="0px"
  >
    <CustomDiv display="flex" margin="0px 10px">
      <Text>Home</Text>
    </CustomDiv>
    <CustomDiv display="flex" margin="0px 10px">
      <Text>Shop</Text>
    </CustomDiv>
    <CustomDiv display="flex" margin="0px 10px">
      <Text>Blog</Text>
    </CustomDiv>
    <CustomDiv display="flex" margin="0px 10px">
      <Text>O nama</Text>
    </CustomDiv>
    <CustomDiv display="flex" margin="0px 10px">
      <Text>Kontakt</Text>
    </CustomDiv>
  </CustomDiv>
);

const LinkBar = () => {
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
          <LeftMenu />
        </Grid>
        <Grid item md={6} lg={6}>
          <CustomDiv
            display="flex"
            alignItems="center"
            justifyContent="flex-end"
            height="100%"
            border="0px"
          >
            {/* <SearchAppBar /> */}
            <FreeSolo />
          </CustomDiv>
        </Grid>
      </Grid>
    </CustomDiv>
  );
};

export default LinkBar;
