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
import SimplifiedDiv from "../../components/SimplifiedDiv/SimplifiedDiv";

const iconsStyle = {
  fontSize: fontSize.medium,
  color: colors.gray,
};

const MainBar = () => {
  const screenWidth = getScreenWidth();

  const RightMenu = () => (
    <CustomDiv
      display="flex"
      alignItems="center"
      justifyContent="flex-end"
      height="100%"
    >
      <CustomDiv display="flex" margin="0px 10px">
        <PersonIcon style={iconsStyle} />
        <Text fontSize={fontSize.smallPlus} color={colors.gray}>
          Account
        </Text>
      </CustomDiv>
      <CustomDiv display="flex" margin="0px 10px">
        <StarIcon style={iconsStyle} />
        <Text fontSize={fontSize.smallPlus} color={colors.gray}>
          Wishlist
        </Text>
      </CustomDiv>
      <CustomDiv display="flex" margin="0px 10px">
        <LocationSearchingIcon style={iconsStyle} />
        <Text fontSize={fontSize.smallPlus} color={colors.gray}>
          Checkout
        </Text>
      </CustomDiv>
      <CustomDiv display="flex" margin="0px 10px">
        <ShoppingCartIcon style={iconsStyle} />
        <Text fontSize={fontSize.smallPlus} color={colors.gray}>
          Cart
        </Text>
      </CustomDiv>
      <CustomDiv display="flex" margin="0px 10px">
        <LockIcon style={iconsStyle} />
        <Text fontSize={fontSize.smallPlus} color={colors.gray}>
          Log in
        </Text>
      </CustomDiv>
    </CustomDiv>
  );

  const alignLogo = screenWidth === "SM" ? "center" : "flex";

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
        <Grid item xs={12} sm={12} md={6} lg={6}>
          <SimplifiedDiv style={{ textAlign: alignLogo }}>
            <img src={logo} alt="Logo" width="140" height="auto" />
          </SimplifiedDiv>
        </Grid>
        <Grid item xs={12} sm={12} md={6} lg={6}>
          <RightMenu />
        </Grid>
        <CustomDiv
          width="100%"
          height="20px"
          borderBottom="0.3px solid #b3b1b1"
        />
      </Grid>
    </CustomDiv>
  );
};

export default MainBar;
