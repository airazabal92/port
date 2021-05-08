import React from "react";
import classes from "./SkillIcon.module.css";

const SkillIcon = (props) => {
  let icon = "";
  if (props.imgURL) {
    icon = <img src={props.imgURL}></img>;
  } else {
    const classData = `fab fa-${props.iconName} fa-2x ${classes.icon}`;
    icon = <i className={classData}></i>;
  }

  if (props.iconName === "terminal" || props.iconName === "database") {
    const classData = `fas fa-${props.iconName} fa-2x ${classes.icon}`;
    icon = <i className={classData}></i>;
  }

  return (
    <div className={classes.iconHolder}>
      {icon}
      <h3
        style={{
          fontFamily: `-apple-system, BlinkMacSystemFont, "Segoe UI" Ubuntu, Cantarell,
        "Helvetica Neue", sans-serif`
        }}
        className={classes.title}
      >
        {props.title}
      </h3>
    </div>
  );
};

export default SkillIcon;
