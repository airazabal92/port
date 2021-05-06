import React from "react";
import classes from "./SocialMediaBtn.module.css";

const SocialMediaBtn = (props) => {
  const classData = `fab fa-${props.iconName} fa-2x ${classes.icon}`;
  return (
    <a href={props.href}>
      <i class={classData}></i>
    </a>
  );
};

export default SocialMediaBtn;
