import React from "react";
import "./InfoBox.css";
import CountUp from "react-countup";
import { Card, CardContent, Typography } from "@material-ui/core";

function InfoBox({ title, cases, isRed, Active, total, ...props }) {
  if (!cases && !total) {
    return "Loading...";
  }
  return (
    <Card
      onClick={props.onClick}
      className={`infoBox ${Active && "infoBox--selected"} ${
        isRed && "infoBox--red"
      }`}
    >
      <CardContent>
        <Typography className="infoBox_title" color="textSecondary">
          {title}
        </Typography>
        <h2 className={`infoBox_cases ${!isRed && "infoBox__cases--green"}`}>
          <CountUp end={cases} duration={2.5} separator="," prefix="+" />
        </h2>
        <Typography className="infoBox_total" color="textSecondary">
          <CountUp end={total} duration={4} separator="," prefix="Total: " />
        </Typography>
      </CardContent>
    </Card>
  );
}

export default InfoBox;
