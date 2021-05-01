import React from "react";
import classes from "./Skills.module.css";
import { Row, Col } from "react-materialize";
import SectionName from "../../components/SectionName/SectionName";

const Skills = () => {
  return (
    <React.Fragment>
      <Row style={{ display: "block", marginTop: "50px" }}>
        <Col s={12} l={12}>
          <SectionName title="Skills" />
        </Col>
      </Row>
      <Row>
        <Col s={12} l={6}>
          <p>
            I'm a recent graduate of the Rutgers Coding Bootcamp, where I've
            polished skills in HTML, CSS, Javascript and the MERN (Mongo,
            Express, React & Node) stack. I've also had three years of
            experience in marketing at Porcelanosa, where I worked on national
            campaigns along with updating and maintaining the corporate website.
          </p>
          <h2>Design/Platforms</h2>
        </Col>
        <Col s={12} l={6}>
          2
        </Col>
      </Row>
    </React.Fragment>
  );
};

export default Skills;
