const express = require("express");
const routes = express.Router();

const userRoutes = require("./user.route");
const adminRoutes = require("./admin.route");
const blogRoutes = require("./blog.route");
const commentedRoutes = require("./commented.route");





routes.use("/user", userRoutes);
routes.use("/blog", blogRoutes);
routes.use("/comment", commentedRoutes);


routes.use("/admin", adminRoutes);



module.exports = routes;
    