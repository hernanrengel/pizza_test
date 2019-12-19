const mongoose = require("mongoose");
const Schema = mongoose.Schema;

var ToppingSchema = new Schema({
  id: Schema.ObjectId,
  name: { type: String, required: true, max: 100 },
  pizzas: [{ type: mongoose.Schema.ObjectId, ref: "Pizza" }]
});

// Export the model
module.exports = mongoose.model("Topping", ToppingSchema);
