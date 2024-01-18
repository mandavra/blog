const express = require("express");
const validate = require("../middlewares/validate");
const { blogValidation } = require("../validations");
const { blogController } = require("../controllers");

const route = express.Router();

route.post("/add", validate(blogValidation.addblog),blogController.addblog);
route.get("/get", blogController.getblog);
route.delete("/delete/:id", blogController.deleteblog);
module.exports = route;
