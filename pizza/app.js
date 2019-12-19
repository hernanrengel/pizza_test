const express = require("express");
const bodyParser = require("body-parser");
const pizza = require("./routes/pizza.route"); // Imports routes for the pizza
const topping = require("./routes/topping.route"); // Imports routes for the toppings

const app = express();

// Set up mongoose connection
const mongoose = require("mongoose");

let dev_db_url =
  "mongodb+srv://hrengelc:hrengel123@cluster0-w1vol.mongodb.net/test?retryWrites=true&w=majority";
let mongoDB = process.env.MONGODB_URI || dev_db_url;
mongoose.connect(mongoDB);
mongoose.Promise = global.Promise;
let db = mongoose.connection;
db.on("error", console.error.bind(console, "MongoDB connection error:"));

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));

app.use(function(req, res, next) {
  res.header("Access-Control-Allow-Origin", "*"); // update to match the domain you will make the request from
  res.header(
    "Access-Control-Allow-Headers",
    "Origin, X-Requested-With, Content-Type, Accept"
  );
  next();
});

app.use("/pizzas", pizza);
app.use("/toppings", topping);

let port = 1234;
let host = "0.0.0.0";

app.listen(port, host, () => {
  console.log("Server is up and running on port numner " + port);
});
