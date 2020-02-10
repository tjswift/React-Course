import React from "react";
import classes from "./Button.module.css";
import { Link } from "react-router-dom";

const button = props => (
  <Link
    className={[classes.Button, classes[props.btnType]].join(" ")}
    onClick={props.clicked}
  >
    {props.children}
  </Link>
);

export default button;
