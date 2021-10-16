import React from "react";
import { useStyles } from "./articleCardStyle";
import { Avatar } from "@mui/material";
import MoreVertIcon from "@mui/icons-material/MoreVert";
export const UserInfo = () => {
  const classes = useStyles();
  return (
    <div className={classes.userInfoRoot}>
      <div className={classes.innerAvtar}>
        <Avatar
          className={classes.avatarHolder}
          alt="Jack Sparrow"
          src="https://avatars.dicebear.com/api/avataaars/bhaskar.svg"
        />
        <div className={classes.innerUser}>
          <span>JOHN SMITH</span>
          <span>2hr Ago</span>
        </div>
      </div>
      <MoreVertIcon style={{
          marginRight:"1rem"
      }} />
    </div>
  );
};
