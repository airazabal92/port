import React from "react";
import classes from "./SkillIcon.module.css";

const SkillIcon = (props) => {
  let icon = "";
  if (props.imgURL) {
    icon = <img src={props.imgURL}></img>;
  } else {
    const classData = `fab fa-${props.iconName} adobe fa-2x ${classes.icon}`;
    icon = <i className={classData}></i>;
  }

  return (
    <div className={classes.iconHolder}>
      {icon}
      <h3>{props.title}</h3>
    </div>
  );
};

export default SkillIcon;
