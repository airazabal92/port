import React from "react";
import classes from "./Skills.module.css";
import { Row, Col } from "react-materialize";
import SectionName from "../../components/SectionName/SectionName";
import SkillIcon from "../../components/SkillIcon/SkillIcon";

const Skills = () => {
  return (
    <React.Fragment>
      <Row>
        <Col s={12} l={12}>
          <SectionName title="Skills" />
        </Col>
      </Row>
      <Row style={{ padding: "0 40px" }}>
        <Col s={12} l={6}>
          <p>
            I'm a recent graduate of the Rutgers Coding Bootcamp, where I've
            polished skills in HTML, CSS, Javascript and the MERN (Mongo,
            Express, React &#38; Node) stack. I've also had three years of
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
          <div class={classes.col2}>
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
            <SkillIcon
              imgURL="https://i.imgur.com/UgjpLhL.png"
              title="jQuery"
            ></SkillIcon>
            <SkillIcon iconName="react" title="React"></SkillIcon>
            <SkillIcon
              imgURL="https://i.imgur.com/2oeSzHw.png"
              title="MySQL"
            ></SkillIcon>
            <SkillIcon
              imgURL="https://i.imgur.com/yJBd94J.png"
              title="MongoDB"
            ></SkillIcon>
            <SkillIcon iconName="database" title="IndexedDB"></SkillIcon>
            <SkillIcon iconName="npm" title="npm"></SkillIcon>
            <SkillIcon iconName="terminal" title="Terminal"></SkillIcon>
            <SkillIcon iconName="github" title="Github"></SkillIcon>
            <SkillIcon
              imgURL="https://i.imgur.com/Zx9gsEp.png"
              title="Heroku"
            ></SkillIcon>
            <SkillIcon
              imgURL="https://i.imgur.com/1cLrZT0.png"
              title="VSCode"
            ></SkillIcon>
          </div>
        </Col>
      </Row>
    </React.Fragment>
  );
};

export default Skills;
