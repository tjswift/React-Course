import React from "react";

import Burger from "../../Burger/Burger";
import Button from "../../UI/Button/Button";
import classes from "./CheckoutSummary.module.css";

const checkoutSummary = props => {
  return (
    <div className={classes.CheckoutSummary}>
      <h1>We hope it tastes good!</h1>
      <div style={{ width: "auto", margin: "auto" }}>
        <Burger ingredients={props.ingredients} />

        <Button btnType="Danger" clicked={props.checkoutCancelled}>
          CANCEL
        </Button>
        <Button btnType="Success" clicked>
          CONTINUE
        </Button>
      </div>
    </div>
  );
};

export default checkoutSummary;
