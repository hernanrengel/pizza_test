const mongoose = require("mongoose");
const Schema = mongoose.Schema;

let PizzaSchema = new Schema({
  id: Schema.ObjectId,
  name: { type: String, required: true, max: 100 },
  price: { type: Number, required: true },
  topping: [{ type: mongoose.Schema.ObjectId, ref: "Topping" }]
});

// Export the model
module.exports = mongoose.model("Pizza", PizzaSchema);
