import classes from "./PortfolioCard.module.css";
import React from "react";
import { Card, Icon, CardTitle, Button } from "react-materialize";

const PortfolioCard = (props) => {
  return (
    <Card
      closeIcon={<Icon>close</Icon>}
      header={<CardTitle image={props.href} reveal waves="light" />}
      reveal={<p>{props.children}</p>}
      revealIcon={<Icon>more_vert</Icon>}
      title={props.title}
      class={classes.card}
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
