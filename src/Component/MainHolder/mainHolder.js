import React from "react";
import { useStyles } from "./mainHolderStyle";
import { Feed } from "../Feed/feedContainer";
import Story from "../Stories";
export const MainHolder = () => {
  const classes = useStyles();
  return (
    <div className={classes.root}>
        <Story/>
        <Feed/>
    </div>
  );
};
