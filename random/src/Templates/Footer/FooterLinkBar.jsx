import React from "react";
import SimplifiedDiv from "../../components/SimplifiedDiv/SimplifiedDiv";
import { colors, fontWeight } from "../../util/theme";
import { Grid } from "@mui/material";
import Text from "../../components/Text/Text";

const FooterLinkBar = () => {
  const styles = {
    mainHolder: {
      backgroundColor: colors.secondColor,
      padding: "20px",
    },
    headingText: {
      textAlign: "center",
      fontWeight: fontWeight.mediumBold,
      color: colors.gray,
    },
    boxHolder: {
      textAlign: "left",
      padding: "30px 0px",
    },
  };

  return (
    <SimplifiedDiv>
      <Grid container direction="row">
        <Grid item md={2} lg={2}>
          <SimplifiedDiv style={styles.boxHolder}>
            <Text>Service</Text>
          </SimplifiedDiv>
        </Grid>
        <Grid item md={2} lg={2}>
          <SimplifiedDiv style={styles.boxHolder}>
            <Text>Quick shop</Text>
          </SimplifiedDiv>
        </Grid>
        <Grid item md={2} lg={2}>
          <SimplifiedDiv style={styles.boxHolder}>
            <Text>Policies</Text>
          </SimplifiedDiv>
        </Grid>
        <Grid item md={2} lg={2}>
          <SimplifiedDiv style={styles.boxHolder}>
            <Text>About shopper</Text>
          </SimplifiedDiv>
        </Grid>
      </Grid>
    </SimplifiedDiv>
  );
};

export default FooterLinkBar;
