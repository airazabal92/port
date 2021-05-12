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
      <Col s={12} l={5}>
        <section id="about" className={classes.greeting}>
          <Greeting />
          <div className={classes.holder} id={classes.mobilePortrait}>
            <Portrait />
          </div>

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
        </section>
      </Col>
      <Col className={classes.portrait} s={12} l={7}>
        <div className={classes.holder} id={classes.portrait}>
          <Portrait />
        </div>
      </Col>
    </Row>
  );
};

export default Intro;
