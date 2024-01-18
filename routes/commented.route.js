const express = require("express");
const validate = require("../middlewares/validate");
const { commentedValidation } = require("../validations");
const { commentedController } = require("../controllers");

const route = express.Router();

route.post("/add", validate(commentedValidation.addcommented),commentedController.addcommented);
route.get("/get", commentedController.getcommented);
route.delete("/delete/:id", commentedController.deletecommented);
module.exports = route;
