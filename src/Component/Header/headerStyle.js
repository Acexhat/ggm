import { makeStyles } from "@mui/styles";

export const useStyles = makeStyles({
  root: {
    height: "5%",
    margin: "0.75rem",
    display: "flex",
    justifyContent: "space-between",
  },
  logo: {
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    width: "30%",
    // "& .MuiTypography-h5-17": {
    //   fontWeight: "600",
    //   color: "white",
    // },
  },
  rightHeader: {
    color: "#FFFF",
    width: "15%",
    display: "flex",
    justifyContent: "space-evenly",
    alignItems: "center",
    marginRight: "8.5vw",
  },
  avatarHolder:{
      border:"2px solid #297FF3"
  }
});
