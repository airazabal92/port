import React from "react";
import { Row, Col } from "react-materialize";
import SectionName from "../../components/SectionName/SectionName";
import SocialMediaBtn from "../../components/SocialMediaBtn/SocialMediaBtn";

const Contact = () => {
  return (
    <React.Fragment>
      <Row style={{ display: "block", marginTop: "50px" }}>
        <Col s={12} l={12}>
          <SectionName title="Contact"></SectionName>
        </Col>
      </Row>

      <Row style={{ display: "block" }}>
        <Col s={12} l={6}>
          <h2>Let's Connect!</h2>
          <p>
            I'm excited to continue to grow as a developer and welcome any new
            projects! If you'd like to get in touch, message me on LinkedIn or
            ai.devdesign@gmail.com.
          </p>
          <SocialMediaBtn iconName="github" />
          <SocialMediaBtn iconName="linkedin" />
        </Col>
        <Col s={12} l={6}>
          <SectionName title="Contact"></SectionName>
        </Col>
      </Row>
    </React.Fragment>
  );
};

export default Contact;
