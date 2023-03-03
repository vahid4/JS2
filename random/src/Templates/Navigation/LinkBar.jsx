import { Grid } from "@mui/material";
import CustomDiv from "../../components/CustomDiv/CustomDiv";
import SimplifiedDiv from "../../components/SimplifiedDiv/SimplifiedDiv";
import Text from "../../components/Text/Text";
import { colors, fontSize } from "../../util/theme";
import TextField from "@mui/material/TextField";
import SearchIcon from "@mui/icons-material/Search";
import InputAdornment from "@mui/material/InputAdornment";
import { getScreenWidth } from "../../util/helpers";
import MenuIcon from "@mui/icons-material/Menu";

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
    borderColors: colors.accentColor,
    borderRadius: "5px",
    width: "38px",
    height: "38px",
    placeContent: "center",
    alignContent: "center",
    backgroundColor: "white",
  },
  linkMenu: {
    backgroundColor: colors.gray,
    textAlign: "left",
  },
};

const LinkBar = () => {
  const screenWidth = getScreenWidth();

  const [isOpen, setIsOpen] = useState();

  const LinkBarLG = () => (
    <CustomDiv display="flex" padding="0px 10%" width="100%">
      <Grid container direction="row">
        <Grid item sm={6} md={6} lg={6}>
          <SimplifiedDiv style={styles.navBar}>
            <Text fontSize={fontSize.normal} color={colors.gray}>
              Home
            </Text>
            <Text fontSize={fontSize.normal} color={colors.gray}>
              Shop
            </Text>
            <Text fontSize={fontSize.normal} color={colors.gray}>
              Blog
            </Text>
            <Text fontSize={fontSize.normal} color={colors.gray}>
              About
            </Text>
            <Text fontSize={fontSize.normal} color={colors.gray}>
              Kontakt
            </Text>
          </SimplifiedDiv>
        </Grid>
        <Grid item sm={6} md={6} lg={6}>
          <CustomDiv
            display="flex"
            alignItems="center"
            justifyContent="flex-end"
          ></CustomDiv>
        </Grid>
      </Grid>
    </CustomDiv>
  );

  const LinkBarSM = () => (
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
          <SimplifiedDiv
            style={{
              display: "flex",
              width: "100%",
              justifyContent: "flex-end",
            }}
          >
            <button
              style={styles.hamburgerButton}
              onClick={() => setIsOpen(!isOpen)}
            >
              <MenuIcon
                style={{
                  color: colors.accentColor,
                }}
              />
            </button>
          </SimplifiedDiv>
        </Grid>

        <SimplifiedDiv>
          {isOpen && <SimplifiedDiv style={styles.linkMenu}></SimplifiedDiv>}
        </SimplifiedDiv>
      </SimplifiedDiv>
    </SimplifiedDiv>
  );

  return screenWidth === "SM" || screenWidth === "MD" ? (
    <LinkBarSM />
  ) : (
    <LinkBarLG />
  );
};

export default LinkBar;
