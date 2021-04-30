import React from "react";
import Portrait from "../../components/Portrait/Portrait";
import { Row, Col } from "react-materialize";
import classes from "./Intro.module.css";
import Greeting from "../../components/Greeting/Greeting";
import AboutSection from "../../components/About/About";

const intro = () => {
  return (
    <Row style={{ display: "block", marginTop: "50px" }}>
      <Col className={classes.intro} s={12} l={5}>
        <Greeting></Greeting>
        <AboutSection></AboutSection>
      </Col>
      <Col className={classes.intro} s={12} l={7}>
        <Portrait></Portrait>
      </Col>
    </Row>
  );
};

export default intro;
