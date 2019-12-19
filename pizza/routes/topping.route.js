const express = require("express");
const router = express.Router();

// Require the controllers WHICH WE DID NOT CREATE YET!!
const topping_controller = require("../controllers/topping.controller");

// a simple test url to check that all of our files are communicating correctly.
router.get("/list", topping_controller.topping_list);
router.post("/create", topping_controller.topping_create);
router.get("/:id", topping_controller.topping_details);
router.put("/:id/update", topping_controller.topping_update);
router.delete("/:id/delete", topping_controller.topping_delete);

module.exports = router;
