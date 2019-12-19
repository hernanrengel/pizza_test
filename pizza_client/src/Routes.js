import React from "react";
import { Switch, Route } from "react-router-dom";
import Home from "./componets/Home";
import PizzaListContainer from "./containers/PizzaListContainer";

const Routes = () => {
  return (
    <Switch>
      <Route exact path="/" component={Home} />
      <Route path="/pizzas" component={PizzaListContainer} />
    </Switch>
  );
};

export default Routes;
