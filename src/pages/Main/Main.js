import React from "react";
import Intro from "../../containers/Intro/Intro";
import Skills from "../../containers/Skills/Skills";
import Portfolio from "../../containers/Portfolio/Portfolio";

const Main = () => {
  return (
    <React.Fragment>
      <Intro />
      <Skills />
      <Portfolio />
    </React.Fragment>
  );
};

export default Main;
