import React from "react";
import Grid from "@mui/material/Grid";
import CustomDiv from "../../components/CustomDiv/CustomDiv";
import { colors, fontSize, fontStyle } from "../../util/theme";
import PhoneIcon from "@mui/icons-material/Phone";
import EmailIcon from "@mui/icons-material/Email";
import TwitterIcon from "@mui/icons-material/Twitter";
import InstagramIcon from "@mui/icons-material/Instagram";
import Text from "../../components/Text/Text";
import { getScreenWidth } from "../../util/helpers";

const TopRow = () => {
  const screenWidth = getScreenWidth();

  return (
    <CustomDiv
      bgColor={colors.secondColor}
      width="100%"
      height="30px"
      padding="0px 5%"
      border="0px"
    >
      <Grid container direction="row">
        <Grid item lg={6} spacing={0}>
          <CustomDiv display="flex" alignItems="center">
            <PhoneIcon style={{ fontSize: fontSize.normal }} />

            <Text fontSize={fontSize.small}>+381669754145</Text>
            <EmailIcon
              style={{ fontSize: fontSize.normal, margin: "0px 0px 0px 5px" }}
            />
            <Text fontSize={fontSize.small}>vahid.gasanin2@gmail.com</Text>
          </CustomDiv>
          <Grid>
            <CustomDiv display="flex" alignItems="center" textAlign="right">
              <TwitterIcon
                style={{ fontSize: fontSize.normal, margin: "0px 0px 0px 5px" }}
              />
              <InstagramIcon
                style={{ fontSize: fontSize.normal, margin: "0px 0px 0px 5px" }}
              />
            </CustomDiv>
          </Grid>
        </Grid>
      </Grid>
    </CustomDiv>
  );
};

export default TopRow;
