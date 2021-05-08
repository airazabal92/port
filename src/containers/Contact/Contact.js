import React from "react";
import { Row, Col } from "react-materialize";
import classes from "./Contact.module.css";
import SectionName from "../../components/SectionName/SectionName";

const Contact = () => {
  return (
    <React.Fragment>
      <Row>
        <Col s={12} l={12}>
          <SectionName title="Contact"></SectionName>
        </Col>
      </Row>

      <Row style={{ padding: "0 40px" }}>
        <Col s={12} l={12}>
          <h2 style={{ textAlign: "center" }}>Let's Connect!</h2>
          <hr />
          <p className={classes.contact}>
            I'm excited to continue to grow as a developer and welcome any new
            projects! If you'd like to get in touch, message me on{" "}
            <a
              className={classes.contactLinks}
              href="https://www.linkedin.com/in/amandairazabal/"
            >
              LinkedIn
            </a>{" "}
            or
            <a
              className={classes.contactLinks}
              href="mailto:ai.devdesign@gmail.com"
            >
              {" "}
              ai.devdesign@gmail.com
            </a>
            .
          </p>
        </Col>
      </Row>
    </React.Fragment>
  );
};

export default Contact;
