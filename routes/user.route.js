const express = require("express");
const validate = require("../middlewares/validate");
const { userValidation } = require("../validations");
const { userController } = require("../controllers");

const route = express.Router();

route.post("/add", validate(userValidation.adduser), userController.addUser);
route.post("/login", userController.loginUser);
route.get("/get", userController.getuser);
route.delete("/delete/:id", userController.deleteuser);
module.exports = route;
