import React from "react";
import { useStyles } from "./feedContainerStyle";
import ArticleCard from "../Article";
export const Feed = () => {
  const classes = useStyles();
  const names = [
    "yoda",
    "akshat",
    "spiderman",
    "anurag",
    "levin",
    "mayank",
    "aditi",
  ];
  return (
    <div className={classes.root}>
      {names.map((name) => {
        return <ArticleCard imgSrc={name} likes={"3000"} />;
      })}
    </div>
  );
};
