import React from "react";
import classes from "./Portfolio.module.css";
import { Row, Col } from "react-materialize";
import SectionName from "../../components/SectionName/SectionName";
import PortfolioCard from "../../components/PortfolioCard/PortfolioCard";

const Portfolio = () => {
  return (
    <React.Fragment>
      <Row style={{ display: "block", marginTop: "50px" }}>
        <Col s={12} l={12}>
          <SectionName title="Portfolio" />
        </Col>
      </Row>
      <Row style={{ display: "block", marginTop: "50px" }}>
        <Col s={12} l={12}>
          <div id="myBtnContainer">
            <button class="btn active" onclick="filterSelection('all')">
              ALL
            </button>
            <button class="btn" onclick="filterSelection('apps')">
              APPS
            </button>
            <button class="btn" onclick="filterSelection('mockups')">
              MOCKUPS
            </button>
            <button class="btn" onclick="filterSelection('emails')">
              EMAILS
            </button>
          </div>
        </Col>
      </Row>

      <Row style={{ display: "block", marginTop: "50px" }}>
        <Col s={12} l={4} style={{ padding: "20px" }}>
          <PortfolioCard
            href="https://i.imgur.com/qXPR9Cf.jpeg"
            title="iEat"
            code="https://github.com/airazabal92/iEat"
            deployment="https://ieat-v2-app.herokuapp.com/"
          >
            An app that generates a weekly meal plan with recipe instructions
            and list of all ingredients needed to go shopping based on user's
            input.
          </PortfolioCard>
        </Col>
      </Row>
    </React.Fragment>
  );
};

export default Portfolio;
