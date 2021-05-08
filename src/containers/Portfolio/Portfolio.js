import React, { useEffect, useState } from "react";
import classes from "./Portfolio.module.css";
import { Row, Col, Button } from "react-materialize";
import SectionName from "../../components/SectionName/SectionName";
import Dot from "../../components/Dot/Dot";
import PortfolioCard from "../../components/PortfolioCard/PortfolioCard";

const Portfolio = () => {
  useEffect(() => {
    setFilteredProjects(projects);
  }, []);

  const [projects, setProjects] = useState([
    {
      type: "app",
      href: "https://i.imgur.com/qXPR9Cf.jpeg",
      title: "iEat",
      code: "https://github.com/airazabal92/iEat",
      deployment: "https://ieat-v2-app.herokuapp.com/",
      info:
        "An app that generates a weekly meal plan with recipe instructions and list of all ingredients needed to go shopping based on user's input."
    },
    {
      type: "app",
      href: "https://i.imgur.com/9UtzfPJ.png",
      title: "EventScope",
      code: "https://github.com/airazabal92/EventScope",
      deployment: "https://airazabal92.github.io/EventScope/",
      info: "An app that will find local events filtered by the users's budget."
    },
    {
      type: "app",
      href: "https://i.imgur.com/uFcUp6V.png",
      title: "Weather Dashboard",
      code: "https://github.com/airazabal92/Weather-Dashboard",
      deployment: "https://airazabal92.github.io/Weather-Dashboard/",
      info: "An application that displays the weather for multiple cities."
    }
  ]);
  const [filteredProjects, setFilteredProjects] = useState(null);

  let app = projects.filter((e) => e.type === "app");
  let email = projects.filter((e) => e.type === "email");
  let mockup = projects.filter((e) => e.type === "mockup");

  const showApps = () => {
    setFilteredProjects(app);
    console.log(filteredProjects);
  };

  const showEmails = () => {
    setFilteredProjects(email);
  };

  const showMockups = () => {
    setFilteredProjects(mockup);
  };

  const showAll = () => {
    setFilteredProjects(projects);
  };

  return (
    <React.Fragment>
      <Row style={{ display: "block", marginTop: "50px" }}>
        <Col s={12} l={12}>
          <SectionName title="Portfolio" />
        </Col>
      </Row>
      <Row style={{ textAlign: "center" }}>
        <Col s={12} l={12}>
          <Button flat node="button" waves="light" onClick={showAll}>
            ALL
          </Button>
          <Dot />
          <Button flat node="button" waves="light" onClick={showApps}>
            APPS
          </Button>
          <Dot />
          <Button flat node="button" waves="light" onClick={showMockups}>
            MOCKUPS
          </Button>
          <Dot />
          <Button flat node="button" waves="light" onClick={showEmails}>
            EMAILS
          </Button>
        </Col>
      </Row>

      <Row>
        <Col s={12} l={4} style={{ padding: "20px" }}>
          {filteredProjects &&
            filteredProjects.map((project, i) =>
              i / 3 === 0 || i === 0 ? (
                <PortfolioCard
                  href={project.href}
                  title={project.title}
                  code={project.code}
                  deployment={project.deployment}
                >
                  {project.info}
                </PortfolioCard>
              ) : null
            )}
        </Col>

        <Col s={12} l={4} style={{ padding: "20px" }}>
          {filteredProjects &&
            filteredProjects.map((project, i) =>
              parseInt(((i / 3).toFixed(2) + "").split(".")[1]) === 33 ? (
                <PortfolioCard
                  href={project.href}
                  title={project.title}
                  code={project.code}
                  deployment={project.deployment}
                >
                  {project.info}
                </PortfolioCard>
              ) : null
            )}
        </Col>

        <Col s={12} l={4} style={{ padding: "20px" }}>
          {filteredProjects &&
            filteredProjects.map((project, i) =>
              parseInt(((i / 3).toFixed(2) + "").split(".")[1]) === 67 ? (
                <PortfolioCard
                  href={project.href}
                  title={project.title}
                  code={project.code}
                  deployment={project.deployment}
                >
                  {project.info}
                </PortfolioCard>
              ) : null
            )}
        </Col>
      </Row>
    </React.Fragment>
  );
};

export default Portfolio;
