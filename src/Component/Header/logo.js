import React from "react";
import { Typography } from "@material-ui/core";
import { useStyles } from "./headerStyle";
export const Logo = () => {
  const classes = useStyles();
  return (
    <Typography
      variant="h5"
      style={{
        fontWeight: "600",
        color: "white",
      }}
    >
      <span
        style={{
          color: "#297FF3",
        }}
      >
        G
      </span>
      lam
      <span
        style={{
          color: "#297FF3",
        }}
      >
        G
      </span>
      ram
    </Typography>
  );
};
