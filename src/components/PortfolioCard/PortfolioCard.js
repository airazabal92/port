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
      reveal={
        <p>
          {props.children} <br />
          <hr className={classes.revealSection} />
          <div className={classes.btnMobile}>
            <a href={props.code} target="_blank">
              <Button className={classes.cardBtn} node="button" waves="light">
                CODE
              </Button>
            </a>

            <a href={props.deployment} target="_blank">
              <Button node="button" className={classes.cardBtn} waves="light">
                DEPLOYMENT
              </Button>
            </a>
          </div>
        </p>
      }
      revealIcon={<Icon className="material-icons-outlined info ">info</Icon>}
      title={<span className={classes.title}>{props.title}</span>}
    ></Card>
  );
};

export default PortfolioCard;
