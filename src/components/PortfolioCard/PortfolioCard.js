import classes from "./PortfolioCard.module.css";
import React from "react";
import { Card, Icon, CardTitle, Button } from "react-materialize";

const PortfolioCard = (props) => {
  const classData = `${props.className} ${props.type}`;
  return (
    <Card
      className={classData}
      closeIcon={<Icon>close</Icon>}
      header={<CardTitle image={props.href} reveal waves="light" />}
      reveal={<p>{props.children}</p>}
      revealIcon={<Icon className="material-icons-outlined">info</Icon>}
      title={props.title}
    >
      <p>
        <br />
        <a href={props.code} target="_blank">
          <Button
            node="button"
            style={{
              marginRight: "5px"
            }}
            waves="light"
          >
            CODE
          </Button>
        </a>
        <a href={props.deployment} target="_blank">
          <Button
            node="button"
            style={{
              marginRight: "5px"
            }}
            waves="light"
          >
            DEPLOYMENT
          </Button>
        </a>
      </p>
    </Card>
  );
};

export default PortfolioCard;
