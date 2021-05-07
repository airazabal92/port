import React from "react";
import Portrait from "../../components/Portrait/Portrait";
import { Row, Col } from "react-materialize";
import classes from "./Intro.module.css";
import About from "../../components/About/About";
import Greeting from "../../components/Greeting/Greeting";
import SocialMediaBtn from "../../components/SocialMediaBtn/SocialMediaBtn";

const Intro = () => {
  return (
    <Row style={{ display: "block", marginTop: "50px" }}>
      <Col className={classes.intro} s={12} l={5}>
        <div className={classes.greeting}>
          <Greeting />

          <About />
          <hr />
          <div className={classes.socialMediaIcons}>
            <SocialMediaBtn
              iconName="github"
              href="https://github.com/airazabal92"
            />
            <SocialMediaBtn
              iconName="linkedin"
              href="https://www.linkedin.com/in/amandairazabal/"
            />
          </div>
        </div>
      </Col>
      <Col className={classes.portrait} s={12} l={7}>
        <Portrait />
      </Col>
    </Row>
  );
};

export default Intro;
