const Topping = require("../models/topping.model");

//Simple version, without validation or sanitation
exports.topping_list = function(req, res) {
  Topping.find()
    .then(topping => {
      res.send(topping);
    })
    .catch(err => {
      res.status(500).send({
        message: err.message || "Some error occurred while retrieving pizzas."
      });
    });
};

exports.topping_create = function(req, res) {
  let topping = new Topping({
    name: req.body.name,
    pizza: []
  });

  topping.save(function(err) {
    if (err) {
      return next(err);
    }
    res.send("Topping Created successfully");
  });
};

exports.topping_details = function(req, res) {
  Topping.findById(req.params.id, function(err, pizza) {
    if (err) return next(err);
    res.send(pizza);
  });
};

exports.topping_update = function(req, res) {
  Topping.findByIdAndUpdate(req.params.id, { $set: req.body }, function(
    err,
    pizza
  ) {
    if (err) return next(err);
    res.send("Topping udpated.");
  });
};

exports.topping_delete = function(req, res) {
  Topping.findByIdAndRemove(req.params.id, function(err) {
    if (err) return next(err);
    res.send("Deleted successfully!");
  });
};
