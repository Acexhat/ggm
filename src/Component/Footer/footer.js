import React from "react";
import { useStyles } from "./footerStyle";
import HomeIcon from '@mui/icons-material/Home';
import GroupIcon from '@mui/icons-material/Group';
import StoreIcon from '@mui/icons-material/Store';
import DashboardIcon from '@mui/icons-material/Dashboard';
import VideoLibraryIcon from '@mui/icons-material/VideoLibrary';
export const Footer = () => {
  const classes = useStyles();
  return (
    <div className={classes.root}>
        <HomeIcon style={{
            color:"#297FF3"
        }}/>
        <GroupIcon/>
        <StoreIcon/>
        <DashboardIcon/>
        <VideoLibraryIcon/>
    </div>
  );
};
