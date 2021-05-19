import React from "react";
import Portrait from "../../components/Portrait/Portrait";
import { Row, Col } from "react-materialize";
import classes from "./Intro.module.css";
import About from "../../components/About/About";
import Greeting from "../../components/Greeting/Greeting";
import SocialMediaBtn from "../../components/SocialMediaBtn/SocialMediaBtn";
import Particles from "../../components/ParticleComp/ParticleComp";

const Intro = () => {
  return (
    <Row
      style={{
        display: "block",
        marginTop: "50px"
      }}
    >
      <Col s={12} l={5}>
        <div className={classes.particleHolder}>
          <Particles />
        </div>

        <section id="about" className={classes.greeting}>
          <Greeting />
          <div className={classes.holder} id={classes.mobilePortrait}>
            <Portrait img="https://i.imgur.com/7Ax2FgE.jpeg" />
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
          <Portrait img="https://i.imgur.com/Zc4Y87w.png" />
        </div>
      </Col>
    </Row>
  );
};

export default Intro;
