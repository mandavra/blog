const express = require("express");
const validate = require("../middlewares/validate");
const { adminValidation } = require("../validations");
const { adminController } = require("../controllers");
const { upload } = require("../middlewares/multer");

const route = express.Router();
route.post("/add", upload.single('imageName'),validate(adminValidation.addadmin), adminController.addadmin);
route.get("/get", adminController.getadmin);
route.delete("/delete/:id", adminController.deleteadmin);
module.exports = route;
