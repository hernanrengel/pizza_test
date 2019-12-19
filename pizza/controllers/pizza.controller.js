const Pizza = require("../models/pizza.model");

//Simple version, without validation or sanitation
exports.pizza_list = function(req, res) {
  Pizza.find()
    .then(pizza => {
      res.send(pizza);
    })
    .catch(err => {
      res.status(500).send({
        message: err.message || "Some error occurred while retrieving pizzas."
      });
    });
};

exports.pizza_create = function(req, res) {
  let pizza = new Pizza({
    name: req.body.name,
    price: req.body.price,
    topping: []
  });

  pizza.save(function(err) {
    if (err) {
      return next(err);
    }
    res.send("Pizza Created successfully");
  });
};

exports.pizza_details = function(req, res) {
  Pizza.findById(req.params.id, function(err, pizza) {
    if (err) return next(err);
    res.send(pizza);
  });
};

exports.pizza_update = function(req, res) {
  Pizza.findByIdAndUpdate(req.params.id, { $set: req.body }, function(
    err,
    pizza
  ) {
    if (err) return next(err);
    res.send("Pizza udpated.");
  });
};

exports.pizza_delete = function(req, res) {
  Pizza.findByIdAndRemove(req.params.id, function(err) {
    if (err) return next(err);
    res.send("Deleted successfully!");
  });
};
