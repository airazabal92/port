import React from "react";
import Separator from "../Separator/Separator";
import classes from "./Navbar.module.css";
import { Navbar, Icon, NavItem } from "react-materialize";

const navbar = () => {
  return (
    <Navbar
      className={classes.navbar}
      alignLinks="right"
      brand={
        <a className="brand-logo" href="#">
          Logo
        </a>
      }
      centerChildren
      menuIcon={<Icon>menu</Icon>}
      options={{
        draggable: true,
        edge: "left",
        inDuration: 250,
        onCloseEnd: null,
        onCloseStart: null,
        onOpenEnd: null,
        onOpenStart: null,
        outDuration: 200,
        preventScrolling: true
      }}
    >
      <NavItem className={classes.navItem} href="#about">
        ABOUT
      </NavItem>
      <Separator />
      <NavItem className={classes.navItem} href="#skills">
        SKILLS
      </NavItem>
      <Separator />
      <NavItem className={classes.navItem} href="#portfolio">
        PORTFOLIO
      </NavItem>
      <Separator />
      <NavItem className={classes.navItem} href="#contact">
        CONTACT
      </NavItem>
    </Navbar>
  );
};

export default navbar;
