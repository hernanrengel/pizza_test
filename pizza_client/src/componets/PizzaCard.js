import React from "react";
import { Card, CardContent, Typography } from "@material-ui/core";
import { withStyles } from "@material-ui/core/styles";

function PizzaCard({ name, price, classes }) {
  return (
    <Card className={classes.item}>
      <CardContent>
        <Typography component="div" variant="h6">
          <div>Pizza: {name}</div>
          <div>Price: {price} $</div>
        </Typography>
      </CardContent>
    </Card>
  );
}

export default withStyles({
  item: {
    minWidth: "350px",
    margin: "1em",
    boxSizing: "border-box",
    marginBottom: "80px"
  }
})(PizzaCard);
