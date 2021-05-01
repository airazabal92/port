import classes from "./Greeting.module.css";
import { init } from "ityped";
import React, { useEffect } from "react";

const Greeting = () => {
  useEffect(() => {
    const specialtyEl = document.querySelector("#specialty");
    init(specialtyEl, {
      showCursor: true,
      typeSpeed: 200,
      backSpeed: 60,
      backDelay: 800,
      startDelay: 200,
      cursorChar: "|",
      strings: ["Amanda Irazabal", "a Developer", "a Designer"]
    });
  }, []);

  return (
    <React.Fragment>
      <h1 className={classes.greeting}>
        Hello<span>.</span>
      </h1>
      <h2 className={classes.type}>
        I'm&nbsp;
        <span id="specialty"></span>
      </h2>
    </React.Fragment>
  );
};

export default Greeting;
