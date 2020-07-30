import React from "react";
//import CountUp from "react-countup";
import { Card, CardContent, Typography } from "@material-ui/core";

function InfoBox({ title, cases, total }) {
  //console.table(total);
  //<CountUp start={0} end={total} duration={2.5} separator="," />

  return (
    <Card>
      <CardContent>
        <Typography color="textSecondary">{title}</Typography>
        <h2 className="infoBox_cases">{cases}</h2>
        <Typography className="infoBox_total" color="textSecondary">
          {total}
        </Typography>
      </CardContent>
    </Card>
  );
}

export default InfoBox;
