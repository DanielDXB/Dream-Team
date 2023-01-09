const express = require("express");
const connection = require("./database/dbconnection");
const informationRoute = require("./model/information");

const app = express();

app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use("/information", informationRoute);

module.exports = app;
