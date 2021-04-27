import React from "react";
import { Row, Col } from "react-materialize";
import classes from "./Intro.module.css";
import Greeting from "../../components/Greeting/Greeting";

const intro = () => {
  return (
    <Row style={{ display: "block", marginTop: "50px" }}>
      <Col className={classes.intro} s={12} l={7}>
        <Greeting></Greeting>
      </Col>
      <Col className={classes.intro} s={12} l={5}>
        HI
      </Col>
    </Row>
  );
};

export default intro;
