import React from "react";
import { Row, Col, Button } from "react-materialize";
import classes from "./Contact.module.css";
import SectionName from "../../components/SectionName/SectionName";

const Contact = () => {
  return (
    <section id="contact">
      <Row>
        <Col s={12} l={12}>
          <SectionName title="Contact"></SectionName>
        </Col>
      </Row>

      <Row style={{ padding: "0 40px" }}>
        <Col s={12} l={6}>
          <section className={classes.contact}>
            <h2>Let's Connect!</h2>
            <div className={classes.contactIconMobile}>
              <img
                className={classes.contactImg}
                src="https://i.imgur.com/OENdXkL.png"
              ></img>
            </div>
            <hr />
            <p className={classes.contactInfo}>
              I'm excited to continue to grow as a developer and welcome any new
              projects! If you'd like to get in touch, message me below:{" "}
            </p>
            <br />
            <div className={classes.contactMobileBtn}>
              <a
                href="https://www.linkedin.com/in/amandairazabal/"
                target="_blank"
              >
                <Button
                  node="button"
                  className={classes.contactBtn}
                  waves="light"
                >
                  LinkedIn
                </Button>
              </a>
              <a href="mailto:ai.devdesign@gmail.com" target="_blank">
                <Button
                  node="button"
                  className={classes.contactBtn}
                  waves="light"
                >
                  Email
                </Button>
              </a>
            </div>
          </section>
        </Col>

        <Col s={12} l={6}>
          <div className={classes.contactIcon}>
            <img
              className={classes.contactImg}
              src="https://i.imgur.com/OENdXkL.png"
            ></img>
          </div>
        </Col>
      </Row>
    </section>
  );
};

export default Contact;
