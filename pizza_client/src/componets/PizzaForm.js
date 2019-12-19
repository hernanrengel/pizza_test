import React from "react";
import axios from "axios";
import { withStyles } from "@material-ui/core/styles";
import { Typography } from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";
import TextField from "@material-ui/core/TextField";
import Button from "@material-ui/core/Button";

class PizzaForm extends React.Component {
  constructor(args) {
    super(args);
    this.state = {
      pizzaName: "",
      pizzaPrice: ""
    };
  }

  onChange(e) {
    this.setState({
      [e.target.name]: e.target.value
    });
  }

  sendData() {
    console.log(JSON.stringify(this.state));
    let body = {
      name: this.state["pizzaName"],
      price: this.state["pizzaPrice"],
      toppings: []
    };
    console.log(body);
    axios
      .post("http://192.168.0.145:1234/pizzas/create", body)
      .then(response => {
        console.log(response);
      });
  }

  render() {
    return (
      <div>
        <form noValidate autoComplete="off">
          <Typography component="div">
            <TextField
              id="pizzaName"
              name="pizzaName"
              label="Pizza Name"
              variant="filled"
              value={this.state.pizzaName}
              onChange={this.onChange.bind(this)}
            />
          </Typography>
          <Typography component="div">
            <TextField
              id="pizzaPrice"
              name="pizzaPrice"
              label="Pizza Price"
              variant="filled"
              value={this.state.pizzaPrice}
              onChange={this.onChange.bind(this)}
            />
          </Typography>
          <Typography component="div">
            <Button variant="contained" onClick={this.sendData.bind(this)}>
              Save
            </Button>
          </Typography>
        </form>
      </div>
    );
  }
}

export default withStyles({})(PizzaForm);
