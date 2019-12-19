import React, { Fragment } from "react";
import PizzaCard from "./PizzaCard";
import { Grid } from "@material-ui/core";

function PizzasList({ pizzaData }) {
  return (
    <Fragment>
      <h1>Pizzas</h1>

      <Grid container spacing={10} justify="center">
        {pizzaData.map((pizza, index) => {
          return (
            <PizzaCard key={pizza._id} name={pizza.name} price={pizza.price} />
          );
        })}
      </Grid>
    </Fragment>
  );
}

export default PizzasList;
