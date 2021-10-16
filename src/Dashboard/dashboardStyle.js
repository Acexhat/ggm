import { makeStyles } from '@mui/styles';

export const useStyles = makeStyles({
    root: {
     backgroundColor:"#272727",
     height:"inherit",
     width:"inherit",
     display:"flex",
     flexDirection:"column",
    },
    fadeEffect:{
        display:"block",
        border:"none",
        color:"white",
        height:"1px",
        background: "-webkit-gradient(radial, 50% 50%, 0, 50% 50%, 700, from(#FFF), to(#272727))",
    }
  });