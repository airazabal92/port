import React from "react";
import Intro from "../../containers/Intro/Intro";
import Skills from "../../containers/Skills/Skills";
import Portfolio from "../../containers/Portfolio/Portfolio";
import Contact from "../../containers/Contact/Contact";

const Main = () => {
  return (
    <React.Fragment>
      <Intro />
      <Skills />
      <Portfolio />
      <Contact />
    </React.Fragment>
  );
};

export default Main;
