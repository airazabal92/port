import React from "react";
import classes from "./Skills.module.css";
import { Row, Col } from "react-materialize";
import SectionName from "../../components/SectionName/SectionName";
import SkillIcon from "../../components/SkillIcon/SkillIcon";

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
          <SkillIcon iconName="adobe" title="Adobe"></SkillIcon>
          <SkillIcon iconName="magento" title="Magento"></SkillIcon>
          <SkillIcon iconName="mailchimp" title="Mailchimp"></SkillIcon>
        </Col>
        <Col s={12} l={6}>
          <h2>Development</h2>
          <SkillIcon iconName="html5" title="HTML5"></SkillIcon>
          <SkillIcon iconName="css3-alt" title="CSS3"></SkillIcon>
          <SkillIcon iconName="js" title="JavaScript"></SkillIcon>
          <SkillIcon iconName="node" title="Node.js"></SkillIcon>
          <SkillIcon iconName="bootstrap" title="Bootstrap"></SkillIcon>
          <SkillIcon iconName="uikit" title="UIKit"></SkillIcon>
          <SkillIcon
            imgURL="https://i.imgur.com/fuR0NP1.png"
            title="Materialize"
          ></SkillIcon>
        </Col>
      </Row>
    </React.Fragment>
  );
};

export default Skills;
