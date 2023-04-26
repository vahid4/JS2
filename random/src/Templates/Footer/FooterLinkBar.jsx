import React from "react";
import SimplifiedDiv from "../../components/SimplifiedDiv/SimplifiedDiv";
import { colors, fontSize, fontWeight } from "../../util/theme";
import { Grid } from "@mui/material";
import Text from "../../components/Text/Text";

const FooterLinkBar = () => {
  const styles = {
    mainHolder: {
      backgroundColor: colors.secondColor,
      padding: "20px 100px",
    },
    headingText: {
      textAlign: "left",
      fontWeight: fontWeight.mediumBold,
      color: colors.gray,
    },
    boxHolder: {
      textAlign: "left",
      padding: "30px 0px",
    },
    innerBoxHolder: {
      textAlign: "left",
      padding: "20px 0px",
      lineHeight: "30px",
    },
    innerBoxText: {
      fontSize: fontSize.optima,
      color: colors.gray,
    },
  };

  const FirstRow = () => {
    <SimplifiedDiv style={styles.innerBoxHolder}>
      <Text style={styles.innerBoxText}>Online help</Text>
      <Text style={styles.innerBoxText}>Contact us</Text>
      <Text style={styles.innerBoxText}>Order status</Text>
      <Text style={styles.innerBoxText}>Change location</Text>
      <Text style={styles.innerBoxText}>FAQ</Text>
    </SimplifiedDiv>;
  };

  const SecondRow = () => {
    <SimplifiedDiv style={styles.innerBoxHolder}>
      <Text style={styles.innerBoxText}>T-shirts</Text>
      <Text style={styles.innerBoxText}>Mens</Text>
      <Text style={styles.innerBoxText}>Womens</Text>
      <Text style={styles.innerBoxText}>Gift cards</Text>
      <Text style={styles.innerBoxText}>Shoes</Text>
    </SimplifiedDiv>;
  };

  const ThirdRow = () => {
    <SimplifiedDiv style={styles.innerBoxHolder}>
      <Text style={styles.innerBoxText}>Terms of use</Text>
      <Text style={styles.innerBoxText}>Privacy policy</Text>
      <Text style={styles.innerBoxText}>Refund system</Text>
      <Text style={styles.innerBoxText}>Billing system</Text>
      <Text style={styles.innerBoxText}>Ticket system</Text>
    </SimplifiedDiv>;
  };

  const FourthRow = () => {
    <SimplifiedDiv style={styles.innerBoxHolder}>
      <Text style={styles.innerBoxText}>Company information</Text>
      <Text style={styles.innerBoxText}>Careers</Text>
      <Text style={styles.innerBoxText}>Store locations</Text>
      <Text style={styles.innerBoxText}>Affiliate program</Text>
      <Text style={styles.innerBoxText}>Copyright</Text>
    </SimplifiedDiv>;
  };

  return (
    <SimplifiedDiv>
      <Grid container direction="row">
        <Grid item md={2} lg={2}>
          <SimplifiedDiv style={styles.boxHolder}>
            <Text>Service</Text>
            <FirstRow />
          </SimplifiedDiv>
        </Grid>
        <Grid item md={2} lg={2}>
          <SimplifiedDiv style={styles.boxHolder}>
            <Text>Quick shop</Text>
            <SecondRow />
          </SimplifiedDiv>
        </Grid>
        <Grid item md={2} lg={2}>
          <SimplifiedDiv style={styles.boxHolder}>
            <Text>Policies</Text>
            <ThirdRow />
          </SimplifiedDiv>
        </Grid>
        <Grid item md={2} lg={2}>
          <SimplifiedDiv style={styles.boxHolder}>
            <Text>About shopper</Text>
            <FourthRow />
          </SimplifiedDiv>
        </Grid>
      </Grid>
    </SimplifiedDiv>
  );
};

export default FooterLinkBar;
