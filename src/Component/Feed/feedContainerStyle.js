import { makeStyles } from "@mui/styles";

export const useStyles = makeStyles({
  root: {
    height: "88%",
    padding: "1rem",
    // display: "flex",
    // flexDirection:"column",
    width: "100%",
    overflow: "auto",
    "&::-webkit-scrollbar": {
      display: "none",
    },
  },
});
