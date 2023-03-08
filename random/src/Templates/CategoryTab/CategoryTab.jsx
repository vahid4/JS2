import React from "react";
import Text from "../../components/Text/Text";
import SimplifiedDiv from "../../components/SimplifiedDiv/SimplifiedDiv";
import { colors } from "../../util/theme";
import AddIcon from "@mui/icons-material/Add";

const categories = [
  {
    name: "Sportswear",
    active: false,
  },
  {
    name: "Mens",
    active: false,
  },
  {
    name: "Womens",
    active: false,
  },
  {
    name: "Kids",
    active: false,
  },
  {
    name: "Fashion",
    active: false,
  },
  {
    name: "Households",
    active: false,
  },
  {
    name: "Interiors",
    active: false,
  },
  {
    name: "Clothing",
    active: false,
  },
  {
    name: "Bags",
    active: false,
  },
  {
    name: "Shoes",
    active: false,
  },
];

const subCategory = [
  {
    categoryName: "Sportswear",
    name: "Adidas",
    active: false,
  },
  {
    categoryName: "Sportswear",
    name: "Nike",
    active: false,
  },
  {
    categoryName: "Sportswear",
    name: "Puma",
    active: false,
  },
  {
    categoryName: "Sportswear",
    name: "UnderArmour",
    active: false,
  },

  {
    categoryName: "Mens",
    name: "Adidas",
    active: false,
  },
  {
    categoryName: "Mens",
    name: "Nikee",
    active: false,
  },
];

const CategoryTab = () => {
  const styles = {
    container: {
      border: `2px solid ${colors.lightGray}`,
      borderColor: colors.lightGray,
      borderRadius: "2px",
      textAlign: "left",
    },
    category: {
      padding: "5px 0px",
    },
  };

  return (
    <SimplifiedDiv style={styles.container}>
      {categories.map((cat) => {
        return <Text style={styles.category}>{cat.name}</Text>;
      })}
    </SimplifiedDiv>
  );
};

export default CategoryTab;
