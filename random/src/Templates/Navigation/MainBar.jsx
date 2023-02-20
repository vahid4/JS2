import React from "react";
import CustomDiv from "../../components/CustomDiv/CustomDiv";
import Grid from "@mui/material/Grid";
import { colors, fontSize } from "../../util/theme";
import { getScreenWidth } from "../../util/helpers";
import logo from "../../assets/images/logopravi.png";
import Text from "../../components/Text/Text";

import PersonIcon from "@mui/icons-material/Person";
import StarIcon from "@mui/icons-material/Star";
import ShoppingCartIcon from "@mui/icons-material/ShoppingCart";
import LocationSearchingIcon from "@mui/icons-material/LocationSearching";
import LockIcon from "@mui/icons-material/Lock";

const iconsStyle = {
  fontSize: fontSize.medium,
  color: colors.gray,
};

const RightMenu = () => (
  <CustomDiv display="flex" alignItems="center" justifyContent="flex-end">
    <CustomDiv display="flex">
      <PersonIcon style={iconsStyle} />
      <Text fontSize={fontSize.medium} color={colors.gray}>
        Account
      </Text>
    </CustomDiv>
    <CustomDiv display="flex">
      <StarIcon style={iconsStyle} />
      <Text fontSize={fontSize.medium} color={colors.gray}>
        Checkout
      </Text>
    </CustomDiv>
    <CustomDiv display="flex">
      <ShoppingCartIcon style={iconsStyle} />
      <Text fontSize={fontSize.medium} color={colors.gray}>
        Cart
      </Text>
    </CustomDiv>
    <CustomDiv display="flex">
      <LockIcon style={iconsStyle} />
      <Text fontSize={fontSize.medium} color={colors.gray}>
        Log in
      </Text>
    </CustomDiv>
  </CustomDiv>
);

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
          <img src={logo} alt="Logo" width="140" height="auto" />
        </Grid>
        <Grid item md={6} lg={6}>
          <RightMenu />
        </Grid>
      </Grid>
    </CustomDiv>
  );
};

export default MainBar;
