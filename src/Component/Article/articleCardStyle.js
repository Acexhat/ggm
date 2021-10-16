import { makeStyles } from "@mui/styles";

export const useStyles = makeStyles({
  root: {
    height: "90%",
    display:"flex",
    flexDirection:"column",
    justifyContent:"center",
    alignItems:"center",
    // position:"relative"
  },
  imgContainer:{
      height:"90%",
      width:"60%",
      borderRadius:"4px",
      position:"relative"
  },
  userUpper:{
    width:"100%",
    position:"absolute",
    zIndex:'10'
  },
  articleFooter:{
      height:"10%",
      width:"60%",
      padding:"0.75rem",
      display:"flex",
      justifyContent:"space-between",
      alignItems:"center",
      color:"#FFFF"
  },
  likesHolder:{
    width:"40%",
    height:"80%",
    display:"flex",
    justifyContent:"space-between",
    alignItems:"center"
  },
  bidHolder:{
    width:"20%",
    height:"80% " ,
    display:"flex",
    justifyContent:"space-between"
  },
  inner:{
    display:"flex",
    justifyContent:"space-between",
    width:"35%"
  },
  shortButton:{
    width:"30%",
    border:"2px solid #297FF3",
    borderRadius:"1.5rem",
    textAlign:"center",
    fontSize:"0.9rem",
    width:"5rem"
  },
  lastBid:{
    fontSize:"0.5rem",
    color:"#D1D1D1",
    marginTop:"1rem"
  },
  amountBid:{
    fontWeight:600,
    fontSize:"1.5rem",
    color:"#297FF3"
  },
  userInfoRoot:{
    display:"flex",
    height:"3rem",
    width:"100%",
    justifyContent:"space-between",
    alignItems:"center",
    color:"#D1D1D1",
    fontSize:"0.8rem",
    marginTop:"1rem"
  },
  innerAvtar:{
    width:"30%",
    display:"flex",
    justifyContent:"space-between",
    alignItems:"center",
    marginLeft:"1rem"
  },
  innerUser:{
    display:"flex",
    flexDirection:"column",
    justifyContent:"space-between"
  },
  avatarHolder:{
    border:"2px solid #297FF3"
}
});
