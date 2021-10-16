import React from "react";
import { useStyles } from "./articleCardStyle";
import { ArticleFooter } from "./articleFooter";
import { UserInfo } from "./userInfo";
export const ArticleCard = (props) => {
  const classes = useStyles();
  return (
    <div className={classes.root}>
      {/* <div className={classes.userUpper}>
        <UserInfo />
      </div> */}
      <div className={classes.imgContainer}>
      <div className={classes.userUpper}>
        <UserInfo />
      </div>
        <img
          src={`http://placeimg.com/640/480/${props.imgSrc}`}
          style={{
            position:"absolute",
            height: "100%",
            width: "100%",
            borderRadius: "12px",
          }}
        />
      </div>
      <ArticleFooter />
    </div>
  );
};
