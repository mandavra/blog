const http = require("http");
require("dotenv").config();
const express = require("express");
const app = express();

const { connectDB } = require("./db/db.connection");
const bodyParser = require("body-parser");

const routes = require("./routes");

app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());



app.use("/v1", routes);
// database connection
connectDB();

http.createServer(app).listen(process.env.PORT,() => {
  console.log("server started" ,process.env.PORT );
});