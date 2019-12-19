const express = require("express");
const router = express.Router();

// Require the controllers WHICH WE DID NOT CREATE YET!!
const pizza_controller = require("../controllers/pizza.controller");

// a simple test url to check that all of our files are communicating correctly.
router.get("/list", pizza_controller.pizza_list);
router.post("/create", pizza_controller.pizza_create);
router.get("/:id", pizza_controller.pizza_details);
router.put("/:id/update", pizza_controller.pizza_update);
router.delete("/:id/delete", pizza_controller.pizza_delete);

module.exports = router;
