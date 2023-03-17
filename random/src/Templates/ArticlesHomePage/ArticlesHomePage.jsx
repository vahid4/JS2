import React from "react";
import ArticleCard from "../ArticleCard/ArticleCard";
import { Grid } from "@mui/material";
import SimplifiedDiv from "../../components/SimplifiedDiv/SimplifiedDiv";
import article1 from "../../assets/images/home/product1.jpg";
import article2 from "../../assets/images/home/product2.jpg";
import article3 from "../../assets/images/home/product3.jpg";

//Postaviti funkcije koje ce izlistavati artikle

export const lorem =
  "Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo. Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt. Neque porro quisquam est, qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit, sed quia non numquam eius modi tempora incidunt ut labore et dolore magnam aliquam quaerat voluptatem. Ut enim ad minima veniam, quis nostrum exercitationem ullam corporis suscipit laboriosam, nisi ut aliquid ex ea commodi consequatur? Quis autem vel eum iure reprehenderit qui in ea voluptate velit esse quam nihil molestiae consequatur, vel illum qui dolorem eum fugiat quo voluptas nulla pariatur?";

export const articles = [
  {
    title: "Zlatna ribica",
    description: lorem,
    image: article1,
    price: "25$",
  },
  {
    title: "Patike",
    description: lorem,
    image: article2,
    price: "99.99$",
  },
  {
    title: "Jakna",
    description: lorem,
    image: article3,
    price: "121$",
  },
  {
    title: "Baletanke",
    description: lorem,
    image: article1,
    price: "17$",
  },
  {
    title: "Kapa",
    description: lorem,
    image: article2,
    price: "6$",
  },
  {
    title: "Duks",
    description: lorem,
    image: article3,
    price: "22$",
  },
];

const ArticlesHomePage = () => {
  return (
    <SimplifiedDiv style={{}}>
      <Grid container direction="row" spacing={3}>
        {articles.map((article) => {
          return (
            <Grid item md={4} lg={4}>
              <ArticleCard
                title={article.title}
                description={article.description}
                image={article.image}
                price={article.price}
              />
            </Grid>
          );
        })}
      </Grid>
    </SimplifiedDiv>
  );
};

export default ArticlesHomePage;
