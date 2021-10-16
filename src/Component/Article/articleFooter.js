import React from "react";
import { useStyles } from "./articleCardStyle";
import FavoriteIcon from '@mui/icons-material/Favorite';
export const ArticleFooter = (props) => {
  const [likes,setLikes] = React.useState(props.likes);
  const classes = useStyles();
  return (
    <div className={classes.articleFooter}>
      <div className={classes.likesHolder}>
        <div className={classes.inner}>
        <FavoriteIcon style={{
        color:"#DF2641",
      }}/>
      {3000}
        </div>
        <div className={classes.shortButton}>
          Shorts  
        </div>
      </div>
      <div className={classes.bidHolder}>
        <span className={classes.lastBid}>Last Bid</span>
        <span className={classes.amountBid}>{"$23k"}</span>
      </div>
    </div>
  );
};