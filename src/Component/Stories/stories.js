import React from "react";
import { useStyles } from "./storiesStyle";
import { Avatar } from "@mui/material";
export const Story = () => {
  const classes = useStyles();
  const names = ["akshat", "anurag", "levin", "mayank", "aditi"];
  return (
    <div className={classes.root}>
      {names.map((name) => {
        return (
          <div className={classes.eachStoryDiv}>
            <Avatar
              variant="rounded"
              className={classes.avatarHolder}
              alt="Jack Sparrow"
              src={`https://avatars.dicebear.com/api/avataaars/${name}.svg`}
            />
            <div className={classes.storyScore}>300 🔥</div>
          </div>
        );
      })}
    </div>
  );
};
