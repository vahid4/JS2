import React from "react";
import CustomDiv from "../../components/CustomDiv/CustomDiv";
import { Grid, InputAdornment, TextField } from "@mui/material";
import Text from "../../components/Text/Text";
import SearchAppBar from "../../components/SearchBar/SearchBar";
import FreeSolo from "../../components/SearchBar/SearchBar";
import { getScreenWidth } from "../../util/helpers";
import SimplifiedDiv from "../../components/SimplifiedDiv/SimplifiedDiv";
import MenuIcon from "@mui/icons-material/Menu";
import SearchIcon from "@mui/icons-material/Search";
import { colors } from "../../util/theme";

const styles = {
  navBar: {
    display: "flex",
    gap: "30px",
    height: "40px",
    alignItems: "center",
  },
  hamburgerButton: {
    display: "grid",
    border: "1px solid",
    borderColor: colors.accentColor,
    borderRadius: "10px",
    width: "38px",
    height: "38px",
    alignContent: "center",
    placeContent: "center",
  },
};

const LinkBarLG = () => {
  return (
    <CustomDiv
      bgColor="white"
      display="flex"
      width="100%"
      height="30px"
      padding="0px 10%"
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

const LinkBarSM = () => {
  <SimplifiedDiv
    style={{
      display: "block",
      padding: "0px 10px",
    }}
  >
    <SimplifiedDiv
      style={{
        display: "flex",
        alignItems: "center",
      }}
    >
      <Grid xs={8} sm={8} md={8}>
        <TextField
          size="small"
          label="Search"
          InputProps={{
            endAdornment: (
              <InputAdornment position="end">
                <SearchIcon />
              </InputAdornment>
            ),
          }}
        />
      </Grid>
      <Grid xs={4} sm={4} md={4}>
        <SimplifiedDiv style={hamburgerButton}>
          <MenuIcon style={{ color: colors.accentColor }} />
        </SimplifiedDiv>
      </Grid>
    </SimplifiedDiv>
  </SimplifiedDiv>;
};

const LinkBar = () => {
  const screenWidth = getScreenWidth();
  return screenWidth === "SM" || screenWidth === "MD" ? (
    <LinkBarSM />
  ) : (
    <LinkBarLG />
  );
};

export default LinkBar;
