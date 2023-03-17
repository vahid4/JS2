import React from "react";
import article1 from "../../assets/images/home/product1.jpg";
import article2 from "../../assets/images/home/product2.jpg";
import article3 from "../../assets/images/home/product3.jpg";
import { Grid } from "@mui/material";
import SimplifiedDiv from "../../components/SimplifiedDiv/SimplifiedDiv";
import Carousel from "../../components/Carousel/Carousel";

const RecommendedArticles = () => {
  const lorem =
    "Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo. Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt. Neque porro quisquam est, qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit, sed quia non numquam eius modi tempora incidunt ut labore et dolore magnam aliquam quaerat voluptatem. Ut enim ad minima veniam, quis nostrum exercitationem ullam corporis suscipit laboriosam, nisi ut aliquid ex ea commodi consequatur? Quis autem vel eum iure reprehenderit qui in ea voluptate velit esse quam nihil molestiae consequatur, vel illum qui dolorem eum fugiat quo voluptas nulla pariatur?";

  const articles = [
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
  return (
    <Grid container direction="row">
      <Grid item xs={12} sm={12} md={12} lg={12}>
        <SimplifiedDiv>
          <Carousel data={articles} />
        </SimplifiedDiv>
      </Grid>
    </Grid>
  );
};

export default RecommendedArticles;
