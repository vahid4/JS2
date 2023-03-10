import React from "react";
import SimplifiedDiv from "../../components/SimplifiedDiv/SimplifiedDiv";
import Text from "../../components/Text/Text";
import { colors, fontSize } from "../../util/theme";
import AddIcon from "@mui/icons-material/Add";
import { useState } from "react";

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
    categoryName: "Mens",
    name: "Adidas",
    active: false,
  },
  {
    categoryName: "Mens",
    name: "Nike",
    active: false,
  },
  {
    categoryName: "Mens",
    name: "Puma",
    active: false,
  },
];

const CategoryTab = () => {
  const [isOpenCategory, setIsOpenCategory] = useState("");

  const styles = {
    container: {
      width: "100%",
      border: `0.5px solid ${colors.lightGray}`,
      borderRadius: "2px",
      textAlign: "left",
      padding: "15px 20px",
    },
    category: {
      padding: "5px 0px",
    },
    categoryContainer: {
      display: "flex",
      justifyContent: "space-between",
      alignItems: "center",
    },
    addIconStyle: {
      fontSize: fontSize.medium,
      color: colors.accentColor,
    },
    subCategoryContainer: {
      padding: "5px 10px",
    },
    subCategoryText: {
      fontSize: fontSize.smallPlus,
      color: colors.gray,
      padding: "2px 0px",
    },
  };

  return (
    <SimplifiedDiv style={styles.container}>
      {categories.map((cat) => {
        const filteredSubCategories = subCategory.filter(
          (sub) => sub.categoryName === cat.name
        );

        return (
          <>
            <SimplifiedDiv style={styles.categoryContainer}>
              <Text style={styles.category}>{cat.name}</Text>
              {filteredSubCategories.length > 0 && (
                <AddIcon
                  style={styles.addIconStyle}
                  onClick={() =>
                    setIsOpenCategory({
                      ...isOpenCategory,
                      name: cat.name,
                      active: !cat.active,
                    })
                  }
                />
              )}
            </SimplifiedDiv>
            {filteredSubCategories.length > 0 &&
              isOpenCategory === cat.name && (
                <SimplifiedDiv style={styles.subCategoryContainer}>
                  {filteredSubCategories.map((sub) => (
                    <Text style={styles.subCategoryText}>{sub.name}</Text>
                  ))}
                </SimplifiedDiv>
              )}
          </>
        );
      })}
    </SimplifiedDiv>
  );
};

export default CategoryTab;
