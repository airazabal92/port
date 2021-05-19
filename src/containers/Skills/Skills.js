import React from "react";
import classes from "./Skills.module.css";
import { Row, Col } from "react-materialize";
import SectionName from "../../components/SectionName/SectionName";
import SkillIcon from "../../components/SkillIcon/SkillIcon";

const Skills = () => {
  return (
    <section id="skills">
      <Row>
        <Col s={12} l={12}>
          <SectionName title="Skills" />
        </Col>
      </Row>
      <Row className={classes.rowSkills}>
        <Col s={12} l={6}>
          <p className={classes.skillsInfo}>
            I'm a recent graduate of the Rutgers Coding Bootcamp, where I've
            polished skills in HTML, CSS, Javascript and the MERN (Mongo,
            Express, React &#38; Node) stack. I've also had three years of
            experience in marketing at Porcelanosa, where I worked on national
            campaigns along with updating and maintaining the corporate website.
          </p>
          <section className={classes.designPlatforms}>
            <h2>Design/Platforms</h2>
            <hr className={classes.skillsHr} />
            <div className={classes.mobileSkillIcons}>
              <SkillIcon iconName="adobe" title="Adobe"></SkillIcon>
              <SkillIcon iconName="magento" title="Magento"></SkillIcon>
              <SkillIcon iconName="mailchimp" title="Mailchimp"></SkillIcon>
            </div>
          </section>
        </Col>
        <Col s={12} l={6} className={classes.col2}>
          <h2 style={{ marginRight: "15px" }}>Development</h2>
          <hr className={classes.skillsHr} />
          <div className={classes.mobileSkillIcons}>
            <SkillIcon iconName="html5" title="HTML5"></SkillIcon>
            <SkillIcon iconName="css3-alt" title="CSS3"></SkillIcon>
            <SkillIcon iconName="js" title="JavaScript"></SkillIcon>
            <SkillIcon iconName="node" title="Node.js"></SkillIcon>
            <SkillIcon iconName="bootstrap" title="Bootstrap"></SkillIcon>
            <SkillIcon iconName="uikit" title="UIKit"></SkillIcon>
            <SkillIcon
              imgURL="https://i.imgur.com/K5IV8DE.png"
              title="Materialize"
            ></SkillIcon>
            <SkillIcon
              imgURL="https://i.imgur.com/NyWBMl4.png"
              title="jQuery"
            ></SkillIcon>
            <SkillIcon iconName="react" title="React"></SkillIcon>
            <SkillIcon
              imgURL="https://i.imgur.com/JEEstsN.png"
              title="MySQL"
            ></SkillIcon>
            <SkillIcon
              imgURL="https://i.imgur.com/MZmqyUq.png"
              title="MongoDB"
            ></SkillIcon>
            <SkillIcon iconName="database" title="IndexedDB"></SkillIcon>
            <SkillIcon iconName="npm" title="npm"></SkillIcon>
            <SkillIcon iconName="terminal" title="Terminal"></SkillIcon>
            <SkillIcon iconName="github" title="Github"></SkillIcon>
            <SkillIcon
              imgURL="https://i.imgur.com/ALyg7y1.png"
              title="Heroku"
            ></SkillIcon>
            <SkillIcon
              imgURL="https://i.imgur.com/vjRWcQ1.png"
              title="VSCode"
            ></SkillIcon>
          </div>
        </Col>
      </Row>
    </section>
  );
};

export default Skills;
