import React from "react";
import classes from "./SectionName.module.css";

const SectionName = (props) => {
  return <h1 className={classes.title}>{props.title}</h1>;
};

export default SectionName;
