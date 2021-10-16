import react  from "react";
import { useStyles } from "./dashboardStyle";
import Header from "../Component/Header";
import Footer from "../Component/Footer";
import MainHolder from "../Component/MainHolder";
export const Dashboard = () =>{
    const classes = useStyles();
    return(
        <div className={classes.root}>
            <Header/>
            <span className={classes.fadeEffect}></span>
            <MainHolder/>
            <span className={classes.fadeEffect}></span>
            <Footer/>
        </div>
    )
}