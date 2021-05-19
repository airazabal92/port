import React from "react";
import classes from "./Portrait.module.css";

const portrait = (props) => {
  return <img className={classes.portrait} src={props.img}></img>;
};

export default portrait;
