import React from "react";
import { useStyles } from "./headerStyle";
import { Logo } from "./logo";
import SearchIcon from "@mui/icons-material/Search";
import NotificationsNoneIcon from "@mui/icons-material/NotificationsNone";
import { Avatar } from "@mui/material";
export const Header = () => {
  const classes = useStyles();
  return (
    <div className={classes.root}>
      <div className={classes.logo}>
        <Logo />
      </div>
      <div className={classes.rightHeader}>
        <SearchIcon />
        <NotificationsNoneIcon />
        <Avatar
          className={classes.avatarHolder}
          alt="Jack Sparrow"
          src="https://avatars.dicebear.com/api/avataaars/bhaskar.svg"
        />
      </div>
    </div>
  );
};
