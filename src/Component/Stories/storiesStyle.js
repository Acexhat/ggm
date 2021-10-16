import { makeStyles } from "@mui/styles";

export const useStyles = makeStyles({
  root: {
    height: "12%",
    display: "flex",
    justifyContent: "space-evenly",
    width: "100%",
    "& .MuiAvatar-root": {
      width: "3.5rem",
      // height:"2rem",
      borderRadius: "1.25rem",
    },
  },
  eachStoryDiv:{
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "center",
  },
  avatarHolder: {
    border: "2px solid #FFFF",
    backgroundColor:"#42495B"
  },
  storyScore: {
    color: "#FFFF",
    height: "0.75rem",
    textAlign: "center",
    fontSize: "0.5rem",
    marginTop: "0.5rem",
    backgroundColor: "#297FF3",
    borderRadius: "2rem",
    width: "2.75rem",
  },
});
