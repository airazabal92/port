import React from "react";
import classes from "./SectionName.module.css";

const SectionName = (props) => {
  const leftMargin = classes.title + " " + classes.right;

  return <h1 className={leftMargin}>{props.title}</h1>;
};

export default SectionName;
