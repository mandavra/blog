const mongoose = require("mongoose");

const connectDB = () => {
  mongoose
    .connect("mongodb://localhost:27017/blog")
    .then(() => {
      console.log("db connect success");
    })
    .catch((err) => {
      console.log(err);
    });
};

module.exports = { connectDB };