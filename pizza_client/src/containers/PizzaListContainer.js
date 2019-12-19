import React, { Component } from "react";
import axios from "axios";
import PizzasList from "../componets/PizzasList";
import AppNav from "../componets/AppNav";
import PizzaForm from "../componets/PizzaForm";

class PizzaListContainer extends Component {
  state = {
    pizzaData: []
  };

  componentDidMount() {
    axios
      .get("http://192.168.0.145:1234/pizzas/list", {
        crossDomain: true
      })
      .then(result => {
        console.log(result.data);
        const pizzaData = result.data;

        this.setState({
          pizzaData
        });
      })
      .catch(error => {
        console.log("errror");
      });
  }

  render() {
    const { pizzaData } = this.state;

    return (
      <>
        <AppNav></AppNav>
        <PizzasList pizzaData={pizzaData} />
        <PizzaForm></PizzaForm>
      </>
    );
  }
}

export default PizzaListContainer;
